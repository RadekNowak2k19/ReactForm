import { headingArr } from "../assets/data/heading";
import { steps } from "../assets/data/steps";
import { iconAdvanced, iconArcade, iconPro } from "../assets/images";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Steps } from "./Steps";
import styles from "./StepTwo.module.scss";

export const StepTwo = () => {
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
						<Heading headingProps={headingArr[1]} />
						<form className={styles.formContainer}>
							<Input
								type="button"
								id="button"
								onInput={() => {}}
								image={iconArcade}
								price="9"
							/>
							<Input
								type="button"
								id="button"
								onInput={() => {}}
								image={iconAdvanced}
								price="12"
							/>
							<Input
								type="button"
								id="button"
								onInput={() => {}}
								image={iconPro}
								price="15"
							/>
						</form>
						<div className={styles.selectContainer}>
							<span>Monthly</span>
							<Select />
							<span>Yearly</span>
						</div>
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
