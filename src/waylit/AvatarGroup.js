const AvatarGroup = (props) => {
  return (
    <div className="group flex justify-center -space-x-2 cursor-pointer">
      <img
        className="relative inline-block h-8 w-8 rounded-full ring-2 transform ring-gray-100 dark:ring-gray-900 transition-transform duration-100"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="relative inline-block h-8 w-8 rounded-full ring-2 transform group-hover:translate-x-4 ring-gray-100 dark:ring-gray-900 transition-transform duration-100"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="relative inline-block h-8 w-8 rounded-full ring-2 transform group-hover:translate-x-8 ring-gray-100 dark:ring-gray-900 transition-transform duration-100"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="relative inline-block h-8 w-8 rounded-full ring-2 transform group-hover:translate-x-12 ring-gray-100 dark:ring-gray-900 transition-transform duration-100"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  );
};

export default AvatarGroup;
