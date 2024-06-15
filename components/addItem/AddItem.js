import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddItem = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>{props.firstInput}</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>{props.secondInput}</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddItem;