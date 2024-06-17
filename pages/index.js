import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarItem from '@/components/navigation/NavbarItem';
import CardItem from '@/components/card/CardItem';
import styles from "./index.module.css"



export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/')
            .then(response => setRecipes(response.data.data))
            .catch(error => console.error(error));
    }, [recipes]);

    console.log(recipes);

    return (
        <div>
           <NavbarItem></NavbarItem>
           <div className={styles.menuControl}>
           {recipes.map((recipe) =>{
            return(
                <CardItem id={recipe._id} key={recipe._id} name={recipe.recipeName} price={recipe.price} href={`/${recipe._id}`}></CardItem>
            )
           })}
           </div>
         
        </div>
    );
}
