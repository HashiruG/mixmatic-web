import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';
export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const recipe = await Recipe.findById(id);
                if (!recipe) {
                    return res.status(404).json({ success: false, message: 'Recipe not found' });
                }
                res.status(200).json({ success: true, data: recipe });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        case 'PATCH':
            try {
                const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
                if (!recipe) {
                    return res.status(404).json({ success: false, message: 'Recipe not found' });
                }
                res.status(200).json({ success: true, data: recipe });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;
            case 'DELETE':
                try {
                    const deletedRecipe = await Recipe.deleteOne({ _id: id });
                    if (!deletedRecipe) {
                        return res.status(404).json({ success: false, message: 'Recipe not found' });
                    }
                    res.status(200).json({ success: true, data: {} });
                } catch (error) {
                    res.status(400).json({ success: false, message: error.message });
                }
                break;    
        default:
            res.status(400).json({ success: false });
            break;
    }
}