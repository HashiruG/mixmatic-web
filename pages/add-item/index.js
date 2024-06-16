import { useState, useEffect } from "react";
import axios from 'axios';
import NavbarItem from "@/components/navigation/NavbarItem";
import AddItem from "@/components/addItem/AddItem";


const AddItemPage = () => {
    const [formData, setformData] = useState(null)
    function handleFormSubmit(formData){
        setformData(formData)
    }    

    useEffect(() => {
        if (formData != null) {
            axios.post('/api/add-item', formData)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
       
    }, [formData]);


    return(
        <div>
            <NavbarItem></NavbarItem>
            <AddItem firstInput="Enter Recipe Name" secondInput="Enter price" onFormSubmit={handleFormSubmit}></AddItem>
    
        </div>
        )
      
}

export default AddItemPage;