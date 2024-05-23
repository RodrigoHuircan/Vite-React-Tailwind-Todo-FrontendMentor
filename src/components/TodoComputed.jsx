const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button
        className="text-gray-400 hover:text-gray-700"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
