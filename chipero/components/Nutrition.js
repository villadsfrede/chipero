import React, {useState} from "react";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import styles from '../styles/Home.module.css'

const open = false;

const Collapsible = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(open)

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <div className={styles.Collapsible}>
                <h2>{title}</h2>
                <button type="button" className={styles.btn} onClick={handleClick}>
                    {!isOpen ? (
                        <FaArrowUp/>
                    ) : (
                        <FaArrowDown/>
                    )}
                </button>
            </div>
            <div className={styles.collapcontent}>{isOpen && <div>{children}</div>}</div>
        </>
    )
}

export default Collapsible;