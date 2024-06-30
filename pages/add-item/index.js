import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import NavbarItem from "@/components/navigation/NavbarItem";
import AddItem from "@/components/addItem/AddItem";


const AddItemPage = () => {
    const [formData, setformData] = useState(null)
    const router = useRouter();
    function handleFormSubmit(formData){
        setformData(formData)
    }    

    useEffect(() => {
        if (formData != null) {
            axios.post('/api/', formData)
            .then(function (response) {
              console.log(response);
              router.push('/');
            })
            .catch(function (error) {
              console.log(error);
            });
        }
       
    }, [formData]);


    return(
        <div>
            <NavbarItem></NavbarItem>
            <AddItem firstInput="Recipe Name" secondInput="Price" onFormSubmit={handleFormSubmit}></AddItem>
    
        </div>
        )
      
}

export default AddItemPage;