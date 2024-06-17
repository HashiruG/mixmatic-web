import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AddItem = (props) => {

    const [formData, setformData] = useState({recipeName:"", price:""})
    
    function handleChange(name, value){
            setformData((prevvalue) =>{
                return({...prevvalue,
                    [name] : value
                })
            })
    }

    function handleSubmit(e){
      e.preventDefault();
        if (formData.recipeName != "" && formData.price != "") {

            props.onFormSubmit(formData)
        }
        
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>{props.firstInput}</Form.Label>
        <Form.Control name="recipeName" type="text"  onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>{props.secondInput}</Form.Label>
        <Form.Control name="price" type="number" onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddItem;