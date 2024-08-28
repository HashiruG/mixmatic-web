import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import styles from "./AddItem.module.css"


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
    <div className={styles.formContainer}>
 
      <Card className={styles.card}> 
      <Card.Body>
        <Card.Title>New Recipe Details</Card.Title>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>{props.firstInput}</Form.Label>
        <Form.Control name="recipeName" type="text"  onChange={(e) => {handleChange(e.target.name, e.target.value)}}  placeholder="Enter Recipe Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>{props.secondInput}</Form.Label>
        <Form.Control name="price" type="number" onChange={(e) => {handleChange(e.target.name, e.target.value)}}   placeholder="Enter Price" />
      </Form.Group>
      
      <Button variant="dark" type="submit">
        Submit
      </Button>
     
    </Form>
      </Card.Body>
    </Card>
   
    </div>

  );
}

export default AddItem;