const GreenlockProxy = require('greenlock-proxy');

// Configure Let's Encrypt settings to get SSL certificate
var proxy = new GreenlockProxy({
    maintainerEmail: "dev@dyne.org", // your email
    staging: true // true for testing, false for production (only after testing!)
});

// CNAME your address to pangolin.dyne.org.

// Then just bind your domain to internal address
proxy.register(["pattern.dyne.org"], ["http://localhost:3030"]);

// Start proxiyng
proxy.start();
