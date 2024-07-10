import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import styles from "./AuthenticationItem.module.css"
import NavbarItem from '../navigation/NavbarItem';


const AuthenticationItem = (props) => {

  const [formData, setformData] = useState({email:"", password:""})
    
  function handleChange(name, value){
          setformData((prevvalue) =>{
              return({...prevvalue,
                  [name] : value
              })
          })
  }

  function handleSubmit(e){
    e.preventDefault();
      if (formData.email != "" && formData.password != "") {

          props.onFormSubmit(formData)
      }
      
  }

  return (
    <div>
      <NavbarItem></NavbarItem>
 
    <div className={styles.formContainer}>
      
      <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>Sign Up</Card.Title>
        <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="text" placeholder="Enter Email Address" onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
        
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label>Passsword</Form.Label>
        <Form.Control name="password" type="password" placeholder="Enter Password" onChange={(e) => {handleChange(e.target.name, e.target.value)}} />
      </Form.Group>
      
      <Button variant="dark" type="submit">
        Submit
      </Button>
     
    </Form>
      </Card.Body>
    </Card>
   
    </div>
    </div>

  );
}

export default AuthenticationItem;