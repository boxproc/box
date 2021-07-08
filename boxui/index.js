const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
 
app.use(compression());
app.use('/ui', express.static(path.join(__dirname, 'ui/build')));
app.get('/ui/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui/build', 'index.html'));
});
 
app.listen(37080, () => {
  console.log('boxui started on port 37080');
});
