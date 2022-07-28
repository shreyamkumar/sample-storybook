import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function ButtonStory(props) {
  const { color, children } = props;
  return <Button color={color}>{children}</Button>;
}

export default ButtonStory;
