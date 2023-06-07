const ImageColumn = (props) => {
  const { image, align, } = props;
  const src = require(`../../static/media/${image}`);
  return (
    <div className={`absolute w-auto ${align.opposite} h-full bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-800 dark:to-gray-600`}>
      <img className="w-auto h-full object-cover opacity-30 lg:opacity-100 lg:filter lg:grayscale lg:group-hover:filter-none" src={src.default} alt="lights out" />
    </div>
  )
}

export default ImageColumn;