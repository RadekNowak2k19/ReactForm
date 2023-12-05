import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "inputText":
			return { ...state, [action.payload.key]: action.payload.value };
		default:
			throw new Error(`Unknown action type ${action.type}`);
	}
};

export const useForm = initialValue => {
	const [inputState, dispatch] = useReducer(reducer, initialValue);

	const inputHandler = useCallback((inputKey, inputValue) => {
		dispatch({
			type: "inputText",
			payload: { key: inputKey, value: inputValue },
		});
	}, []);

	return [inputState, inputHandler];
};
