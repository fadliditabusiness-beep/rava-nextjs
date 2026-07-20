import Link from "next/link";
// import AnnouncementBar from "@/components/molecules/AnnouncementBar";
import NavMenu from "@/components/molecules/NavMenu";
import Logo from "@/components/atoms/Logo";

export default function Header() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <nav className="fixed w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-xl">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Logo size="sm" />
          <NavMenu />
          <Link
            href="/products"
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold bouncy-hover active-scale"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </>
  );
}
