import React from "react";
import ThemeBox from "../lib/ThemeBox";

const links = [
	{
		id: 1,
		type: "classic",
		// @todo better key name than links
		links: [{ id: 1, link: "https://linktr.ee/" }],
		label: "48H",
	},
	{
		id: 2,
		type: "classic",
		links: [{ id: 1, link: "https://linktr.ee/" }],
		label: "48H",
	},
	{
		id: 3,
		type: "classic",
		links: [{ id: 1, link: "https://linktr.ee/" }],
		label: "48H",
	},
	{
		id: 4,
		type: "classic",
		links: [{ id: 1, link: "https://linktr.ee/" }],
		label: "48H",
	},
];

const Classic = () => {
	return (
		<>
			{links.map((link) => (
				<a
					key={link.id}
					href={`${link.links[0].link}#${link.id}-${link.links[0].id}`}
					target="_blank"
					rel="noreferrer"
					className="my-2"
				>
					<ThemeBox>{link.label}</ThemeBox>
				</a>
			))}
		</>
	);
};

export default Classic;
