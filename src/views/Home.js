import React from 'react';
import { Card } from 'reactstrap';


function Home(){
    return (
 <>
    <div className="content">
    
      <Card>
      <div class="page-header clear-filter">
        
          <div class="col-md-8 ml-auto mr-auto">
          
            <img src={require("assets/img/logo-1.png").default} alt="logo" style={{marginTop: "20px",  top: "8px", left: "16px"}} / >
               <div class="left-container" style={{margin: "40px", marginTop: "60px", display: "grid", padding: "20px", textAlign: "left"}}>
                   <h1 style={{color: "#FA6400"}}>COVID 19</h1>
                   <h3>Wear Mask, Maintain Social Distancing</h3>
                   <p style={{wordWrap: "break-word"}}>
                   Wearing mask and keeping social distancing is when everyone, 
                   including those who don’t have symptoms, keeps 6 feet away from 
                   each other to lower the chances of spreading the virus.
                   </p>
               </div>
               <div class="right-container" >
              <img src={require("assets/img/side-image.png").default} alt="." style={{float: "none", marginBottom: "50px", padding: "30px"}} / >
               </div>
          </div>
      </div>
      </Card> 
      </div>

      </>
    );
    }


export default Home;