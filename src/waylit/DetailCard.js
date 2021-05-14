import ChevronRight from '../static/waylit/svg/ChevronRight';

const DetailCard = (props) => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex-shrink-0 shadow-md bg-white dark:bg-gray-800 rounded-md border-0 cursor-pointer">
        <div>
          <div className="group w-64 h-64 divide-y divide-gray-100 dark:divide-gray-700">
            <div className="h-36 px-9 pt-7">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100">
              <svg version="1.1"
                   baseProfile="full"
                   viewBox="0, 0, 100, 100"
                   className="text-indigo-200" fill="currentColor">
                <circle cx="50" cy="50" r="49" stroke="#ffffff" className="la-inner-circle" />
                <text className="font-sans font-semibold text-4xl text-indigo-600" x="26" y="65" fill="currentColor">LH</text>
              </svg>
              </div>
              <div className="pt-3">
                <p className="text-lg truncate font-semibold break-words group-hover:underline">
                  Lewis Hamilton
                </p>
                <p className="text-sm font-medium dark:text-indigo-300">Driver</p>
              </div>
            </div>
            <div className="px-9 py-5">
              <ul className="list-none leading-5 font-normal text-sm mt-2 text-gray-600 dark:text-gray-300">
                <li>20% profile complete</li>
                <li className="mt-1.5">Due April 1, 2021</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="h-14 flex justify-between rounded-b-md items-center bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 hover:underline">
            <div className="ml-10 min-w-0 text-sm flex-1 text-indigo-500">
              Prevailing Wage
            </div>
            <div className="mr-5">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;