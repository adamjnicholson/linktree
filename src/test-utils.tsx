import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "./hooks/useTheme";

type Props = PropsWithChildren<{}>;

const AllProviders = ({ children }: Props) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "queries" | "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
