import styles from "./todoList.module.scss";

export function TodoList({ todoList, setTodoList }) {
  return (
    <ul className={styles.todoList}>
      {todoList.map((todoItem, idx) => (
        <TodoItem key={idx} idx={idx} todoText={todoItem} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function TodoItem({ todoText, setTodoList, idx }) {
  const deleteTodo = () => {
    setTodoList((prev) => prev.filter((_, index) => index !== idx));
  };
  return (
    <li className={styles.todoItem}>
      <p className={styles.todoContent}>{todoText}</p>
      <button className={styles.deleteTodo} onClick={deleteTodo}>
        삭제
      </button>
    </li>
  );
}
