import React from "react";
import ThemeBox from "../lib/ThemeBox";

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

const Classic = () => {
	return (
		<>
			{links.map((link) => (
				<a
					key={link.id}
					href={`${link.link}#${link.id}`}
					target="_blank"
					rel="noreferrer"
				>
					<ThemeBox>{link.label}</ThemeBox>
				</a>
			))}
		</>
	);
};

export default Classic;
