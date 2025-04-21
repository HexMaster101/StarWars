function DeathStar() {
	return (
		<section
			className="bg-[#ebbe7e] relative"
			style={{
				padding: "30px 150px 60px",
			}}
		>
			<div className="h-[150px] flex justify-center items-center">
				<h1 className=" text-white text-[4.5rem] altFont font-thin text-center">
					T A T O O I N E
				</h1>
			</div>

			<div className="flex flex-row justify-between items-center h-[calc(100vh-150px)]">
				<div className="w-[600px]">
					<p className="text-black  text-[20px]">
						Tatooine is a desert planet in the Star Wars universe, known for its
						twin suns and harsh, arid climate. It is home to vast stretches of
						sand dunes, rocky canyons, and sparse settlements.
						<br />
						<br />
						The planet's surface is mostly barren, with little vegetation, and
						it is inhabited by various species, including the native Jawas and
						Tusken Raiders.
					</p>
					<p></p>
				</div>
				<img src="/svgs/death_star.svg" className="aspect-square h-[400px]" />
			</div>
		</section>
	);
}

export default DeathStar;
