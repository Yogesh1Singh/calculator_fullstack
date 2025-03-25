const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors()); // Frontend aur backend connect karne ke liye
app.use(express.json()); // JSON data handle karne ke liye

// 🟢 STATIC FILES SERVE KARNE KE LIYE
app.use(express.static(path.join(__dirname, "public")));

// Calculator API
app.post("/calculate", (req, res) => {
    const { num1, num2, operator } = req.body;

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                return res.status(400).json({ error: "Cannot divide by zero!" });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operator" });
    }

    res.json({ result });
});

// 🟢 DEFAULT ROUTE (Homepage)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server start
app.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
});
