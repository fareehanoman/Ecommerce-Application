import bcrypt from "bcrypt";

export const hashPassword = async (password) => {       //plain pswd
  try {
    const saltRounds = 10;          //10 rounds for hashing password
    const hashedPassword = await bcrypt.hash(password, saltRounds);         
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//returns both password 
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};