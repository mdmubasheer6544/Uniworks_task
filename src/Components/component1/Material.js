import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compActions } from "../Redux/store/Compenent-slice";

const Material = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [materialRate, setMaterialRate] = useState('');
  const [materialQty, setMaterialQty] = useState();
  const dispatch = useDispatch();
  const Material_total = useSelector((state) => state.comp.Material_total);

  const calculateMaterial = (e) => {
    setMaterialRate(e.target.value);

    dispatch(
      compActions.calculateMaterialTotal({
        qty: parseInt(materialQty),
        rate: e.target.value === "" ? 0 : parseInt(e.target.value),
      })
    );
    dispatch(compActions.calculateProjectTotal());
  };
  return (
    <>
      {showContent && (
        <div>
          <div className="bordersComponent">
            <p>Material 1</p><span>x</span>
          </div>
          <div className="form-group mt-3 d-flex justify-content-between">
            <select
              className="form-select input addinput"
              aria-label="Carpenter"
            >
              <option selected>Carpenter</option>
            </select>
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
                  Item
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
                  Specification
                </span>
              </div>
            </div>
          </div>

          <div className="form-group mt-3 d-flex justify-content-between">
            <select className="form-select input addinput" aria-label="Plywood">
              <option selected>Plywood</option>
            </select>
            <div className="input-group  mx-1">
              <input
                type="text"
                className="form-control input "
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={materialQty}
                onChange={(e) => setMaterialQty(e.target.value)}
              />
              <div className="input-group-prepend ">
                <span
                  className="input-group-text icon-span input text-muted pr-2"
                  id="basic-addon1"
                >
                  Quantity
                </span>
              </div>
            </div>

            <div className="input-group  mx-1">
              <input
                type="text"
                className="form-control input "
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={materialRate}
                onChange={calculateMaterial}
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
          </div>

          <div className="form-group mt-3">
            <span>&#8377;{Material_total} </span>
          </div>
        </div>
      )}
      <div className="my-3">
        <button
          type="button"
          onClick={() => setShowContent(true)}
          className="bg-transparent border-0 plus"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Material;
