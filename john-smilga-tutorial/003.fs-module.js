/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY&t=4206s

    To read and write files synchronously, use the readFileSync and writeFileSync
*/

const {readFileSync, writeFileSync} = require('fs');
const {readFile, writeFile} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/firstWrite.txt', `Here is the result ${first} and ${second}`, 'utf-8');

readFile('./content/first.txt', 'utf-8', function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);

    writeFile('./content/asyncWrite.txt', result, {flag: 'a'}, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});