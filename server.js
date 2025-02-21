const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// ✅ GET Request for /bfhl
app.get("/bfhl", (req, res) => {
    try {
        return res.status(200).json({ operation_code: 1 });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ POST Request for /bfhl
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ message: "Invalid input data format" });
        }

        const numbers = data.filter((item) => !isNaN(item));
        const alphabets = data.filter((item) => isNaN(item));

        return res.status(200).json({
            is_success: true,
            user_id: "sidharth_mehta",
            email: "sidharth@example.com",
            roll_number: "123456",
            numbers: numbers,
            alphabets: alphabets
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
