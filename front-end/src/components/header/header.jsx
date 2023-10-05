import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

function Header(){
    return (
        <>
            <p className={styles.title}>РАБОТЫ СТУДЕНТОВ</p>
            <div className={styles.header_btn}>
                <Button className={styles.btn}>Все работы</Button>
                <Button>Иллюстрации</Button>
                <Button>Фото</Button>
                <Button>Шрифты</Button>
            </div>
            
        </>
    )
}
export default Header;