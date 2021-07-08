import React from "react";
import profilePicture from "./assets/profile-picture.png";
import linktreeLogo from "./assets/logo.svg";

function App() {
	return (
		<>
			<header className="flex flex-col items-center max-w-sm mx-auto py-16">
				<img src={profilePicture} alt="yourname headshot" />
				<h1 className="mt-2">@yourname</h1>
			</header>
			<footer className="flex justify-center max-w-sm mx-auto py-16">
				<img src={linktreeLogo} alt="linktree logo" />
			</footer>
		</>
	);
}

export default App;
