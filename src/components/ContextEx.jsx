import React, { createContext, useContext, useState } from "react";
const NameContext = createContext();
export default function ContextEx() {
  const [name, setName] = useState("Tong tai");
  return (
    <NameContext value={name}>
      <ComC />
    </NameContext>
  );
}

const ComA = () => {
  <>
    <ComB />
  </>;
};

const ComB = () => {
  <>
    <ComC />
  </>;
};

const ComC = () => {
  const valueFromNameContext = useContext(NameContext);
  return (
    <>
      <h1>{valueFromNameContext}</h1>
    </>
  );
};
