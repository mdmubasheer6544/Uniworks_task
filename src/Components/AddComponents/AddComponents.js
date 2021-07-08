import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { compActions } from "../Redux/store/Compenent-slice";
import "./AddComponents.css";

const AddComponents = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [componentQty, setComponentQty] = useState();
  const [componentRate, setComponentRate] = useState();
  const [total, setTotal] = useState(0);

  const unit_title=useSelector(state=>state.comp.unit_title)

  const dispatch =useDispatch();

  const totalCalculate = (e) => {
    setComponentRate(e.target.value);
    let totalTemp = parseInt(componentQty) * parseInt(e.target.value);
    setTotal(totalTemp);
    dispatch(compActions.calculateBOQ(totalTemp));
  };

  return (
    <>
      <h5 className="text-center my-2">{unit_title+ "-"} Add Components </h5>
      <div className="form-group mt-4">
        <div className="d-flex justify-content-between">
          <label className="mb-2">Upload Drawings/3D</label>
          <i className="fas fa-upload"></i>
        </div>
        {showContent && (
          <div className="singleComponent mt-3">
            <div className="borders">
              <p>Component 1</p><span>x</span>
            </div>
            <div className="input-group mb-3 mx-1">
              <textarea className="form-control input" placeholder="Add Description" rows="3"></textarea>
            </div>

            <div className="form-group mt-3 d-flex justify-content-between">
              <div className="input-group mb-3 mx-1">
                <input
                  type="text"
                  className="form-control input "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={componentQty}
                  onChange={(e) => {
                    setComponentQty(e.target.value);
                  }}
                />
                <div className="input-group-prepend ">
                  <span
                    className="input-group-text icon-span input text-muted pr-2"
                    id="basic-addon1"
                  >
                    Qty
                  </span>
                </div>
              </div>

              <div className="input-group mb-3 mx-1">
                <input
                  type="text"
                  className="form-control input "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={componentRate}
                  onChange={totalCalculate}
                />
                <div className="input-group-prepend ">
                  <span
                    className="input-group-text icon-span input text-muted"
                    id="basic-addon1"
                  >
                    Rate
                  </span>
                </div>
              </div>

              <div className="input-group mb-3 mx-1">
                <input
                  type="text"
                  className="form-control input "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-prepend ">
                  <span
                    className="input-group-text icon-span input text-muted"
                    id="basic-addon1"
                  >
                    Units
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <span>&#8377; {total} </span>
              <a
                onClick={props.onComponentIsVisible}
                className="links text-decoration-none"
              >
                Add Vendors/Material
              </a>
            </div>
          </div>
        )}
        <div className="my-3">
          <button
            type="button"
            onClick={() => {
              setShowContent(true);
            }}
            className="bg-transparent border-0 plus"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default AddComponents;
