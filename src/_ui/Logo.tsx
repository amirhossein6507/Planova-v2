import Image from "next/image";
import LogoPlanova from "@/public/logo-png.png";

function Logo() {
  return (
    <div>
      <Image src={LogoPlanova} alt="planova-logo" height={50} />
    </div>
  );
}

export default Logo;
