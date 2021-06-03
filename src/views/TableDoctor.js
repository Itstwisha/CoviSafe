 
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
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ServiceProvider</th>
                      <th>Location</th>
                      <th>Contacts</th>
                      <th className="text-center">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AIIMS New Delhi</td>
                      <td>Delhi</td>
                      <td>9115444155</td>
                      <td className="text-center">Verified on 12/05/21</td>
                    </tr>
                    <tr>
                      <td>Akash Healthcare</td>
                      <td>Delhi</td>
                      <td>8800015900</td>
                      <td className="text-center">Verified on 12/05/21</td>
                    </tr>
                    <tr>
                      <td>Sayani Bhutani</td>
                      <td>DELHI NCR</td>
                      <td>9811983564</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Shivani Pandey</td>
                      <td>DELHI NCR</td>
                      <td>9451079826</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Kanika Malik</td>
                      <td>DELHI NCR</td>
                      <td>9910577218</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Pragya Sharma</td>
                      <td>DELHI NCR</td>
                      <td>9871490946</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Barre Vijay Prasad</td>
                      <td>DELHI NCR</td>
                      <td>9148948389</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>John Vicotr</td>
                      <td>DELHI NCR</td>
                      <td>9717114477</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Kamna Yadav</td>
                      <td>DELHI NCR</td>
                      <td>9953106479</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Meenakshi Gupta</td>
                      <td>DELHI NCR</td>
                      <td>8969129247</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Nupur Khandelwal</td>
                      <td>DELHI NCR</td>
                      <td>9963971747</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Pooja Sharma</td>
                      <td>DELHI NCR</td>
                      <td>9958883133</td>
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Ritu Rani</td>
                      <td>DELHI NCR</td>
                      <td>7206688787</td>
                      <td className="text-center">Verified on 18/05/2021</td>
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
