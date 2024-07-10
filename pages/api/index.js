import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';

let clients = [];

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            // Long polling setup
            clients.push(res);

            // Remove client if connection closes
            req.on('close', () => {
                clients = clients.filter(client => client !== res);
            });

            // Immediately send current recipes to the client
            try {
                const recipes = await Recipe.find({});
                res.status(200).json({ success: true, data: recipes });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;

        case 'POST':
            // Handle adding or updating a recipe
            try {
                const newRecipe = req.body;

                const recipe = await Recipe.create(newRecipe);

                // Notify clients about the change
                notifyClients(recipe);

                res.status(201).json({ success: true, data: recipe });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}

function notifyClients(recipe) {
    clients.forEach(client => {
        client.status(200).json({ success: true, data: recipe });
    });
    clients = [];
}

