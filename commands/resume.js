module.exports = {
    config: {
        name: "3",
    },
    run: async (client, message, args) => {
        if (client.global.paused) {
            if (client.global.captchadetected) {
                client.global.captchadetected = false;
            }
            client.global.paused = false;
            client.rpc("update");
            await message.delete();
            await message.channel.send({ content: "Re" });
        } else {
            await message.delete();
            await message.channel.send({
                content: "working",
            });
        }
    },
};
