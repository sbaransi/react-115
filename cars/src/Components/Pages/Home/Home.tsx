import "./Home.css";

export function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1> Home</h1>
      <button
        onClick={() => {
          // Call The new API, in the best way you think of!
        }}
      >
        {" "}
        Get data?{" "}
      </button>
      <div>{/* print it to console.log or here */}</div>
    </div>
  );
}
