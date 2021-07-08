import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const Milestone = () => {
  const submit = (e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeMilestone(e),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const [milestone, setMilestone] = useState([]);
  const addMilestone = () => {
    setMilestone((pre) => [...pre, initialValue]);
  };

  const removeMilestone = (e) => {
    submit();
    const id =
      e.target.parentElement.parentElement.parentElement.attributes[0].value;

    const newMilestone = milestone.filter((item, index) => index !== id);
    setMilestone(newMilestone);
  };
  const initialValue = (
    <div className="form-group mt-4 d-flex justify-content-between align-items-center ">
      <div className="input-group  mx-1">
        <input
          type="text"
          className="form-control input "
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-prepend ">
          <span
            className="input-group-text icon-span input text-muted pr-2"
            id="basic-addon1"
          >
            Milestones
          </span>
        </div>
      </div>
      <div className="input-group  mx-1">
        <input
          type="text"
          className="form-control input "
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-prepend ">
          <span
            className="input-group-text icon-span input text-muted pr-2"
            id="basic-addon1"
          >
            %
          </span>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="text-muted"
          onClick={(e) => submit(e)}
          className="bg-transparent border-0"
        >
          x
        </button>
      </div>
    </div>
  );

  return (
    <>
      <h5 className="text-center my-2">Vendor 1 - Milestones </h5>
      <>
        {milestone.map((m, index) => (
          <div className="milestone" data-index={index} key={index}>
            {m}
          </div>
        ))}
      </>
      <div className="my-3">
        <button
          type="button"
          onClick={() => {
            addMilestone();
          }}
          className="bg-transparent border-0 plus"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Milestone;
