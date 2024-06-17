import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const CardItem = (props) => {
  const router = useRouter();
  async function handleDelete(){
    try {
      await axios.delete(`/api/${props.id}`);
      router.push("/"); 
  } catch (error) {
      console.error('Failed to delete the recipe', error);
  }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>Price : {props.price}</p>
        </Card.Text>
        <Link href={props.href}><Button variant="primary">Edit</Button></Link>
        <Button variant="primary" type="submit" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;