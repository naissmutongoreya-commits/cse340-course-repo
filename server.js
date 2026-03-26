import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

app.get("/organizations", (req, res) => {
    res.render("organizations", { title: "Organizations" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects" });
});

app.get("/categories", (req, res) => {
    res.render("categories", { title: "Categories" });
});

// Server start
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});