import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarItem from '@/components/navigation/NavbarItem';
import CardItem from '@/components/card/CardItem';
import styles from "./index.module.css"
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home({ session }) {
    const router = useRouter();
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
           {recipes.map((recipe) => (
                <CardItem 
                    id={recipe._id} 
                    key={recipe._id} 
                    name={recipe.recipeName} 
                    price={recipe.price} 
                    href={`/${recipe._id}`}
                />
           ))}
           </div>
        </div>
    );
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