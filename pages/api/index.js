import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            try {
                const recipes = await Recipe.find({});
                res.status(200).json({ success: true, data: recipes });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
