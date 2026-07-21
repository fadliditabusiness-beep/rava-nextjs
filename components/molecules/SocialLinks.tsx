import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    color: "#E4405F",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "#",
    color: "#000000",
    icon: <FaTiktok />,
  },
  {
    label: "Shopee",
    href: "#",
    color: "#EE4D2D",
    icon: <SiShopee />,
  },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  className = "flex gap-3",
  iconClassName = "w-10 h-10 rounded-full flex items-center justify-center text-white bouncy-hover active-scale",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          style={{ backgroundColor: link.color }}
          className={iconClassName}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
