import { FC } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
	headingProps: { title: string; paragraph: string };
};

export const Heading: FC<HeadingProps> = ({ headingProps }) => {
	return (
		<div className={styles.heading}>
			<h2>{headingProps.title}</h2>
			<p>{headingProps.paragraph}</p>
		</div>
	);
};
