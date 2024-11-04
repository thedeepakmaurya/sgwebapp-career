import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-[8%] bg-[#100f1f] text-white">
      <div className="flex justify-center gap-16 py-24">
        <div className="flex flex-col gap-5 ">
          <Image src="https://www.sgwebapp.com/img/sg-web-techiques-logo.svg" alt="logo" width={200} height={50} />
          <p className="text-lg ">At SG web app Techniques, we believe that IT should be an enabler, not a hindrance.</p>
          <div className="flex gap-5">
          <i className='bx bxl-instagram bx-sm'></i>
          <i className='bx bxl-facebook bx-sm' ></i>
          <i className='bx bxl-twitter bx-sm' ></i>
          <i className='bx bxl-linkedin bx-sm' ></i>
          <i className='bx bxl-youtube bx-sm' ></i>
          <i className='bx bxl-pinterest-alt bx-sm' ></i>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold pb-4">Explore</li>
            <li>About</li>
            <li>Work</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold pb-4">Resources</li>
            <li>Meet Team</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-semibold pb-4">Address</li>
            <li className="flex gap-2">
            <i className='bx bx-current-location align-middle' style={{color: '#fe4c1c'}}></i> <p>SG WEBAPP TECHNIQUES PVT LTD No - 12 , 2nd floor, 40, DLE
              Industrial Area, Kirti Nagar, Delhi, 110015</p>
            </li>
            <li className="flex gap-2">
            <i className='bx bx-current-location align-middle' style={{color: '#fe4c1c'}}></i> <p>1ST FLOOR No. 3, 3rd Cross, Green Leaf Extension 4th Block,
              Koramangala, Bangalore-560034</p>
            </li>
            <li className="flex items-center gap-2"><i className='bx bx-phone' style={{color: '#fe4c1c'}}></i> <p>011 45149984</p></li>
            <li className="flex items-center gap-2"><i className='bx bx-phone' style={{color: '#fe4c1c'}}></i> <p>+91 7977757864</p></li>
            <li className="flex items-center gap-2"><i className='bx bx-envelope' style={{color: '#fe4c1c'}}></i> <p>info@sgwebapp.com</p></li>
          </ul>
        </div>
      </div>
      <hr className="border-1 border-white" />
      <div className="flex justify-between py-6 text-lg">
        <p className="w-1/2">
          Copyright &copy; 2024 All rights reserved{" "}
          <Link className="text-[#fe4c1c]" href="/">
            SG Web App Techniques Pvt. Ltd.
          </Link>
        </p>
        <p className="w-1/2 text-right">Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
