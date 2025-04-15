import React from "react";
import Card from "@/utils/Cards";

function Information() {
	return (
		<section
			className="flex flex-row justify-center items-center h-screen gap-15"
			style={{
				padding: "0 150px",
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
		</section>
	);
}

export default Information;
