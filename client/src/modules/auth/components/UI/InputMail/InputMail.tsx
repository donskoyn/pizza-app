import React from 'react';
import styles from './InputMail.module.scss';

interface InputMailInterface {
    isSubmitting: boolean;
    values: string;
    setFieldTouched?: (email: string) => void;
    setFieldValue?: (email: string, value: string) => void;
}

const InputMail: React.FC<InputMailInterface> = ({
    isSubmitting,
    values,
    setFieldTouched,
    setFieldValue,
}: any) => {
    return (
        <div className={styles.inputForm}>
            <label htmlFor="email" className={styles.labelImg}>
                <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="mail"
                    width="40px"
                    height="35px"
                    fill="grey"
                    aria-hidden="true"
                >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                </svg>
            </label>
            <input
                className={styles.inputAuth}
                disabled={isSubmitting}
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChange={(event) => setFieldValue('email', event.target.value)}
            />
        </div>
    );
};

export default InputMail;
