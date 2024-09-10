import Link from "next/link";
import { ShowCart } from "@/components/btns";
import Image from "next/image";

export function Navbar() {
  return (
    <div className=" flex items-center justify-between px-9 pt-2 pb-4">
      <div>
        <Image
          alt="company logo"
          src="/logo.png"
          width={300}
          height={300}
          loading="eager"
          className=" w-16"
        />
      </div>
      <div className=" flex items-center gap-8 font-medium">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Shop eSIMs</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Blogs</Link>
      </div>
      <ShowCart />
    </div>
  );
}
