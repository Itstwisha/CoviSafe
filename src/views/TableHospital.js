 
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
                <CardTitle tag="h4">Covid Government Hospitals Data</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>No. of Beds</th>
                      <th className="text-center">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dr. Ram Manohar Lahia Hospital</td>
                      <td>Central Delhi</td>
                      <td>1420</td>
                      <td className="text-center">91-11-234-4286</td>
                    </tr>
                    <tr>
                      <td>Western Command Hospital</td>
                      <td>Faridabad</td>
                      <td>100</td>
                      <td className="text-center">1292209034</td>
                    </tr>
                    <tr>
                      <td>Corona Seva Kendra</td>
                      <td>Faridabad</td>
                      <td>200</td>
                      <td className="text-center">7669430727</td>
                    </tr>
                    <tr>
                      <td>Lok Nayak Hospital</td>
                      <td>Central Delhi</td>
                      <td>1500</td>
                      <td className="text-center">8046820570</td>
                    </tr>
                    <tr>
                      <td>GTB Hospital</td>
                      <td>East Delhi</td>
                      <td>750</td>
                      <td className="text-center">8595948014</td>
                    </tr>
                    <tr>
                      <td>Base Hospital</td>
                      <td>West Delhi</td>
                      <td>500</td>
                      <td className="text-center">1125683581</td>
                    </tr>
                    <tr>
                      <td>Deen Dayal Upadhyay Hospital</td>
                      <td>West Delhi</td>
                      <td>500</td>
                      <td className="text-center">01125401075</td>
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
