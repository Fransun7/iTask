import search from "../assets/icons/search.png";

function Filter(onFilterChange) {
  return (
    <section className="bg-amber-50 dark:bg-neutral-900 h-40 mt-2 p-5">
      {/*Filtering Buttons*/}
      <div className="flex gap-10 p-2">
        <button onClick={()=> onFilterChange("all")} className="bg-stone-300 border-blue-700 border-2 rounded-lg w-30 h-12 cursor-pointer dark:bg-primary-dark dark:text-primary">
          All Tasks
        </button>
        <button className="bg-stone-300 border-green-700 border-2 rounded-lg w-30 h-12 cursor-pointer dark:bg-primary-dark dark:text-primary">
          Active
        </button>
        <button className="bg-stone-300 border-yellow-500 border-2 rounded-lg w-30 h-12 cursor-pointer dark:bg-primary-dark dark:text-primary">
          Completed
        </button>
        <button className="bg-stone-300 border-2 border-gray-400 rounded-lg w-30 h-12 cursor-pointer dark:bg-primary-dark dark:text-primary">
          Inactive
        </button>
      </div>
      {/*Search box*/}
      <div className="relative p-2 mt-2">
        <input
          type="text"
          placeholder="search"
          className="bg-stone-300 border-2 border-gray-500 rounded-lg w-3/4 h-12 p-3 dark:bg-primary-dark dark:text-primary outline-none focus:border-green-900"
        />
        <img
          src={search}
          alt="search-icon"
          className="absolute top-4 left-2/3 w-8 dark:invert"
        />
      </div>
    </section>
  );
}

export default Filter;
