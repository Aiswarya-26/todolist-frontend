import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        date: '',
        priority: 'Low',
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = () => {
        if (newTask.title.trim() === '' || newTask.date === '') {
            alert('Please enter task title and date.');
            return;
        }
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = { ...newTask, completed: false };
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, { ...newTask, completed: false }]);
        }
        setNewTask({ title: '', description: '', date: '', priority: 'Low' });
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleEdit = (index) => {
        setNewTask({
            title: tasks[index].title,
            description: tasks[index].description,
            date: tasks[index].date,
            priority: tasks[index].priority,
        });
        setEditIndex(index);
    };

    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">📝 To-Do List</h2>
                <div className="grid gap-2 mb-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={newTask.title}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    />
                    <textarea
                        name="description"
                        placeholder="Description (optional)"
                        value={newTask.description}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    ></textarea>
                    <input
                        type="date"
                        name="date"
                        value={newTask.date}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    />
                    <select
                        name="priority"
                        value={newTask.priority}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    >
                        <option value="Low">Low Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="High">High Priority</option>
                    </select>
                    <button
                        onClick={handleAddTask}
                        className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                    >
                        {editIndex !== null ? 'Update Task' : 'Add Task'}
                    </button>
                </div>

                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className={`p-4 border rounded shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                                task.completed ? 'bg-green-100' : 'bg-gray-50'
                            }`}
                        >
                            <div className="flex-1">
                                <h3 className={`font-bold ${task.completed ? 'line-through text-green-700' : ''}`}>
                                    {task.title}
                                </h3>
                                {task.description && (
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                )}
                                <p className="text-sm">📅 {task.date} | 🎯 {task.priority}</p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                <button
                                    onClick={() => toggleComplete(index)}
                                    className={`px-2 py-1 rounded text-xs ${
                                        task.completed
                                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                            : 'bg-green-500 text-white hover:bg-green-600'
                                    }`}
                                >
                                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                </button>
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="px-2 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-2 py-1 rounded bg-red-500 text-white text-xs hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    {tasks.length === 0 && (
                        <p className="text-center text-gray-600">No tasks added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
