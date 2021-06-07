 
   
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
        label: 'Service Provider',
        field: 'name',
        width: 270,
      },
      {
        label: 'Contact',
        field: 'contact',
        width: 100,
      },
      {
        label: 'Remark',
        field: 'remark',
        width: 150,
      },
    ],
    rows: [
      {
      
        name: 'AIIMS New Delhi',      
        contact: '011-26593726, 011-26594438, 011-26588700',
        remarks: 'Verified',
      },
      {
      
        name: 'Rotary Noida Blood Bank',      
        contact: '011-66364887',
        remarks: 'Verified',
      },
      {
      
        name: 'White Cross Blood Bank',      
        contact: '011-26831063, 011-26844140',
        remarks: 'Verified',
      },
      {
      
        name: 'BATRA Hospital',      
        contact: '011-29958747, 011-29957487',
        remarks: 'Verified',
      },
      {
      
        name: 'Apollo Blood Bank',      
        contact: '011-26825707, 011-26925858',
        remarks: 'Verified',
      },
      {
      
        name: 'Lions Blood Bank New Delhi',      
        contact: '011-42258080, 011-42258494',
        remarks: 'Verified',
      },
      {
      
        name: 'Sir Ganga Ram Hospital',      
        contact: '011-25750000, 011-25751111, 011-25861463',
        remarks: 'Verified',
      },
      {
      
        name: 'Indian Red Cross Society',      
        contact: '011-23711551',
        remarks: 'Verified',
      },
      {
      
        name: 'Maieedia Hospital',      
        contact: '011-64788237 , 011-64788249',
        remarks: 'Verified',
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
      <CardTitle tag="h4">Blood Banks</CardTitle>
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
    