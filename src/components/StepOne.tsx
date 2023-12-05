import { headingArr } from "../assets/data/heading";
import { steps } from "../assets/data/steps";
import { StepProps } from "../types";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";
import { Steps } from "./Steps";

export const StepOne: React.FC<StepProps> = ({
	handleChangeStep,
	inputHandler,
}) => {
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
						<form>
							<Input
								type="text"
								id="name"
								label="Name"
								placeholder="e.g Stephen King"
								onInput={inputHandler}
							/>
							<Input
								type="email"
								id="email"
								label="Email Address"
								placeholder="e.g stephenking@lorem.com"
								onInput={inputHandler}
							/>
							<Input
								type="number"
								id="number"
								label="Number"
								placeholder="e.g +123456789"
								onInput={inputHandler}
							/>
						</form>
					</div>
				</div>
				<div className={`buttons`}>
					<div></div>
					<Button
						onClick={() => handleChangeStep("increase")}
						propsStyles="nextStep"
					>
						Next Step
					</Button>
				</div>
			</div>
		</>
	);
};
