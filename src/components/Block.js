import "../assets/style.css";
export default function Block({ num, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(num);
      }}
    >
        {/* 0이 아닐 경우 출력, 0일 경우 빈칸 출력 */}
      {num !== 0 ? num : null}
    </div>
  );
}
