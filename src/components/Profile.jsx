import ProfilePic from "../assets/kalpita.png";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <div className="w-32 sm:w-40 md:w-52 lg:w-60 aspect-square rounded-full border-4 border-white p-1 shadow-xl hover:scale-105 transition-transform duration-300">
        <img
          src={ProfilePic}
          alt="Kalpita"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}
