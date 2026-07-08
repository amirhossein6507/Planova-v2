import Image from "next/image";
import LogoPlanova from "@/public/logo-png.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/information" className="block">
      <Image
        loading="eager"
        placeholder="blur"
        aria-label="logo-planova"
        src={LogoPlanova}
        alt="planova-logo"
        height={50}
      />
    </Link>
  );
}

export default Logo;
