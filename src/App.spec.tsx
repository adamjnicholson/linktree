import React from "react";

import { screen, render } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should navigate to different pages", async () => {
	render(<App />);

	expect(
		screen.getAllByRole("link", { name: /48H/i })[0]
	).toBeInTheDocument();

	userEvent.click(screen.getByRole("link", { name: /show/i }));

	expect(await screen.findByText(/first tour/i)).toBeInTheDocument();
});
