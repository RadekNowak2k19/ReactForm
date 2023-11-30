import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
	type: string;
	id: string;
	label: string;
	onInput: () => void;
	placeholder?: string;
}

export const Input: FC<InputProps> = ({
	type = "text",
	id,
	label,
	onInput,
	placeholder,
}) => {
	console.log(onInput);

	return (
		<div className={styles.inputContainer}>
			<div className={styles.inputContainer_Heading}>
				<label htmlFor={id}>{label}</label>
				<p className={styles.inputError}>Error</p>
			</div>
			<input type={type} placeholder={placeholder} id={id} />
		</div>
	);
};
