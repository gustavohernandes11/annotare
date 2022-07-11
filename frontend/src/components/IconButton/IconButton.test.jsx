import { screen, render } from "@testing-library/react";
import "jest-styled-components";
import { Theme } from "../../themes/ThemeProvider";
import { IconButton } from "./index";
import { CalendarTimes } from "@styled-icons/fa-regular";

describe("<IconButton />", () => {
  it("should render the children icon", () => {
    render(
      <Theme>
        <IconButton>
          <CalendarTimes
            aria-label="calender-times-icon"
            width={30}
            height={30}
          />
        </IconButton>
        )
      </Theme>
    );
    expect(screen.getByLabelText("calender-times-icon")).toBeInTheDocument();
  });
});
