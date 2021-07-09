import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "./hooks/useTheme";
import { MemoryRouter } from "react-router-dom";

type Options = {
	route: string;
} & RenderOptions;

const customRender = (
	ui: React.ReactElement,
	{ route, ...options }: Options = { route: "" }
) => {
	const uiWithProviders = (
		<MemoryRouter initialEntries={[route]}>
			<ThemeProvider>{ui}</ThemeProvider>
		</MemoryRouter>
	);

	return render(uiWithProviders, options);
};

export * from "@testing-library/react";

export { customRender as render };
