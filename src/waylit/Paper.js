const Paper = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded sm:rounded-lg overflow-hidden">
      {props.children}
    </div>
  )
}

export default Paper;