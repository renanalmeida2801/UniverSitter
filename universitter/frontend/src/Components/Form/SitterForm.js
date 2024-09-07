
import styles from './SitterForm.module.css';
import { useState } from 'react';
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form';
import CategoryDropdown from './CategoryDropdown';
import SitterProfilePicture from './SitterProfilePicture';
import { useContext } from 'react';
import { AuthContext } from '../../Context/auth';
import { toast } from 'react-toastify'; // Import toast methods
import { useNavigate } from 'react-router-dom';

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function SitterForm() {
  const { user, setUser } = useContext(AuthContext);
  const [selected, setSelected] = useState("Selecione a categoria");
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState('');

  const navigate = useNavigate();


  async function post(data) {
    try {
      const response = await api.post('/sitters', data);
      toast.success('Dados enviados com sucesso!'); // Show success toast
      setUser({ ...user, is_sitter: true }); // Update user context
      navigate('/'); // Navigate to home page

    } catch (error) {
      toast.error('Erro ao enviar dados. Tente novamente.'); // Show error toast
      console.error('Erro ao enviar dados:', error);
    }
  }

  const onSubmit = async (data) => {
    const enderecoCompleto = `${data.endereco}, ${data.numero}, ${data.bairro}, ${data.complemento}, ${data.referencia}`;

    let base64Image = '';

    if (image instanceof File) {
      base64Image = await convertToBase64(image);
    }

    // Adicionando a string de endereço de volta aos dados
    const dadosComEndereco = {
      ...data,
      categoria: ['Somente Animais', 'Somente Plantas', 'Animais e Plantas'].indexOf(selected),
      user_id: user.user_id,
      enderecoCompleto: enderecoCompleto,
      image: base64Image
    };

    post(dadosComEndereco);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3}>Torne-se um cuidador</h3>
        <SitterProfilePicture callback={setImage} />
        <CategoryDropdown selected={selected} setSelected={setSelected} />

        <div className={styles.form_group}>
          <input type='text' {...register("cpf")} className={styles.cpf} placeholder='CPF' />
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("descricao")} className={styles.descricao} placeholder='Descrição' />
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("endereco")} className={styles.endereco} placeholder='Endereço' />
        </div>

        <div className={styles.form_group}>
          <input type='number' {...register("numero")} className={styles.number} placeholder='N°' />
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("bairro")} className={styles.bairro} placeholder='Bairro' />
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("complemento")} className={styles.complemento} placeholder='Complemento' />
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("referencia")} className={styles.referencia} placeholder='Referência (opicional)' />
        </div>

        <div className={styles.form_group}>
          <button type='Submit' className={styles.button}>Tornar-se cuidador</button>
        </div>
      </form>
    </div>
  );
}

export default SitterForm;
