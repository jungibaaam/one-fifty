import "../assets/style.css";
export default function Score() {
    const data = localStorage.getItem('key');
  return (
    <div>
      <h1>This is Score</h1>
      {data}
    </div>
  );
}
