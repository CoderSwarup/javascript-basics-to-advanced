import React from "react";

type InputValue = string | number;

export default function Generics<T extends InputValue>({
  head,
  value,
  setter,
}: {
  head: string;
  value: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}) {
  return (
    <div>
      <form action="">
        <label htmlFor="">{head}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value as T)}
        />
      </form>
    </div>
  );
}
