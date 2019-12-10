import React from 'react';
import { Button, Form, FormGroup, Label, Input/*, FormText */} from 'reactstrap';
import ListeUser from './listeUser';

const Formu = (props) => {
  return (
    <div>
    <Form>

      <FormGroup>
        <Label for="Text">Location</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">personInHouse</Label>
        <Input type="select" name="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </Input>
      </FormGroup>


      <FormGroup>
        <Label for="exampleSelect">Taille de la maison</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Small</option>
          <option>Medium</option>
          <option>Big</option>
        </Input>
      </FormGroup>

      <Button>Submit</Button>

    </Form>

    <ListeUser/>
    </div>
  );
}

export default Formu;