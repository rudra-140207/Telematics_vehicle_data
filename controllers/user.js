import userModel from "../models/user.js";

export const userRegister = async (req, res) => {
  const { vehicle_id, password } = req.body;
  if (!vehicle_id || !password) {
    return res.status(404).json({ message: "Field Missing" });
  }
  try {
    const alreadyRegistered = await userModel.findOne({ vehicle_id });
    if (alreadyRegistered) {
      return res.status(400).json({ message: "Already Registered" });
    }
    const createUser = await userModel.create({ vehicle_id, password });
    if (!createUser) {
      return res.status(400).json({ message: "User not Registered" });
    }
    return res.status(201).json({ message: "Successfully Registered" });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const userLogin = async (req,res) => {
    const {vehicle_id,password} = req.body;
    if(!vehicle_id || !password){
        return res.status(404).json({message : "Field Missing"});
    }
    try {
        const userExist = await userModel.findOne({vehicle_id});
        if(!userExist){
            return res.status(404).json({message : "User not Exist"});
        }
        if(!(password === userExist.password)){
            return res.status(401).json({message : "ID/Password is Incorrect"});
        }
        return res.status(200).json({message :"User Successfully Logined"});

    } catch (error) {
        return res.status(400).json({message : error});
    }
};
