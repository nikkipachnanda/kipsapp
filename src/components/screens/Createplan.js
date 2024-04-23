import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { postAWP } from "../utils/Service";

export default function  Createplan()
 {
  const [selectedDate ,setSelectedDate] = useState();
  function handleSelectedDate(event){
    setSelectedDate(event.target.value);

  }
  function handleContinue(){
    console.log(selectedDate);
      const data = {
        "allOrNone" : false,
        "records" : [{
           "attributes" : {"type" : "Kips_PJP_Weekly_Plan__c"},
           "Kips_Week_Start_date__c": selectedDate,
           "Kips_Status__c" : "Drafted"
        }]
     }
      postAWP(data).then((response) => {
        console.log(response);
        if(response.data[0].success){
        }
        })
      .catch((error) => {
        console.log('ooo', error);
      });
   }

  return (
    <Container>
      <Card body>
        <h1 className="headingMedium">Weekly Plan</h1>
        <Stack direction="horizontal" gap={3} className="mt-4">
          <Form.Select aria-label="Default select example" onChange={handleSelectedDate}>
            <option>Select Week</option>
            <option value="2024-04-29">29 Apr 2024</option>
            <option value="2024-05-06">6 May 2024</option>
            <option value="2024-05-13">13 May 2024</option>
          </Form.Select>
          <Button variant="primary" onClick={handleContinue}>Continue</Button>
        </Stack>
      </Card>
    </Container>
  );
}
