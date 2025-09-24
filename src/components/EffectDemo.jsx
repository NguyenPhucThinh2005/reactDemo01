import React, { useEffect, useState } from "react";

export default function EffectDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name, email]);
  return (
    <div className="container">
      <div className="row">
        <input
          className=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </div>
    </div>
  );
}
