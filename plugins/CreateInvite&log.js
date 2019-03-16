utils = require("../core/utils.js")
client = null
let Logger = require("../lib/logger");


module.exports = class myPlugin {
    /**
     * Handle the plugin action
     * 
     * @param {Discord.client} client 
     */
    static handle(_client){
        client = _client;
        // commands that you need to write
        // Just for the example :
        console.log('[INFO] Invite command test loaded');

        client.on("message", msg => {
            if(msg.content == "!invite"){
                invite = utils.createInvite(msg.channel)
                msg.channel.send(`Votre lien d'invitation : \n\nhttps://discord.gg/${invite.code}`)
            }
        })
    }
}