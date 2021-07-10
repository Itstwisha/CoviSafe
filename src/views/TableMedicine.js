 
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

const TableMedicine = () => {
  const data = {
    columns: [
      {
        label: 'Medicine',
        field: 'medicine',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Medicine',
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
        label: 'Remarks',
        field: 'remarks',
        width: 150,
      },
    ],
    rows: [
      {
      
        medicine: 'Remdesivir',
        location: 'Gautam Budh Nagar',
        contact: '18004192211',
        remarks: 'Verified',
      },
      {
      
      medicine: 'Remdesivir',
      location: 'PAN India',
      contact: '18002667080',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Covid Related Medicines',
      location: 'DELHI NCR',
      contact: '9711018004',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9810424353',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9910555710',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'Delhi',
      contact: '9818124729',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9792867765',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9811130499',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9999112307',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '09538155353',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '7065197464',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9810559988',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '9146022074',
      remarks: 'Verified',
    },
    {
      
      medicine: 'Remdesivir',
      location: 'DELHI',
      contact: '8826838434',
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
      <CardTitle tag="h4">Covid Medicines</CardTitle>
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


export default TableMedicine;
 
