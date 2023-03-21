import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Series of Dots </h1>
      <div className="dot"></div>
    </div>
  );
}
function isDivisibleByTwo(d) {
  if (typeof d !== "number") {
    return false;
  }

  return d % 2 === 0;
}
const today = Date.now();
const arr = new Array(101).fill(0);
const map1 = arr.map((item, index) => index).filter((item) => item % 2 === 0);
// .map((item, index) => index) NEED FIX
//.filter((element) => element % 2 === 0); NEED FIX

const result = map1
  .map((index) => today - index * 2 * 24 * 60 * 60 * 1000)
  .map((DOMHighResTimeStamp) => new Date(DOMHighResTimeStamp));

const randomValues = result.map((date) => ({
  date,
  val: Math.floor(Math.random() * 51)
}));

randomValues.forEach((item, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
});
