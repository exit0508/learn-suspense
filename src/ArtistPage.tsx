import { ReactNode, Suspense } from "react";
import Albums from "./Albums";
import Biography from "./Biography";
import Panel from "./Panel";

type Artist = {
  id: string;
  name: string;
};

export default function ArtistPage({ artist }: { artist: Artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<BigSpinner />}>
        <Biography artistId={artist.id} />
        <Suspense fallback={<AlbumsGlimmer />}>
          <Panel>
            <Albums artistId={artist.id} />
          </Panel>
        </Suspense>
      </Suspense>
    </>
  );
}

function BigSpinner(): ReactNode {
  return <h2>🌀 Loading...</h2>;
}

function AlbumsGlimmer(): ReactNode {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line" />
      <div className="glimmer-line" />
      <div className="glimmer-line" />
    </div>
  );
}
