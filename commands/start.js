module.exports = {
    config: {
        name: "1",
    },
    run: async (client, message, args) => {
        if (client.global.paused) {
            if (client.global.captchadetected) {
                client.global.captchadetected = false;
            }
            client.global.paused = false;
            client.rpc("update");
            await message.delete();
            await message.channel.send({ content: "BOT started have fun ;)" });
            setTimeout(() => {
                require("../utils/farm.js")(client, message);
            }, 1000);
        } else {
            await message.delete();
            await message.channel.send({
                content: "Bot is already working!!!",
            });
        }
    },
};
