const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
        <button
          className={`${filter === "all" ? "text-purple-500 hover:text-gray-500" : "text-gray-400 hover:text-purple-600"}`}
          onClick={() => changeFilter("all")}
        >
          Todo
        </button>
        <button
          className="transition-all duration-1000 hover:text-purple-600 dark:text-gray-400"
          onClick={() => changeFilter("active")}
        >
          Activas
        </button>
        <button
          className="transition-all duration-1000 hover:text-purple-600 dark:text-gray-400"
          onClick={() => changeFilter("completed")}
        >
          Completadas
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
