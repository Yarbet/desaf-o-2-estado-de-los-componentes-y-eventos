import PropTypes from 'prop-types';

export const Redes = ({ icons }) => {
	return (
		<div>
			{icons.map((icon, key) => (
				<div key={key}>
					<a href="">
						<i className={icon}></i>
					</a>
				</div>
			))}
		</div>
	);
};

Redes.propTypes = {
	icons: PropTypes.array,
};