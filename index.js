const IziProxy = require('izi-proxy');

// Configure Let's Encrypt settings to get SSL certificate
var proxy = new IziProxy({
    maintainerEmail: "dev@dyne.org", // your email
    staging: true // true for testing, false for production (only after testing!)
});

// CNAME your address to pangolin.dyne.org.

// Then just bind your domain to internal address
proxy.register(["pattern.dyne.org"], ["http://localhost:3030"]);
proxy.register(["interfacer-gui-staging.dyne.org"], ["http://localhost:3040"]);
proxy.register(["luigi.dyne.org"], ["http://localhost:3050"]);
proxy.register(["uptime.dyne.org"], ["http://localhost:3001"]);
proxy.register(["explorer.did.dyne.org"], ["http://localhost:3060"]);

// Start proxiyng
proxy.start();
