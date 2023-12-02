export interface StepsData {
	id: number;
	stepValue: number;
	stepText: string;
}
export const steps: StepsData[] = [
	{ id: 0, stepValue: 1, stepText: "Your info" },
	{ id: 1, stepValue: 2, stepText: "Select plan" },
	{ id: 2, stepValue: 3, stepText: "Add-ons" },
	{ id: 3, stepValue: 4, stepText: "Summary" },
];
export const stepsAdds = [
	{
		id: 0,
		heading: "Online service",
		paragraph: "Access ti multiplayer games",
	},
	{ id: 1, heading: "Larger storage", paragraph: "Extra 1TB of cloud save" },
	{
		id: 2,
		heading: "Customizable profile",
		paragraph: "Custom theme on your profile",
	},
];
