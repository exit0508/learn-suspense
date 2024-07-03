import { useState } from "react";
import ArtistPage from "./ArtistPage";
import "./App.css";

function App() {
  const [show, setShow] = useState<boolean>(false);

  if (show) {
    return (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    );
  }
}

export default App;
