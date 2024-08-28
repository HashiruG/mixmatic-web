import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from "./Card.module.css"

const CardItem = (props) => {
  const router = useRouter();
  async function handleDelete(){
    try {
      await axios.delete(`/api/${props.id}`);
      router.push("/menu"); 
  } catch (error) {
      console.error('Failed to delete the recipe', error);
  }
  }

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1395736637/photo/spring-or-summer-cold-cocktail-raspberry-lemonade.jpg?s=612x612&w=0&k=20&c=Eim8oSm-ycxAVssFPrOVwWpeo6iOaoZkkglKrmbKSk4=" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>Price : Rs. {props.price}</p>
        </Card.Text>
        <Link href={props.href}><Button className={styles.buttons} variant="dark">Edit</Button></Link>
        <Button className={styles.buttons} variant="danger" type="submit" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;