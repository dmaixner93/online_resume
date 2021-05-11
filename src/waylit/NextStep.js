const NextStep = () => {
  const src = require('../static/media/office_supplies.png');
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="py-5 sm:py-8 px-10">
        <div className="sm:flex sm:items-center">
          <div className="mt-5 sm:mt-0 sm:mr-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <span className="inline-flex rounded-md">
              <img src={src.default} alt="calculator on stack of papers" />
            </span>
          </div>
          <div className="ml-4">
            <div>
              <span className="leading-5 uppercase text-indigo-500 font-semibold tracking-wider text-xs">
                Next Action
              </span>
            </div>
            <h3 className="mt-4 text-lg leading-5 font-semibold text-gray-900">
              Prevailing Wage Approval
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <div className="flex-shrink-0 group block focus:outline-none">
                <div className="flex items-center">
                  <div className="mt-1 w-auto text-sm leading-5 text-gray-600 sm:flex sm:items-center">
                    <div>18 Hours left</div>
                    <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                      &middot;
                    </span>
                    <div className="mt-1 sm:mt-0">10/10/2020</div>
                    <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                      &middot;
                    </span>
                    <div className="mt-1 md:mt-0 flex items-center">
                      <div className="hidden lg:inline-block">
                        {/* avatar image */}
                      </div>
                      <div>
                        <p className="text-sm leading-5 cursor-pointer text-gray-600 hover:underline">
                          Niki Lauda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 ml-4 md:ml-auto sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <div className="h-full flex items-center flex-col rounded-md">
              <span className="inline-flex items-center justify-center px-6 py-3 truncate border border-transparent text-sm leading-5 font-semibold rounded-md text-white bg-indigo-500 cursor-pointer hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                View Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;