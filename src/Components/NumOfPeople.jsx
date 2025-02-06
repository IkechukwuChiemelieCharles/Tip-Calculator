import React, { useState } from "react";

const NumOfPeople = ({ num, setNum }) => {
  const [err, setErr] = useState("");

  console.log(typeof num);
  return (
    <div className="num">
      <div className="label">
        <label htmlFor="">Number of People</label>
        <label className="error">
          {parseFloat(num) == 0 ? "Can't be zero" : ""}
        </label>
      </div>

      <input
        type="text"
        className="numInput"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
    </div>
  );
};

export default NumOfPeople;
