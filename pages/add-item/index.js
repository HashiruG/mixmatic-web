import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { getSession } from "next-auth/react";
import axios from 'axios';
import NavbarItem from "@/components/navigation/NavbarItem";
import AddItem from "@/components/addItem/AddItem";


const AddItemPage = ({session}) => {

    const [formData, setformData] = useState(null)
    const router = useRouter();
    function handleFormSubmit(formData){
        setformData(formData)
    }    



    useEffect(() => {
        if (formData != null) {
            axios.post('/api/add-item', formData)
            .then(function (response) {
              console.log(response);
              router.push('/menu');
            })
            .catch(function (error) {
              console.log(error);
            });
        }
       
    }, [formData,router]);


    return(
        <div>
            <NavbarItem></NavbarItem>
            <AddItem firstInput="Recipe Name" secondInput="Price" onFormSubmit={handleFormSubmit}></AddItem>
    
        </div>
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

export default AddItemPage;