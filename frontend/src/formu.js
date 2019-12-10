import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Formu = (props) => {
  return (
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
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Small</option>
          <option>Medium</option>
          <option>Big</option>
        </Input>
      </FormGroup>

      <Button>Submit</Button>

    </Form>
  );
}

export default Formu;

/*<FormGroup tag="fieldset">
          <legend>houseSize</legend>

          <FormGroup check>

            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Small
            </Label>

          </FormGroup>

          <FormGroup check>

            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Medium
            </Label>
          </FormGroup>

          <FormGroup check>

            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Big
            </Label>

          </FormGroup>

      </FormGroup>*/