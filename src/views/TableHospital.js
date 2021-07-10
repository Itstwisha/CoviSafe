    
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

 
import { MDBDataTable } from 'mdbreact';

const Tables = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
       
      {
        label: 'Location',
        field: 'location',
        width: 200,
      },
      {
        label: 'No. of Beds',
        field: 'beds',
        width: 100,
      },
      {
        label: 'Contact',
        field: 'contact',
        width: 150,
      },
    ],
    rows: [
      {
      
         name: 'Dr. Ram Manohar Lahia Hospital',
         location: 'Central Delhi',
         beds: '1420',
        contact: '91-11-234-4286',
      },
      {
      
         name: 'Western Command Hospital',
         location: 'Faridabad',
         beds: '100',
        contact: '1292209034',
      },
      {
      
         name: 'Corona Seva Kendra',
         location: 'Faridabad',
         beds: '200',
        contact: '7669430727',
      },
      {
      
         name: 'Lok Nayak Hospital',
         location: 'Central Delhi',
         beds: '200',
        contact: '8046820570',
      },
      {
      
         name: 'GTB Hospital',
         location: 'East Delhi',
         beds: '750',
        contact: '8595948014',
      },
      {
      
         name: 'Base Hospital',
         location: 'West Delhi',
         beds: '500',
        contact: '1125683581',
      },
      {
      
         name: 'Deen Dayal Upadhyay Hospital',
         location: 'West Delhi',
         beds: '500',
        contact: '01125401075',
      },
     
     
    ],
  }

  return (
    <>
  <div className="content">
<Row>
  <Col md="12">
  <Card>
    <CardHeader>
      <CardTitle tag="h4">Coid Hospitals</CardTitle>
    </CardHeader>
    <CardBody>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </CardBody>
  </Card>
  </Col>
</Row>
  </div>


    </>
  );
}

   

export default Tables;
 
                       
                       
                