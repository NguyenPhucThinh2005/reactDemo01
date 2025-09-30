import React from "react";
import { useNavigate, useParams } from "react-router";

export default function Welcome() {
  const { id } = useParams();
  const navigation = useNavigate();
  return (
    <div>
      <span onClick={() => navigation("/")}>Welcome to deltail of {id}</span>
    </div>
  );
}
