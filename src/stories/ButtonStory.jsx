import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function ButtonStory(props) {
  const { color, children, ...rest } = props;
  return (
    <Button color={color} {...rest}>
      {children}
    </Button>
  );
}

export default ButtonStory;
