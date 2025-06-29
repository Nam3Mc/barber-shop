import PropTypes from 'prop-types';

export default function ButtonUI({ children, onClick, type = 'button', disable: bool }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={bool}
      className="border-3 border-yellow-100/80 p-5 w-fit h-fit hover:bg-white hover:text-black transition-colors rounded"
    >
      {children}
    </button>
  );
}

ButtonUI.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disable: PropTypes.bool
};
