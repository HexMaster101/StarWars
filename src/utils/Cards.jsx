const Card = ({ image, title, description, buttonText }) => {
	return (
		<div className="rounded-2xl bg-white">
			<img
				className="h-[500px] object-cover w-[100%]"
				src={image}
				alt={title}
			/>
			<div
				style={{
					padding: "16px",
				}}
			>
				<h2
					className="text-xl font-semibold"
					style={{
						marginBottom: "8px",
					}}
				>
					{title}
				</h2>
				<p
					className="text-gray-600 text-sm"
					style={{
						marginBottom: "8px",
					}}
				>
					{description}
				</p>
				<button
					className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					style={{
						paddingInline: "8px",
						paddingBlock: "8px",
					}}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default Card;
