export const WelcomeMessage = (props) => {
  console.log(props.name);
  return <h1 className="msg"> {props.name} ,welcome to our site </h1>;
};
