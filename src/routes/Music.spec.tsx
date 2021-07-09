import React from "react";

import { screen, render, waitFor } from "../test-utils";
import userEvent from "@testing-library/user-event";

import Music from "./Music";

it("should render the platforms the music can be streamed on", async () => {
	render(<Music />);

	expect(
		screen.queryByRole("link", {
			name: /spotify logo spotify right facing arrow/i,
		})
	).not.toBeInTheDocument();

	userEvent.click(screen.getByText(/summer song/i));

	expect(
		await screen.findByRole("link", {
			name: /spotify logo spotify right facing arrow/i,
		})
	).toBeInTheDocument();

	expect(
		screen.getByRole("link", {
			name: /apple music logo apple music right facing arrow/i,
		})
	).toBeInTheDocument();

	expect(
		screen.getByRole("link", {
			name: /soundcloud logo soundcloud right facing arrow/i,
		})
	).toBeInTheDocument();
});

it("should open the music player modal when the play button is clicked and then close the modal when anywhere outside of the modal is clicked", async () => {
	const { baseElement } = render(<Music />);

	userEvent.click(screen.getByText(/summer song/i));

	expect(screen.queryByText(/music player/i)).not.toBeInTheDocument();

	userEvent.click(screen.getByRole("button", { name: /play icon/i }));

	expect(await screen.findByText(/music player/i)).toBeInTheDocument();

	userEvent.click(baseElement.querySelector("[data-reach-dialog-overlay]")!);
	expect(screen.queryByText(/music player/i)).not.toBeInTheDocument();
});
