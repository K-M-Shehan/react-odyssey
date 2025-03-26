import { useState } from "react";
import Challenge1 from "./challenges/challenge-1/Challenge1";
import Challenge2 from "./challenges/challenge-2/Challenge2"; // Add more as needed
import Challenge3 from "./challenges/challenge-3/Challenge3";
import Challenge4 from "./challenges/challenge-4/Challenge4";
import Challenge5 from "./challenges/challenge-5/Challenge5";
import Challenge6 from "./challenges/challenge-6/Challenge6";
import Challenge7 from "./challenges/challenge-7/Challenge7";
import Challenge8 from "./challenges/challenge-8/Challenge8";
import Challenge9 from "./challenges/challenge-9/Challenge9";
import Challenge10 from "./challenges/challenge-10/Challenge10";
import Challenge11 from "./challenges/challenge-11/Challenge11";
import Challenge12 from "./challenges/challenge-12/Challenge12";
import Challenge13 from "./challenges/challenge-13/Challenge13";
import Challenge14 from "./challenges/challenge-14/Challenge14";

const challenges = [
  { id: 1, name: "Challenge 1", component: <Challenge1 /> },
  { id: 2, name: "Challenge 2", component: <Challenge2 /> },
  { id: 3, name: "Challenge 3", component: <Challenge3 /> },
  { id: 4, name: "Challenge 4", component: <Challenge4 /> },
  { id: 5, name: "Challenge 5", component: <Challenge5 /> },
  { id: 6, name: "Challenge 6", component: <Challenge6 /> },
  { id: 7, name: "Challenge 7", component: <Challenge7 /> },
  { id: 8, name: "Challenge 8", component: <Challenge8 /> },
  { id: 9, name: "Challenge 9", component: <Challenge9 /> },
  { id: 10, name: "Challenge 10", component: <Challenge10 /> },
  { id: 11, name: "Challenge 11", component: <Challenge11 /> },
  { id: 12, name: "Challenge 12", component: <Challenge12 /> },
  { id: 13, name: "Challenge 13", component: <Challenge13 /> },
  { id: 14, name: "Challenge 14", component: <Challenge14 /> },
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
