const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.post('/submit', (req, res) => {
    // Handle form data here
    // You can access the submitted data using req.body
  
    // For example, you can log the submitted data
    console.log(req.body);
  
    // Send a response back to the client
    res.send("Form submitted successfully");
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/', (req,res)=>{
    res.send("Hello")

})
app.get('/test', (req,res)=>{
    res.send("test Hello")
})

module.exports = app