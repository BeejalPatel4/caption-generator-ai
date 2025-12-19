import SparklesIcon from "@/components/sparklesIcon";

export default function DemoSection() {
  return (
    <section className="absolute top-30 ml-79  w-full flex justify-around mt-6 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] h-[460px] rounded-xl overflow-hidden">
        {/* <video src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/without-captions.mp4" preload muted autoPlay loop></video> */}
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] h-[460px] rounded-xl overflow-hidden">
        {/* <video src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/with-captions.mp4" preload muted autoPlay loop></video> */}
      </div>
    </section>
  );
}


