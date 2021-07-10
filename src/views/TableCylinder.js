   
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
        label: 'Contact',
        field: 'contact',
        width: 100,
      },
      {
        label: 'Remark',
        field: 'remarks',
        width: 150,
      },
    ],
    rows: [
      {
      
        name: 'Oxygen Cans',
        location: 'Gautam Budh Nagar',
        contact: '8600422337',
        remarks: 'Starting Rs. 110',
      },
      {
      
        name: 'Oxygen Cans',
        location: 'Lagpat Nagar',
        contact: '9311756753',
        remarks: '1200/-12L 250puf',
      },
      {
      
        name: 'Oxygen Cans',
        location: 'Pitampura',
        contact: '9999810895',
        remarks: 'No advance payment',
      },
      {
      
        name: 'Oxygen Cans',
        location: 'RK Ashram Marg Metro Station',
        contact: '8860202473',
        remarks: '1200/-12L 250puf',
      },
      {
      
        name: 'Oxygen Cans',
        location: 'Lagpat Nagar',
        contact: '9311756753',
        remarks: '18lt, pre-order collection',
      },
      {
      
        name: '50L and 60L',
        location: 'Delhi',
        contact: '9609215529',
        remarks: '20k Advance',
      },
      {
      
        name: '55L and 100L',
        location: 'Delhi',
        contact: '8345004408',
        remarks: 'Rs. 5000',
      },

      {
      
        name: '10/30/50lt',
        location: 'Delhi',
        contact: '8874151319',
        remarks: 'Half Payment Advance',
      },
      {
      
        name: '50L',
        location: 'Delhi',
        contact: '7550782819',
        remarks: 'NA',
      },
      {
      
        name: '55L and 100L',
        location: 'Delhi',
        contact: '7602254674',
        remarks: '8k Advance',
      }, {
      
        name: 'Oxygen Cans',
        location: 'Delhi',
        contact: '8527141289',
        remarks: 'NA',
      },
      {
      
        name: 'Oxygen Cans',
        location: 'Delhi',
        contact: '7551033816',
        remarks: 'On SBS group',
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
      <CardTitle tag="h4">Oxygen Cylinders</CardTitle>
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

                      
                   
               
