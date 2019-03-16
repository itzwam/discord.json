module.exports = {
    ActivityTypeEnum = {
        GAMING : "game",
        STREAMING : "streaming",
        WATCHING : "watching"
    },

    setActivity: (client, type, text, url="") => {
        if (type == "game") {
            client.user.setActivity(text, {
                type: 'PLAYING'
            });
        } else if (type == "watching") {
            client.user.setActivity(text, {
                type: 'WATCHING'
            });
        } else if (type == "streaming") {
            client.user.setActivity(text, {
                type: 'STREAMING',
                url: url
            });
        } else {
            console.error("[ERROR] Unknown welcome message type : " + type);
        }
    }

}