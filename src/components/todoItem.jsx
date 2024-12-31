import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";

function TodoItem({ id, text, isCompleted }) {
    const dispatch = useDispatch();

    function removeTodoItem() {
        dispatch(removeTodo(id));
    }

    return (
        <div className="flex items-center mb-2 p-2 bg-gray-800 rounded-md shadow-md transition duration-300 hover:bg-gray-700 animate-fadeIn">
            <input type="checkbox" checked={isCompleted} className="mr-2" />
            <p className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : ''}`}>{text}</p>
            <button
                onClick={removeTodoItem}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
            >
                X
            </button>
        </div>
    );
}

export default TodoItem;
