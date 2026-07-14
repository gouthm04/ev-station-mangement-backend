const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://goutham:goutham123@cluster0.umdwywd.mongodb.net/evstationdb")
    .then(
        () => {
            console.log("MongoDB Connected")
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )

const Booking = mongoose.model("Bookings", new mongoose.Schema(
    {
        bookingId: String,
        ownerName: String,
        email: String,
        phone: String,
        vehicleRegistrationNumber: String,
        vehicleBrand: String,
        vehicleModel: String,
        batteryCapacity: String,
        connectorType: String,
        chargingDate: String,
        timeSlot: String,
        estimatedUnits: String,
        chargingBayNumber: String
    }
))
app.get("/test", (req,res) => {
    res.send("Hi")
})


app.post("/add-booking" ,async(req,res) => {
    await Booking.create(req.body)
    res.json({"status" : "Success"})
})

app.listen(3000,() => {
    console.log("Server Started")
})
