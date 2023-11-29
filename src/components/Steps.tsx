import { FC } from "react";
import { StepsData } from "../assets/data/steps";
import styles from "./Steps.module.scss";

interface StepsProps {
	step: StepsData;
}
export const Steps: FC<StepsProps> = ({ step }) => {
	const { stepText, stepValue } = step;
	return (
		<div className={styles.steps}>
			<div className={styles.steps_Dot}>{stepValue}</div>
			<div className={styles.step}>
				<span>Step {stepValue}</span>
				<p>{stepText}</p>
			</div>
		</div>
	);
};
