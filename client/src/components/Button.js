function Button(props) {
  return (
    <button style={rootStyle} onClick={props.onClick}>
      Click Me!
    </button>
  );
}

const rootStyle = {
  background: "black",
};

export default Button;
