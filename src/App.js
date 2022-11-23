import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [output, setOutput] = useState();

  async function fetchReq() {
    try {
      const response = await fetch("http://localhost:5001/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Move data around my React app
      setOutput(data.msg);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Fetch in React</h1>
      </header>
      <main>
        <h2>This is where the output goes</h2>
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <p>{output}</p>
        <button onClick={fetchReq}>Make Request</button>
      </main>
      <footer>
        <p>Demonstrated by Andy B</p>
      </footer>
    </div>
  );
}

export default App;
