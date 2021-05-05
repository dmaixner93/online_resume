
import NumberFormat from 'react-number-format';

const InputField = (props) => {
  return (
    <div className="w-full">
      <label
        htmlFor="exampleInput"
        className="hidden"></label>
        <NumberFormat
          thousandSeparator={true}
          prefix={'$'}
          inputMode="numeric"
          name="exmapleInput"
          placeholder="Enter Prevailing Wage"
          className="w-full text-sm px-6 py-3 bg-white border border-gray-200 rounded-md shadow-xs focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-20 focus:border focus:border-indigo-500"
        />
    </div>
  );
};

export default InputField;