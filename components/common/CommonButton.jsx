// Button.js
const Button = ({ children, onClick, className = "", ...props }) => {
    return (
      <button
        type="submit"
        className={`btn btnGeneral ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  