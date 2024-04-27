import { useState } from 'react';
import './App.css';
import { Register } from './views/Register';


function App() {
	const [formErrors, setFormErrors] = useState('');

	const [form, setForm] = useState({
		nombre: '',
		apellido: '',
		correo: '',
		password: '',
		passwordRepeat: '',
	});

	const onChange = (event) => {
		const { name, value } = event.targe
		setForm({
			...form,
			[name]: value,
		});
	
	const handleErrors = (msg) => {
		setFormErrors(msg);
	};

	return (
		<>
			{ <Register
				onChange={onChange}
				handleErrors={handleErrors}
				formErrors={formErrors}
			/> }
		</>
	);
}}

export default App;