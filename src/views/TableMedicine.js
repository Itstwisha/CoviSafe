 
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
                <CardTitle tag="h4">Covid Medicines</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Medicine</th>
                      <th>Location</th>
                      <th>Contacts</th>
                      <th className="text-center">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Remdesivir</td>
                      <td>Gautam Budh Nagar</td>
                      <td>18004192211</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>PAN India</td>
                      <td>18002667080</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>PAN INDIA</td>
                      <td>8657311088</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Covid Related Medicines</td>
                      <td>DELHI NCR</td>
                      <td>9711018004</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>18004192211</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>Delhi</td>
                      <td>9810424353</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9910555710</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>Delhi</td>
                      <td>9818124729</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9792867765</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9811130499</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9999112307</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>09538155353</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>7065197464</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9810559988</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>9146022074</td>
                      <td className="text-center">Verified</td>
                    </tr>
                    <tr>
                      <td>Remdesivir</td>
                      <td>DELHI</td>
                      <td>8826838434</td>
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
