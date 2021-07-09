import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from "@reach/accordion";

import SpotifyLogo from "../assets/icons/spotify.svg";
import AppleMusicLogo from "../assets/icons/apple-music.svg";
import SoundcloudLogo from "../assets/icons/soundcloud.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import PlayIcon from "../assets/icons/play.svg";

import ThemeBox from "../lib/ThemeBox";
import { Dialog, DialogButton, DialogContent } from "../lib/Modal";

const platformIcons = {
	spotify: SpotifyLogo,
	appleMusic: AppleMusicLogo,
	soundcloud: SoundcloudLogo,
} as Record<string, string>;

const link = {
	id: 1,
	type: "music",
	label: "Summer Song",
	links: [
		{
			id: 1,
			name: "Spotify",
			icon: "spotify",
			link: "https://www.spotify.com/",
		},
		{
			id: 2,
			name: "Apple Music",
			icon: "appleMusic",
			link: "https://music.apple.com/",
		},
		{
			id: 3,
			name: "Soundcloud",
			icon: "soundcloud",
			link: "https://soundcloud.com/",
		},
	],
};

const links = [
	link,
	{ ...link, id: 2, label: "Happy Song" },
	{ ...link, id: 3, label: "Metal Song" },
];

const Music = () => {
	return (
		<Accordion collapsible>
			{links.map((link) => {
				return (
					<AccordionItem key={link.id} className="mb-8">
						<AccordionButton className="w-full">
							<ThemeBox>{link.label}</ThemeBox>
						</AccordionButton>
						<AccordionPanel>
							<div className="bg-gray-100 px-4 rounded-b-lg max-h-96 overflow-y-scroll">
								<div className="flex items-center py-4">
									<div className="w-16 h-16 bg-gray-500 mr-2"></div>
									<Dialog>
										<DialogButton>
											<button className="w-8 h-8 flex justify-center items-center bg-green-400 rounded-full">
												<img
													src={PlayIcon}
													alt="play icon"
												/>
											</button>
										</DialogButton>
										<DialogContent aria-label="music player">
											<div>Music Player</div>
										</DialogContent>
									</Dialog>
								</div>
								{link.links.map((platform) => {
									return (
										<a
											key={`${link.id}-${platform.id}`}
											href={platform.link}
											target="_blank"
											rel="noreferrer"
											className="py-4 flex items-center border-b-2"
										>
											<img
												src={
													platformIcons[platform.icon]
												}
												alt={`${platform.name} logo`}
												className="mr-4"
											/>
											<div className="py-4 flex-grow">
												{platform.name}
											</div>
											<img
												src={ArrowIcon}
												alt="right facing arrow"
												className="w-4 h-4 transform -rotate-90 ml-auto"
											/>
										</a>
									);
								})}
							</div>
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default Music;
