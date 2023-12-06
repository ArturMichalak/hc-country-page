import Image from "next/image";
import logoImg from "@/public/logo.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <nav className="w-full h-[300px] bg-black bg-hero bg-center bg-no-repeat grid place-items-center">
      <Link href="/">
        <Image src={logoImg} alt="World Ranks homepage" />
      </Link>
    </nav>
  );
}
