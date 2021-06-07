 
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Symptoms() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h2>Corona Virus Symptoms</h2>
              </CardHeader>
              <CardBody>
                  <p>
                   COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.

                  </p>
          
              
                  <Row>
                    <Col md="3">
                      <h5>Most common symptoms:</h5>
                      <ul>
                        <li>fever</li>
                        <li>dry cough</li>
                        <li>tiredness</li>
                          </ul>
                        
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <h5>Less common symptoms:</h5>
                      <ul>
                        <li>aches and pains</li>
                        <li>sore throat</li>
                        <li>diarrhoea</li>
                        <li>conjuntivitis</li>
                        <li>headache</li>
                        <li>loss of taste or smell</li>
                        <li>a rash on skin, or discolouration of fingers or toes</li>                          
                          </ul>
                        
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <h5>Serious symptoms:</h5>
                      <ul>
                        <li>difficulty in breathing or shortness of breath</li>
                        <li>chest pain or pressure</li>
                        <li>loss of speech or movement</li>                         
                          </ul>
                        
                    </Col>
                  </Row>
              
              
                  <p>
                  Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.<br />
                  People with mild symptoms who are otherwise healthy should manage their symptoms at home.<br />
                  On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                  </p>
      
                 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Symptoms;
