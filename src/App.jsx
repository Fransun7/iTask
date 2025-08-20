import { useState } from "react";
import Header from "./components/header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Array of different left border colors
  const color = [
    "border-l-red-700",
    "border-l-green-700",
    "border-l-blue-700",
    "border-l-yellow-700",
    "border-l-purple-700",
  ];

  //Function to add a new task
  const addTasks = () => {
    //A variable that accomodate the expression that picks the color of each task left border
    const picker = color[Math.floor(Math.random() * color.length)];
    const newTask = {
      id: Date.now(),
      title: "",
      description: "",
      createdAt: new Date(),
      color: picker,
    };
    setTasks([...tasks, newTask]);
  };

  //Function to delete a new task
  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  //Filtering Logic
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "all":
        
        return true;
    
      default:
        return false;
    }
  });

  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark">
      <Header onAddTasks={addTasks} />
      <Filter onFilterChange={setFilter} />
      <Cards tasks={filteredTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
