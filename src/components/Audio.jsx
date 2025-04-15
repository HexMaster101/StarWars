"use client";
import React, { useRef, useState } from "react";

function Audio({ source }) {
	const audioRef = useRef(null);
	const [soundStatus, setSoundStatus] = useState("Off");

	const togglePlay = () => {
		if (!audioRef.current) {
			return;
		}
		if (audioRef.current.paused) {
			audioRef.current.play();
			setSoundStatus(() => {
				return "On";
			});
		} else {
			audioRef.current.pause();
			setSoundStatus(() => {
				return "Off";
			});
		}
	};
	return (
		<>
			<audio loop ref={audioRef}>
				<source src={source} type="audio/mpeg"></source>
			</audio>
			<button
				className="fixed bottom-8 left-8 text-white aspect-square rounded-[50%] z-10"
				onClick={togglePlay}
			>
				Sound: {soundStatus}
			</button>
		</>
	);
}

export default Audio;
