import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        
        case 'POST':
            try {
                const recipe = await Recipe.create(req.body);
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