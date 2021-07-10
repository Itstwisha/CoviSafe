 
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
  Button,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Doctors Available for Covid Related Services</CardTitle>
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
                      <td><a href="tel:9115444155"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td>
                      <td className="text-center">Verified on 12/05/21</td>
                    </tr>
                    <tr>
                      <td>Akash Healthcare</td>
                      <td>Delhi</td>
                      <td><a href="tel:8800015900"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 12/05/21</td>
                    </tr>
                    <tr>
                      <td>Sayani Bhutani</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9811983564"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Shivani Pandey</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9451079826"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Kanika Malik</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel: 9910577218"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Pragya Sharma</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel: 9871490946"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Dr. Barre Vijay Prasad</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9148948389"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>John Vicotr</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9717114477"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Kamna Yadav</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9953106479"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Meenakshi Gupta</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:8969129247"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Nupur Khandelwal</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9963971747"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Pooja Sharma</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:9958883133"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
                      <td className="text-center">Verified on 18/05/2021</td>
                    </tr>
                    <tr>
                      <td>Ritu Rani</td>
                      <td>DELHI NCR</td>
                      <td><a href="tel:7206688787"><Button className="btn-fill" color="primary" type="dial"> Contact</Button> </a></td> 
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
