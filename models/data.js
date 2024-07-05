import mongoose from "mongoose";

const tirePressureSchema = new mongoose.Schema({
    front_left: { type: Number, required: true, min: 0 },
    front_right: { type: Number, required: true, min: 0 },
    rear_left: { type: Number, required: true, min: 0 },
    rear_right: { type: Number, required: true, min: 0 }
});

const dataSchema = new mongoose.Schema({
    vehicle_id: { type: String, required: true },
    timestamp: { type: String, required: true },
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
    direction: { type: Number, required: true, min: 0, max: 360 },
    engine_health: { type: String, required: true, enum: ["Good", "Fair", "Poor"] },
    fuel_efficiency: { type: Number, required: true },
    tire_pressure: { type: tirePressureSchema, required: true },
    battery_status: { type: Number, required: true, min: 0, max: 100 },
    remote_start_status: { type: String, required: true, enum: ["Stopped", "Started"] },
    lock_status: { type: String, required: true, enum: ["Locked", "Unlocked"] },
    geofence_violation: { type: String, required: true, enum: ["None", "Entered restricted area"] }
});

const dataModel = mongoose.model("VehicleData", dataSchema);

export default dataModel;
