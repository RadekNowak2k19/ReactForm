import { headingArr } from "../assets/data/heading";
import { steps } from "../assets/data/steps";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import styles from "./StepFour.module.scss";
import { Steps } from "./Steps";
export const StepsFour = () => {
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
						<Heading headingProps={headingArr[0]} />
						<div className={styles.summary}>
							<div className={styles.summary_Plan}>
								<span className={styles.plan}>
									<p>Arcade Monthly</p>
									<a href="#">Change</a>
								</span>
								<span className={styles.price}>$9/mo</span>
							</div>
							<div className={styles.summary_Line}></div>
							<div className={styles.summary_MoreOptions}>
								<div>
									<p>Online service</p>
									<span>+$1/mo</span>
								</div>
								<div>
									<p>Larger storage</p>
									<span>+$2/mo</span>
								</div>
							</div>
						</div>
						<div className={styles.total}>
							Total (per month) <span>+$12/mo</span>
						</div>
					</div>
				</div>
				<div className={`buttons`}>
					<Button onClick={() => console.log("clicked")} propsStyles="goBack">
						Go Back
					</Button>
					<Button onClick={() => console.log("clicked")} propsStyles="nextStep">
						Confirm
					</Button>
				</div>
			</div>
		</>
	);
};
