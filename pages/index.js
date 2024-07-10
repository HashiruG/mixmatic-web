import { useRouter } from 'next/router';
import AuthenticationItem from '@/components/login/AuthenticationItem';
import { signIn } from "next-auth/react";
import LoginItem from '@/components/login/login';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();

    const [message, setmessage] = useState("")

    async function handleSubmit(formData) {
     

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });
            

            console.log("Sign-in Result:", result);

            if (result.error) {
                console.error("Sign-in error:", result.error);
               setmessage(result.error)
            } else {
                console.log("Sign-in successful:", result);
                
                router.push('/menu');
            }
        } catch (error) {
            console.error("Sign-in request failed:", error);
        }
    }

    return (
       
       
    <LoginItem onFormSubmit={handleSubmit} message={message}/>
    

        
    
    );
}
