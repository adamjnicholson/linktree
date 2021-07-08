import React from "react";
import profilePicture from "./assets/profile-picture.png";
import linktreeLogo from "./assets/logo.svg";

const links = [
	{
		id: 1,
		type: "classic",
		link: "https://linktr.ee/",
		label: "48H",
	},
	{
		id: 2,
		type: "classic",
		link: "https://linktr.ee/",
		label: "48H",
	},
	{
		id: 3,
		type: "classic",
		link: "https://linktr.ee/",
		label: "48H",
	},
	{
		id: 4,
		type: "classic",
		link: "https://linktr.ee/",
		label: "48H",
	},
];

const theme = {
	backgroundColor: "#ef4444",
	color: "#fff",
};

function App() {
	return (
		<>
			<header className="flex flex-col items-center max-w-sm mx-auto pt-16 pb-8">
				<img src={profilePicture} alt="yourname headshot" />
				<h1 className="mt-2 leading-relaxed">@yourname</h1>
			</header>
			<main className="flex flex-col max-w-sm mx-auto">
				{links.map((link) => (
					<a
						style={{
							backgroundColor: theme.backgroundColor,
							color: theme.color,
						}}
						key={link.id}
						href={`${link.link}#${link.id}`}
						target="_blank"
						rel="noreferrer"
						className="my-2 py-4 px-8 rounded-md leading-relaxed text-center filter hover:invert"
					>
						{link.label}
					</a>
				))}
			</main>
			<footer className="flex justify-center max-w-sm mx-auto pt-32 pb-16">
				<img src={linktreeLogo} alt="linktree logo" />
			</footer>
		</>
	);
}

export default App;
