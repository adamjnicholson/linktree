import React from "react";

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

type Props = {
	theme: {
		backgroundColor: string;
		color: string;
	};
};

const Classic = ({ theme }: Props) => {
	return (
		<>
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
		</>
	);
};

export default Classic;
