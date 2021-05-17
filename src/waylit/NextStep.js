import Button from './Button';
import OfficeSupplies from '../static/waylit/svg/OfficeSupplies';
import Paper from './Paper';

const NextStep = () => {
  // const src = require("../static/media/office_supplies.png");
  return (
    <Paper>
      <div className="py-5 sm:py-8 px-10">
        <div className="sm:flex sm:items-center">
          <div className="mt-5 sm:mt-0 sm:mr-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <span className="inline-flex rounded-md">
              <OfficeSupplies />
            </span>
          </div>
          <div className="ml-4">
            <div>
              <span className="leading-5 uppercase text-indigo-500 dark:text-indigo-300 font-semibold tracking-wider text-xs">
                Next Action
              </span>
            </div>
            <h3 className="mt-4 text-lg leading-5 font-semibold">
              Prevailing Wage Approval
            </h3>
            <div className="mt-4 max-w-xl text-sm">
              <div className="flex-shrink-0 block focus:outline-none">
                <div className="w-auto text-sm leading-5 text-gray-600 dark:text-gray-300 sm:flex sm:items-center">
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
                    <div className="cursor-pointer hover:underline">
                      Niki Lauda
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 ml-4 md:ml-auto sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <Button text="View Task" />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default NextStep;