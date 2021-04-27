import { v4 as uuidv4 } from "uuid";

const Table = (props) => {
  const { data } = props;

  const tbody = data.map(item => {
    return (
    <tr key={uuidv4()}>
      <td className="list-marker"></td>
      <td>{item}</td>
    </tr>
    )
  });

  return (
    <table className="w-full h-auto table-auto">
      <tbody>
        {tbody}
      </tbody>
    </table>
  )
}

export default Table;