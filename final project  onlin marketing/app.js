const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Sync DB and start the server
sequelize.sync({ force: false }).then(() => {
    console.log("Database synced");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
