module.exports = {
    config: {
        name: "2",
        aliases: ["4"],
    },
    run: async (client, message, args) => {
        if (client.global.paused) {
            await message.delete();
            await message.channel.send({
                content: "4!!!",
            });
        } else {
            client.global.paused = true;
            client.rpc("update");
            await message.delete();
            await message.channel.send({ content: "2" });
            // process.exit(0);
        }
    },
};
