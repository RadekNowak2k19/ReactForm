import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepsFour } from "./components/StepFour";
import { StepFive } from "./components/StepFive";

export const App = () => {
	return (
		<div className={`formElement`}>
			{/* <StepOne /> */}
			{/* <StepTwo /> */}
			{/* <StepThree /> */}
			{/* <StepsFour /> */}
			<StepFive />
		</div>
	);
};
