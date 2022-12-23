import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>1 to 50</h1>
      <button>
        <Link to="/start">Start</Link>
      </button>
      <br />
      <button>
        <Link to="/score">Score</Link>
      </button>
      <br />
      <button>
        <Link to="/community">Community</Link>
      </button>
    </div>
  );
}
