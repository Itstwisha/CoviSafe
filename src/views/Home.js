import React from 'react';
 


function Home(){
    return (
 <>
           
    
     
      <div class="page-header clear-filter">
        <div class="content-center">
          <div class="col-md-8 ml-auto mr-auto">
            <div class="brand">
            <img src={require("assets/img/logo-1.png").default} alt="logo" style={{marginTop: "20px"}} / >
               <div class="left-container" style={{margin: "40px", marginTop: "60px", display: "grid", padding: "30px", textAlign: "left"}}>
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
        </div>
      </div>
       

      </>
    );
    }


export default Home;