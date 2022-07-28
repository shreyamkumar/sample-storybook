import React from "react";
import ButtonStory from "./ButtonStory";

export default {
  title: "Example/Button Story",
  component: ButtonStory,
};

export const Danger = () => <ButtonStory color="danger">Danger!</ButtonStory>;
export const Success = () => <ButtonStory color="sucess">Success!</ButtonStory>;
export const Warning = () => (
  <ButtonStory color="warning">Warning!</ButtonStory>
);
