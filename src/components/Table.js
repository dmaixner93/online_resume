import { v4 as uuidv4 } from "uuid";

const Table = (props) => {
  const { data } = props;

  const tbody = data.map(item => {
    const { mainItem, subItems } = item;
    return (
      <tr
        key={uuidv4()}>
        <td className="leading-6">
          <span className="block text-base">{mainItem}</span>
          <span className="block text-sm dark:text-gray-400">{subItems.join(', ')}</span>
        </td>
    </tr>
    )
  });

  return (
    <table
      cellPadding="4px"
      cellSpacing="12px"
      className="w-full h-auto table-auto">
      <tbody>
        {tbody}
      </tbody>
    </table>
  )
}

export default Table;