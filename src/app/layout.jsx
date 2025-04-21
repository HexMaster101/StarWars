import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: "400",
});

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair",
});

export const metadata = {
	title: "Create Next App",
	description: "Particle JS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${playfairDisplay.variable} antialiased bg-black overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
