module.exports = {
    config: {
        name: "2",
        aliases: ["4"],
    },
    run: async (client, message, args) => {
        if (client.global.paused) {
            await message.delete();
            await message.channel.send({
                content: "P4",
            });
        } else {
            client.global.paused = true;
            client.rpc("update");
            await message.delete();
            await message.channel.send({ content: "P" });
            
            // Dọn dẹp tất cả intervals khi tạm dừng
            const farmModule = require("../utils/farm.js");
            if (farmModule.clearAllIntervals) {
                farmModule.clearAllIntervals();
            }
            // process.exit(0);
        }
    },
};
