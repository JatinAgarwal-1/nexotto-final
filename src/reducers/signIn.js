const initialState = {
  loginResult: "",
  user: {
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
  },
  companyName: "",
};

const SignIn = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      console.log("Helllo");
      console.log(action.payload.data);
      console.log("Helllo");
      return action.payload.data;
    case "VALIDATE":
      return action.payload.data;
    default:
      return state;
  }
};

export default SignIn;
