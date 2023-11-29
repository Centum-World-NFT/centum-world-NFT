import Template from "../components/Template";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image=""
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default LoginPage;
