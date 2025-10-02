import NavbarDesktop from "./NavDesktop";

export default function Navbar() {
  return (
    <nav className="hidden lg:block relative z-[1] max-w-5xl h-[60px] mx-auto p-0 items-center space-x-4 lg:space-x-10 xl:space-x-10">
      <NavbarDesktop />
    </nav>
  );
}