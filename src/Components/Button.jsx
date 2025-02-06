export default function Button({
  onBtnClick,
  num,
  handleselectedbtn,
  selectedBtn,
  setSelectedBtn,
}) {
  function handleClickEvents(events) {
    onBtnClick(events);
    handleselectedbtn(num.id);
  }

  const setId2 = num.id === selectedBtn;
  // console.log(setId, setId1, setId2);

  return (
    <>
      <button
        onClick={handleClickEvents}
        className={`btn ${setId2 ? "active" : ""} `}
        
      >
        {num.num}%
      </button>
    </>
  );
}
