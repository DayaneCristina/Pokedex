import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", Disabled = false }) => {
  return (
    <C.Button type={Type} onClick={onClick} disabled={Disabled}>
      {Text}
    </C.Button>
  );
};

export default Button;