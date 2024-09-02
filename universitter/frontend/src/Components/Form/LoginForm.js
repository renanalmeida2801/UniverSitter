import { z } from 'zod';
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Styles from './LoginForm.module.css';
import plantImage from './../../img/jardinagem.png';
import pawsImage from './../../img/patas.png';
import googleImage from '../../img/google 1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Define schema with Zod
const loginSchema = z.object({
    email: z.string().email('E-mail digitado inválido.'),
    password: z.string().min(1, 'Necessário inserir a senha!'),
});

// Define the LoginForm component
const LoginForm = (props) => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(''); // Estado para erros gerais de login

    async function post(data) {
        console.log(data);
        try {
            const response = await api.post('/login', data);
            const token = response.data.token;
            console.log(token);
            sessionStorage.setItem('authToken', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log('Resposta do servidor:', response.data);
            if (token) navigate('/');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setLoginError('E-mail ou senha inválidos. Por favor, tente novamente.'); // Mensagem de erro geral
        }
    }

    const onSubmit = async (data) => {
        setLoginError(''); // Limpa erros anteriores antes de tentar novamente
        await post(data);
    };