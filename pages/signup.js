import AuthenticationItem from "@/components/login/AuthenticationItem";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession } from "next-auth/react";

export default function Signup({session}) {
    const [formData, setformData] = useState(null)
    const router = useRouter();
    function handleFormSubmit(formData){
        setformData(formData)
     
    }    

    
    useEffect(() => {
     
        if (formData != null) {
            axios.post('/api/auth/signup', formData)
            .then(function (response) {
            
              router.replace('/menu');
            })
            .catch(function (error) {
              console.log(error);
            });
        }
       
    }, [formData]);

    return(
        <AuthenticationItem onFormSubmit={handleFormSubmit}></AuthenticationItem>
    )
    
}

export async function getServerSideProps(context) {
    const session = await getSession({req: context.req})

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { session }
    }
}