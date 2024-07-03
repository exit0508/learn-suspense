import { fetchData } from "./data";

export default function Biography({ artistId }: { artistId: string }) {
  const bio: string = use(fetchData(`/${artistId}/bio`));
  return (
    <section>
      <p className="bio">{bio}</p>
    </section>
  );
}

declare global {
  interface Promise<T> {
    status: "pending" | "fulfilled" | "rejected";
    value: T;
    reason: any;
  }
}

function use<T>(promise: Promise<T>) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
