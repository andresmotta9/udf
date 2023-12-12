import { useState } from "react"

export const useForm = (initialForm = {}) => {
	const [formstate, setFormState] = useState(initialForm);
	//@ts-ignore
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formstate,
			[name]: value
		})
	}

	const onResetForm = () => {
		setFormState(initialForm);
	}

	return {
		...formstate,
		formstate,
		onInputChange,
		onResetForm
	}
}
