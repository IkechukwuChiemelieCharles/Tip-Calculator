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

  console.log();
  const [custom, setCustom] = useState("");
  const [num, setNum] = useState(" ");
  const [tipPerc, setTipPerc] = useState(0);

  const [selectedBtn, setSelectedBtn] = useState(null);

  const [tip, setTip] = useState(0);

  function handleselectedbtn(id) {
    setSelectedBtn(id);

    console.log(`click2 ${id}`);
  }

  function handleTipBtnInput(e) {
    const value = e.target.innerText;

    // const amt = (bill * value) / 100;

    setTipPerc(parseInt(value.replace("%", "")));

    console.log(tipPerc);
  }

  //   function TotalAmntBtnCalc (){
  // //Calc the tip amount
  // let tipAmnt = (+tipPerc / 100) * +bill;

  // //calc the total bill with tip
  // let totalbillWithTip = Math.round(+bill + +tipAmnt);

  // // calc the amount  each person needs to pay
  // let totalAmountPerPerson = Math.round(+totalbillWithTip / +num);
  //   }

  // function TotalAmntInputCalc (){
  //   //Calc the tip amount
  //   let tipAmnt = (+tipPerc / 100) * +bill;

  //   //calc the total bill with tip
  //   let totalbillWithTip = Math.round(+bill + +tipAmnt);

  //   // calc the amount  each person needs to pay
  //   let totalAmountPerPerson = Math.round(+totalbillWithTip / +num);
  //     }

  //Calc the tip amount
  // let tipAmnt = (+tipPerc || +custom / 100) * +bill;

  let tipCalc = (+bill * +tipPerc || custom) / +num;
  let tipAmnt = tipCalc.toFixed(2);

  // let tipAmnt = (142.55 * 15) / 5;
  // console.log(tipAmnt);

  //calc the total bill with tip
  // let totalbillWithTip = Math.round(+bill + +tipAmnt);

  // calc the amount  each person needs to pay
  // let totalAmountPerPerson = +totalbillWithTip / +num;
  let amount = +bill / +num;
  let totalAmountPerPerson = amount.toFixed(2);
  function handleReset() {
    setBill("");
    setNum("");
    setCustom("");

    tipAmnt = 0;
    totalAmountPerPerson = 0;

    setSelectedBtn(null);
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
              handleselectedbtn={handleselectedbtn}
              numbers={numbers}
              selectedBtn={selectedBtn}
              setSelectedBtn={setSelectedBtn}
              // handleselectedbtn={handleselectedbtn}
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

        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/chiemelie-ikechukwu-297ab4262">
            Charlie X
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
