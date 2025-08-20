import Delete from "../assets/icons/delete.png";
import edit from "../assets/icons/edit.png";

const color = [
  "border-l-red-700",
  "border-l-green-700",
  "border-l-blue-700",
  "border-l-yellow-700",
  "border-l-purple-700",
];

function Cards({ tasks, onDelete }) {
  return (
    <section className="mt-5 p-2 dark:text-white">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white border-white dark:bg-neutral-900 h-40 border-4  dark:border-y-primary-dark dark:border-e-primary-dark rounded-lg flex w-full mt-5 ${task.color}`}
        >
          {/*Left-side of the card*/}
          <div className="w-[5%]">
            <input className="w-6 h-6 mt-7 ml-1" type="checkbox" />
          </div>

          {/*Middle side of the card*/}
          <div className="w-[75%] p-2">
            <input
              className="w-full h-2/5  p-2 focus:outline-none bg-stone-200 dark:bg-primary-dark placeholder:opacity-60 dark:placeholder:opacity-30 rounded-sm"
              type="text"
              placeholder="Enter task title"
            />

            <textarea
              className=" focus:outline-none mt-1 p-2 w-full resize-none bg-stone-200 dark:bg-primary-dark placeholder:opacity-60 dark:placeholder:opacity-30 rounded-sm"
              placeholder="Enter Your Task Descirption"
            />
            <p className="text-sm text-stone-600">
              {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>

          {/*Right side of the card*/}
          <div className="w-[20%] pt-6 flex gap-8 justify-center">
            <img
              className="w-8 h-8"
              src={Delete}
              alt="delete-icon"
              onClick={() => onDelete(task.id)}
            />
            <img className="w-8 h-8 " src={edit} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
