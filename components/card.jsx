function Card({title, location, salary, et, iconClass}) {
  return (
    <div className="w-full xl:h-24 xl:gap-0 lg:gap-0 md:gap-0 gap-4 h-auto flex xl:flex-row lg:flex-row md:flex-row flex-col items-center border border-gray-200 rounded-lg p-4 hover:bg-gradient-to-r from-orange-50 to-white">
      <div className="h-full w-20 flex items-center justify-center" >
      <i className={iconClass}></i>
      </div>
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-800 text-nowrap">
              {title}
            </h2>
            <p className="text-pink-600 text-sm bg-pink-100 px-3 rounded-full">
              Featured
            </p>
            <p className="text-blue-600 text-sm bg-blue-100 px-3 rounded-full">
              Remote
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <p>
              <i className="bx bx-current-location"></i> {location}
            </p>
            <p>
              <i className="bx bx-dollar"></i> {salary}
            </p>
            <p>
              <i className="bx bx-calendar-alt"></i> {et}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <i className="bx bx-bookmark"></i>
          <button className="flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-100 px-4 py-1.5 rounded-sm">
            Apply Now
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
