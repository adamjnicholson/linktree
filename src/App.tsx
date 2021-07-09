import React, { PropsWithChildren } from "react";
import profilePicture from "./assets/profile-picture.png";
import linktreeLogo from "./assets/logo.svg";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Classic from "./routes/Classic";
import ThemeProvider, { useTheme } from "./hooks/useTheme";
import Shows from "./routes/Shows";
import Music from "./routes/Music";

const MenuItem = ({ children }: PropsWithChildren<{}>) => {
	return <li className="px-2">{children}</li>;
};

const MenuLink = (props: Parameters<typeof NavLink>[0]) => {
	const theme = useTheme();

	return (
		<NavLink
			style={{
				color: theme.backgroundColor,
			}}
			className="filter hover:invert"
			activeStyle={{
				borderColor: theme.backgroundColor,
			}}
			activeClassName="invert border-b-2"
			{...props}
		/>
	);
};

export const AppProviders = ({ children }: PropsWithChildren<{}>) => {
	return (
		<ThemeProvider>
			<Router>{children}</Router>
		</ThemeProvider>
	);
};

const App = () => {
	return (
		<>
			<header className="flex flex-col items-center max-w-sm mx-auto pt-16 pb-8">
				<img src={profilePicture} alt="yourname headshot" />
				<h1 className="mt-2 leading-relaxed">@yourname</h1>
			</header>
			<main className="flex flex-col max-w-sm mx-auto">
				<nav className="mb-8">
					<ul className="flex justify-center">
						<MenuItem>
							<MenuLink to="/" exact>
								Home
							</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to="/shows" exact>
								Shows
							</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to="/music" exact>
								Music
							</MenuLink>
						</MenuItem>
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact>
						<Classic />
					</Route>
					<Route path="/shows" exact>
						<Shows />
					</Route>
					<Route path="/music" exact>
						<Music />
					</Route>
				</Switch>
			</main>
			<footer className="flex justify-center max-w-sm mx-auto pt-32 pb-16">
				<img src={linktreeLogo} alt="linktree logo" />
			</footer>
		</>
	);
};

export default App;
