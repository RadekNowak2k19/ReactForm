import { FC } from "react";
import styles from "./Input.module.scss";
import { cutUrl } from "../helpers/cutUrl";

interface InputProps {
	id: string;
	type: string;
	label?: string;
	price?: string | number;
	image?: string;
	onInput: () => void;
	placeholder?: string;
}

export const Input: FC<InputProps> = ({
	type = "text",
	id,
	label,
	image,
	price,
	onInput,
	placeholder,
}) => {
	if (type === "button") {
		return (
			<div className={styles.inputButtonType}>
				<input type="button" id={id}></input>
				<div className={styles.inputBox}>
					<div className={styles.image}>
						<img src={image} alt={`Icon ${image}`} />
					</div>
					<div className={styles.text}>
						<span>{cutUrl(33, -4, image)}</span>
						<p>{`$${+price}/mo`}</p>
					</div>
				</div>
			</div>
		);
	}

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
