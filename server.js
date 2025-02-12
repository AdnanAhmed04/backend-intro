require("dotenv").config();
const PORT = 4000;
// Load environment variables from .env
// ye ac leye use kia hai because agr app ka code kise or computer perr run ho or uss perr 
// wo port busy ho tou wo .env walee port use karay ga or agr busy nhi hoyee tou simple jo app 
// nay port dee hai wo use karay gaaa

// env ko hum gitignore may rakna hai takay humaraee important things leak na hooo
// env ka matlab environmental variable

// initialize kia hai or y ac leye kia hai because hum khud yes yes karay sab ko ac leye hum nay
// -y use kia hai takay khud heee wo sab ko yes karday simple hai
// npm init -y


// perrr express install ki hai
// npm install express


const express = require("express");  // Import Express
const app = express();  // sare express ki power app may trasfer ki hai takay anay walee 
// time perr hum bar bar express use na karay instead of this hum app use karay gay



// Define a simple route
// yee simple ak call back hai jiss may "/" ye route hai jiss page perr data show karna hai or ak request hai or ak response hai
app.get("/", (req, res) => {
    res.send("Welcome to My Express Backend!");
// ye wo hai jo app ko show karna hai ye kuch bhee hosaktaaa hai h1  p kuch bhee 
});

// Set the server to listen on port 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// npm install -g nodemon
// node mon ac leye use kia hai takay hum kkoo bar bar server restart na karna 
// paray perr just like react hoga matalab khud reload hoga