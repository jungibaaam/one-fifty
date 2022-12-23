import "../assets/style.css";
import Block from "./Block";

export default function Board({ value, onClick }) {
  return (
    <div className="container">
      {value.map((num, index) => (
        <Block num={num} key={index} onClick={onClick} />
      ))}
    </div>
  );
}
