import React, { PropsWithChildren } from "react";
import { useTheme } from "../hooks/useTheme";

type Props = PropsWithChildren<{
	className?: string;
}>;

const ThemeBox = ({ children, className = "" }: Props) => {
	const theme = useTheme();

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.color,
			}}
			className={`my-2 py-4 px-8 rounded-md leading-relaxed text-center filter hover:invert ${className}`}
		>
			{children}
		</div>
	);
};

export default ThemeBox;
