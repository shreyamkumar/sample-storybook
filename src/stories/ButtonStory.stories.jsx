import React from "react";
import ButtonStory from "./ButtonStory";

export default {
  title: "Example/Button Story",
  component: ButtonStory,
};

export const Danger = () => <ButtonStory color="danger">Danger!</ButtonStory>;

export const Success = () => (
  <ButtonStory color="success">Success!</ButtonStory>
);

export const Warning = () => (
  <ButtonStory color="warning">Warning!</ButtonStory>
);
export const WarningOutline = () => (
  <ButtonStory color="warning" outline={true}>
    Warning!
  </ButtonStory>
);

export const SuccessLarge = () => (
  <ButtonStory color="success" size="lg">
    Success!
  </ButtonStory>
);

export const SuccessDisabled = () => (
  <ButtonStory color="success" size="lg" disabled={true}>
    Success!
  </ButtonStory>
);
