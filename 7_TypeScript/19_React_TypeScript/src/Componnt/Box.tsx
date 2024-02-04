import { ReactNode } from "react";

type PropTypes = {
  heading: string;
  count?: number;
  fun: (a: string) => void;
  children: ReactNode;
};

export default function Box({ heading, count, fun, children }: PropTypes) {
  // here heading recive as var1  => Box({ heading: var1 })

  //also Box({ heading }: { heading: string }) {

  fun("io");
  return (
    <div>
      <h1>Box {heading}</h1>
      {count ? <p>{count}</p> : ""}
      {children}
    </div>
  );
}
