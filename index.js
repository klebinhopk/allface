const express = require('express')
 
const app = express()


const path = require('path');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*',(req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('react ok')
})

/*

       this.server.use(express.json())

        this.react.use(express.static(path.join(__dirname, 'build')));
        this.react.get('/*', function(req, res) {
          res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });


*/