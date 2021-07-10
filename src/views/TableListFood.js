  
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
        width: 100,
      },
      {
        label: 'Contact',
        field: 'contact',
        width: 100,
      },
      {
        label: 'Price',
        field: 'price',
        width: 100,
      },
    ],
    rows: [
      {
      
        name: 'Shubh Rasaoi',
        location: 'Gautam Budh Nagar',
        contact: '8600422337',
        price: 'Starting Rs. 110',
      },
      {
      
        name: 'Tasty Tiffin',
        location: 'Janakpuri, Tilal Nagar, Rajouri Nagar',
        contact: '9311851381',
        price: 'Starting Rs. 90',
      },
      {
      
        name: 'Kitchen 108',
        location: 'DELHI NCR',
        contact: '7011759908',
        price: 'Starting Rs. 349',
      },
      {
      
        name: 'JustMyRoots',
        location: 'Delhi/Gurugram',
        contact: '8384030811',
        price: 'Starting Rs. 481',
      },
      {
      
        name: 'Savoury and Sage',
        location: 'DELHI NCR',
        contact: '9654562471',
        price: 'Starting Rs. 75',
      },
      {
      
        name: 'Mamas Cook House',
        location: 'West Delhi',
        contact: '971167475',
        price: 'Starting Rs. 110',
      },
      {
      
        name: 'Quikish',
        location: 'DELHI NCR',
        contact: '7337039595',
        price: 'Starting Rs. 179',
      },
      {
      
        name: 'Jain International Organization',
        location: 'Faridabad',
        contact: '9313208735',
        price: 'Free',
      },
      {
      
        name: 'Beyond Designs Bistro',
        location: 'South Delhi & Gurugram',
        contact: '9717741360',
        price: 'Starting Rs. 249',
      },
      {
      
        name: 'Shubh Rasaoi',
        location: 'Greater Noida & Indirapuram',
        contact: '8600422337',
        price: 'Starting Rs. 110',
      },
      {
      
        name: 'Spicy Triangle by Ashwani Shroff',
        location: 'DELHI NCR',
        contact: '9899009779',
        price: 'Free',
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
      <CardTitle tag="h4">Covid Food Resources</CardTitle>
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
