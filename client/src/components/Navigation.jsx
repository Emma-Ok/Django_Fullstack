import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between items-center py-4">
        <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4"> Task Manager</h1>
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/tasks-create">create task</Link>
        </button>
    </div>
  );
}