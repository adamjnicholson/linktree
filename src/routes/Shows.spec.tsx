import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../test-utils";
import Shows from "./Shows";

const FIRST_SHOW_NAME = /apr 01 2019 the forum, melbourne right facing arrow/i;

it("should display just tour names and not any specific show details", () => {
	render(<Shows />);

	expect(screen.getByText(/first tour/i)).toBeInTheDocument();
	expect(screen.getByText(/super tour/i)).toBeInTheDocument();
	expect(screen.getByText(/regional tour/i)).toBeInTheDocument();

	expect(
		screen.queryByRole("link", { name: FIRST_SHOW_NAME })
	).not.toBeInTheDocument();
});

it("should display the shows for the tour when the tour name is clicked", async () => {
	render(<Shows />);

	expect(
		screen.queryByRole("link", {
			name: FIRST_SHOW_NAME,
		})
	).not.toBeInTheDocument();

	userEvent.click(screen.getByText(/first tour/i));

	expect(
		await screen.findByRole("link", {
			name: FIRST_SHOW_NAME,
		})
	).toBeInTheDocument();
});
