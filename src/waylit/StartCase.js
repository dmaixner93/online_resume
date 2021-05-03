import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ChevronWithCircle from '../static/waylit/svg/ChevronWithCircle';
import CloseButtonX from '../static/waylit/svg/CloseButtonX';
import { startCaseData } from '../static/waylit/sampleData';

const TableRow = ({ candidate, jobTitle, type }) => {
  const [ hover, setHover ] = useState(false);
  
  return (
    <tr
      key={uuidv4()}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cursor-pointer h-12 truncate text-sm text-gray-500 hover:bg-indigo-500 hover:bg-opacity-10">
      <td className="pl-7 w-7">
        <div className="w-auto h-auto">{/** Avatar */}</div>
      </td>
      <td className="w-36 px-2 font-semibold text-gray-900">
        {candidate}
      </td>
      <td className="w-24 px-2">
        {jobTitle}
      </td>
      <td className="w-36 pr-7 text-right">
        {hover ? (
          <div className="flex text-indigo-500 items-center justify-content-end">
            <span className="block ml-auto mr-2">
              Start Case
            </span>
            <ChevronWithCircle />
            </div>
          ) : (
            <div>{type}</div>
        )}
      </td>
    </tr>
  )
};

const TableBody = (props) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {startCaseData.map(row => (
        <TableRow {...row} />
      ))}
    </tbody>
  )
}

const StartCase = (props) => {
  return (
    <div className="flex items-end justify-center text-center">
      <div
        className="relative inline-block py-6 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md sm:align-middle sm:w-full"
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
            <span className="block mt-3 text-base text-gray-500">
              Select an employee to start H-1B case for
            </span>
          </div>
        </div>
        <div className="relative min-w-full bg-white mt-10 h-72 overflow-y-scroll">
          <table className="min-w-full border-b border-t border-gray-200">
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default StartCase;
