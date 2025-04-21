import React from "react";
import Card from "@/utils/Cards";

function Information() {
	return (
		<section
			className="flex flex-row justify-center items-center min-h-screen gap-15 relative"
			style={{
				padding: "30px 150px 540px",
				marginTop: "240px",
			}}
		>
			<Card
				image="/images/poster_1.jpeg"
				title="Star Wars: The Last Jedi"
				description="Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past"
				buttonText="Watch Now"
			/>

			<Card
				image="/images/poster_2.jpeg"
				title="Star Wars: The Last Jedi"
				description="Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past"
				buttonText="Watch Now"
			/>

			<Card
				image="/images/poster_3.jpeg"
				title="Star Wars: The Last Jedi"
				description="Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past"
				buttonText="Watch Now"
			/>

			<svg
				className="absolute bottom-0 w-screen"
				viewBox="0 0 1440 120"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 C100,90 200,10 300,40 C400,70 500,30 600,50 C700,70 800,10 900,40 C1000,70 1100,20 1200,50 C1300,80 1400,40 1440,60 L1440,150 L0,150 Z"
					fill="#ebbe7e"
				/>

				<circle cx="100" cy="65" r="6" fill="#A65F2F" />
				<circle cx="250" cy="35" r="5" fill="#A65F2F" />
				<circle cx="390" cy="55" r="4" fill="#A65F2F" />
				<circle cx="520" cy="40" r="6" fill="#A65F2F" />
				<circle cx="660" cy="60" r="5" fill="#A65F2F" />
				<circle cx="790" cy="25" r="7" fill="#A65F2F" />
				<circle cx="910" cy="45" r="4" fill="#A65F2F" />
				<circle cx="1040" cy="35" r="6" fill="#A65F2F" />
				<circle cx="1180" cy="58" r="5" fill="#A65F2F" />
				<circle cx="1310" cy="45" r="4" fill="#A65F2F" />
			</svg>
		</section>
	);
}

export default Information;
