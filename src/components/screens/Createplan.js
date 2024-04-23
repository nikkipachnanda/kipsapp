import React from "react";
import { Container } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const Createplan = () => {
  return (
    <Container>
      <Card body>
        <h1 className="headingMedium">Weekly Plan</h1>
        <Stack direction="horizontal" gap={3} className="mt-4">
          <Form.Select aria-label="Default select example">
            <option>Select Week</option>
            <option value="29 Apr">29 Apr 2024</option>
            <option value="2 May">6 May 2024</option>
            <option value="13 May">13 May 2024</option>
          </Form.Select>
          <Button variant="primary">Continue</Button>
        </Stack>
      </Card>
    </Container>
  );
};
export default Createplan;
