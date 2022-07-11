import * as Styled from "./styles.js";
import { Github } from "@styled-icons/fa-brands";
import { IconButton } from "../IconButton";
import P from "prop-types";

export const Footer = () => {
  return (
    <Styled.Container>
      <p>Criado por Gustavo Hernandes.</p>
      <span>
        <p>Ver o código no Github</p>
        <IconButton
          target="_blank"
          as={"a"}
          href="https://github.com/gustavohernandes11/annotare"
        >
          <Github widht={30} height={30} />
        </IconButton>
      </span>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node,
};
