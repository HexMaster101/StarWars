import Audio from "@/components/Audio";
import Homepage from "@/components/Homepage";
import DeathStar from "@/components/DeathStar";
import Particles from "@/components/Particles";
import Information from "@/components/Information";

export default function Home() {
	return (
		<>
			<Particles />
			<Homepage />
			<Information />
			<DeathStar />
			<Audio source="/audio/oz.mp3" />
		</>
	);
}
