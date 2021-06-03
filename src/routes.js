/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import TableListFood from "views/TableListFood.js";
import TableMedicine from "views/TableMedicine.js";
import TableHospital from "views/TableHospital.js";
import TableBloodBank from "views/TableBloodBank.js";
import TableCylinder from "views/TableCylinder.js";
// import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Home from "views/Home.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "About",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  
  {
     name: "Our Analysis",
     icon: "tim-icons icon-minimal-down",
  },
    {
       name: "Disease Symptoms",
      path: "/ouranalysis/symptoms",
      layout: "/admin",
      icon: "tim-icons icon-alert-circle-exc"
    },
      {
       name: "Vaccination Survey Data",
      path: "/ouranalysis/vaccinationsurvey",
      icon: "tim-icons icon-chart-bar-32",
      component: UserProfile,
      layout: "/admin",
    },
      
  
  {
    name: "Resource",
    icon: "tim-icons icon-minimal-down",
  
  },
    
    {
       name: "Vaccine Availability",
      path: "/resource/vaccineavailability",
      icon: "tim-icons icon-bulb-63"
    },
    {
       name: "Doctor Consultation",
       path: "/resource/doctorconsultation",
        icon: "tim-icons icon-badge",
        layout: "/admin",

      
    },
    {
       name: "Covid Food Book",
      path: "/resource/covidfoodbook",
      icon: "tim-icons icon-paper",
      component: TableListFood,
      layout: "/admin",
    },
    
   
  {           name: "GeneralInfo",
               icon: "tim-icons icon-minimal-down",
              
  },
    {
          name: "Hospital Bed Availability",
          path: "/generalinfo/bedavailability",
          component: TableHospital,
          layout: "/admin",
          icon: "tim-icons icon-simple-add"
  
    },
    {
       name: "Oxygen Cylinder Availability",
      path: "/generalinfo/oxygencylinder",
      component: TableCylinder,
      layout: "/admin",
      icon: "tim-icons icon-simple-add"
       
    },
      {
      name: "Blood Bank",
      path: "/generalinfo/bloodbank",
      component: TableBloodBank,
      layout: "/admin",
      icon: "tim-icons icon-simple-add"
       
    },
      {
       name: "Medicines as ICMR",
      path: "/generalinfo/medicines",
      component: TableMedicine,
      layout: "/admin",
      icon: "tim-icons icon-book-bookmark"
    },

];
export default routes;
