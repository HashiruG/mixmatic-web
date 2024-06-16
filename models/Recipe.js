import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
   recipeName:String,
   price:Number,
   image:String
});

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);