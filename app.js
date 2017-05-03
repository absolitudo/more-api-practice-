var express = require("express"),
    app = express();
app.use(express.static("./static"));
app.get("/api/whoami", function(req, res) {
    console.log(JSON.stringify(req.headers));
    res.send({
        "ipaddress": (req.headers['x-forwarded-for'] || '').split(',')[0]  || req.connection.remoteAddress,
        "language": req.headers["accept-language"].slice(0, 5),
        "software": req.headers["user-agent"]
    });
});
app.listen(process.env.PORT || 8080);
console.log("server up");
