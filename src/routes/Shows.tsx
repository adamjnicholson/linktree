import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import ThemeBox from "../lib/ThemeBox";
import ArrowIcon from "../assets/icons/arrow.svg";
import SongkickWordmark from "../assets/icons/by-songkick-wordmark.svg";

const show = {
	id: 1,
	type: "show",
	label: "First Tour",
	links: [
		{
			id: 1,
			date: "Apr 01 2019",
			location: "The Forum, Melbourne",
			link: "https://linktr.ee/",
			status: "available",
		},
		{
			id: 2,
			date: "Apr 02 2019",
			location: "Venue Name, Canberra",
			link: "https://linktr.ee/",
			status: "sold out",
		},
		{
			id: 3,
			date: "Apr 04 2019",
			location: "Venue Name, Sydney",
			link: "https://linktr.ee/",
			status: "sold out",
		},
		{
			id: 4,
			date: "Apr 05 2019",
			location: "The Forum, Brisbane",
			link: "https://linktr.ee/",
			status: "available",
		},
		{
			id: 5,
			date: "Apr 06 2019",
			location: "Venue Name, Darwin",
			link: "https://linktr.ee/",
			status: "sold out",
		},
	],
} as const;

const links = [
	show,
	{ ...show, id: 2, label: "Super Tour" },
	{ ...show, id: 3, label: "Regional Tour" },
];

type ShowDetailsProps = {
	show: {
		id: number;
		date: string;
		location: string;
		link: string;
		status: "sold out" | "available";
	};
};

const ShowDetails = ({ show }: ShowDetailsProps) => {
	return (
		<div className="py-4 flex items-center border-b-2">
			<div className=" py-4 flex-grow">
				<h3>{show.date}</h3>
				<small className="text-sm">{show.location}</small>
			</div>
			<div>
				{show.status === "sold out" ? (
					"Sold Out"
				) : (
					<img
						src={ArrowIcon}
						alt="right facing arrow"
						className="w-4 h-4 transform -rotate-90"
					/>
				)}
			</div>
		</div>
	);
};

const Shows = () => {
	// @todo add accordion animation
	return (
		<>
			<Accordion collapsible>
				{links.map((link) => {
					return (
						<AccordionItem key={link.id} className="mb-8">
							<AccordionButton className="w-full">
								<ThemeBox>{link.label}</ThemeBox>
							</AccordionButton>
							<AccordionPanel>
								<div className="bg-gray-100 px-4 rounded-b-lg max-h-96 overflow-y-scroll">
									{link.links.map((show) => {
										return show.status === "sold out" ? (
											<ShowDetails
												key={`${link.id}-${show.id}`}
												show={show}
											/>
										) : (
											<a
												key={`${link.id}-${show.id}`}
												href={show.link}
												target="_blank"
												rel="noreferrer"
												className="block"
											>
												<ShowDetails
													key={`${link.id}-${show.id}`}
													show={show}
												/>
											</a>
										);
									})}
									<div className="py-4 flex justify-center">
										<img
											src={SongkickWordmark}
											alt="songkick logo"
										/>
									</div>
								</div>
							</AccordionPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default Shows;
