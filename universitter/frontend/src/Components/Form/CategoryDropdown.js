import styles from './CategoryDropdown.module.css'
import { useState } from 'react'


function CategoryDropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Somente Animais', 'Somente Plantas', 'Animais e Plantas'];
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_btn} onClick={e => setIsActive(!isActive)}>{selected}
        <span className='fas fa-caret-down'></span>
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {options.map(option => (
            <div onClick={e => {
              setSelected(option)
              setIsActive(false)
            }}
              className={styles.dropdown_item}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
