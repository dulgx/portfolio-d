import Content from "./components/content";
import Sidebar from "./components/sidebar";
import Image from "next/image";
import Background from "./assets/Gradient.svg";

export default function Home() {
  return (
    <main className="flex justify-center m-24 mx-auto min-h-screen-xl px-6 font-sans text-lg">
      <Sidebar />
      <Content />
      <Image
        src={Background}
        alt="Background"
        className="absolute -z-10 bg-main-background-image bg-cover bg-center h-screen"
      />
    </main>
  );
}
