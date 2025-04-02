// src/pages/Cadastro.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/cadastro.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                setMessage(data.message);
                setTimeout(() => navigate('/'), 2000);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Erro ao conectar com o servidor');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h2>
                {message && <div className="mb-4 p-2 bg-blue-900 text-white rounded">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Nome de Usuário</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">E-mail</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2">Senha</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};