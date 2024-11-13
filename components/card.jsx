import Link from "next/link";

function Card({ title, location, salary, et, iconClass, experience }) {
  return (
    <div className="w-full xl:h-24 xl:gap-0 lg:gap-0 md:gap-0 gap-4 h-auto flex xl:flex-row lg:flex-row md:flex-row flex-col items-center border border-gray-200 rounded-lg p-4 hover:bg-gradient-to-r from-orange-50 to-white">
      <div className="h-full w-20 flex items-center justify-center">
        <i className={iconClass}></i>
      </div>
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex xl:flex-row flex-col items-center gap-2">
            <h2 className="font-semibold text-gray-800 text-nowrap">{title}</h2>
            <div className="flex gap-2">
              <p className="text-[#ffedf5] text-sm bg-[#e80566] px-3 rounded-full">
                Featured
              </p>
              <p className="text-[#eedff6] text-sm bg-[#65258a] px-3 rounded-full">
                Remote
              </p>
            </div>
          </div>
          <div className="flex xl:flex-row pt-2 flex-col items-center gap-3 text-sm text-gray-400">
            <div className="flex gap-3">
              <div className="flex xl:items-center lg:items-center md:items-center gap-1">
                <i className="bx bx-current-location"></i>
                <p>{location}</p>
              </div>
              <div className="flex xl:items-center lg:items-center md:items-center gap-1">
                <i className="bx bx-dollar"></i>
                <p>{salary}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex xl:items-center lg:items-center md:items-center gap-1">
                <i className="bx bx-briefcase"></i>
                <p>{et}</p>
              </div>
              <div className="flex xl:items-center lg:items-center md:items-center gap-1">
                <i className="bx bx-calendar-alt"></i>
                <p>{experience}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={`mailto:hr@sgwebapp.com?subject=Application for ${title} Position`}
            passHref
          >
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-[#65258a] to-[#e80566] px-4 py-1.5 rounded-sm ">
              Apply Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="12" x2="18" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
