import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = ({ onChange, handleErrors }) => {
	const onSubmit = (event) => {
		event.preventDefault();

		const emailRegex = /^[A-Za-z0-9._%+-]+@[a-z._-]+\.[A-Za-z]{2,}$/;
		const { nombre, apellido, correo, password, passwordRepeat } = event.target;

		if (
			!nombre.value ||
			!apellido.value ||
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
				<Form.Label>Nombre</Form.Label>
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
				<Form.Label>Apellido</Form.Label>
				<Form.Control
					name="apellido"
					type="text"
					placeholder="Ingresa Apellido"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Correo</Form.Label>
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
				<Form.Label>Password</Form.Label>
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
				<Form.Label>Password Repeat</Form.Label>
				<Form.Control
					name="passwordRepeat"
					type="password"
					placeholder="Password"
					onChange={onChange}
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit"
			>
				Submit
			</Button>
		</Form>
	);
};

Formulario.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
};