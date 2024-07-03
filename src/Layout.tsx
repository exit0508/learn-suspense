import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <section className="header">Music Browser</section>
      <main>{children}</main>
    </div>
  );
}
