const Button = (props) => {
  return (
    <div className="mb-3">
      <button onClick={props.handleClick} className="btn btn-success">
        {props.title}
      </button>
    </div>
  );
};
export default Button;
