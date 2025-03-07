const CountrySkeleton = () => {
  return (
    <li className="rounded shadow-md animate-pulse">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="p-4 mb-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded my-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-2/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/5"></div>
      </div>
    </li>
  );
};

export default CountrySkeleton;
