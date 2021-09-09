/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY&t=3391s

    OS module is a built in module that lets you access the OS properties and resources.

    You can find information about current user, system uptime, currentOS, etc
 */

const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The system is running for  ${os.uptime()} seconds`);

console.log(`The system is running for  OS ${os.type()} with total memory ${os.totalmem()} and free memory ${os.freemem()}`);
