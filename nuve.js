var config = {}
const nuve_database_url = process.env.HOST_MONGO || XXX;
config.nuve = {};
//config.nuve.dataBaseURL = "$nuve_database_url/nuvedb"; // default value: 'localhost/nuvedb'
config.nuve.dataBaseURL = nuve_database_url+"/nuvedb"; // default value: 'localhost/nuvedb'
console.log(`Server is listening on port ${nuve_database_url} ${config.nuve.dataBaseURL}`);
