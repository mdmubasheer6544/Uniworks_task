import React, { useState } from "react";
import Work from "./Work";
import Material from "./Material";
import "./Component.css";


const Component = (props) => {
  
  const [isWorkVisible, setIsWorkVisible] = useState("block");
  const [isMaterialVisible, setIsMaterialVisible] = useState("none");
  return (
    <>
      <h5 className="text-center my-2">Component 1 </h5>
      <div className="form-group componentTab d-flex justify-content-between mt-3">
        <a href="/#"
          className="mb-2 text-decoration-none tabs text-muted"
          onClick={() => {
            setIsWorkVisible("block");
            setIsMaterialVisible("none");
          }}
        >
          Work
        </a>
        <a href="/#"
          className="mb-2 text-decoration-none tabs text-muted"
          onClick={() => {
            setIsWorkVisible("none");
            setIsMaterialVisible("block");
          }}
        >
          Material
        </a>
      </div>
       <div style={{display:isWorkVisible}}><Work onMilestoneIsVisible={props.onMilestoneIsVisible}/></div> 
       <div style={{display:isMaterialVisible}}><Material/> </div>
    </>
  );
};

export default Component;
