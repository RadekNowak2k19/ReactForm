import { steps } from "../assets/data/steps";
import { Button } from "../ui/Button";
import { Steps } from "./Steps";
export const StepOne = () => {
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
						<div>
							<h2>Personal info</h2>
							<p>Please provide your name, email, address, and phone number.</p>
						</div>
						<form>
							<div className={`inputForm`}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
							<div className={`inputForm`}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
							<div className={`inputForm`}>
								<div>
									<label htmlFor="">Name</label>
									<div>error</div>
								</div>
								<input type="text" placeholder="Name" />
							</div>
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
