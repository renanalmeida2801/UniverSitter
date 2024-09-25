import { useState, useEffect } from 'react';
import styles from './CategoryDropdown.module.css';

function CategoryDropdown({ selectedNumber, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Somente Animais', 'Somente Plantas', 'Animais e Plantas'];

  // Define o valor inicial apenas na primeira renderização
  useEffect(() => {
    if (selectedNumber !== undefined && selectedNumber >= 0 && selectedNumber < options.length) {
      setSelected(options[selectedNumber]);  // Carrega o valor do banco apenas uma vez
    }
  }, [selectedNumber]);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_btn} onClick={() => setIsActive(!isActive)}>
        {selected || 'Selecione uma categoria'}
        <span className='fas fa-caret-down'></span>
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {options.map((option, index) => (
            <div key={index} onClick={() => {
              setSelected(option);  // Permite ao usuário editar a categoria
              setIsActive(false);
            }}
            className={styles.dropdown_item}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
