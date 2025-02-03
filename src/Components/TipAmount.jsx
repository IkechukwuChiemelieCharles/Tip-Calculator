import React from "react";

const TipAmount = ({ tipAmnt, totalAmountPerPerson, bill, num, onReset }) => {
  return (
    <div className="tipAmtCont">
      <div className="writeCont">
        <Write tip="Tip Amount">{Math.round(tipAmnt)}</Write>
        <Write tip="Total">
          {bill === "" || bill === "0" || totalAmountPerPerson === Infinity
            ? 0
            : totalAmountPerPerson}
        </Write>
      </div>

      <button
        className={bill === "" ? "inactiveReset" : "reset"}
        onClick={onReset}
        // onClick={}
      >
        Reset
      </button>
    </div>
  );
};

function Write({ tip, amount, children }) {
  return (
    <>
      <div className="write">
        <div className="innerWrite">
          <p>{tip}</p>
          <span>/ Person</span>
        </div>
        <h1>$ {children}</h1>
      </div>
    </>
  );
}

export default TipAmount;
