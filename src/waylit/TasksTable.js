import { v4 as uuidv4 } from 'uuid';
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { taskTableData } from '../static/waylit/sampleData';

const Row = ({ status, task, comments, date, assignee }) => {
  const iconColor = () => {
    switch (status) {
      case "not started":
        return "gray-300";
      case "started":
        return "yellow-400";
      case "completed":
        return "green-400";
      default:
        return "gray-300";
    }
  }
  return (
    <TableRow className="h-16 m-0 p-0 cursor-pointer hover:bg-gray-100">
      <TableCell className="w-10" />
      <TableCell>
        <div className="flex items-center">
          <div className={`h-4 w-4 flex-shrink-0 rounded-full border-2 border-${iconColor()}`}></div>
          <div className="ml-4">
            <div className="font-medium truncate capitalize text-cool-gray-800">
              <span className="cursor-text">{task}</span>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell align={"left"}>
          {comments > 0 ?
            <div className="flex justify-center md:mr-6 items-center cursor-pointer font-medium">
              <div>{comments} comments</div>
              <svg
                viewBox="0 0 18 18"
                fill="currentColor"
                className="ml-2 -mb-1 w-5 text-gray-400">
                <path d="M7.33317 0.5H10.6665C12.4346 0.5 14.1303 1.20238 15.3806 2.45262C16.6308 3.70286 17.3332 5.39856 17.3332 7.16667C17.3332 8.93478 16.6308 10.6305 15.3806 11.8807C14.1303 13.131 12.4346 13.8333 10.6665 13.8333V16.75C6.49984 15.0833 0.666504 12.5833 0.666504 7.16667C0.666504 5.39856 1.36888 3.70286 2.61913 2.45262C3.86937 1.20238 5.56506 0.5 7.33317 0.5ZM8.99984 12.1667H10.6665C11.3231 12.1667 11.9733 12.0373 12.5799 11.7861C13.1865 11.5348 13.7377 11.1665 14.202 10.7022C14.6663 10.2379 15.0346 9.68671 15.2859 9.08008C15.5372 8.47346 15.6665 7.82328 15.6665 7.16667C15.6665 6.51006 15.5372 5.85988 15.2859 5.25325C15.0346 4.64662 14.6663 4.09543 14.202 3.63113C13.7377 3.16684 13.1865 2.79854 12.5799 2.54727C11.9733 2.296 11.3231 2.16667 10.6665 2.16667H7.33317C6.00709 2.16667 4.73532 2.69345 3.79764 3.63113C2.85996 4.56881 2.33317 5.84058 2.33317 7.16667C2.33317 10.175 4.38484 12.1383 8.99984 14.2333V12.1667Z" />
              </svg>
            </div>
            :
            <div></div>
          }
      </TableCell>
      <TableCell align={"center"}>
        <span className="cursor-text">{date}</span>
      </TableCell>
      <TableCell align={'right'}>
        <span className="ml-4 font-medium text-cool-gray-800 cursor-pointer">
          <span className="cursor-text">{assignee}</span>
        </span>
        {/* include 'svg/chevron_right.svg' with width='w-5' height='h-5' */}
      </TableCell>
      <TableCell className="w-10" />
    </TableRow>
  );
};

const TaskTable = (props) => {
  return (
      <div className="bg-white shadow sm:rounded-lg align-middle inline-block min-w-full overflow-hidden">
        <div className="w-full mx-auto py-6 pl-6 md:pl-10 border-b border-gray-200">
          <div className="w-auto">
            <span className="text-gray-700 font-semibold text-lg">Tasks</span>
          </div>
        </div>
        <Table className="min-w-full table-auto">
          <TableBody className="bg-white">
            {taskTableData.map(row => (
              <Row 
                key={uuidv4()}
                {...row}
              />
            ))}
          </TableBody>
        </Table>
      </div>
  );
};

export default TaskTable;
