export const signIn = (data) => {
  return {
    type: "SIGNIN",
    payload: { data: data },
  };
};

export const validate = (data) => {
  return {
    type: "VALIDATE",
    payload: { data },
  };
};
