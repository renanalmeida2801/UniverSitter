
import styles from './EditSitterForm.module.css';
import { useState } from 'react';
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form';
import CategoryDropdown from './CategoryDropdown.js';
import SitterProfilePicture from './SitterProfilePicture.js';
import { useContext } from 'react';
import { AuthContext } from '../../Context/auth.js';
import { toast } from 'react-toastify'; // Import toast methods
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function EditSitterForm() {
  const { user, setUser } = useContext(AuthContext);
  const [selected, setSelected] = useState('');
  const selectedNumberFromDB = 1;
  const { register, handleSubmit, setValue } = useForm();
  const [image, setImage] = useState('');
  const [sitterData, setSitterData] = useState({});

  const navigate = useNavigate();


  const loadSitter = async () => {
    const userInfo = localStorage.getItem("user_token")
    const {email} = JSON.parse(userInfo)
    try {
        const resp = await api.get(`/users/${email}`);
        const id = resp.data.data.user_id
        const response = await api.get(`/sitterByUserId/${id}`);
        setSitterData(response.data.data)
        console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadSitter();
  }, []);

  async function put(data) {
    try {
      const response = await api.put('/sitters', data);
      toast.success('Dados enviados com sucesso!'); // Show success toast
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
      endereco: enderecoCompleto,
      image: base64Image
    };

    put(dadosComEndereco);
  };

  useEffect(() => {
    if (sitterData.endereco) {
      const partes = sitterData.endereco.split(",").map(parte => parte.trim());
      const enderecoCompleto = {
        rua: partes[0],
        numero: partes[1],
        bairro: partes[2],
        complemento: partes[3],
        referencia: partes[4]
      };

      // Atualizando os valores dos inputs com `setValue`
      setValue('cpf', sitterData.cpf || '');
      setValue('descricao', sitterData.descricao || '');
      setValue('endereco', enderecoCompleto.rua || '');
      setValue('numero', enderecoCompleto.numero || '');
      setValue('bairro', enderecoCompleto.bairro || '');
      setValue('complemento', enderecoCompleto.complemento || '');
      setValue('referencia', enderecoCompleto.referencia || '');
    }
  }, [sitterData, setValue]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3}>Edite suas informações</h3>
        {sitterData.foto && (
        <SitterProfilePicture imgUrl={sitterData.foto} callback={setImage} />
      )}
      {sitterData.categoria !== undefined &&(
        <CategoryDropdown  selectedNumber={sitterData.categoria} selected={selected} setSelected={setSelected} />
      )}
        <div className={styles.form_group}>
          <input type='text' {...register("cpf")} className={styles.cpf} placeholder={'CPF'}/>
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("descricao")} className={styles.descricao} placeholder={'Descrição'}/>
        </div>

        <div className={styles.form_group}>
          <input type='text' {...register("endereco")} className={styles.endereco} placeholder={'endereço'} />
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
          <button onClick={() =>{

          }} type='Submit' className={styles.button}>Salvar</button>
        </div>
        <div className={styles.form_group}>
          <button onClick={()=>{
            navigate('/my-profille')
          }} type='Submit' className={styles.buttonCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EditSitterForm;
