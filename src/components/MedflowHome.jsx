import React from "react";
import { Container, Row } from "react-bootstrap";
import { FHIRDataProvider } from "../context/FHIRContext";
import MedflowNavbar from "./MedflowNavbar";
import Medflows from "./Medflows";
const MedflowHome = ({ fhirData }) => {
  return (
    <div className="App">
      <FHIRDataProvider>
        <Container>
          <Row>
           {/*  <MedflowNavbar /> */}
          </Row>
          {/* <Medflows /> */}
          <span>FHIR Data from redux: {JSON.stringify(fhirData.byResource["patient"])}</span>
          {/*  <Row>
            <MedflowFooter />
          </Row> */}
        </Container>
      </FHIRDataProvider>
    </div>
  );
};

export default MedflowHome;
