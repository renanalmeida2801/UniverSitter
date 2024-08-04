import React from "react";
import { Input } from "@chakra-ui/react";
import styles from './UserForm.module.css'

export default function InputInfos2({ name, value, placeholder, onChange }) {


    return (


        <input
            className={styles.anothertext}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
