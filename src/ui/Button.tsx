import { FC } from "react";
interface ButtonTypes {
	children: string;
	propsStyles: string;
	onClick: () => void;
}

export const Button: FC<ButtonTypes> = ({ children, propsStyles, onClick }) => {
	return (
		<button className={`btn ${propsStyles}`} onClick={onClick}>
			{children}
		</button>
	);
};
