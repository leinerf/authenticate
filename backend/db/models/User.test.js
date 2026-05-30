import User from "./User.js";

const jane = await User.create({
    username: "Jane",
    email: "jane@gmail.com",
    password: "google-auth",
})

console.log("Jane was saved")
console.log(jane.toJSON())