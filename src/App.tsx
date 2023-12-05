import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepsFour } from "./components/StepFour";
import { StepFive } from "./components/StepFive";
import { useState } from "react";
import { useForm } from "./hooks/useForm";

export const App = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const formData = {
		name: "",
		email: "",
		number: "",
		plan: "",
	};

	const [inputState, inputHandler] = useForm(formData);

	const handleChangeStep = (changeStep: "increase" | "decrease") => {
		if (changeStep === "increase") {
			setCurrentStep(currentStep + 1), console.log(inputState);
		}
		if (changeStep === "decrease") setCurrentStep(currentStep - 1);
	};

	return (
		<div className={`formElement`}>
			{currentStep === 0 && (
				<StepOne
					inputHandler={inputHandler}
					handleChangeStep={handleChangeStep}
				/>
			)}
			{currentStep === 1 && <StepTwo handleChangeStep={handleChangeStep} />}
			{currentStep === 2 && <StepThree handleChangeStep={handleChangeStep} />}
			{currentStep === 3 && <StepsFour handleChangeStep={handleChangeStep} />}
			{currentStep === 4 && <StepFive />}
		</div>
	);
};
