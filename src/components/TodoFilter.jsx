const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button
          className={`${filter === "all" ? "text-purple-500 hover:text-gray-500" : "text-gray-400 hover:text-purple-600"}`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className="hover:text-purple-600"
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className="hover:text-purple-600"
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
