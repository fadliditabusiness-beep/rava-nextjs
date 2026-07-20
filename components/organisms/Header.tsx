// import AnnouncementBar from "@/components/molecules/AnnouncementBar";
import NavMenu from "@/components/molecules/NavMenu";
import Logo from "@/components/atoms/Logo";
import CartButton from "@/components/molecules/CartButton";

export default function Header() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <nav className="fixed w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-xl">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Logo size="sm" />
          <NavMenu />
          <CartButton />
        </div>
      </nav>
    </>
  );
}
