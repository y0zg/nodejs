var config = {}
const nuve_database_url = process.env.HOST_MONGO || "172.15.0.10";
config.nuve = {};
//config.nuve.dataBaseURL = "$nuve_database_url/nuvedb"; // default value: 'localhost/nuvedb'
config.nuve.dataBaseURL = nuve_database_url+"/nuvedb"; // default value: 'localhost/nuvedb'

const rabbit_host = process.env.HOST_RABBITMQ || "172.15.0.20";
config.rabbit = {};
config.rabbit.host = rabbit_host; //default value: 'localhost'

console.log(`Server is listening on port ${nuve_database_url} nuve ${config.nuve.dataBaseURL} rabbit ${config.rabbit.host}`);


