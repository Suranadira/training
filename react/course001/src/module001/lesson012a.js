export default props => {
  let defaults = {
    text: "Hello, World!"
  };
  props = Object.assign(defaults, props);
  return props.text;
};
