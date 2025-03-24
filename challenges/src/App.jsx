import { useState } from "react";
import Challenge1 from "./challenges/challenge-1/Challenge1";
import Challenge2 from "./challenges/challenge-2/Challenge2"; // Add more as needed
import Challenge3 from "./challenges/challenge-3/Challenge3";
import Challenge4 from "./challenges/challenge-4/Challenge4";
import Challenge5 from "./challenges/challenge-5/Challenge5";
import Challenge6 from "./challenges/challenge-6/Challenge6";

const challenges = [
  { id: 1, name: "Challenge 1", component: <Challenge1 /> },
  { id: 2, name: "Challenge 2", component: <Challenge2 /> },
  { id: 3, name: "Challenge 3", component: <Challenge3 /> },
  { id: 4, name: "Challenge 4", component: <Challenge4 /> },
  { id: 5, name: "Challenge 5", component: <Challenge5 /> },
  { id: 6, name: "Challenge 6", component: <Challenge6 /> },
];

function App() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div>
      <h1>React Challenges</h1>
      <ul>
        {challenges.map((ch) => (
          <li key={ch.id}>
            <button onClick={() => setSelectedChallenge(ch.component)}>
              {ch.name}
            </button>
          </li>
        ))}
      </ul>
      <div>{selectedChallenge}</div>
    </div>
  );
}

export default App;
