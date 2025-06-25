import ProfilePic from "../assets/kalpita.png";

export default function Photo() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="text-white justify-center flex flex-col ml-10 font-extrabold">
        <p className="text-3xl mb-3">Welcome</p>
        <h2 className="mb-4 text-6xl">
          {" "}
          I'M <span className="text-[#b3c746]">KALPITA</span>
        </h2>
        <h2 className="text-6xl">A FRONTEND DEVELOPER</h2>
      </div>
      <div className="relative z-10 ">
        <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-[#b3c746] to-[#547792] opacity-20 rounded-full -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        <img src={ProfilePic} alt="Kalpita" className="ml-10" />
      </div>
    </div>
  );
}
