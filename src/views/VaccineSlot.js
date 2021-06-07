 import React, { useEffect } from "react";
 import { Card, CardHeader } from "reactstrap";

function VaccineSlot() {

  useEffect(() => {
    window.location.href = "https://obscure-castle-62377.herokuapp.com/";
  }, []);

  return (
    <div className="content" style={{width:"80%", height:"60%"}}>
    <Card md="6">
      <CardHeader>Check your vaccine slot from here.</CardHeader>
      </Card>
    </div>
  );
}

export default VaccineSlot;