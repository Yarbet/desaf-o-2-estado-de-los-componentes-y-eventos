import PropTypes from 'prop-types';
import { Formulario } from '../components/Form';
import { AlertRegister } from '../components/Alert';
import { Redes } from '../components/Redes';


export const Register = ({ onChange, handleErrors, formErrors }) => {
	const icons = [
		'fa-brands fa-facebook',
		'fa-brands fa-github',
		'fa-brands fa-linkedin',
	];

	return (
		<>
        <div className='container'>
            <h1>Crea una cuenta</h1>
			<Redes icons={icons} />
            <h6>O usa tu email para registrarte</h6>
			<Formulario
				onChange={onChange}
				handleErrors={handleErrors}
			/>
			<AlertRegister
				formErrors={formErrors}
				color={formErrors === 'Registro exitoso' ? 'success' : 'danger'}
			/>
        </div>
			
		</>
	);
};

Register.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
	formErrors: PropTypes.string,
};
