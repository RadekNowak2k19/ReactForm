import { steps } from "../assets/data/steps";
import { iconThank } from "../assets/images";
import styles from "./StepFive.module.scss";
import { Steps } from "./Steps";
export const StepFive = () => {
	return (
		<>
			<div className={`formElement_steps`}>
				{steps.map(step => (
					<Steps key={step.id} step={step} />
				))}
			</div>
			<div className={`formElement_stepsData`}>
				<div className={`fillBackground`}>
					<div className={`fillContainer`}>
						<div className={styles.summaryText}>
							<div className={styles.image}>
								<img src={iconThank} alt="" />
							</div>
							<h2 className={styles.thank}>Thank you!</h2>
							<p className={styles.text}>
								Thank for confirming your subscription! We hope you have fun
								using our platform. If you ever need support, please feel free
								to email us at support@loremgaming.com.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
