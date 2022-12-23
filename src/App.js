import { Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Start from "./routes/Start";
import Score from "./routes/Score";
import Community from "./routes/Commuinity"
function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/score" element={<Score />} />
        <Route path="/community" element={<Community />} />
    </Routes>
  );
}

export default App;