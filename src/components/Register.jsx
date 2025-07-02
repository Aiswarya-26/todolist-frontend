import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered successfully! Redirecting to login...');
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-500">
            <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Register</h2>
                <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
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
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
