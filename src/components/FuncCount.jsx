import React, { useState } from "react";

export default function FuncCount() {
  const [tongtai, setTongTai] = useState({
    name: "Tong tai fake",
    slogan: "Thoi",
    action: "hand",
  });
  return (
    <div>
      FuncCount
      <p>Count: {tongtai}</p>
      <button
        onClick={() => setTongTai(...tongtai, { name: "Tong tai 3 toi" })}
      ></button>
    </div>
  );
}
