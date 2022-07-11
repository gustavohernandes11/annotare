import * as Styled from "./styles.js";
import { EditorHeader } from "../EditorHeader";
import { AnnotationForm } from "../AnnotationForm";

export const Editor = () => {
  return (
    <Styled.Container>
      <EditorHeader />
      <AnnotationForm />
    </Styled.Container>
  );
};
