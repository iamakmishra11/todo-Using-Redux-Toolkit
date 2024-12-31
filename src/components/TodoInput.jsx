import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

function TodoInput() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    function addTodoToStore() {
        dispatch(addTodo(todo));
        setTodo('');
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                className="border border-gray-700 p-2 rounded-l-md text-black"
                onChange={e => setTodo(e.target.value)}
                value={todo}
                placeholder="Add a new todo..."
            />
            <button
                onClick={addTodoToStore}
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoInput;
