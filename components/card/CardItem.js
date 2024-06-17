import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const CardItem = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>Price : {props.price}</p>
        </Card.Text>
        <Link href={props.href}><Button variant="primary">Edit</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;