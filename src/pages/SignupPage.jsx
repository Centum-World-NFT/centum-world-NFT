import Template from "../components/Template"

const SignupPage = ({setIsLoggedIn}) => {
  return (
    <>
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image=""
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </>
  )
}

export default SignupPage