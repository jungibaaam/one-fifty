import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>1 to 50</h1>
      <button>
        <Link to="/about">1 to 50?</Link>
      </button>
      <br />
      <button>시작</button>
      <br />
      <button>점수</button>
      <br />
      <button>게시판</button>
    </div>
  );
}
