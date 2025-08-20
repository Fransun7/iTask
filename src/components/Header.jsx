import addIcon from "../assets/icons/add.png";
import displayIcon from "../assets/icons/night-mode.png";
import { useState } from "react";

function Header({onAddTasks}) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="text-red-800 bg-amber-50 dark:bg-primary-dark h-20 grid grid-cols-2">
      {/*Left side that contains the logo */}
      <div className="flex items-center">
        <h1 className="font-lemon text-black dark:text-white text-3xl ml-3">iTask</h1>
      </div>
      {/*Right side that contains the add-task button and the night and day display icons*/}
      <div className="flex justify-end items-center">
        <button className="bg-blue-900
        dark:bg-blue-950 text-white text-md font-medium w-28 h-10 rounded-3xl flex items-center pl-2 mr-8 cursor-pointer" onClick={onAddTasks}>
          <img className="w-4.5 mr-2.5 dark:invert" src={addIcon} alt=""/>
          Add Task
        </button>
        <button onClick={toggleDarkMode}>
          <img
          className="w-10 mr-4 cursor-pointer dark:invert"
          src={displayIcon}
          alt="night-day mode"
        />
        </button>
        
      </div>
    </header>
  );
}

export default Header;
