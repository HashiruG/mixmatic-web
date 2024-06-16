import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/')
            .then(response => setRecipes(response.data.data))
            .catch(error => console.error(error));
    }, []);

    console.log(recipes);

    return (
        <div>
           <h1>hii</h1>
        </div>
    );
}
