import Link from "next/link";
import { Dock, DockIcon } from "../_components/Dock";
import {FaHome, FaTelegram, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import Separator from "../_components/Separator";
import { SiTryhackme } from "react-icons/si";

export default function Navigation() {
  return <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-zinc-500">
    <Dock direction="middle">
      <DockIcon>
        <Link href={'#about'}>
          <FaHome size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#work'}>
          <IoCodeWorking size={20} />
        </Link>
      </DockIcon>
      <Separator />
      <DockIcon>
        <Link target="_blank" href={'https://github.com/anhxuanpham'}>
          <FaGithub size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://www.linkedin.com/in/26thmay/'}>
          <FaLinkedin size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://t.me/anhxuanpham'}>
          <FaTelegram size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://tryhackme.com/p/w1ll14m'}>
          <SiTryhackme size={20} />
        </Link>
      </DockIcon>
      {/* <Separator /> */}
      {/* <DockIcon> */}
      {/*   <SunIcon size={20} /> */}
      {/* </DockIcon> */}
    </Dock>
  </div>
}
