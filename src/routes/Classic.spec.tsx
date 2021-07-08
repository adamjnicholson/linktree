import React from "react";
import { render, screen } from "../test-utils";
import Classic from "./Classic";

it("should render all of the classic links and link to linktree", () => {
	render(<Classic />);

	const links = screen.getAllByRole("link", { name: /48H/i });
	expect(links).toHaveLength(4);

	expect(links[0]).toHaveAttribute("href", "https://linktr.ee/#1-1");
});
