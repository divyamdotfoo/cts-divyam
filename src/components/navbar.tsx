import Link from "next/link";

export function Navbar() {
  return (
    <div className=" flex items-center justify-between px-9 pt-2 pb-4">
      <div>
        <img src="/logo.png" width={90} />
      </div>
      <div className=" flex items-center gap-8 font-medium">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Shop eSIMs</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Blogs</Link>
      </div>
      <div className=" flex items-center gap-2">
        <p>£0.00</p>
        <p className=" opacity-50 text-sm">0 items</p>
        <img src="/cart.svg" className=" pl-6" />
      </div>
    </div>
  );
}
