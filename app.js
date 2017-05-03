var express = require("express"),
    app = express();
app.use(express.static("./static"));
app.get("/api/whoami", function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
    res.send({
        "ipaddress": req.headers.host,
        "language": req.headers["accept-language"].slice(0, 5),
        "software": req.headers["user-agent"]
    });
});
app.listen(process.env.PORT || 8080);
console.log("server up");
