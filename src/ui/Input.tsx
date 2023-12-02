import { FC } from "react";
import styles from "./Input.module.scss";
import { cutUrl } from "../helpers/cutUrl";
import { Checkbox } from "./Checkbox";

interface InputProps {
	id: string;
	type: string;
	label?: string;
	price?: string | number;
	image?: string;
	onInput: () => void;
	placeholder?: string;
	adds?: { heading: string; paragraph: string };
}

export const Input: FC<InputProps> = ({
	type = "text",
	id,
	label,
	image,
	price,
	onInput,
	placeholder,
	adds,
}) => {
	if (type === "button") {
		return (
			<div className={styles.inputButtonType}>
				<input className={styles.inputType} type="button" id={id}></input>
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

	if (type === "checkbox") {
		return (
			<div className={styles.inputCheckboxType}>
				<input className={styles.inputType} type="button" id={id}></input>
				<div className={styles.inputBox}>
					<div className={styles.text}>
						<input className={styles.inputCheckBox} type="checkbox" />
						<div>
							<span>{adds?.heading}</span>
							<p>{adds?.paragraph}</p>
						</div>
					</div>
					<div>+$1/mo</div>
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
