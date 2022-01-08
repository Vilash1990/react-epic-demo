import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux'

const MedflowHome = () => {
  const fhirData = useSelector((state) => state.fhirData)
  return (
    <div>
          <span>FHIR Data from redux: {JSON.stringify(fhirData.byResource["patient"])}</span>
    </div>
  );
};

export default MedflowHome;
