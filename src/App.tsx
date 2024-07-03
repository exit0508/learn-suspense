import { useState, Suspense, startTransition } from "react";
import ArtistPage from "./ArtistPage";
import "./App.css";
import IndexPage from "./IndexPage";
import Layout from "./Layout";

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}
function Router() {
  const [page, setPage] = useState<string>("/");

  function navigate(url: string) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  }
  return <Layout>{content}</Layout>;
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
