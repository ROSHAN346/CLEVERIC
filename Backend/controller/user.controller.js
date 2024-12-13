import User from "../model/user.model.js";
import bcryptjs from "bcrypt";


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });

        console.log("Searching for user with email: " + email);
        console.log("Result: ", user);
        console.log("Alright working " + user);
        if (user) {
            return res.status(400).json({ message: "User already exists"});
        }

        // Encrypt password using bcrypt
        const hashPassword = await bcryptjs.hash(password, 10);

        // Create new user
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword,
        });

        // Save the user in the database
        await createdUser.save();

        res.status(200).json({
            message: 'User created successfully',
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: 'Internal Server roshan Error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });
    } catch (err) {
        console.error("Error: " + err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
