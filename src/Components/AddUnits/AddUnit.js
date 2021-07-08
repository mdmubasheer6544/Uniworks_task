import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { compActions } from "../Redux/store/Compenent-slice";

const AddUnit = (props) => {
  const dispatch = useDispatch();
  const unitTitles = () => {
    props.onAddComponentIsVisible();
  };
  const initialValue = (
    <div className="unit mb2">
      <div className="input-group">
        <input
          type="text"
          className="form-control input "
          aria-label="Username"
          aria-describedby="basic-addon1"
        
          onChange={(e) => {
            dispatch(compActions.passTitle(e.target.value));
          }}
        />
        <div className="input-group-prepend ">
          <span className="input-group-text icon-span input" id="basic-addon1">
            <small className="text-muted">Unit Name</small>
            <i className="fas fa-trash icon"></i>
          </span>
        </div>
      </div>
      <a
    
        onClick={() => unitTitles()}
        className="links my-1 text-decoration-none"
      >
        Add component(s)
      </a>
    </div>
  );
  const [unit, setUnit] = useState([initialValue]);

  const addElement = () => {
    setUnit((pre) => [...pre, initialValue]);
  };

  return (
    <>
      <h5 className="text-center my-2"> Add Units </h5>
      <div className="form-group scroll-container mt-4 pr-2">
        <div className="rooms">
          <label className="mb-2">Room 1</label>
          {unit.map((U, index) => (
            <div key={index}>{U}</div>
          ))}
          <div className="my-3">
            <button
              type="button"
              onClick={addElement}
              className="bg-transparent border-0 plus"
            >
              +
            </button>
          </div>
        </div>

        <div className="rooms">
          <label className="mb-2">Room 2</label>
          <div className="unit">
            <div className="input-group">
              <input
                type="text"
                className="form-control input "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="input-group-prepend ">
                <span
                  className="input-group-text icon-span  input"
                  id="basic-addon1"
                >
                  <small className="text-muted">Unit Name</small>
                  <i className="fas fa-trash icon"></i>
                </span>
              </div>
            </div>
            <a className="links my-1 text-decoration-none">
              Add component(s)
            </a>
          </div>
          <div className="my-3">
            <button type="button" className="bg-transparent border-0 plus">
              +
            </button>
          </div>
        </div>

        <div className="rooms">
          <label className="mb-2">Room 3</label>
          <div className="unit">
            <div className="input-group">
              <input
                type="text"
                className="form-control input "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="input-group-prepend ">
                <span
                  className="input-group-text icon-span  input"
                  id="basic-addon1"
                >
                  <small className="text-muted">Unit Name</small>
                  <i className="fas fa-trash icon"></i>
                </span>
              </div>
            </div>
            <a className="links my-1 text-decoration-none">
              Add component(s)
            </a>
          </div>
          <div className="my-3">
            <button type="button" className="bg-transparent border-0 plus">
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="form-group pt-5">
          <button type="button" className="btn btn-primary  form-control">
            Save
          </button>
        </div>
        <div className="form-group mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary text-primary form-control"
          >
            Start work
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUnit;
