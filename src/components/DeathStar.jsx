function DeathStar() {
	return (
		<section
			className="h-screen flex flex-row justify-between items-center"
			style={{
				padding: "0 150px",
				marginTop: "240px",
			}}
		>
			<div className="w-[600px]">
				<h1 className="text-[#1f4863] text-5xl">THE DEATH STAR</h1>
				<p
					className="text-white  text-2xl"
					style={{
						marginTop: "30px",
					}}
				>
					The Death Star is a massive, moon-sized space station and superweapon
					created by the Galactic Empire. Armed with a planet-destroying laser,
					it symbolizes imperial dominance. Designed for fear and control, it
					houses vast military forces, TIE fighters, and personnel, making it
					one of the most iconic threats in the Star Wars universe.
				</p>
				<p></p>
			</div>
			<img src="/svgs/death_star.svg" className="aspect-square h-[400px]" />
		</section>
	);
}

export default DeathStar;
