import React from "react";
import { PropsWithChildren } from "react";

type Theme = {
	backgroundColor: string;
	color: string;
};

const ThemeContext = React.createContext<Theme | undefined>(undefined);

const theme = {
	backgroundColor: "#ef4444",
	color: "#fff",
};

type Props = PropsWithChildren<{}>;

const ThemeProvider = ({ children }: Props) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const theme = React.useContext(ThemeContext);

	if (theme === undefined) {
		throw new Error("useTheme must be called within a ThemeProvider");
	}

	return theme;
};

export default ThemeProvider;
