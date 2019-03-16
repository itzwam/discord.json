let Logger = require("../lib/logger");


utils = {

    setActivity: (client, type, text, url="") => {
        if (type == "game") {
            client.user.setActivity(text, {
                type: 'PLAYING'
            });
            Logger.info("[INFO] Activity is now set to : " + text + "!");

        } else if (type == "watching") {
            client.user.setActivity(text, {
                type: 'WATCHING'
            });
            Logger.info("[INFO] Activity is now set to : " + text + "!");

        } else if (type == "streaming") {
            client.user.setActivity(text, {
                type: 'STREAMING',
                url: url
            });
            Logger.info("[INFO] Activity is now set to : " + text + "!");

        } else {
            Logger.error("[ERROR] Unknown welcome message type : " + type);
        }
    },

    createInvite: async (channel) => {
        return channel.createInvite();
    } 

}

module.exports = utils 

