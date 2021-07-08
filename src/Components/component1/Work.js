import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compActions } from "../Redux/store/Compenent-slice";

const Work = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [workRate, setWorkRate] = useState('');
  const [workQty, setWorkQty] = useState();
  const dispatch = useDispatch();
  const Work_total = useSelector((state) => state.comp.Work_total);

  const calculateWork = (e) => {
    setWorkRate(e.target.value);
    dispatch(compActions.calculateWorkTotal({ qty:parseInt(workQty), rate: e.target.value === "" ? 0 :parseInt(e.target.value) }));
    dispatch(compActions.calculateProjectTotal());
  };
  return (
    <>
      {showContent && (
        <div>
          <div className="bordersComponent">
            <p>Vendor 1</p><span>x</span>
          </div>
          <div className="work-container mt-4 d-flex justify-content-between">
            <b>Work Type</b>
            <select className="workList" >
              <option value="only-work">Only Work</option>
            </select>
          </div>

          <div className="work-container mt-3 d-flex justify-content-between">
            <b>Vendor Category</b>
            <select className="workList">
              <option value="carpenter">Carpenter</option>
            </select>
          </div>

          <div className="form-group ">
            <div className="input-group mt-3 mb-3 mx-1">
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
                  Heading
                </span>
              </div>
            </div>
            <div className="input-group mb-3 mx-1">
              <textarea className="form-control input" placeholder="Add Description..." rows="3"></textarea>
            </div>

            <div className="form-group mt-3 d-flex justify-content-between">
              <div className="input-group mb-3 mx-1">
                <input
                  type="text"
                  className="form-control input "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={workQty}
                  onChange={(e) => setWorkQty(e.target.value)}
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
                  value={workRate}
                  onChange={calculateWork}
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
            <div className="form-group  d-flex justify-content-between">
              <span>&#8377; {Work_total} </span>
              <a
                onClick={props.onMilestoneIsVisible}
                className="links text-decoration-none"
              >
                Add Milestones
              </a>
            </div>
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
    </>
  );
};

export default Work;
