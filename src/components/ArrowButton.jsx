import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

const ArrowButton = ({ direction, onClick, clickable }) => (
  <div className={direction} onClick={clickable ? onClick : undefined}>
    <img src={direction === "left" ? leftArrow : rightArrow} height={32} width={32} />
  </div>
);

export default ArrowButton;
