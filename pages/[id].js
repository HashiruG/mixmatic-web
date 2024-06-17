import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AddItem from '@/components/addItem/AddItem';
import NavbarItem from '@/components/navigation/NavbarItem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EditRecipe = () => {
    const router = useRouter();
    const { id } = router.query;

    const [recipe, setRecipe] = useState({
        recipeName: "",
        price:""
    });

    useEffect(() => {
        if (id) {
            axios.get(`/api/${id}`)
                .then(response => setRecipe(response.data.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleChange = (name,value) => {

        setRecipe({
            ...recipe,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`/api/${id}`, recipe)
            .then(response => {
                console.log('Recipe updated:', response.data);
                router.push('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <NavbarItem></NavbarItem>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Enter Recipe</Form.Label>
                <Form.Control name="recipeName" type="text"  onChange={(e) => {handleChange(e.target.name, e.target.value)}} value={recipe.recipeName}/>
                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Enter Price</Form.Label>
                <Form.Control name="price" type="number" onChange={(e) => {handleChange(e.target.name, e.target.value)}} value={recipe.price}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        
    );
};

export default EditRecipe;