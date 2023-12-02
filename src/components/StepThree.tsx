import { headingArr } from "../assets/data/heading";
import { steps, stepsAdds } from "../assets/data/steps";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";
import styles from "./StepThree.module.scss";
import { Steps } from "./Steps";
export const StepThree = () => {
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
						<Heading headingProps={headingArr[2]} />
						<form className={styles.formContainer}>
							<Input
								type="checkbox"
								id="checkbox"
								onInput={() => {}}
								adds={stepsAdds[0]}
							/>
							<Input
								type="checkbox"
								id="checkbox"
								onInput={() => {}}
								adds={stepsAdds[1]}
							/>
							<Input
								type="checkbox"
								id="checkbox"
								onInput={() => {}}
								adds={stepsAdds[2]}
							/>
						</form>
					</div>
				</div>
				<div className={`buttons`}>
					<Button onClick={() => console.log("clicked")} propsStyles="goBack">
						Go Back
					</Button>
					<Button onClick={() => console.log("clicked")} propsStyles="nextStep">
						Next Step
					</Button>
				</div>
			</div>
		</>
	);
};
