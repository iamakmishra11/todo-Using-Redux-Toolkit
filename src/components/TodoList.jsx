import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

function TodoList() {
    const todos = useSelector(state => state.todos);
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Todo List:</h2>
            {todos.map(todoItem => (
                <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} isCompleted={todoItem.completed} />
            ))}
        </div>
    );
}

export default TodoList;
