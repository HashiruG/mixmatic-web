import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          <p>Price : Rs 850</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;