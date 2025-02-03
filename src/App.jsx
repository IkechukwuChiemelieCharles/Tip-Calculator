import { useState } from "react";
import { BillInput } from "./Components/BillInput";
import TipAmount from "./Components/TipAmount";

const numbers = [
  { id: 1, num: 5 },
  { id: 2, num: 10 },
  { id: 3, num: 15 },
  { id: 4, num: 25 },
  { id: 5, num: 50 },
];

function App() {
  const [bill, setBill] = useState("");
  const [custom, setCustom] = useState("");
  const [num, setNum] = useState("");
  const [tipPerc, setTipPerc] = useState(0);

  const [selectedBtn, setSelectedBtn] = useState(null);

  function handleTipBtnInput(e) {
    const value = e.target.innerText;

    setTipPerc(parseInt(value.replace("%", "")));

    setSelectedBtn(!selectedBtn);
  }

  //Calc the tip amount
  let tipAmnt = (+tipPerc / 100) * +bill;

  //calc the total bill with tip
  let totalbillWithTip = Math.round(+bill + +tipAmnt);

  // calc the amount  each person needs to pay
  let totalAmountPerPerson = Math.round(+totalbillWithTip / +num);

  let tipAmnt2 = (+tipPerc / 100) * +bill;

  //calc the total bill with tip
  let totalbillWithTip2 = Math.round(+bill + +tipAmnt2);

  // calc the amount  each person needs to pay
  let totalAmountPerPerson2 = Math.round(+totalbillWithTip2 / +num);

  function handleReset() {
    setBill("");
    setNum("");
    setCustom("");

    tipAmnt = 0;
    totalAmountPerPerson = 0;
  }
  return (
    <>
      <div className="container">
        <img src="./logo.svg" alt="" />
        <div className="bgCont">
          <div className="left">
            <BillInput
              bill={bill}
              setBill={setBill}
              custom={custom}
              setCustom={setCustom}
              num={num}
              setNum={setNum}
              onBtnClick={handleTipBtnInput}
              numbers={numbers}
              selectedBtn={selectedBtn}
            />
          </div>
          <div className="right">
            <TipAmount
              tipAmnt={tipAmnt}
              totalAmountPerPerson={totalAmountPerPerson}
              bill={bill}
              num={num}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
