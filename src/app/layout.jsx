import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: "400",
});

export const metadata = {
	title: "Create Next App",
	description: "Particle JS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased bg-black`}>
				{children}
			</body>
		</html>
	);
}
