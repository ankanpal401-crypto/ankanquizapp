function Timer({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="timer">
      ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;