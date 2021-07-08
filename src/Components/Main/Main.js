import React, { useState } from "react";
import Header from "../Header/Header";
import "./main.css";
import AddUnit from "../AddUnits/AddUnit";
import AddComponents from "../AddComponents/AddComponents";
import Component from "../component1/Component";
import Milestone from "../Milestones/Milestone";

const Main = () => {
  const [addComponentIsVisible, setAddComponentIsVisible] = useState(false);
  const [ComponentIsVisible, setComponentIsVisible] = useState(false);
  const [milestoneIsVisible, setMilestoneIsVisible] = useState(false);
 


  
  return (
    <>
      <Header />
      <div className="main-body">
        <div className="left-side-panel bg-primary"> </div>
        <div className="main-container">
          <div className="add-unit-container">
            <div className="add-unit-wrapper wrapper p-3">
              <AddUnit
                onAddComponentIsVisible={()=> {setAddComponentIsVisible(true)}}
              />
            </div>
          </div>

          {addComponentIsVisible && (
            <div className="add-component-container">
              <div className="add-component-wrapper wrapper  p-3">
                <AddComponents  onComponentIsVisible={()=>setComponentIsVisible(true)} />
              </div>
            </div>
          )}

         {ComponentIsVisible&& <div className="component-container">
            <div className="component-wrapper wrapper p-3">
              <Component onMilestoneIsVisible={()=>setMilestoneIsVisible(true)} />
            </div>
          </div>}

          {milestoneIsVisible&&<div className="milestones-conatiner">
            <div className="milestones-wrapper wrapper  p-3">
              <Milestone  />
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Main;
