import fs from 'fs'
import fetch from 'node-fetch'
import jimp from 'jimp'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import moment from 'moment-timezone'
import { join, dirname } from 'path'
import ct from 'countries-and-timezones'
import { parsePhoneNumber } from 'libphonenumber-js'

let handler = async (m, { conn, usedPrefix: _p, text, command }) => {
let editMenu = global.db.data.chats[m.chat].editMenu
let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'; moment.locale('es')
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) { fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = countryData.name; const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
} else { 
lugarMoment = moment().tz('America/Quito')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = 'America'; ciudad = 'Quito' 
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author, version, description, collaborators } = require(join(__dirname, '../package.json'))

let { money, joincount } = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
let menu = `╔═════════════════╗
┇➤ 𝙃𝙊𝙇𝘼, 𝙃𝙐𝙈𝘼𝙉𝙊 
┇ @${m.sender.split("@")[0]}
╚═════════════════╝
╔═════════════════╗
┇➤ 𝙋𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙓 // 𝙀𝘽𝙂 
╚═════════════════╝

▸▸ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ◂◂
│┊➺ 🌐.donarsala
│┊➺ 🌐 .sorteo 
│┊➺ 🌐 .𝘉𝘦𝘳𝘮𝘶𝘥𝘢
││➺ 🌐 .𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
│┊➺ 🌐 .𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
│┊➺ 🌐 .𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
│┊➺ 🌐 .𝘈𝘭𝘱𝘦𝘴
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝑽𝑬𝑹𝑺𝑼𝑺 ◂◂
│┊➺ 🧾 .cuadrilista
│┊➺ 🧾 .hexalista
│┊➺ 🧾 .cuadrilatero
│┊➺ 🧾 .Exagonal
│┊➺ 🧾 .bermuda
▸▸ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ◂◂
│┊➺ 🕹️.𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
│┊➺ 🕹️ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
│┊➺ 🕹️ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ◂◂
│┊➺ 🛡️ .𝟦𝘷𝘴𝟦 
│┊➺ 🛡️ .𝟨𝘷𝘴𝟨
│┊➺ 🛡️ .𝟪𝘷𝘴𝟪
│┊➺ 🛡️ .𝟣𝟤𝘷𝘴𝟣𝟤
│┊➺ 🛡️ .𝟣𝟨𝘷𝘴𝟣𝟨
│┊➺ 🛡️.𝟤𝟢𝘷𝘴𝟤𝟢
│┊➺ 🛡️ .𝟤𝟦𝘷𝘴𝟤𝟦
│┊➺ 🛡️ .𝘴𝘤𝘳𝘪𝘮
│┊➺ 🛡️ .s𝘤𝘳𝘪𝘮2
│┊➺ 🛡️ .𝘨𝘶𝘦𝘳𝘳𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ◂◂
│┊➺ ⚔️ .𝟦𝘷𝘴𝟦𝘴𝘶𝘳
│┊➺ ⚔️ .𝟨𝘷𝘴𝟨𝘴𝘶𝘳
│┊➺ ⚔️ .𝟪𝘷𝘴𝟪𝘴𝘶𝘳
│┊➺ ⚔️ .𝟣𝟤𝘷𝘴𝟣𝟤𝘴𝘶𝘳
│┊➺ ⚔️ .𝟣𝟨𝘷𝘴𝟣𝟨𝘴𝘶𝘳
│┊➺ ⚔️ .𝟤𝟢𝘷𝘴𝟤𝟢𝘴𝘶𝘳
│┊➺ ⚔️ .𝟤𝟦𝘷𝘴𝟤𝟦𝘴𝘶𝘳
│┊➺ ⚔️ .𝘴𝘤𝘳𝘪𝘮𝘴𝘶𝘳
│┊➺ ⚔️ .s𝘤𝘳𝘪𝘮2𝘴𝘶𝘳
│┊➺ ⚔️ .𝘨𝘶𝘦𝘳𝘳𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍 ◂◂
│┊➺ 🧭 .𝘩𝘰𝘳𝘢𝘳𝘪𝘰
│┊➺ 🤖 .𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
│┊➺ 🎧 .𝘺𝘵𝘴 𝘵𝘦𝘹𝘵𝘰
│┊➺ 🔍 .𝘨𝘰𝘰𝘨𝘭𝘦 𝘵𝘦𝘹𝘵𝘰
│┊➺ 🔍 .𝘸𝘪𝘬𝘪𝘱𝘦𝘥𝘪𝘢 𝘵𝘦𝘹𝘵𝘰
│┊➺ ⚖️ .𝘵𝘳𝘢𝘥𝘶𝘤𝘪𝘳 𝘵𝘦𝘹𝘵𝘰
│┊➺ 🛰️ .𝘤𝘭𝘪𝘮𝘢 𝘵𝘶𝘤𝘪𝘶𝘥𝘢𝘥
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝑯𝑨𝑪𝑬𝑹 - 𝑳𝑶𝑮𝑶𝑺 ◂◂
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘴𝘢𝘥 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰 (texto)
│┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭 (texto) 
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘭𝘢𝘴 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘨𝘶𝘦𝘳𝘳𝘦𝘳𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨𝘧𝘦𝘮 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰lol (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘢𝘮𝘰𝘯𝘨𝘶𝘴 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘭𝘢𝘺𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘧𝘧 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘵𝘪𝘨𝘦𝘳 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘪𝘯𝘵𝘳𝘰 (texto)
┊➺ 🖼️ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝙀𝙓𝙋 𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
│ ┊➺ ♦️.𝘯𝘪𝘷𝘦𝘭
│ ┊➺ ⚖️ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦
│ ┊➺ ⚖️ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦2
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳2
│ ┊➺ 💎 .𝘮𝘪𝘯𝘢𝘳3
│ ┊➺ 🧨 .𝘤𝘭𝘢𝘪𝘮
│ ┊➺ 🔫 .𝘳𝘰𝘣𝘢𝘳 @𝘵𝘢𝘨
│ ┊➺ 🎁 .𝘤𝘰𝘧𝘳𝘦
│ ┊➺ 🛒 .𝘣𝘶𝘺 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥
│ ┊➺ 💸 .𝘵𝘳𝘢𝘯𝘴𝘧𝘦𝘳
│ ┊➺ 🎰 .𝘢𝘱𝘰𝘴𝘵𝘢𝘳
│ ┊➺ 📉 .𝘤𝘩𝘢𝘮𝘣𝘦𝘢𝘳 𝘰 .𝘸𝘰𝘳𝘬
│ ┊➺ 💎 .𝘥𝘢𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴
│ ┊➺ 📈 .𝘥𝘢𝘳𝘹𝘱
│ ┊➺ 🪙 .𝘥𝘢𝘳𝘤𝘰𝘪𝘯𝘴
│ ┊➺ 💵 .𝘥𝘢𝘳𝘥𝘰𝘭𝘢𝘳𝘦𝘴
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
▸▸ 𝙈𝙄𝙉𝙄𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
│ ┊➺ 🃏 .qc texto
│ ┊➺ 🃏 .ruletaban_
│ ┊➺ 🃏 .𝘬𝘪𝘴𝘴 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘮𝘪𝘮𝘰𝘴 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘣𝘰𝘧𝘦𝘵𝘢𝘥𝘢 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘱𝘪𝘳𝘰𝘱𝘰 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨 𝘰 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🃏 .𝘱𝘰𝘳𝘤𝘦𝘯𝘵𝘢𝘫𝘦𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘧𝘰𝘭𝘭𝘢𝘳 @𝘵𝘢𝘨
│ ┊➺ 🃏 .𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
│ ┊➺ 🃏 .𝘷𝘦𝘳𝘥𝘢𝘥
│ ┊➺ 🃏 .𝘳𝘦𝘵𝘰
│ ┊➺ 🃏 .𝘴𝘰𝘱𝘢
│ ┊➺ 🃏.𝘴𝘶𝘦𝘳𝘵𝘦 𝘤𝘢𝘳𝘢|𝘤𝘳𝘶𝘻
│ ┊➺ 🃏 .𝘨𝘢𝘺 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘨𝘢𝘺𝟤 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘪𝘯𝘴𝘢𝘯𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘴𝘢𝘪𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘮𝘢𝘯𝘤𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘮𝘢𝘯𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘭𝘰𝘷𝘦 2 @tag
│ ┊➺ 🃏 .𝘤𝘢𝘤𝘩𝘶𝘥𝘢/𝘰 @tag
│ ┊➺ 🃏 .𝘢𝘥𝘰𝘱𝘵𝘢𝘥𝘰/𝘢 @tag
│ ┊➺ 🃏 .𝘴𝘪𝘯𝘵𝘦𝘵𝘢𝘴 @tag
│ ┊➺ 🃏 .𝘴𝘪𝘯𝘱𝘰𝘵𝘰 @tag
│ ┊➺ 🃏 .𝘴𝘪𝘯𝘱𝘪𝘵𝘰 @tag
│ ┊➺ 🃏 .𝘧𝘦𝘰/𝘢 @tag
│ ┊➺ 🃏 .𝘯𝘦𝘨𝘳𝘰/𝘢 @tag
│ ┊➺ 🃏 .𝘴𝘩𝘪𝘱 @tag & @tag
│ ┊➺ 🃏 .𝘱𝘢𝘫𝘦𝘳𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘱𝘢𝘫𝘦𝘳𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘱𝘶𝘵𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘱𝘶𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘳𝘢𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘵𝘰𝘱 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘨𝘢𝘺𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘰𝘵𝘢𝘬𝘶𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘱𝘢𝘫𝘦𝘳@𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘱𝘶𝘵@𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘭𝘢𝘨𝘳𝘢𝘴𝘢
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘱𝘢𝘯𝘢𝘧𝘳𝘦𝘴𝘤𝘰𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘴𝘩𝘪𝘱𝘰𝘴𝘵𝘦𝘳𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘧𝘢𝘮𝘰𝘴𝘰𝘴
│ ┊➺ 🃏 .𝘵𝘰𝘱𝘱𝘢𝘳𝘦𝘫𝘢𝘴
│ ┊➺ 🃏 .𝘥𝘰𝘹𝘦𝘢𝘳 𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🃏 .𝘥𝘰𝘹𝘹𝘦𝘢𝘮𝘦
│ ┊➺ 🃏 .𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢
│ ┊➺ 🃏 .𝘢𝘧𝘬 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🃏 .𝘤𝘢𝘯𝘤𝘪𝘰𝘯
│ ┊➺ 🃏 .𝘱𝘱𝘵
│ ┊➺ 🃏 .𝘵𝘵𝘵 𝘺 𝘯𝘰𝘮𝘣𝘳𝘦 𝘴𝘢𝘭𝘢
│ ┊➺ 🃏 .𝘥𝘦𝘭𝘵𝘵𝘵 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘴𝘢𝘭𝘢
│ ┊➺ 🃏 .𝘮𝘦𝘮𝘦
│ ┊➺ 🃏 .𝘧𝘳𝘢𝘴𝘦𝘴
│ ┊➺ 🃏 .𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥
│ ┊➺ 🃏 .𝘮𝘢𝘵𝘩
│ ┊➺ 🃏 .𝘤𝘢𝘳𝘵𝘰𝘰𝘯 𝘪𝘮𝘢𝘨𝘦
│ ┊➺ 🃏 .𝘤𝘢𝘤𝘩𝘰𝘯𝘥𝘢𝘭𝘪𝘤𝘦𝘯𝘤𝘪𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙋𝙊𝙍𝙉𝙊 𝙍𝘼𝙉𝘿𝙊𝙈 ◂◂
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘭𝘰𝘭𝘪
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘣𝘥𝘴𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘤𝘶𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘦𝘳𝘰
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘦𝘮𝘥𝘰𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘨𝘭𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘰𝘳𝘨𝘺
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪2
│ ┊➺ 🔞 .𝘱𝘢𝘯𝘵𝘪𝘦𝘴
│ ┊➺ 🔞 .𝘵𝘦𝘵𝘢𝘴
│ ┊➺ 🔞 .𝘣𝘰𝘰𝘵𝘺
│ ┊➺ 🔞 .𝘦𝘤𝘤𝘩𝘪
│ ┊➺ 🔞 .𝘧𝘶𝘳𝘳𝘰
│ ┊➺ 🔞 .𝘩𝘦𝘯𝘵𝘢𝘪
│ ┊➺ 🔞 .𝘵𝘳𝘢𝘱𝘪𝘵𝘰
│ ┊➺ 🔞 .𝘪𝘮𝘢𝘨𝘦𝘯𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘴
│ ┊➺ 🔞 .𝘱𝘦𝘯𝘦
│ ┊➺ 🔞 .𝘱𝘰𝘳𝘯𝘰
│ ┊➺ 🔞 .𝘳𝘢𝘯𝘥𝘰𝘮𝘹𝘹𝘹
│ ┊➺ 🔞 .𝘱𝘦𝘤𝘩𝘰𝘴

▸▸ 𝘽𝙐𝙎𝘾𝘼𝙍 - 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ◂◂
│ ┊➺ 🛐 .𝘩𝘦𝘯𝘵𝘢𝘪𝘴𝘦𝘢𝘳𝘤𝘩
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬2
│ ┊➺ 🛐 .𝘱𝘢𝘤𝘬3
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘷í𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹𝘭𝘦𝘴𝘣𝘪
│ ┊➺ 🛐 .𝘷𝘪𝘥𝘦𝘰𝘭𝘦𝘴𝘣𝘪𝘹𝘹𝘹
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷𝘪𝘥
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷𝘪𝘥
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷
│ ┊➺ 🛐 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘷
│ ┊➺ ♋️ .𝘹𝘯𝘹𝘹𝘴𝘦𝘢𝘳𝘤𝘩 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ ♋️ .𝘹𝘯𝘹𝘹𝘥𝘭 𝘭𝘪𝘯𝘬
│ ┊➺ ♋️ .𝘹𝘷𝘪𝘥𝘦𝘰𝘴𝘥𝘭 𝘭𝘪𝘯𝘬
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

★ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ★
┊➺ 💡 .𝘪𝘮𝘢𝘨𝘦𝘯 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘱𝘭𝘢𝘺 𝘯𝘰𝘮𝘣𝘳𝘦 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘢 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘷 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘮𝘢𝘹 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘢𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘷𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘺𝘵𝘮𝘢𝘹𝘥𝘰𝘤 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘵𝘪𝘬𝘵𝘰𝘬 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘰𝘱𝘦𝘯𝘪𝘢𝘮𝘢𝘨𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘮𝘪𝘥𝘫𝘰𝘶𝘳𝘯𝘦𝘺 𝘵𝘦𝘹𝘵𝘰
┊➺ 💡 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺 𝘵𝘦𝘹𝘵𝘰 𝘰 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘵𝘸𝘪𝘵𝘵𝘦𝘳𝘹 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 💡 .𝘴𝘴𝘸𝘦𝘣 𝘦𝘯𝘭𝘢𝘤𝘦

★ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 ★
┊➺ 🎭 .𝘪𝘮𝘨 𝘴𝘵𝘪𝘤𝘬𝘦𝘳
┊➺ 🎭 .𝘶𝘳𝘭 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 🎭 .𝘮𝘱𝟦 𝘴𝘵𝘪𝘤𝘬𝘦𝘳
┊➺ 🎭 .𝘨𝘪𝘧 𝘷𝘪𝘥𝘦𝘰
┊➺ 🎭 .𝘮𝘱𝟥 𝘷𝘪𝘥𝘦𝘰 𝘰 𝘢𝘶𝘥𝘪𝘰
┊➺ 🎭 .𝘵𝘵𝘴 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎭 .𝘴𝘵𝘺𝘭𝘦𝘵𝘦𝘹𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎭 .𝘳𝘦𝘢𝘥𝘮𝘰𝘳𝘦 𝘵𝘦𝘹𝘵𝘰𝟣| 𝘵𝘦𝘹𝘵𝘰𝟤

★ 𝙂𝙍𝙐𝙋𝙊 ~ 𝙏𝙊𝘿𝙊𝙎 ★
┊➺ 🎗️.𝘪𝘯𝘧𝘰𝘨𝘳𝘶𝘱𝘰
┊➺ 🎗️ .𝘢𝘥𝘮𝘪𝘯𝘴 𝘵𝘦𝘹𝘵𝘰
┊➺ 🎗️ .𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🎗️ .𝘪𝘯𝘴𝘱𝘦𝘤𝘤𝘪𝘰𝘯𝘢𝘳 𝘦𝘯𝘭𝘢𝘤𝘦

★ 𝙂𝙍𝙐𝙋𝙊 ~ 𝘼𝘿𝙈𝙄𝙉𝙎 ★
┊➺ 🌋 .𝘥𝘦𝘭
┊➺ 🌋 .𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘳 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘴𝘢𝘤𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🌋 .𝘪𝘯𝘷𝘪𝘵𝘢𝘳 𝘯𝘶́𝘮𝘦𝘳𝘰
┊➺ 🌋 .𝘥𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 🌋 .𝘲𝘶𝘪𝘵𝘢𝘳𝘢𝘥𝘮𝘪𝘯 @𝘵𝘢𝘨
┊➺ 🌋 .𝘦𝘥𝘪𝘵𝘢𝘳𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋.𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘺𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘥𝘦𝘴𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘯𝘰𝘮𝘣𝘳𝘦 𝘵𝘦𝘹𝘵𝘰
┊➺ 🌋 .𝘤𝘢𝘮𝘣𝘪𝘢𝘳𝘱𝘱 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 🌋 .𝘯𝘶𝘦𝘷𝘰𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🌋 .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳
┊➺ 🌋 .𝘨𝘳𝘶𝘱𝘰 𝘤𝘦𝘳𝘳𝘢𝘳
┊➺ 🌋 .𝘪𝘯𝘷𝘰𝘤𝘢𝘳
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎★ 𝙀𝘿𝙄𝙏𝘼𝙍 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 ★
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘢𝘴𝘴
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘷𝘪𝘣𝘳𝘢
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘭𝘰𝘸𝘯
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘥𝘦𝘦𝘱
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘦𝘢𝘳𝘳𝘢𝘱𝘦
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘧𝘢𝘴𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘧𝘢𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘳𝘰𝘣𝘰𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘴𝘭𝘰𝘸
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘴𝘮𝘰𝘰𝘵𝘩
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘵𝘶𝘱𝘢𝘪
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘢𝘶𝘥𝘪𝘰𝟪𝘥

★ 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 ★
┊➺ 🧊 .𝘣𝘢𝘴𝘴
┊➺ 🧊 .𝘣𝘭𝘰𝘸𝘯j
┊➺ 🧊 .𝘥𝘦𝘦𝘱
┊➺ 🧊 .𝘦𝘢𝘳𝘳𝘢𝘱𝘦
┊➺ 🧊 .𝘧𝘢𝘴𝘵
┊➺ 🧊 .𝘧𝘢𝘵
┊➺ 🧊 .𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦
┊➺ 🧊 .𝘳𝘦𝘷𝘦𝘳𝘴𝘦
┊➺ 🧊 .𝘳𝘰𝘣𝘰𝘵
┊➺ 🧊 .𝘴𝘭𝘰𝘸
┊➺ 🧊 .𝘴𝘮𝘰𝘰𝘵𝘩
┊➺ 🧊 .𝘵𝘶𝘱𝘢𝘪
┊➺ 🧊 .𝘢𝘶𝘥𝘪𝘰𝟪𝘥
┊➺ 🧊 .𝘦𝘤𝘩𝘰
┊➺ 🧊 .𝘥𝘪𝘴𝘵𝘰𝘳𝘵𝘪𝘰𝘯
┊➺ 🧊 .𝘱𝘪𝘵𝘤𝘩
┊➺ 🧊 .𝘳𝘦𝘷𝘦𝘳𝘣
┊➺ 🧊 .𝘧𝘭𝘢𝘯𝘨𝘦𝘳
┊➺ 🧊 .𝘢𝘱𝘶𝘭𝘴𝘢𝘵𝘰𝘳
┊➺ 🧊 .𝘵𝘳𝘦𝘮𝘰𝘭𝘰
┊➺ 🧊 .𝘤𝘩𝘰𝘳𝘶𝘴
┊➺ 💀.ruletaban (texto razón)
┊➺ 💀 .deathnote (texto órdenes)
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

★ 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) ★
┊➺ 🔐 .𝘢𝘥𝘥𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘥𝘦𝘭𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘭𝘪𝘴𝘵𝘢𝘱𝘳𝘦𝘮𝘪𝘶𝘮
┊➺ 🔐 .𝘳𝘦𝘴𝘱𝘢𝘭𝘥𝘰
┊➺ 🔐 .𝘵𝘦𝘯𝘦𝘳𝘱𝘰𝘥𝘦𝘳
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘢𝘣𝘪𝘰𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘰𝘯𝘰𝘮𝘣𝘳𝘦𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘯𝘶𝘦𝘷𝘢𝘧𝘰𝘵𝘰𝘣𝘰𝘵 𝘪𝘮𝘢𝘨𝘦𝘯
┊➺ 🔐 .𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳
┊➺ 🔐 .𝘣𝘢𝘯𝘦𝘢𝘳𝘤𝘩𝘢𝘵
┊➺ 🔐 .𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳𝘤𝘩𝘢𝘵
┊➺ 🔐 .𝘴𝘢𝘭𝘪𝘳
┊➺ 🔐 .𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🔐 .𝘥𝘦𝘴𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 @𝘵𝘢𝘨
┊➺ 🔐 .𝘰𝘣𝘵𝘦𝘯𝘦𝘳𝘤𝘰𝘥𝘪𝘨𝘰 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦 𝘢𝘳𝘤𝘩𝘪𝘷𝘰
┊➺ 🔐 .𝘣𝘰𝘳𝘳𝘢𝘳𝘥𝘢𝘵𝘰𝘴 𝘯𝘶́𝘮𝘦𝘳𝘰
┊➺ 🔐 .𝘶𝘯𝘦𝘵𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🔐 .𝘣𝘤𝘴𝘶𝘣𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘨𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤 𝘵𝘦𝘹𝘵𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙`.trim()

let contextInfo = {
mentionedJid: await conn.parseMention(menu),
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363357113516650@newsletter',
newsletterName: '𝙋𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙓/𝙀𝘽𝙂',
serverMessageId: 100
}}

if (editMenu.imagen) {
await conn.sendMessage(m.chat, { image: { url: yartexImg.getRandom() }, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.video) {
await conn.sendMessage(m.chat, { video: { url: yartexVid.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.dinamico) {
const mediaFiles = [{ image: { url: yartexImg.getRandom() } }, { video: { url: yartexVid.getRandom(), gifPlayback: true } }]
let randomMedia = getRandom(mediaFiles)
await conn.sendMessage(m.chat, { ...randomMedia, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.simple) {
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.personalizado) {
let newImg = await cropImageToSquare(editMenu.personalizado)
await conn.sendMessage(m.chat, { image: newImg, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else {
await conn.sendMessage(m.chat, { video: { url: yartexVid.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: fkontak })
}
}
//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = ['help', 'menu', 'allmenu'] 
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function getRandom(array) {
return array[Math.floor(Math.random() * array.length)];
}

async function cropImageToSquare(imageUrl) {
try {
let response = await fetch(imageUrl)
if (!response.ok) {
return console.log(`Error al descargar la imagen (${response.status} ${response.statusText})`)
}
let imageBuffer = await response.buffer()
let img = await jimp.read(imageBuffer)
let width = img.getWidth()
let height = img.getHeight()
let size = Math.min(width, height)
let x = (width - size) / 2
let y = (height - size) / 2
img.crop(x, y, size, size)
let croppedBuffer = await img.getBufferAsync(jimp.MIME_PNG)
return croppedBuffer
} catch (error) {
return console.error('Error:', error)
}}
