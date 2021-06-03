 
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Blood Bank Availability</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ServiceProvider</th>
                      <th>Contacts</th>
                      <th className="text-center">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AIIMS New Delhi</td>
                      <td>011-26593726, 011-26594438, 011-26588700</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Rotary Noida Blood Bank</td>
                      <td>011-66364887</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>White Cross Blood Bank</td>
                      <td>011-26831063, 011-26844140</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>BATRA Hospital</td> 
                      <td>011-29958747, 011-29957487</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Apollo Blood Bank</td> 
                      <td>011-26825707, 011-26925858</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Lions Blood Bank New Delhi</td> 
                      <td>011-42258080, 011-42258494</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Sir Ganga Ram Hospital</td> 
                      <td>011-25750000, 011-25751111, 011-25861463</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Indian Red Cross Society</td> 
                      <td>011-23711551</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Maieedia Hospital</td> 
                      <td>011-64788237 , 011-64788249</td>
                      <td className="text-center">Verified</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
