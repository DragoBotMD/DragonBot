let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ππ«ππ π¨π§-ππ¨π­', body: 'Β©π΄πΏπΈππΌπ ππΉπΆ', sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ππ«ππ π¨π§-ππ¨π­', body: 'Β©π΄πΏπΈππΌπ ππΉπΆ', sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
Footer
Β© 2022 GitHub, Inc.
Footer navigation
