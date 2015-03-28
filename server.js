/**
 * Created by SHERRI on 3/27/15.
 */
/**
 * Created by SHERRI on 3/21/15.
 */
//simple server


var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('and the magic port is... http://localhost:'+port+'/index.html');
