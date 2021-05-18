import Spacer from '../utils/Spacer';
import { v4 as uuidv4 } from "uuid";

const TabPanelList = (props) => {
  const { responsibilities } = props.body;
  const tableItems = responsibilities.map(item => {
    return (
      <tr key={uuidv4()}>
        <td className="flex justify-start pt-2.5">
          <div className="list-marker mr-2"></div>
        </td>
        <td className="leading-7">
          {item}
        </td>
      </tr>
    )
  })
  return (
    <div>
      <Spacer height={4} />
      <table className="table-auto">
        <tbody>
          {tableItems}
        </tbody>
      </table>
    </div>
  )
}

export default TabPanelList;