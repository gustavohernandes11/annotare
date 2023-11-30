import { render } from "@testing-library/react";
import { Theme } from "../themes/ThemeProvider";

export const customRender = (ui, options) =>
    render(ui, { wrapper: Theme, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
