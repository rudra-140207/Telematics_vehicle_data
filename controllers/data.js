import dataModel from "../models/data.js";

export const fetchData = async(req,res)=>{
    const vehicleID = req.query.vehicleID;
    console.log(vehicleID)
    if (!vehicleID) {
        return res.status(400).json({message : 'Query parameter is required'});
    }

    try {
        const data = await dataModel.find({ vehicle_id: vehicleID });
        console.log(data.direction)
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({message : 'Server error'});
    }
}
