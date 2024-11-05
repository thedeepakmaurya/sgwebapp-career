import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full flex xl:px-[8%] px-[3%] justify-between h-20 bg-gradient-to-r from-[#65258a] to-[#e80566] max-w-[100vw]">
      <Image
        className="h-full "
        src="https://www.sgwebapp.com/img/sg-web-techiques-logo.svg"
        alt="logo"
        height={100}
        width={170}
      />
      <ul className="xl:flex lg:flex hidden gap-7 items-center text-white text-md ">
        <li>
          <Link href="https://www.sgwebapp.com/about-us">About</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/#recentwork">Work</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/services">Services</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/blog">Blog</Link>
        </li>
        <li className="bg-white py-3 px-6  text-black rounded-md hover:bg-[#fe4c1c]">
          <Link className="flex gap-2" href="https://www.sgwebapp.com/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2" y1="12" x2="18" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
            Get Started
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
