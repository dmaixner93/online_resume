
import NumberFormat from 'react-number-format';

const InputField = (props) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor="exampleInput"
        className="hidden"></label>
        <NumberFormat
          thousandSeparator={true}
          prefix={'$'}
          inputMode="numeric"
          name="exmapleInput"
          placeholder="Enter Prevailing Wage"
          className="relative z-10 w-full text-sm px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-xs dark:text-gray-100 focus:input-focus dark:focus:input-focus"
        />
    </div>
  );
};

export default InputField;