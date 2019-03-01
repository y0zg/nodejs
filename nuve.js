var config = {}
const nuve_database_url = process.env.HOST_MONGO || "172.15.0.10";
config.nuve = {};
//config.nuve.dataBaseURL = "$nuve_database_url/nuvedb"; // default value: 'localhost/nuvedb'
config.nuve.dataBaseURL = `${nuve_database_url}/nuvedb`; // default value: 'localhost/nuvedb'

//const rabbit_host = process.env.HOST_RABBITMQ || "172.15.0.20";
config.rabbit = {};
config.rabbit.host = process.env.HOST_RABBITMQ || "172.15.0.20"; //default value: 'localhost'

config.erizoController = {};

const ackuaria_stat = !!(process.env.ACKUARIA);
config.erizoController.report = {
//const ackuaria_stat = !!(process.env.ACKUARIA);
    session_events: ackuaria_stat,             // Session level events -- default value: false
    connection_events: false, //ackuaria_stat,  // Connection (ICE) level events -- default value: false
    rtcp_stats: false //ackuaria_stat                   // RTCP stats -- default value: false
};


console.log(`Server is listening on port ${nuve_database_url} nuve ${config.nuve.dataBaseURL} rabbit ${config.rabbit.host} session_events: ${config.erizoController.report.session_events}`);


