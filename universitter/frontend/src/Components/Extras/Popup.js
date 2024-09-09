import React, { useState, useEffect } from 'react';
import Styles from './Popup.module.css'; // Supondo que você tenha um arquivo CSS para estilos
import { FaStar } from 'react-icons/fa';
import api from '../../services/api.ts';

const Popup = ({ isOpen, onClose, children, callback }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [id, setId] = useState(null);
    const [comment, setComment] = useState(''); // Adiciona o estado para o feedback

    // useEffect para carregar o ID do usuário ao abrir o popup
    useEffect(() => {
        if (isOpen) {
            const getUserId = async () => {
                const userInfo = localStorage.getItem("user_token");
                const { email } = JSON.parse(userInfo);
                try {
                    const resp = await api.get(`/users/${email}`);
                    const userId = resp.data.data.user_id;
                    setId(userId);  // Salva o ID do usuário no estado
                } catch (error) {
                    console.error('Error fetching user ID:', error);
                }
            };

            getUserId();  // Chama a função para buscar o ID
        }
    }, [isOpen]); // Só executa quando `isOpen` muda

    // Função para manipular o envio da avaliação
    const handleSaveRating = async () => {
        if (!rating || !comment) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const data = {
            user_id: id,
            rating,
            comment
        };

        callback(data)
    };

    if (!isOpen) return null;

    return (
        <div className={Styles.overlay} onClick={onClose}>
            <div className={Styles.popup} onClick={e => e.stopPropagation()}>
                <div className={Styles.stars}>
                    <div className={Styles.container}>
                        <h1>Avalie seus serviços</h1>
                        <button className={Styles.closeButton} onClick={onClose}>X</button>
                    </div>
                    {[...Array(5)].map((_, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type='radio'
                                    name='rating'
                                    value={currentRating}
                                    onClick={() => setRating(currentRating)}
                                />
                                <FaStar
                                    className={Styles.star}
                                    size={50}
                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                    <div>
                        <h1>Diga seu feedback sobre este cuidador</h1>
                        <input 
                            className={Styles.Msg} 
                            type='text' 
                            placeholder='Insira sua mensagem'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} // Atualiza o estado do feedback
                        />
                        <button className={Styles.avaliar} onClick={handleSaveRating}>
                            Salvar avaliação
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;
