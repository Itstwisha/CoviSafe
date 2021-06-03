 
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
                <CardTitle tag="h4">Covid Food List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Contact</th>
                      <th className="text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shubh Rasaoi</td>
                      <td>Gautam Budh Nagar</td>
                      <td>8600422337</td>
                      <td className="text-center">Starting Rs. 110</td>
                    </tr>
                    <tr>
                      <td>Tasty Tiffin</td>
                      <td>Janakpuri, Tilal Nagar, Rajouri Nagar</td>
                      <td>9311851381</td>
                      <td className="text-center">Starting Rs. 90</td>
                    </tr>
                    <tr>
                      <td>Kitchen 108</td>
                      <td>DELHI NCR</td>
                      <td>7011759908</td>
                      <td className="text-center">Starting Rs. 349</td>
                    </tr>
                    <tr>
                      <td>JustMyRoots</td>
                      <td>Delhi/Gurugram</td>
                      <td>8384030811</td>
                      <td className="text-center">Starting Rs. 481</td>
                    </tr>
                    <tr>
                      <td>Savoury and Sage</td>
                      <td>DELHI NCR</td>
                      <td>9654562471</td>
                      <td className="text-center">Starting Rs. 75</td>
                    </tr>
                    <tr>
                      <td>Mama's Cook House</td>
                      <td>West Delhi</td>
                      <td>971167475</td>
                      <td className="text-center">Starting Rs. 150</td>
                    </tr>
                    <tr>
                      <td>Quikish</td>
                      <td>DELHI NCR</td>
                      <td>7337039595</td>
                      <td className="text-center">Starting Rs. 179</td>
                    </tr>
                    <tr>
                      <td>Jain International Organization</td>
                      <td>Faridabad</td>
                      <td>9313208735</td>
                      <td className="text-center">Free</td>
                    </tr>
                    <tr>
                      <td>Beyond Designs Bistro</td>
                      <td>South Delhi & Gurugram</td>
                      <td>9717741360</td>
                      <td className="text-center">Starting Rs. 249</td>
                    </tr>
                    <tr>
                      <td>Shubh Rasaoi</td>
                      <td>Greater Noida & Indirapuram</td>
                      <td>8600422337</td>
                      <td className="text-center">Starting Rs. 110</td>
                    </tr>
                    <tr>
                      <td>Spicy Triangle by Ashwani Shroff</td>
                      <td>DELHI NCR</td>
                      <td>9899009779</td>
                      <td className="text-center">Free</td>
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
