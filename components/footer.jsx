import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="xl:px-[6%] px-[4%] bg-[#100f1f] text-white max-w-[100vw]">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center gap-10 xl:gap-12 xl:py-20 py-16">
        <div className="flex flex-col gap-4 ">
          <Image src="https://www.sgwebapp.com/img/sg-web-techiques-logo.svg" alt="logo" width={200} height={50} />
          <p className="text-lg ">At SG web app Techniques, we believe that IT should be an enabler, not a hindrance.</p>
          <div className="flex gap-2.5">
          <i className='bx bxl-instagram bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5'></i>
          <i className='bx bxl-facebook bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5' ></i>
          <i className='bx bxl-twitter bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5' ></i>
          <i className='bx bxl-linkedin bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5' ></i>
          <i className='bx bxl-youtube bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5' ></i>
          <i className='bx bxl-pinterest-alt bg-[#1e1d2f] hover:bg-[#fe4c1c] p-1.5' ></i>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold xl:pb-4 pb-2">Explore</li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/about-us">About</Link></li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/#recentwork">Work</Link> </li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/services">Services</Link></li>
            <li className="text-nowrap hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/case-studies">Case Studies</Link></li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold xl:pb-4 pb-2">Resources</li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/team">Meet Team</Link></li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/testimonials">Testimonials</Link></li>
            <li className="hover:text-[#fe4c1c]"><Link href="https://www.sgwebapp.com/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold xl:pb-4 pb-2">Address</li>
            <li className="flex gap-2">
            <i className='bx bx-current-location align-middle' style={{color: '#fe4c1c'}}></i> <p>SG WEBAPP TECHNIQUES PVT LTD No - 12 , 2nd floor, 40, DLE
              Industrial Area, Kirti Nagar, Delhi, 110015</p>
            </li>
            <li className="flex gap-2">
            <i className='bx bx-current-location align-middle' style={{color: '#fe4c1c'}}></i> <p>1ST FLOOR No. 3, 3rd Cross, Green Leaf Extension 4th Block,
              Koramangala, Bangalore-560034</p>
            </li>
            <li className="flex items-center gap-2"><i className='bx bx-phone' style={{color: '#fe4c1c'}}></i> <p className="hover:text-[#fe4c1c]"><Link href="tel:011 45149984">011 45149984</Link></p></li>
            <li className="flex items-center gap-2"><i className='bx bx-phone' style={{color: '#fe4c1c'}}></i> <p className="hover:text-[#fe4c1c]"><Link href="tel:7977757864">+91 7977757864</Link></p></li>
            <li className="flex items-center gap-2"><i className='bx bx-envelope' style={{color: '#fe4c1c'}}></i> <p className="hover:text-[#fe4c1c]"><Link href="info@sgwebapp.com">info@sgwebapp.com</Link></p></li>
          </ul>
        </div>
      </div>
      <hr className="border-1 border-white" />
      <div className="flex xl:flex-row lg:flex-row flex-col xl:justify-between lg:justify-between justify-center py-6 text-lg">
        <p className="xl:w-1/2 w-full text-center xl:text-left lg:text-left pb-2">
          Copyright &copy; 2024 All rights reserved
          <Link className="text-[#fe4c1c]" href="/">
             SG Web App Techniques Pvt. Ltd.
          </Link>
        </p>
        <p className="xl:w-1/2 w-full xl:text-right lg:text-right text-center">Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
