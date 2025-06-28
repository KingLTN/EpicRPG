module.exports = async (client) => {
    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`${client.user.username}`),
        client.chalk.green(`is ready!`)
    );

    client.rpc("start");
    
    // Kiểm tra thời gian nghỉ trước khi bắt đầu
    if (client.checkBreakTime()) {
        console.log(
            client.chalk.blue(client.chalk.bold(`Break Time`)),
            client.chalk.white(`>>`),
            client.chalk.yellow(`Bot đang trong thời gian nghỉ, sẽ bắt đầu sau khi nghỉ xong`)
        );
        return;
    }
    
    // Tự động farm khi bot ready
    const farm = require("../../utils/farm.js");
    const channel = client.channels.cache.get(client.config.channelid);
    if (channel) farm(client, { channel });
};
