// import "../assets/style.css";
import { useState } from "react";
import Board from "../components/Board";
import Timer from "../components/Timer";
let arr = [];
for (let i = 1; i < 26; i++) {
  arr.push(i);
}

export default function Start() {
  const [nums, setNums] = useState(arr);
  const [isPlay, setIsPlay] = useState(false);
  const [goal, setGoal] = useState(1);
  const [count, setCount] = useState(0);

  const onClick = (num) => {
    // 클릭 num과 목표 goal이 같을 경우
    if (num === goal) {
        // 클리어 하는 경우
      if (num === 50) {
        console.log("game finish!");
        setIsPlay(false);
      }
      // 클릭한 숫자의 인덱스 저장 함수
      const index = nums.indexOf(num);
      // modifier를 통해 nums 수정, 26 ~ 50 숫자 재생성 이벤트
      setNums((nums) => [
        //slice를 사용하여 인덱스까지의 값을 복사 및 반환, splice와 달리 원본 배열 건드리지 않음
        // ...를 사용하여 기존 객체 복사 및 새로운 값 할당
        ...nums.slice(0, index),
        // 26 이하일 경우, nmum에 25를 더하고, 26 이상일 경우 0으로 바꾸고 index만 1 추가
        num < 26 ? num + 25 : 0,
        ...nums.slice(index + 1),
      ]);
      // 다음 클릭 판정을 위해 1 증가 시킴
      setGoal((goal) => goal + 1);
    }
  };

  const gameStart = () => {
    setNums(shuffle(arr));
    setGoal(1);
    setIsPlay(true);
  };

  const gameFinish = () => {
    setIsPlay(false);
  };

  return (
    <div>
      <Board value={nums} onClick={onClick} />
      <button onClick={gameStart}>play</button>
      <Timer />
    </div>
  );
}
//Fisher-Yates Shuffle알고리즘 사용
const shuffle = (arr) => {
  for (let loop = arr.length - 1; loop > 0; loop--) {
    let randomNum = Math.floor(Math.random() * (loop + 1));
    [arr[loop], arr[randomNum]] = [arr[randomNum], arr[loop]];
  }
  return arr;
};
