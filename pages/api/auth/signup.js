import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import { hashPassword } from '@/utils/auth';

export default async function handler(req, res) {
    await dbConnect();
    const { email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    switch (req.method) {
        

        case 'POST':
            try {
                const user = await User.create({email:email, password:hashedPassword});
                
                res.status(201).json({ success: true, data: user});
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
