let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐝𝐫𝐚𝐠𝐨𝐧-𝐛𝐨𝐭', body: '©𝐴𝐿𝐸𝑋𝐼𝑆 𝑂𝐹𝐶', sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐝𝐫𝐚𝐠𝐨𝐧-𝐛𝐨𝐭', body: '©𝐴𝐿𝐸𝑋𝐼𝑆 𝑂𝐹𝐶', sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
Footer
© 2022 GitHub, Inc.
Footer navigation
