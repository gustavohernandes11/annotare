import * as Styled from "./styles.js";
import { ContentHeader } from "../../components/ContentHeader";
import { ContentBoard } from "../../components/ContentBoard/index.jsx";
import { Footer } from "../../components/Footer";

export const Content = () => {
    return (
        <Styled.Container id="content">
            <ContentHeader />
            <ContentBoard />
            <Footer />
        </Styled.Container>
    );
};
