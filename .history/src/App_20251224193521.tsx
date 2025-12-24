import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래프 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg">text-lg</div>
      <div className="text-xl">text-xl</div>
      <div className="text-[13px]">text-13px</div>
    </div>
  );
}

export default App;
