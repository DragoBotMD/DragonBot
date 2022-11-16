let handler = m => m
handler.all = async function (m) {
  
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = global.db.data.users[m.sender]

this.spam = this.spam ? this.spam : {}
if (!(m.sender in this.spam)) {
let spaming = {
jid: await m.sender, 
spam: 0,
lastspam: 0
}
this.spam[spaming.jid] = spaming
  
} else try {
this.spam[m.sender].spam += 1
  
if (new Date - this.spam[m.sender].lastspam > 1000) {
if (this.spam[m.sender].spam > 3) {
this.spam[m.sender].spam = 0
  
this.spam[m.sender].lastspam = new Date * 1
let tiempo = 60000 * 1
let time = user.antispam + tiempo * 1
let texto = `*[❗] @${m.sender.split("@")[0]} 𝙽𝙾 𝙷𝙰𝙶𝙰𝚂 𝚂𝙿𝙰𝙼!, 𝙽𝙾 𝙿𝙾𝙳𝚁𝙰𝚂 𝚄𝚂𝙰𝚁 𝙰 ${global.author} 𝙿𝙾𝚁 ${tiempo / 1000 - 59} 𝙼𝙸𝙽𝚄𝚃𝙾*`

if (new Date - user.antispam < tiempo * 1) return
await conn.reply(m.chat, texto,  m, { mentions: this.parseMention(texto) })
