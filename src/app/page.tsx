"use client"
import { useState } from "react";

export default function Home() {


	const [palette, setPalette] = useState(["text-green-300", "text-pink-300", "text-orange-300", "text-purple-300", "text-blue-300", "text-yellow-300"])

	function shufflePalette() {

		const array = [...palette];
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		setPalette(array);
		console.log(palette);
	}

	return (
		<main className="m-auto max-w-screen-2xl min-h-screen flex">
			<section className="lg:w-3/5 m-auto p-5">
				<div className="flex flex-row justify-between items-center">
					<div>
						<h1 className={"text-5xl lg:text-6xl font-bold text-text " + palette[4]}>Kanishk Nagpal</h1>
						<h1 className="lg:text-2xl font-medium mt-1">Developer | Designer | Photographer</h1>

						<div className="flex flex-row justify-between mt-12 text-lg">
							<a href="https://github.com/kaythecosmic" target="_blank" className={"font-medium hover:font-black " + palette[0]} onMouseOver={() => { shufflePalette() }}>github</a>
							<a href="https://www.linkedin.com/in/kanishk-nagpal/" target="_blank" className={"font-medium hover:font-black " + palette[1]} onMouseOver={() => { shufflePalette() }}>linkedin</a>
							<a href="https://www.instagram.com/kaythecam" target="_blank" className={"font-medium hover:font-black " + palette[2]} onMouseOver={() => { shufflePalette() }}>photography</a>
							<a href="https://study-bean.vercel.app/" target="_blank" className={"font-medium hover:font-black " + palette[3]} onMouseOver={() => { shufflePalette() }}>StudyBean</a>
						</div>
					</div>
					<div className="h-[350px] w-2/5 rounded-full hidden overflow-hidden lg:flex items-center justify-center relative">
						<img src="/images/kanishk-4.jpg" alt="kanishk.jpg" title="kanishk.jpg" className="h-full w-full object-cover" />
						<div className="h-full w-full z-20 absolute isolate"></div>
					</div>
				</div>

				<p className="text-2xl mt-12 text-justify">
					Hey! This is <span className={palette[5] + " transition"}>Kanishk</span>, a CSE undergrad from Chandigarh. I am an enthusiastic and proactive learner who thrives on opportunities for growth and development. I enjoy listening to good music, sketch and watch camping videos in my free time.
				</p>
			</section>
		</main>
	);
}
