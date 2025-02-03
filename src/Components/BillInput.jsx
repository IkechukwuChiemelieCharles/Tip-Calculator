import Button from "./Button";
import NumOfPeople from "./NumOfPeople";

// const icon = ["icon-dollar.svg"];

export function BillInput({
  bill,
  setBill,
  onBtnClick,
  custom,
  setCustom,
  num,
  setNum,
  numbers,
}) {
  return (
    <>
      <div className="bill">
        <label htmlFor="">Bill</label>
        <input
          type="text"
          className="billInp"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="buttons">
        <label>Select Tip %</label>
        <div className="btns">
          {numbers.map(function (num) {
            return <Button num={num}  onBtnClick={onBtnClick} />;
          })}
          
          <input
            type="text"
            placeholder="Custom"
            className="custom"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
          />
        </div>
      </div>

      <NumOfPeople num={num} setNum={setNum} />
    </>
  );
}
