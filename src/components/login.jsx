import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login successful! Redirecting to To-Do List...');
        navigate('/todolist');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
            <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Login</h2>
                <input
                    className="w-full mb-2 p-2 border rounded"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full mb-4 p-2 border rounded"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
