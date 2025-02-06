import React from "react";

const TipAmount = ({ tipAmnt, totalAmountPerPerson, bill, num, onReset }) => {
  console.log(typeof bill);
  console.log(typeof tipAmnt);

  const placeHolder = "0.00";

  return (
    <div className="tipAmtCont">
      <div className="writeCont">
        <Write tip="Tip Amount">{num > 0 ? tipAmnt : "0.00"}</Write>
        <Write tip="Total">{num > 0 ? totalAmountPerPerson : "0.00"}</Write>
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
