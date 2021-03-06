import { useState, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import ChevronWithCircle from "../static/waylit/svg/ChevronWithCircle";
import CloseButtonX from "../static/waylit/svg/CloseButtonX";
import { startCaseData } from "../static/waylit/sampleData";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { isTouchScreen } from '../utils/isTouchScreen';

/** TODO: Create variable to disable/enable hover event depeneding on device type.
 * DO NOT need hover event for touch screen devices
 */

const Row = memo(({ candidate, jobTitle, type }) => {
  const [hover, setHover] = useState(false);
  const touchScreen = isTouchScreen();
  return (
    <TableRow
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cursor-pointer h-12 hover:bg-indigo-500 hover:bg-opacity-10 dark:hover:bg-gray-700">
      <TableCell className="w-7" />
      <TableCell>
        <span className="font-medium">{candidate}</span>
      </TableCell>
      <TableCell align={"left"}>
        <span className="text-gray-500">{jobTitle}</span>
      </TableCell>
      <TableCell align={"right"} className="w-12 md:w-36">
        {hover && !touchScreen ? (
          <div className="flex items-center justify-content-end">
            <span className="block text-indigo-500 dark:text-indigo-300 font-medium ml-auto mr-2">Start Case</span>
            <ChevronWithCircle />
          </div>
        ) : (
          <div className="text-gray-500">{type}</div>
        )}
      </TableCell>
      <TableCell className="w-7" />
    </TableRow>
  );
});

const StartCase = (props) => {
  return (
    <div
      className="relative inline-block py-6 align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-md sm:align-middle w-full"
      role="dialog">
      <div className="absolute top-4 right-6 h-6 w-full flex items-center justify-end">
        <div className="h-full w-auto cursor-pointer opacity-60 hover:opacity-100">
          <CloseButtonX />
        </div>
      </div>
      <div>
        <div className="relative mt-3 text-center w-full block">
          <span className="block font-bold text-2xl text-gray-800">
            Start H-1B Case
          </span>
          <span className="md:w-auto block break-words mt-3 text-base text-gray-500">
            Select an employee to start H-1B case for
          </span>
        </div>
      </div>
      <div className="relative min-w-full bg-white dark:bg-gray-800 mt-10 h-72 overflow-y-scroll">
        <Table className="border-t border-gray-200 dark:border-gray-700">
          <TableBody>
            {startCaseData.map((row) => (
              <Row key={uuidv4()} {...row} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StartCase;
