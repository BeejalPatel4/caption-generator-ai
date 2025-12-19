import Antigravity from "@/components/Antigravity";
import DemoSection from "@/components/Demo";


import UpLode from "@/components/upLode";
import PageHeade from "@/components/pageHeader";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={"#FF9FFC"}
          autoAnimate={true}
          particleVariance={1}
        />
        <PageHeade

          h1Text="Epic Caption Generator"
          h2Text="Generate amazing captions for your social media posts with ease."
        />
        <div className="text-center  ml-80 top-30 absolute w-full">
          <button className="bg-pink-200 py-2 px-6  inline-flex gap-2  border-2 border-white-700/50 rounded-full"><UpLode />
            <span>Choose File</span>
          </button>

        </div>
        <DemoSection />
      </div></>


  );
}
