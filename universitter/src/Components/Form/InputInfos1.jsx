import React from "react";
import { Input } from "@chakra-ui/react";
import styles from './UserForm.module.css'

export default function InputInfos1({ name, value, placeholder, onChange }) {


  return (


    <input
      className={styles.fieldtext}
      variant="filled"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
