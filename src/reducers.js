import { combineReducers } from "redux";
import { fhirAuthReducer } from "../src/modules/fhir-auth.js";
import { fhirDataReducer } from "../src/modules/fhir-data.js";

const rootReducer = combineReducers({
  fhirAuth: fhirAuthReducer,
  fhirData: fhirDataReducer
});

export default rootReducer;
