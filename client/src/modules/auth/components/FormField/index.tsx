import React, { ReactNode } from "react";
import styles from "./FormField.module.scss";

interface formFieldInterface {
    title: string;
    required: boolean;
    errorMessage?: string | boolean;
    children: ReactNode;
}

const FormField: React.FC<formFieldInterface> = ({
    title,
    required,
    errorMessage,
    children,
}): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                {required && <span className={styles.asterisk}>*</span>}
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.inputForm}>
                {children}
                {errorMessage ? (
                    <div className={styles.error}>{errorMessage}</div>
                ) : (
                    <div className={styles.error}></div>
                )}
            </div>
        </div>
    );
};

export default FormField;
