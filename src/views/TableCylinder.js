 
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
                <CardTitle tag="h4">Oxygen Cylinder Availability</CardTitle>
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
                      <td>Oxygen Cans</td>
                      <td>Lagpat Nagar</td>
                      <td>9311756753</td>
                      <td className="text-center">1200/-12L 250puf</td>
                    </tr>
                    <tr>
                      <td>Oxygen Cans</td>
                      <td>Pitampura</td>
                      <td>9999810895</td>
                      <td className="text-center">No advance payment</td>
                    </tr>
                    <tr>
                      <td>Oxygen Cans</td>
                      <td>RK Ashram Marg Metro Station</td>
                      <td>8860202473</td>
                      <td className="text-center">18lt, pre-order collection</td>
                    </tr>
                    <tr>
                      <td>50L and 60L</td>
                      <td>Delhi</td>
                      <td>9609215529</td>
                      <td className="text-center">20k Advance</td>
                    </tr>
                    <tr>
                      <td>55L and 100L</td>
                      <td>Delhi</td>
                      <td>8345004408</td>
                      <td className="text-center">Rs. 5000</td>
                    </tr>
                    <tr>
                      <td>10/30/50lt</td>
                      <td>Delhi</td>
                      <td>8874151319</td>
                      <td className="text-center">Half Payment Advance</td>
                    </tr>
                    <tr>
                      <td>50L</td>
                      <td>Delhi</td>
                      <td>7550782819</td>
                      <td className="text-center">NA</td>
                    </tr>
                    <tr>
                      <td>55L and 100L</td>
                      <td>Delhi</td>
                      <td>7602254674</td>
                      <td className="text-center">8k Advance</td>
                    </tr>
                    <tr>
                      <td>Oxygen Cans</td>
                      <td>Delhi</td>
                      <td>8527141289</td>
                      <td className="text-center">NA</td>
                    </tr>
                    <tr>
                      <td>Oxygen Cylinder</td>
                      <td>Delhi</td>
                      <td>7551033816</td>
                      <td className="text-center">On SBS group</td>
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
