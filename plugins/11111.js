import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {	
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
/*await conn.sendMessage(m.chat, {
        text: `*Hey @${m.sender.split`@`[0]} cargando el menu..`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })*/
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `╔═════════════════╗
┇➤ 𝙃𝙊𝙇𝘼, 𝙃𝙐𝙈𝘼𝙉𝙊 
┇ @${m.sender.split("@")[0]}
╚═════════════════╝
╔═════════════════╗
┇➤ 𝙋𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙓 // 𝙀𝘽𝙂 
╚═════════════════╝‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╔═════════════════╗‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
│🍂⃟🎃┊.owner
│🍂⃟🎃┊.info
│🍂⃟🎃┊.totalfunciones
│🍂⃟🎃┊.menu
│🍂⃟🎃┊.ping
│🍂⃟🎃┊.runtime
│🍂⃟🎃┊.speedtest
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.aptoidesearch *<búsqueda>*
│🍂⃟🎃┊.spotifysearch *<búsqueda>*
│🍂⃟🎃┊.tiktoksearch *<búsqueda>*
│🍂⃟🎃┊.tweetposts *<búsqueda>*
│🍂⃟🎃┊.google *<texto>*
│🍂⃟🎃┊.ytsearch *<búsqueda>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.iqtest
│🍂⃟🎃┊.acertijo
│🍂⃟🎃┊.apostar *<cantidad>*
│🍂⃟🎃┊.coinflip
│🍂⃟🎃┊.mates
│🍂⃟🎃┊.ppt
│🍂⃟🎃┊.ruleta *<cantidad> <color>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.bots
│🍂⃟🎃┊.code
│🍂⃟🎃┊.delsession
│🍂⃟🎃┊.serbot
│🍂⃟🎃┊.stop
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.bank
│🍂⃟🎃┊.crimen
│🍂⃟🎃┊.claim
│🍂⃟🎃┊.darstars *@user <cantidad>*
│🍂⃟🎃┊.darxp *@user <cantidad>*
│🍂⃟🎃┊.depositar
│🍂⃟🎃┊.lb
│🍂⃟🎃┊.levelup
│🍂⃟🎃┊.minar
│🍂⃟🎃┊.retirar
│🍂⃟🎃┊.buycoins
│🍂⃟🎃┊.buyall
│🍂⃟🎃┊.estrellas
│🍂⃟🎃┊.work
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.sn
│🍂⃟🎃┊.perfil
│🍂⃟🎃┊.perfil *@user*
│🍂⃟🎃┊.reg *<nombre.edad>*
│🍂⃟🎃┊.unreg
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.emojimix *<emoji+emoji>*
│🍂⃟🎃┊.quotly *<texto>*
│🍂⃟🎃┊.scat
│🍂⃟🎃┊.smeme *<texto>*
│🍂⃟🎃┊.sticker
│🍂⃟🎃┊.wm *<nombre>|<autor>*
│🍂⃟🎃┊.wm2
│🍂⃟🎃┊.toimg *<sticker>*
│🍂⃟🎃┊.tovid *<sticker>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.imagen *<búsqueda>*
│🍂⃟🎃┊.megumin
│🍂⃟🎃┊.neko
│🍂⃟🎃┊.neko2
│🍂⃟🎃┊.pinterest *<búsqueda>*
│🍂⃟🎃┊.pixiv *<búsqueda>*
│🍂⃟🎃┊.ppcouple
│🍂⃟🎃┊.shinobu
│🍂⃟🎃┊.waifu
│🍂⃟🎃┊.wallpaper *<búsqueda>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.antibot *<on/off>*
│🍂⃟🎃┊.banearbot
│🍂⃟🎃┊.checkexpired
│🍂⃟🎃┊.delete
│🍂⃟🎃┊.demote *@tag*
│🍂⃟🎃┊.infogp
│🍂⃟🎃┊.invite *<521>*
│🍂⃟🎃┊.kick *@user*
│🍂⃟🎃┊.link
│🍂⃟🎃┊.encuesta *<pregunta|opciones>*
│🍂⃟🎃┊.promote *@user*
│🍂⃟🎃┊.resetlink
│🍂⃟🎃┊.setppgc
│🍂⃟🎃┊.group *abrir/cerrar*
│🍂⃟🎃┊.tag
│🍂⃟🎃┊.desbanearbot
│🍂⃟🎃┊.otag
│🍂⃟🎃┊.tagall <mesaje>
│🍂⃟🎃┊.invocar <mesaje>
│🍂⃟🎃┊.getbio
│🍂⃟🎃┊.getbio *@tag*
│🍂⃟🎃┊.getname
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.enable
│🍂⃟🎃┊.disable
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.mediafire *<url>*  ◜🪪◞
│🍂⃟🎃┊.ytdl *<link yt>*  ◜🪪◞
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊Audio
│🍂⃟🎃┊Video
│🍂⃟🎃┊.aptoide *<búsqueda>*
│🍂⃟🎃┊.danbooru *<url>*
│🍂⃟🎃┊.fb *<link fb>*
│🍂⃟🎃┊.gitclone *<url git>*
│🍂⃟🎃┊.instagram *<link ig>*
│🍂⃟🎃┊.likeedl *<url>*
│🍂⃟🎃┊.mediafire *<url>*  ◜🪪◞
│🍂⃟🎃┊.pinterestdl *<url pin>*
│🍂⃟🎃┊.soundcloud *<búsqueda>*
│🍂⃟🎃┊.spotify
│🍂⃟🎃┊.spotifydl
│🍂⃟🎃┊.tiktok *<url tt>*
│🍂⃟🎃┊.tiktokuser *<usuario>*
│🍂⃟🎃┊.tiktokvid *<búsqueda>*
│🍂⃟🎃┊.pixiv *<búsqueda>*
│🍂⃟🎃┊.xnxxdl *<url>*
│🍂⃟🎃┊.xvideosdl *<url>*
│🍂⃟🎃┊.play *<búsqueda>*
│🍂⃟🎃┊.play2 <formato> <búsqueda>
│🍂⃟🎃┊.ytdl *<link yt>*  ◜🪪◞
│🍂⃟🎃┊.ytmp3 *<link yt>*
│🍂⃟🎃┊.ytmp3doc *<link yt>*
│🍂⃟🎃┊.ytmp4 *<link yt>*
│🍂⃟🎃┊.ytmp4doc *<link yt>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.ai *<texto>*
│🍂⃟🎃┊.google *<texto>*
│🍂⃟🎃┊.acortar *<url>*
│🍂⃟🎃┊.ia *<petición>*
│🍂⃟🎃┊.blackbox *<petición>*
│🍂⃟🎃┊.cal *<ecuacion>*
│🍂⃟🎃┊.chazam *<Audio/Video>*
│🍂⃟🎃┊.detectface
│🍂⃟🎃┊.fake *<texto/@tag/texto>*
│🍂⃟🎃┊.gemini *<petición>*
│🍂⃟🎃┊.getpp
│🍂⃟🎃┊.hd
│🍂⃟🎃┊.ibb
│🍂⃟🎃┊.igstalk <usuario>
│🍂⃟🎃┊.morse *<encode|decode>*
│🍂⃟🎃┊.qrcode *<texto>*
│🍂⃟🎃┊.react *<emoji>*
│🍂⃟🎃┊.readmore *<teks>|<teks>*
│🍂⃟🎃┊.ver
│🍂⃟🎃┊.similarface
│🍂⃟🎃┊.ss *<url>*
│🍂⃟🎃┊.ssweb *<url>*
│🍂⃟🎃┊.style *<texto>*
│🍂⃟🎃┊.tamaño *<cantidad>*
│🍂⃟🎃┊.tiktokstalk <usuario>
│🍂⃟🎃┊.document *<audio/video>*
│🍂⃟🎃┊.togifaud
│🍂⃟🎃┊.toimg *<sticker>*
│🍂⃟🎃┊.tomp3
│🍂⃟🎃┊.tourl
│🍂⃟🎃┊.tovid *<sticker>*
│🍂⃟🎃┊.trad *<leng> <texto>*
│🍂⃟🎃┊.transcripyt *<url>*
│🍂⃟🎃┊.tts *<texto>*
│🍂⃟🎃┊.tweestalk *<usuario>*
│🍂⃟🎃┊.vcard *@tag*
│🍂⃟🎃┊.whatmusic *<audio/video>*
│🍂⃟🎃┊.zodiac *2002 02 25*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.afk *<razón>*
│🍂⃟🎃┊.gay2 *@user*
│🍂⃟🎃┊.lesbiana *@user*
│🍂⃟🎃┊.pajero *@user*
│🍂⃟🎃┊.pajera *@user*
│🍂⃟🎃┊.puto *@user*
│🍂⃟🎃┊.puta *@user*
│🍂⃟🎃┊.manco *@user*
│🍂⃟🎃┊.manca *@user*
│🍂⃟🎃┊.rata *@user*
│🍂⃟🎃┊.prostituta *@user*
│🍂⃟🎃┊.prostituto *@user*
│🍂⃟🎃┊.dance *<@user>*
│🍂⃟🎃┊.follar
│🍂⃟🎃┊.formarpareja
│🍂⃟🎃┊.gay *@user*
│🍂⃟🎃┊.love *@user*
│🍂⃟🎃┊.nombreninja *<texto>*
│🍂⃟🎃┊.personalidad *<nombre>*
│🍂⃟🎃┊.piropo
│🍂⃟🎃┊.pregunta *<texto>*
│🍂⃟🎃┊.reto
│🍂⃟🎃┊.simi
│🍂⃟🎃┊.top
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.hentai
│🍂⃟🎃┊.genshin
│🍂⃟🎃┊.swimsuit
│🍂⃟🎃┊.schoolswimsuit
│🍂⃟🎃┊.white
│🍂⃟🎃┊.barefoot
│🍂⃟🎃┊.touhou
│🍂⃟🎃┊.gamecg
│🍂⃟🎃┊.hololive
│🍂⃟🎃┊.uncensored
│🍂⃟🎃┊.sunglasses
│🍂⃟🎃┊.glasses
│🍂⃟🎃┊.weapon
│🍂⃟🎃┊.shirtlift
│🍂⃟🎃┊.chain
│🍂⃟🎃┊.fingering
│🍂⃟🎃┊.flatchest
│🍂⃟🎃┊.torncloth
│🍂⃟🎃┊.bondage
│🍂⃟🎃┊.demon
│🍂⃟🎃┊.wet
│🍂⃟🎃┊.pantypull
│🍂⃟🎃┊.headdress
│🍂⃟🎃┊.headphone
│🍂⃟🎃┊.tie
│🍂⃟🎃┊.anusview
│🍂⃟🎃┊.shorts
│🍂⃟🎃┊.stokings
│🍂⃟🎃┊.topless
│🍂⃟🎃┊.beach
│🍂⃟🎃┊.bunnygirl
│🍂⃟🎃┊.bunnyear
│🍂⃟🎃┊.idol
│🍂⃟🎃┊.vampire
│🍂⃟🎃┊.gun
│🍂⃟🎃┊.maid
│🍂⃟🎃┊.bra
│🍂⃟🎃┊.nobra
│🍂⃟🎃┊.bikini
│🍂⃟🎃┊.whitehair
│🍂⃟🎃┊.blonde
│🍂⃟🎃┊.pinkhair
│🍂⃟🎃┊.bed
│🍂⃟🎃┊.ponytail
│🍂⃟🎃┊.nude
│🍂⃟🎃┊.dress
│🍂⃟🎃┊.underwear
│🍂⃟🎃┊.foxgirl
│🍂⃟🎃┊.uniform
│🍂⃟🎃┊.skirt
│🍂⃟🎃┊.sex
│🍂⃟🎃┊.sex2
│🍂⃟🎃┊.sex3
│🍂⃟🎃┊.breast
│🍂⃟🎃┊.twintail
│🍂⃟🎃┊.spreadpussy
│🍂⃟🎃┊.tears
│🍂⃟🎃┊.seethrough
│🍂⃟🎃┊.breasthold
│🍂⃟🎃┊.drunk
│🍂⃟🎃┊.fateseries
│🍂⃟🎃┊.spreadlegs
│🍂⃟🎃┊.openshirt
│🍂⃟🎃┊.headband
│🍂⃟🎃┊.food
│🍂⃟🎃┊.close
│🍂⃟🎃┊.tree
│🍂⃟🎃┊.nipples
│🍂⃟🎃┊.erectnipples
│🍂⃟🎃┊.horns
│🍂⃟🎃┊.greenhair
│🍂⃟🎃┊.wolfgirl
│🍂⃟🎃┊.catgirl
│🍂⃟🎃┊.rule34 *<búsqueda>*
│🍂⃟🎃┊.xnxxdl *<url>*
│🍂⃟🎃┊.xvideosdl *<url>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.delcmd *<texto>*
│🍂⃟🎃┊.listcmd
│🍂⃟🎃┊.setcmd *<texto>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.expired *<días>*
│🍂⃟🎃┊.addprem *@user*
│🍂⃟🎃┊.autoadmin
│🍂⃟🎃┊.banlist
│🍂⃟🎃┊.mban *@user*
│🍂⃟🎃┊.clearsession
│🍂⃟🎃┊.deletefile
│🍂⃟🎃┊.delexpired
│🍂⃟🎃┊.delprem *@user*
│🍂⃟🎃┊.fetch *( Link )*
│🍂⃟🎃┊.getdb
│🍂⃟🎃┊.getsesion
│🍂⃟🎃┊.join *<link> <días>*
│🍂⃟🎃┊.resetuser *@user*
│🍂⃟🎃┊.restart
│🍂⃟🎃┊.salir
│🍂⃟🎃┊.savefile
│🍂⃟🎃┊.munban *@user*
│🍂⃟🎃┊.update
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊.bass *<mp3/vn>*
│🍂⃟🎃┊.blown *<mp3/vn>*
│🍂⃟🎃┊.deep *<mp3/vn>*
│🍂⃟🎃┊.earrape *<mp3/vn>*
│🍂⃟🎃┊.fast *<mp3/vn>*
│🍂⃟🎃┊.fat *<mp3/vn>*
│🍂⃟🎃┊.nightcore *<mp3/vn>*
│🍂⃟🎃┊.reverse *<mp3/vn>*
│🍂⃟🎃┊.robot *<mp3/vn>*
│🍂⃟🎃┊.slow *<mp3/vn>*
│🍂⃟🎃┊.smooth *<mp3/vn>*
│🍂⃟🎃┊.tupai *<mp3/vn>*
│🍂⃟🎃┊.reverb *<mp3/vn>*
│🍂⃟🎃┊.chorus *<mp3/vn>*
│🍂⃟🎃┊.flanger *<mp3/vn>*
│🍂⃟🎃┊.distortion *<mp3/vn>*
│🍂⃟🎃┊.pitch *<mp3/vn>*
│🍂⃟🎃┊.highpass *<mp3/vn>*
│🍂⃟🎃┊.lowpass *<mp3/vn>*
│🍂⃟🎃┊.underwater *<mp3/vn>*
╚═════════════════╝
╔═════════════════╗
│🍂⃟🎃┊>
│🍂⃟🎃┊=>
│🍂⃟🎃┊$
╚═════════════════╝

> 🚩 Powered By Bolillo Team`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://qu.ax/iTDkb.jpg`)).buffer()  
conn.sendFile(m.chat, img, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
await m.react('✅')	
} catch (e) {
await m.reply(`❌️ Ocurrió un error.\n\n` + e)
await m.react(error)
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|allmenu\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

