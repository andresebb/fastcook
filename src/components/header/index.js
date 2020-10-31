import React from "react";
import { Link } from "react-router-dom";
import { Titleh2, P, Top } from "./styles";

export const Header = () => {
  return (
    <Top>
      <Link to="/">
        <Titleh2>Fast Cook</Titleh2>
      </Link>
      <P>Discover and get great food recipes</P>
    </Top>
  );
};
