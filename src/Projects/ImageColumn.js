// import src from "*.avif";

const ImageColumn = (props) => {
  const { name } = props;
  const src = require(`../static/media/${name}.png`);
  return (
    <div className="absolute top-0 left-0 max-w-xl w-full h-full bg-true-gray-500 dark:bg-true-gray-900">
      <img src={src.default} alt="lights out" />
    </div>
  )
}

export default ImageColumn;