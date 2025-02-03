export default function Button({ onBtnClick, btn, setBtn, num }) {
  return (
    <>
      <button
        onClick={onBtnClick}
        className={onBtnClick ? `active` : ``}
        style={btn}
      >
        {num.num}%
      </button>
    </>
  );
}
