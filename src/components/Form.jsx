import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = ({ onChange, handleErrors }) => {
	const onSubmit = (event) => {
		event.preventDefault();

		const emailRegex = /^[A-Za-z0-9._%+-]+@[a-z._-]+\.[A-Za-z]{2,}$/;
		const { nombre, correo, password, passwordRepeat } = event.target;

		if (
			!nombre.value ||
			!correo.value ||
			!password.value ||
			!passwordRepeat.value
		) {
			handleErrors('Todos los campos obligatorios');
			return;
		}

		if (!emailRegex.test(correo.value)) {
			handleErrors('Correo Incorrecto');
			return;
		}

		if (password.value != passwordRepeat.value) {
			handleErrors('Las contraseñas no son iguales');
			return;
		}

		handleErrors('Registro exitoso');
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="nombre"
					type="text"
					placeholder="Ingresa el nombre"
					onChange={onChange}
				/>
			
			</Form.Group>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="correo"
					type="email"
					placeholder="Escribe el correo"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="password"
					type="password"
					placeholder="Password"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="passwordRepeat"
					type="password"
					placeholder="Password"
					onChange={onChange}
				/>
			</Form.Group>

			<Button
				variant="success"
				type="submit"
			>
				Registrarse
			</Button>
		</Form>
	);
};

Formulario.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
};