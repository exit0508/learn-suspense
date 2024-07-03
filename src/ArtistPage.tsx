import { Suspense } from "react";
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
      <Suspense fallback={<Loading />}>
        <Biography artistId={artist.id} />
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
