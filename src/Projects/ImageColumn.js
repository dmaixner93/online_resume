const ImageColumn = (props) => {
  const { name, align, } = props;
  const src = require(`../static/media/${name}.png`);
  return (
    <div className={`absolute w-auto ${align.opposite} h-full bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-800 dark:to-gray-600`}>
      <img className="w-auto h-full filter blur" src={src.default} alt="lights out" />
    </div>
  )
}

export default ImageColumn;