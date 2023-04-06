require('./lib/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const Xtod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
const start = new Date().getTime()
const end = new Date().getTime()
const ping = (end - start) + ' *_ᴍs_*' 
//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const bottime = new Date().toLocaleString('HI', { timeZone:'Asia/Kolkata'}).split(' ')[1]
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let autoresetgclink = JSON.parse(fs.readFileSync('./database/autoresetgclink.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));
/////LANGUAGE////

const language = require('./language.js')
const Lang = language.getString('xiaobot')
var success  = ' ' 
if (global.mess == 'EN') success = 'Processing done ✅️'
if (global.mess == 'HN') success = 'काम हो गया ✅️'
if (global.mess == 'AR') success = '* تم المعالجة !! * ✅️'
var admin = ' ' 
if (global.mess == 'EN') admin = "Hey dear user,\nYou are not an admin,so you can't use this command"
if (global.mess == 'HN') admin = "*ये कमांड सिर्फ ग्रुप एडमिन के लिए है...*निसिलिये तुम कमांड का इस्तेमल नहीं कर सकते।"
if (global.mess == 'AR') admin = "عزيزي المستخدم ، لا يمكنني متابعة هذا الأمر نيابة عنك. لأنك لست مشرفًا."
var botadmin = ' ' 
if (global.mess == 'EN') botadmin = "I am not an admin, so i can't process this action."
if (global.mess == 'HN') botadmin = "ैं बिना *व्यवस्थापक* बने कमांड को नहीं चला सकती"
if (global.mess == 'AR') botadmin = "لا يمكنني متابعة هذا الأمر دون أن أكون مسؤولاً"
var owner = ' '
if (global.mess == 'EN') owner = "his command is only made for my owner."
if (global.mess == 'HN') owner = "े आदेश सिर्फ मेरे मालिक इस्तेमल कर सकते हैं.. और आप मेरे मालिक नहीं हो!!"
if (global.mess == 'AR') owner = "لا يمكنك استعمال هذا الامر، هذا مخصص فقط للمالك."
var premime = ' '
if (global.mess == 'EN') premime = "Premium Special Features If You Want to Register Type Rent"
if (global.mess == 'HN') premime  = "प्रीमियम विशेष विशेषताएं यदि आप पंजीकरण प्रकार किराए पर पंजीकरण करना चाहते हैं"
if (global.mess == 'AR') premime = "ميزات خاصة متميزة إذا كنت ترغب في التسجيل نوع الإيجار"
var group = ' ' 
if (global.mess == 'EN') group = "Huh... I can't use this command in a private chat!!"
if (global.mess == 'HN') group = "ना।।। मैं एक निजी चैट में इस आदेश का उपयोग नहीं कर सकता !!"
if (global.mess == 'AR') group = "هاه... لا يمكنني استخدام هذا الأمر في دردشة خاصة !!"
var private = ' '
if (global.mess == 'EN') group = "ff... I can't take this action in a private chat..."
if (global.mess == 'HN') group = "उफ़... मैं निजी चैट में यह कार्रवाई नहीं कर सकता..."
if (global.mess == 'AR') group = "أوف... لا يمكنني اتخاذ هذا الإجراء في دردشة خاصة..."
var bot = ' '
if (global.mess == 'EN') bot = "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁."
if (global.mess == 'HN') bot = "यह सुविधा केवल बॉट के लिए है... और आप एक बॉट नहीं हैं।"
if (global.mess == 'AR') bot = "هذه الميزة مخصصة فقط للروبوت... وأنت لست روبوتا."
var wait = ' '
if (global.mess == 'EN') wait = "*Processing started....*"
if (global.mess == 'HN') wait = "* प्रसंस्करण शुरू हुआ...*"
if (global.mess == 'AR') wait = "بدأت المعالجة....*"
var linkm = ' '
if (global.mess == 'EN') wait = " need a link to process this command for you..."
if (global.mess == 'HN') wait = "मुझे आपके लिए इस आदेश को संसाधित करने के लिए एक लिंक की आवश्यकता है..."
if (global.mess == 'AR') wait = "أحتاج إلى رابط لمعالجة هذا الأمر نيابة عنك..."
var error = ' '
if (global.mess == 'EN') error = "Process stopped!!...i got an error"
if (global.mess == 'HN') error = "प्रक्रिया रुक गई!... मुझे एक त्रुटि मिली"
if (global.mess == 'AR') error = "توقفت العملية!!... حصلت على خطأ"
var endLimit = ' '
if (global.mess == 'EN') endLimit = "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours"
if (global.mess == 'HN') endLimit = "आपकी दैनिक सीमा समाप्त हो गई है, सीमा हर 12 घंटे में रीसेट की जाएगी"
if (global.mess == 'AR') endLimit = "انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة"
//database auto reply
					    
let Xysticker = JSON.parse(fs.readFileSync('./Xiao-❤-Media/sticker/sticker.json'));
let Xyaudio = JSON.parse(fs.readFileSync('./Xiao-❤-Media/audio/audio.json'));
module.exports = NEXUS = async (NEXUS, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await NEXUS.decodeJid(NEXUS.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
const anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
const pclist = anulistp.length
const gclist = anulistg.length
const content = JSON.stringify(mek.message)
let allmenureact = ['🐦','🐤','🍒','📃','🎃','📑','🗞️','🔥','❤️','❤️‍🩹','👿','💙','✌','☕','🍜']
let allmenureactemoji = pickRandom(allmenureact)
const botloading = [ '■■□□20%','■■■□□30%','■■■■□□40%','■■■■■□□50%','■■■■■■□□60%','■■■■■■■□□70%','■■■■■■■■□□80%','■■■■■■■■■□□90%','■■■■■■■■■■■■■■■■■100%']
const loading = pickRandom(botloading)
const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=918130784851:918130784851\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Xiao-❤-Media/xiao1.jpeg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await NEXUS.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
	const isAutoresetgclink = m.isGroup ? autoresetgclink.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : true
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!NEXUS.public) {
if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)
//auto recording all
    if (global.autoRecord) { if (m.chat) { NEXUS.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { NEXUS.sendPresenceUpdate('composing', m.chat) }
}
	    
//////////////////////////////////////////////
if(!isCmd && !quoted == botNumber) {
const botreply = await axios.get(`http://api.brainshop.ai/get?bid=173534&key=Gnb7EUxsV21uoNMM&uid=[uid]&msg=${budy}`)
let txt = `${botreply.data.cnt}`
m.reply(txt)
}
// total hit
 global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/Xiao-MD/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/Xiao-MD${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in❤️‍🔥${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  NEXUS.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           NEXUS.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Xiao-❤-Media/xiao1.jpeg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
NEXUS.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   NEXUS.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await NEXUS.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await NEXUS.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${Lang.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await NEXUS.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return NEXUS.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return NEXUS.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return NEXUS.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			NEXUS.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by X
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by X
  if (antiVirtex) {
  if (budy.length > 2500) {
  if (!isBotAdmins) return m.reply(Lang.botAdmin)
          await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			NEXUS.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//autoresetgclink//
if (autoresetgclink) {
let cron = require('node-cron')
    cron.schedule('0 9 * * *', () => { NEXUS.groupRevokeInvite(m.chat)}, 
	{
    scheduled: true,
    timezone: "Asia/Kolkata"
    })
}
//anti bad words by X
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic😎']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
let bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by X
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by X
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by X
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by X
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by X
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by X
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by X
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by X
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await NEXUS.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			NEXUS.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NEXUS.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by X
  if (Autoreply)
        for (let anji of Xysticker){
				if (budy === anji){
					result = fs.readFileSync(`./Xiao-❤-Media/sticker/${anji}.webp`)
					NEXUS.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of Xyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Xiao-❤-Media/audio/${anju}.mp3`)
					NEXUS.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,headerType: 4}
NEXUS.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: NEXUS.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NEXUS.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
NEXUS.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            let jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await NEXUS.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, NEXUS.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await NEXUS.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await NEXUS.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    NEXUS.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    NEXUS.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) NEXUS.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) NEXUS.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) NEXUS.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    NEXUS.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) NEXUS.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) NEXUS.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    NEXUS.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
                case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await NEXUS.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await NEXUS.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below❤️‍🔥${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            NEXUS.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample :❤️‍🔥${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await NEXUS.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) NEXUS.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw Lang.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    NEXUS.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    NEXUS.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    NEXUS.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    NEXUS.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    NEXUS.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    NEXUS.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    NEXUS.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'guess': {
                if (!args.join(" ")) throw `Example : ${prefix + command} song`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anugas = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/Xiao-❤-Media/main/guessSong.json')
let result = anugas[Math.floor(Math.random() * anugas.length)]
let msg = await NEXUS.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
NEXUS.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
NEXUS.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
}
break
            case 'matchquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example:❤️‍🔥${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                NEXUS.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
  case 'slot': {
            const somtoy = solot[Math.floor(Math.random() * solot.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_If you get 3 of the same fruit_\n_Means You Win_\n\n_Example : 🍒 : 🍒 : 🍒_ <=====`
            await NEXUS.sendButtonText(m.chat,  sloth, botname, m)
            }
            break
            case 'soulmate': {
            if (!m.isGroup) throw Lang.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
                    await NEXUS.sendMessage(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw Lang.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
                    await NEXUS.sendMessage(m.chat,  jawab, botname, m, {mentions: menst})
            }
            break
            case 'buttonmaker': {
            if (!isPremium) throw Lang.premime
	     if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await NEXUS.sendMessage(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
            case 'react': {
                if (!isCreator) throw Lang.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                NEXUS.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw Lang.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(Lang.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await NEXUS.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
                if (!isCreator) throw Lang.owner
                await NEXUS.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw Lang.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if ( users == !isCreator) return m.reply("𝙊𝙒𝙉𝙀𝙍-𝘾𝘼𝙉'𝙏 𝘽𝙀 𝙆𝙄𝘾𝙆𝙀𝘿  𝘾𝙃𝙊𝙈𝙐 𝙃 𝙆𝙔𝘼 😒😒??")
		await NEXUS.groupParticipantsUpdate(m.chat, [users], 'remove').then(m.reply("𝓡𝓮𝓶𝓸𝓿𝓮𝓭 🤫" )) 
	}
	break
	case 'add': {
		if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NEXUS.groupParticipantsUpdate(m.chat, [users], 'add').then(m.reply("𝓐𝓭𝓮𝓭😎❤️‍🔥")) 
	}
	break
	case 'promote': {
		if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NEXUS.groupParticipantsUpdate(m.chat, [users], 'promote').then(m.reply("𝓟𝓻𝓸𝓶𝓸𝓽𝓮𝓭 " )) 
	}
	break
	case 'ownerpromote': case 'ownerpro': {
	if (!m.isGroup) throw Lang.group
        if (!isBotAdmins) throw Lang.botAdmin
        if (!isCreator) throw Lang.owner
        let ownernya = ownernomer + '@s.whatsapp.net'   
	let users = ownernya
	await NEXUS.groupParticipantsUpdate(m.chat, [users], 'promote').then(m.reply("𝓟𝓻𝓸𝓶𝓸𝓽𝓮𝓭 " )) 
	}
	break
	case 'demote': {
		if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NEXUS.groupParticipantsUpdate(m.chat, [users], 'demote')
	}
	break
        case 'block': {
		if (!isCreator) throw Lang.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NEXUS.updateBlockStatus(users, 'block')
	}
	break
        case 'unblock': {
		if (!isCreator) throw Lang.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NEXUS.updateBlockStatus(users, 'unblock')
	}
	break
case 'restart': {
if (!isCreator) throw Lang.owner
await m.reply('_Rebooting..._')
require('pm2').restart('xiao✌❤️‍🔥index.js');
}
break 
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
                if (!text) throw 'Text ?'
                await NEXUS.groupUpdateSubject(m.chat, text).then((res) => m.reply(Lang.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
                if (!text) throw 'Text ?'
                await NEXUS.groupUpdateDescription(m.chat, text).then((res) => m.reply(Lang.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) throw Lang.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                await NEXUS.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(Lang.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw Lang.group
                if (!isAdmins) throw Lang.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                await NEXUS.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(Lang.success)
                }
                break
            case 'tagall':  case 'ping' : case 'everyone': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
let teks = `✧(｡•̀ᴗ-)✧˙♥ ${botname}♥★~(◠ω◕✿) \n\n
 🎀 Group: ${groupName}*\n📢 *Announcer: @${m.sender.split("@")[0]} *\n🌿 *Message : ${q ? q : 'empty'}*\n\n╭──────⊹⊱𝓜𝓮𝓶𝓫𝓮𝓻𝓼 ✨⊰⊹──────╮
`
                for (let mem of participants) {
                teks+=`\n❤:@${mem.id.split('@')[0]}`
               }
                NEXUS.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': case 'texttag': {
            if (!m.isGroup) throw Lang.group
            if (!isBotAdmins) throw Lang.botAdmin
            if (!isAdmins) throw Lang.admin
            let tex = `🎀 Group: ${groupName}*\n📢 *Announcer: @${m.sender.split("@")[0]} *\n🧧 *Tags: HIDDEN*\n ✨Message : ${q ? q : 'empty'}`
            NEXUS.sendMessage(m.chat, { text : tex , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(Lang.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw Lang.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*❤️‍🔥${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*❤️‍🔥${prefix}upvote* - for sure\n*❤️‍🔥${prefix}devote* - for devote\n*❤️‍🔥${prefix}cekvote* - to check the vote\n*❤️‍🔥${prefix}deletevote* - to delete votes`)
           let  vote[m.chat] = [q, [], []]
            await sleep(1000)
            let upvote = vote[m.chat][1]
            let devote = vote[m.chat][2]
            let teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*❤️‍🔥${prefix}deletevote* - to delete votes`

            let buttonMessageVote = {
                text: teks_vote,
                footer: NEXUS.user.name,
                headerType: 1
            }
            NEXUS.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw Lang.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*❤️‍🔥${prefix}vote* - to start voting`
            let isVote = vote[m.chat][1].concat(vote[m.chat][2])
            let wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            let vote[m.chat][1].push(m.sender)
            let menvote = vote[m.chat][1].concat(vote[m.chat][2])
            let teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❤️‍🔥${prefix}deletevote* - to delete votes`
            let buttonMessageUpvote = {
                text: teks_vote,
                footer: NEXUS.user.name,
                headerType: 1,
                mentions: menvote
             }
            NEXUS.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw Lang.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*❤️‍🔥${prefix}vote* - to start voting`
            let isVote = vote[m.chat][1].concat(vote[m.chat][2])
            let wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            let vote[m.chat][2].push(m.sender)
            let menvote = vote[m.chat][1].concat(vote[m.chat][2])
            let teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❤️‍🔥${prefix}deletevote* - to delete votes`

            let buttonMessageDevote = {
                text: teks_vote,
                footer: NEXUS.user.name,
                headerType: 1,
                mentions: menvote
            }
            NEXUS.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw Lang.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*❤️‍🔥${prefix}vote* - to start voting`
let teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❤️‍🔥${prefix}deletevote* - to delete votes


©${NEXUS.user.id}
`
NEXUS.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw Lang.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*❤️‍🔥${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'group': case 'grup': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
                if (args[0] === 'close'){
                    await NEXUS.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await NEXUS.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    await NEXUS.sendButtonText(m.chat,`Mode Group`, botname, m)

             }	
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
             if (args[0] === 'open'){
                await NEXUS.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await NEXUS.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
                    await NEXUS.sendButtonText(m.chat, `Mode Edit Info`, botname, m)

            }
            }
            break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':{
let cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const Xkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
NEXUS.sendMessage(m.chat, { text: Xkak }, { quoted: m })
}
break
case 'mute': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
		m.reply(`TYPE MUTE ON`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${NEXUS.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${NEXUS.user.name} has been unmuted in this group !`)
                } else {
                    await NEXUS.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
NEXUS.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                let response = await NEXUS.groupInviteCode(m.chat)
                NEXUS.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw Lang.group
                if (!isBotAdmins) throw Lang.botAdmin
                if (!isAdmins) throw Lang.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await NEXUS.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await NEXUS.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                NEXUS.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await NEXUS.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await NEXUS.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            
            case 'bctext': case 'broadcasttext': case 'broadcast':
			    if (!isCreator) throw Lang.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               NEXUS.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!isCreator) throw Lang.owner
        if (!text) throw `enter text`
        let getGroups = await NEXUS.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let Xcast = groups.map(v => v.id)
        m.reply(` Broadcasting in ${Xcast.length} Group Chat, in ${Xcast.length * 1.5} seconds`)
        for (let i of Xcast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await NEXUS.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await NEXUS.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`Successfuly Broadcasted in ${Xcast.length} Groups`)      
        break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await NEXUS.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 NEXUS.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await NEXUS.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 NEXUS.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    NEXUS.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '${themeemoji} @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(Lang.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await NEXUS.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 15) return m.reply('*Maximum 15 seconds!*')
                let media = await quoted.download()
                let encmedia = await NEXUS.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case 'addprem':
if (!isCreator) throw Lang.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n❤️‍🔥${prefix}${command} 918130784851`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n${themeemoji} *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
if (!isCreator) throw Lang.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n❤️‍🔥${prefix}${command} 918130784851`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await NEXUS.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await NEXUS.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tts': case 'say':{
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             NEXUS.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(Lang.wait)
mee = await NEXUS.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await NEXUS.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(Lang.wait)
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    NEXUS.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(Lang.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await NEXUS.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(Lang.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            NEXUS.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(Lang.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            NEXUS.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${NEXUS.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(Lang.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            NEXUS.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(Lang.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await NEXUS.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await NEXUS.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(Lang.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    NEXUS.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: Lang.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                NEXUS.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `ytvd ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return NEXUS.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'song':{
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `Searched Song: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `ytad ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Songs",
                mentions: parseMention(teskd), sections
            }
            return NEXUS.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
    case 'play': case 'ytplay':{
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytad ${anulay.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytvd ${anulay.url}`, buttonText: {displayText: '► Video'}, type: 1},
		            {buttonId: `ytdoc ${anulay.url}`, buttonText: {displayText: '► Document'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
${themeemoji} Title : ${anulay.title}
${themeemoji} Ext : Search
${themeemoji} ID : ${anulay.videoId}
${themeemoji} Duration : ${anulay.timestamp}
${themeemoji} Viewers : ${anulay.views}
${themeemoji} Upload At : ${anulay.ago}
${themeemoji} Author : ${anulay.author.name}
${themeemoji} Channel : ${anulay.author.url}
${themeemoji} Description : ${anulay.description}
${themeemoji} Url : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'ytad': case 'getmusic': case 'yt': case 'youtube': case 'ytmp3': case 'ytmusic': case 'ytdl': {
    reply(` Getting  your 𝗮𝘂𝗱𝗶𝗼 ${pushname}_`)
    const YT=require('./lib/ytdlcore')
    let yts = require("youtube-yts")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    let stats = fs.statSync(ytmp3play.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Cant send audios longer than 60 MB!')
 NEXUS.sendMessage(from, {audio: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break
case 'ytdoc': {
    const YT=require('./lib/ytdlcore')
    let yts = require("youtube-yts")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    let stats = fs.statSync(ytmp3play.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Cant send audios longer than 60 MB!')
 NEXUS.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break
 case 'ytvd': case 'getvideo': case 'ytvideo': case 'ytmp4': {
    reply(`Getting ready your 𝘃𝗶𝗱𝗲𝗼 ${pushname}_`)
 const YT=require('./lib/ytdlcore')
    let yts = require("youtube-yts")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
    let vidduration =ytmp4play.duration;
    if (vidduration > 1800) return reply('Cant send videos longer than *30 min*')
NEXUS.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+` By *${global.BotName} MD*`,}, {quoted:m})
 }
 break
case 'pinterest': {
                m.reply(Lang.wait)
		let { pinterest } = require('./lib/scraper')
                let anupint = await pinterest(text)
                let result = anupint[Math.floor(Math.random() * anupint.length)]
                NEXUS.sendMessage(m.chat, { image: { url: result }, caption: `${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(Lang.wait)
                 let anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                 let buffer13x = await getBuffer(anufux.url)
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                m.reply(Lang.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/Xiao-❤-Media/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                NEXUS.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                NEXUS.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: botname,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                let anuwallpep = await wallpaper(text)
                let result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                let  anuwmedia = await wikimedia(text)
                let result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botname,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(Lang.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                NEXUS.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(Lang.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(Lang.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(Lang.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(Lang.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(Lang.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(Lang.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':{
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
  
case 'natural':{
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break 

case 'carbon':{
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'pencil':{
if(!q) throw`Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'textmaker': {  
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
NEXUS.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
NEXUS.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    NEXUS.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':{
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'thunder2':  {
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'neon':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'matrix2':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'sky':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'magma':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'sand':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'pencil':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'graffiti':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'metallic':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'steel':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'harrpotter':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'underwater':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'luxury':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'glue2':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'fabric':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'neonlight':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'lava':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'toxic':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'ancient':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'christmas2':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'sci_fi':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'rainbow':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'classic':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'watercolor2':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'halloweem2':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'halloweenfire':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'writing':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'foggy':{   
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'marvel':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':{   
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break
case 'sketch':{   
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
 maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
`${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
}
break
case 'wonderful':{
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
 maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
`${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
}
break
case 'batman':{  
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
 maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
`${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
}
break
case 'juice': {   
if(!q) throw `Use ${prefix + command} text`
m.reply(Lang.wait)
 maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
`${q}`,])
.then((data) => NEXUS.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
}
break
case 'pornhub':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(Lang.wait)
let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
NEXUS.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(Lang.wait)
let  inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
NEXUS.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(Lang.wait)
let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
NEXUS.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(Lang.wait)
let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
NEXUS.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(Lang.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
NEXUS.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark },  footer: botname, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(Lang.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
NEXUS.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':{
m.reply(Lang.wait)
var asupan = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'tiktokghea':{
m.reply(Lang.wait)
var gheayubi = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'tiktokbocil':{
m.reply(Lang.wait)
var bocil = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case 'tiktoknukhty':{
m.reply(Lang.wait)
var ukhty = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'tiktoksantuy':{
m.reply(Lang.wait)
var santuy = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'tiktokkayes':{
m.reply(Lang.wait)
var kayes = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'tiktokpanrika':{
m.reply(Lang.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'tiktoknotnot':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, video: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'chinese': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'hijab':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'indo':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
break
case 'japanese': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'korean': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'malay':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'randomgirl':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'randomboy': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'thai':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'vietnamese':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'aesthetic': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'antiwork':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'blackpink': {
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'BTS' : case 'bts':{ 
var hi  = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/bts')
var jj = hi.split('\n')
let hwe = pickRandom(jj)
let buttonmessage1 = {
                    image: { url: hwe },
                    caption: `𝓗𝓮𝓻𝓮 𝓨𝓸𝓾 𝓰𝓸❤......type *btss* for sticker`,
                    footer: botname,
                    headerType: 4
                    }
NEXUS.sendMessage(m.chat, buttonmessage1, { quoted: m })
}
break                    
case'btss': case 'btssticker':{
var ho = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/bts')
var ss = ho.split('\n')
let hh = pickRandom(ss)
NEXUS.sendImageAsSticker(m.chat, hh, m, { packname: global.packname, author: global.author })
}
break
case 'bike':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/bike.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'boneka':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'cosplay':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'cat':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/cat.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'doggo':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'hacking':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/hacking.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },footer: botname }, { quoted: m })
}
break
case 'justina':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/justina.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'kayes':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'kpop':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, footer: botname }, { quoted: m })
}
break
case 'notnot':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'car':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/car.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'couplepic':case 'couplepicture':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/profile.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'pubg':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'rose':{
m.reply(Lang.wait)
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/rose.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url },  footer: botname }, { quoted: m })
}
break
case 'ryujin':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case 'ulzzangboy':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case 'ulzzanggirl':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case 'wallpaperphone': case 'wallphone':{
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Xiao-❤-Media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
}
break

case 'rentbot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(NEXUS, m, m.chat)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(NEXUS => NEXUS.user).map(NEXUS => NEXUS.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await NEXUS.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
NEXUS.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case 'git': case 'gitclone':{
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n❤️‍🔥${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    NEXUS.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(Lang.error))
}
break
	        case 'pinterest': {
m.reply(Lang.wait)
let { pinterest } = require('./lib/scraper')
let anutrest = await pinterest(text)
let result = anutrest[Math.floor(Math.random() * anutrest.length)]
NEXUS.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		NEXUS.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'stelegram' :{
     if (!text) return reply('👸💬 Please give me a telegram sticker pack link')
     if (!text.includes('https://t.me/addstickers')) return reply('*👸💬 Please give me a correct link*\n _.stelegram https://t.me/addstickers/ViniProduction_by_MekathKalawak_')          
    await NEXUS.sendText(m.chat , '*Loading...*' )
    await fetchJson(`https://my-shinz.herokuapp.com/api/dowloader/telesticker?url=${text}`)
      .then(async (sticker) => {  
    const stik = sticker.result
    const img = stik[1].url
    const img2 = stik[2].url
    const img3 = stik[3].url
    const img4 = stik[4].url
    const img5 = stik[5].url
    const img6 = stik[6].url
    const img7 = stik[7].url
    const img8 = stik[8].url
    const img9 = stik[9].url
    const img10 = stik[10].url
    const img11 = stik[11].url
    const img12 = stik[12].url
    const img13 = stik[13].url
    const img14 = stik[14].url
    const img15 = stik[15].url
    
    await NEXUS.sendImageAsSticker(m.chat, img, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img2, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img3, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img4, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img5, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img6, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img7, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img8, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img9, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img10, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img11, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img12, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img13, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img14, m, { packname: global.packname, author: `${botname}`})
    await NEXUS.sendImageAsSticker(m.chat, img15, m, { packname: global.packname, author: `${botname}`})
    }).catch((err) => m.reply("This Telegram sticker can't be downloaded!!!*"))
}
break
case 'stickman':{
m.reply(Lang.wait)
NEXUS.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
}
break
case 'spongebob':{
m.reply(Lang.wait)
NEXUS.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
}
break
case 'gojosatoru':{
m.reply(Lang.wait)
NEXUS.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
}
break
case 'nicholas':{
m.reply(Lang.wait)
NEXUS.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
}
break
case 'cartoon':{
m.reply(Lang.wait)
NEXUS.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
}
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(Lang.wait)
                let media = await NEXUS.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                NEXUS.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                NEXUS.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw Lang.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with❤️‍🔥${prefix}getmsg ${text}

View list of Messages With❤️‍🔥${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with❤️‍🔥${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                NEXUS.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'developer': case 'dev': {
reply(`• 𝓧𝓘𝓐𝓞  𝓑𝓸𝓽 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻•\n\nPm: wa.me/918130784851 \n\n${global.linkz}`)
}
            break
case 'owner': case 'creator': case 'moderator': case 'mod': {
NEXUS.sendContact(m.chat, owner, m)
}
            break
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':{
				if (m.isGroup) return m.reply(Lang.group)
				if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
				 let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
				let gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
					NEXUS.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
				m.reply(`Success Sending Menfess!!`)
				break
			case 'menfesconfirm':{
 				 NEXUS.sendMessage(q, {text: `It's been confirmed, Confess🌹`})
				  m.reply(`Thank you confess for being accepted.`)
			}
				break
case 'anonymous': {
                if (m.isGroup) return m.reply(Lang.group)
				this.anonymous = this.anonymous ? this.anonymous : {}
                NEXUS.sendButtonText(m.chat,  `\`\`\`Hi ${await NEXUS.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    await NEXUS.sendButtonText(m.chat,`\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await NEXUS.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await NEXUS.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await NEXUS.sendButtonText(room.a,  `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await NEXUS.sendButtonText(room.b, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    await NEXUS.sendButtonText(m.chat, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    await NEXUS.sendButtonText(m.chat,  `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await NEXUS.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await NEXUS.sendButtonText(room.a, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await NEXUS.sendButtonText(room.b, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    await NEXUS.sendButtonText(m.chat, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
	    }
case 'public': {
 if (!isCreator) return reply(Lang.owner)
 NEXUS.public = true
 reply('I am now Publicly accessable!')
 NEXUS.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
 if (!isCreator) return reply(Lang.owner)
 NEXUS.public = false
 reply('Only Owner can use me now!')
 NEXUS.setStatus(`Mode : Self`)
 }
 break

            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw Lang.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(Lang.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(Lang.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(Lang.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(Lang.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                NEXUS.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, NEXUS.user.name, `*Hello NEXUS* !`, `Pilih Din`, sections, m)
                }
            }
            break
            
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
            await NEXUS.sendButtonText(ownernya, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await NEXUS.sendButtonText(m.chat, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
            await NEXUS.sendButtonText(ownernya, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await NEXUS.sendButtonText(m.chat,  akhji, botname, m, {mentions: ments})
            }
            break
case 'sound': {
if(!text) throw `example: ${prefix + command} sound 12`
const NEXUS_dev = await getBuffer(`https://github.com/NEXUSAT12/Tiktokmusic-API/raw/master/tiktokmusic/sound${text}.mp3`)
await NEXUS.sendMessage(m.chat, { audio: NEXUS_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
}   
break
case 'hijack':{
  if(!isCreator) throw Lang.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  NEXUS.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await NEXUS.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
if (!m.key.fromMe && !isCreator) return m.reply(Lang.owner)
if (!isQuotedImage) return m.reply('Reply the picture!')
let media = await NEXUS.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await fs.writeFileSync('./Xiao-❤-Media/theme/xiao1.jpeg', media)
m.reply(Lang.success)
}
break
case 'creategroup':{
if (!isCreator) return m.reply(Lang.owner)
if (!q) return reply("Enter text")
const group = await NEXUS.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(Lang.success)
NEXUS.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
}
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat,`${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat,`${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat,`${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat,`${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat,`${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning on all antilink in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning off all antilink in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
case 'autoreply': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  await NEXUS.sendButtonText(m.chat,   `${global.botname}`, m)
  }
  }
  break
case 'dare':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner X through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Xdare = dare[Math.floor(Math.random() * dare.length)]
              let bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NEXUS.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ Xdare }, {quoted:m})
}
              break
                            break
       case 'truth':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, X?🤣",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Xtruth = truth[Math.floor(Math.random() * truth.length)]
              let buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NEXUS.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Xtruth }, {quoted:m})
       }
              break  
case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n❤️‍🔥${prefix}fliptext ${ownername}`)
let quere = args.join(" ")
let flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anuoncr2 = await NEXUS.downloadAndSaveMediaMessage(quoted)
NEXUS.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuonce2 = await NEXUS.downloadAndSaveMediaMessage(quoted)
        NEXUS.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autostickergc': case 'autosticker':{
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
}
break
case 'autoresetgclink': case 'autoreset':{
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args.length < 1) return m.reply('type autoresetgclink on to enable\ntype autoresetgclink off to disable')
if (args[0]  === 'on'){
if (isAutoresetgclink) return m.reply(`Already activated`)
autoresetgclink.push(from)
fs.writeFileSync('./database/autoresetgclink.json', JSON.stringify(autoresetgclink))
m.reply('autoreset activated')
} else if (args[0] === 'off'){
let anuticker1 = autoresetgclink.indexOf(from)
autoresetgclink.splice(anuticker1, 1)
fs.writeFileSync('./database/autoresetgclink.json', JSON.stringify(autoresetgclink))
m.reply('auto reset gc link  deactivated')
}
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await NEXUS.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NEXUS.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  await NEXUS.sendButtonText(m.chat, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': {
if (!text) throw Lang.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
NEXUS.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(Lang.error))
}
break
case 'lyrics2': {
	    if (!text) return reply(`Use example❤️‍🔥${prefix}lyrics Despacito`)
	m.reply(Lang.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'lyrics': {
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*${themeemoji} Title :* ${lyrics.title}
*${themeemoji} Artist :* ${lyrics.artist}
*${themeemoji} Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await NEXUS.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
}
    break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        let Xezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        let n = Xezyanu.result
        let images = n[Math.floor(Math.random() * n.length)]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
${themeemoji} *Query* : ${text}
${themeemoji} *Media Url* : ${images}`,
                    footer: botname,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'img':
case 'image': {
                m.reply(Lang.wait)
		let { pinterest } = require('./lib/scraperW')
                let anuXezy2 = await pinterest(text)
                let resultkkk3 = anuXezy2[Math.floor(Math.random() * anuXezy2.length)]
                NEXUS.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ${themeemoji} Media Url : `+resultkkk3 }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
NEXUS.downloadAndSaveMediaMessage(quoted, "gifee")
NEXUS.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await NEXUS.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await NEXUS.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await NEXUS.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await NEXUS.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await NEXUS.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
NEXUS.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
NEXUS.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animewall2': case 'animewallpaper2':{
m.reply(Lang.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'bot': {
if (!text) return m.reply('How are you brother?')
const botreply = await axios.get(`http://api.brainshop.ai/get?bid=173534&key=Gnb7EUxsV21uoNMM&uid=[uid]&msg=${text}`)
let txt = `BOT😗:  ${botreply.data.cnt}`
m.reply(txt) 
}	
break
case 'igemoji': 
case 'instagramemoji': {
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "11")
}
break
case 'iphoneemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "0")
}
break
case 'googleemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "1")
}
break
case 'samsungemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "2")
}
break
case 'microsoftemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "3")
}
break
case 'whatsappemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "4")
}
break
case 'twitteremoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "5")
}
break
case 'facebookemoji': 
case 'fbemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "6")
}
break
case 'skypeemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "7")
}
break
case 'joyemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "8")
}
break
case 'mojiemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "9")
}
case 'pediaemoji': {
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(Lang.wait)
emote(q, "10")
}
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':{
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						NEXUS.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
}
					break
case 'manga':{
if (!m.isGroup) return m.reply(Lang.group) 
m.reply(Lang.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/nsfw/manga.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, buttons: but, footer: botname }, { quoted: m })
}
break
case'slap2':{
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await NEXUS.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await NEXUS.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
}
break
case 'animecuddle':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break   
case 'animeslap':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animepat': {
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animeneko':{
m.reply(Lang.wait)						
let  waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animehug':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animekiss':{
m.reply(Lang.wait)						
let  waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animewlp':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animespank':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animecry':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animekill':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animelick':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animebite':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animeyeet':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animebully':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animebonk':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animewink':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animepoke':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animesmile':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animewave':{
m.reply(Lang.wait)						
let  waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animeawoo':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animeblush':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animesmug':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animeglomp':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animehappy':{
m.reply(Lang.wait)						
let waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animedance':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animecringe':{
m.reply(Lang.wait)						
let  waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animehighfive':{
m.reply(Lang.wait)						
let waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animehandhold':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'animemegumin':{
m.reply(Lang.wait)						
 let waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      headerType: 4
      }     
            await NEXUS.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'shinobu2':  {
m.reply(Lang.wait)						
let ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
     headerType: 4
                      }
await NEXUS.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })             
}
break
case 'animemegumin':{
m.reply(Lang.wait)						
let ud = await axios.get('https://waifu.pics/api/sfw/megumin')
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
     headerType: 4
                      }
await NEXUS.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
}
break     
case 'animeawoo':{
m.reply(Lang.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${global.botname}`,
  headerType: 2
  }       
            await NEXUS.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
}
break
case 'loli':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/loli.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'husbu':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/husbu.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'neko2':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/neko.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'randomanime':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/random.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'shota':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/shota.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'waifu2':{
if (!m.isGroup) return m.reply(Lang.group)
m.reply(Lang.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Xiao-❤-Media/anime/waifu.json'))
var Xyresult = pickRandom(ahegaonsfw)
NEXUS.sendMessage(m.chat, { caption: Lang.success, image: { url: Xyresult.url }, footer: botname }, { quoted: m })
}
break
case 'genshin': {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await NEXUS.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw Lang.error
}
break
case 'anime':{
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*

❄ *Description:* ${anime.synopsis}*`
                await NEXUS.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
                break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NEXUS.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await NEXUS.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'N E X U S', 'B O T M D', m, {asSticker: true})
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NEXUS.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NEXUS.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/NEXUSAT12/XBOTMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NEXUS.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'hbd': case'happy birthday':{
if(!m.isGroup) throw Lang.group 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let hdv = ['https://media.tenor.com/R10x1pfpx4cAAAPo/kids-on-the-slope-jun.mp4']
let to = `Cheers to you for another trip around the sun The day is all yours 💙Maybe you receive the greatest of joys and everlasting bliss. You are a gift yourself, and you deserve the best of everything. Happy birthday•\n 🥂🎂💙 *HAPPY BIRTHDAY* 🎂🥂\n🥳🥳🥳✨ Enyoy this special day in celebration of a most wonderful you🙂🥳🤩😍 @${users.split('@')[0]}\n`
NEXUS.sendMessage(m.chat,{video:{url:hdv},caption:to,mentions:participants.map(a=>a.id)},{quoted:m})
}
case 'rate': {
            	if (!text) throw `Example : ${prefix + command} my profile`
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
            await NEXUS.sendButtonText(m.chat,  jawab, botname, m)
            }
            break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                await NEXUS.sendButtonText(m.chat, lowq, botname, m, {quoted: fkontak})
            	}
            break
case 'handsomecheck':{
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @X`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					NEXUS.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
	}
					break
case 'beautifulcheck':{
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @X`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					NEXUS.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
}
					break
					case 'charactercheck':{
					if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @X`)
					const Xy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Xy[Math.floor(Math.random() * Xy.length)]
					NEXUS.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
					}
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck': {
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @X`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
NEXUS.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
		      }
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${Lang.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
                    await NEXUS.sendButtonText(m.chat,  jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await NEXUS.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'reels':{ 
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return NEXUS.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    NEXUS.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    NEXUS.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        NEXUS.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        NEXUS.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            NEXUS.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case 'spotify':{
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await NEXUS.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await NEXUS.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
	}
break
case 'reddit': {
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            NEXUS.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
        })
        .catch(err => {
            m.reply ("Not found!")
        })
}
        break
case 'define': {
if (!q) throw `What do you want to define?`
try {
let targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw Lang.error
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   NEXUS.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
}
    break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let teks = `*「 ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate 🍜`
let buttonMessage = {
image: {url: `https://telegra.ph/file/041b07858d43fa6fa16ee.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 
thumbnail: fs.readFileSync("Xiao-❤-Media/xiao1.jpeg"),
mediaType:1,
mediaUrl: 'https://youtu.be/5IGmJCEErCg',
sourceUrl: "https://linktr.ee/Nexus_21"
}}
}
NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
case 'quotes': {
const quoteXy = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteXy.data.quote.body}\n\n*${themeemoji} Author:* ${quoteXy.data.quote.author}`
return m.reply(textquotes)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return m.reply(Lang.group)
if (!isBotAdmins) return m.reply(Lang.botAdmin)
if (!isAdmins && !isCreator) return m.reply(Lang.admin)
NEXUS.groupRevokeInvite(m.chat)
}
break
case 'imdb':  {
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           NEXUS.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
}
            break
case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           NEXUS.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope': {
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
}
        break
case 'wanumber': case 'searchno': case 'searchnumber': {
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 9169091372xx`)
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await NEXUS.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await NEXUS.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
}
break

case 'tqtt': {
let text = ` ╭──────༺♡༻──────╮\n│     𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎       │\n╰──────༺♡༻──────╯\n\n ➦𝐓𝐇𝐄 𝐅𝐈𝐑𝐒𝐓 𝐓𝐇𝐀𝐍𝐊𝐒 𝐈𝐒 𝐓𝐎 𝐌𝐘 𝐌𝐀𝐇𝐀𝐃𝐄𝐕 \n➻ 𝐒𝐄𝐂𝐎𝐍𝐃 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 𝐌𝐄 𝐌𝐘𝐒𝐄𝐋𝐅  \n➳𝐋𝐀𝐒𝐓 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 𝐘𝐎𝐔 𝐀𝐋𝐋 𝐓𝐇𝐄 𝐔𝐒𝐄𝐑𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 𝐌𝐘 𝐁𝐎𝐓 \n\n ╭──────༺♡༻──────╮\n │         𝐍𝐄𝐗𝐔𝐒          │\n╰──────༺♡༻──────╯` 
let  lol = fs.readFileSync('./Xiao-❤-Media/Xiao2.jpeg') 
NEXUS.sendMessage(m.chat, { image:lol, caption:text}, { quoted: m })
}
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': { 
NEXUS.sendMessage(from, { react: { text: `${allmenureactemoji}`, key: m.key }})
let teks = `*◯───────[ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐌𝐄𝐍𝐔 ]───────◯*

╭⛒  *ＯＷＮＥＲ* : ${ownername}
├⛒  *ＯＷＮＥＲ ＴＡＧ* : @${ownernya.split('@')[0]}
├⛒  *ＧＲＯＵＰ* : ${gclist}
├⛒  *ＲＥＳＰＯＮＳＥ* : ${ping}
├⛒  *ＴＩＭＥ* : ${bottime}
╰⛒  *​​Ｕｓｅｒｓ* : ${pclist}

╭──────────[  𝐌𝐄𝐍𝐔 ]───────────╮
│╭──────────────────────────────╯
│├⛒ ${prefix}*OWNERMENU*      
│├⛒ ${prefix}*GROUPMENU*
│├⛒ ${prefix}*MAKERMENU*
│├⛒ ${prefix}*SOUNDMENU*
│├⛒ ${prefix}*DOWNLOADMENU*
│├⛒ ${prefix}*STICKERMENU*
│├⛒ ${prefix}*SEARCHMENU*
│├⛒ ${prefix}*CONVERTMENU*
│├⛒ ${prefix}*RANDOMEIMAGEMENU*
│├⛒ ${prefix}*RANDOMVIDEOMENU*
│├⛒ ${prefix}*ANIMEMENU*
│├⛒ ${prefix}*EMOTEMENU*
│├⛒ ${prefix}*ANIMESTICKERMENU*
│├⛒ ${prefix}*GAMEMENU*
│├⛒ ${prefix}*DATABASEMENU*
│├⛒ ${prefix}*OTHERMENU*
│├⛒ ${prefix}*SOUNDMENU*
│├⛒ ${prefix}*FUNMENU*
│├⛒ ${prefix}*IMAGEEFFECTMENU*
│├⛒ ${prefix}*thanksto*
│╰───────────────────────────╮
╰───────[ ${botname} ]───────╯`
let buttonMessage = {
document: fs.readFileSync('./Xiao-❤-Media/XBOT.xlsx'),
mimetype: docs,
fileName: `${pushname}`,
fileLength: 99999999999999,
caption: teks,
footer: `𝙡𝙤𝙖𝙙 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: "I deserve something for my hardwork",
mediaType:2,
thumbnail:fs.readFileSync('./Xiao-❤-Media/xiao1.jpeg'),
sourceUrl: 'https://linktr.ee/Nexus_21/',
mediaUrl: 'https://youtu.be/5IGmJCEErCg'
}}
}
NEXUS.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            case 'command': {
	const sections = [{
								"title": "Initial Features Of Bot 😎",
								"rows": [
									{
										"title": "Other ☕",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Sound Menu 🎵",
										"description": "Displays The List Of Sound Features",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu 🃏",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Image Menu 🌆",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Random Video Menu 🌆",
										"description": "Displays The List Of Random Video Features",
										"rowId": `${prefix}randomvideomenu`
									},
									{
										"title": "Image Effect Menu 🖼️",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu 😘",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu 😀",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ☺️",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
										{
											"title": "Fun Menu 🕺",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu 🎮",
										"description": "Displays The List Of Game Features",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ♻️",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Other Menu 🐸",
										"description": "Displays The List Miscellaneous Features",
										"rowId": `${prefix}othermenu`
									     }
								]
							},
							{
								"title": "Chat With Fellow Users 🌝",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🏻‍♂️",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "Thanks To ❤️",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "🦋⃟✮͢ 𝑻𝒂𝒑 𝒉𝒆𝒓𝒆 ✮⃝❤𝐓𝐎 𝐒𝐄𝐋𝐄𝐂𝐓",
  footer: `${botname}\n📍YouTube: ${websitex}\n🍜Script: ${botscript}`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "Menu",
  sections
}
const sendMsg = await NEXUS.sendMessage(m.chat, listMessage)
}
break
case 'qr': case 'qrcode': {
        if (!m.isGroup) throw Lang.group
    m. reply(`Running repl....Please wait until repl.it responds...`)						
    var replqr =  await getBuffer(`https://Xiao-md.devill-mascot.repl.co`)
          let bmffg = {
           image: replqr,
           caption:  `Scan the qr within 10-15 seconds...\ntype qr again to get a new qr `,
          footer:  `${botname}`,
          headerType: 4
          }     
                await NEXUS.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
         }
    break

      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚘𝚠𝚗𝚎𝚛 𝚖𝚎𝚗𝚞  ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚂𝚎𝚕𝚏
│❐${prefix}𝙿𝚞𝚋𝚕𝚒𝚌
│❐${prefix}𝙹𝚘𝚒𝚗 [𝙻𝚒𝚗𝚔]
│❐${prefix}𝙻𝚎𝚊𝚟𝚎𝚐𝚌
│❐${prefix}𝚂𝚎𝚝𝚋𝚒𝚘
│❐${prefix}𝙷𝚒𝚓𝚊𝚌𝚔
│❐${prefix}𝙲𝚛𝚎𝚊𝚝𝚎𝚐𝚛𝚘𝚞𝚙 [𝙽𝚊𝚖𝚎]
│❐${prefix}𝙱𝚕𝚘𝚌𝚔 [𝚄𝚜𝚎𝚛]
│❐${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔 [𝚄𝚜𝚎𝚛]
│❐${prefix}𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝙸𝚖𝚊𝚐𝚎]
│❐${prefix}𝚂𝚎𝚝𝚝𝚑𝚞𝚖𝚋 [𝚁𝚎𝚙𝚕𝚢 𝙸𝚖𝚐]
│❐${prefix}𝚂𝚎𝚝𝚎𝚡𝚒𝚏
│❐${prefix}𝚀𝚁 [ 𝙰𝚃𝚃𝙰𝙲𝙷 𝙱𝙾𝚃 ] 
│❐${prefix}𝙾𝚠𝚗𝚎𝚛𝚙𝚛𝚘 [𝚃𝙾 𝙼𝙰𝙺𝙴 𝙾𝚆𝙽𝙴𝚁 𝙰𝙳𝙼𝙸𝙽]
│
╰───────[ ${botname} ]───────◯*`,
    footer: ` 𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')
NEXUS.sendMessage(from, { react: { text: `${allmenureactemoji}`, key: m.key }})
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ]───────◯*	  
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙶𝚛𝚘𝚞𝚙𝚕𝚒𝚗𝚔
│❐${prefix}𝙱𝚘𝚝 [𝚃𝚘 𝚌𝚑𝚊𝚝]
│❐${prefix}𝙴𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝙾𝚙𝚝𝚒𝚘𝚗]
│❐${prefix}𝚂𝚎𝚝𝚐𝚌𝚙𝚙 [𝙸𝚖𝚊𝚐𝚎]
│❐${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙶𝚛𝚘𝚞𝚙
│❐${prefix}𝙱𝚘𝚝𝚐𝚛𝚘𝚞𝚙𝚜
│❐${prefix}𝚁𝚎𝚜𝚎𝚝𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚗𝚔
│❐${prefix}𝙴𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝙾𝚙𝚝𝚒𝚘𝚗]
│❐${prefix}𝙰𝚍𝚍 [𝚄𝚜𝚎𝚛]
│❐${prefix}𝙼𝚎𝚗𝚏𝚎𝚜𝚜 [𝙽𝚞𝚖𝚋𝚎𝚛]
│❐${prefix}𝙺𝚒𝚌𝚔 [𝚁𝚎𝚙𝚕𝚢/𝚃𝚊𝚐]
│❐${prefix}𝙷𝚒𝚍𝚎𝚝𝚊𝚐 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚃𝚊𝚐𝚊𝚕𝚕 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙰𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚙𝚌 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙻𝚎𝚟𝚎𝚕𝚒𝚗𝚐 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚐𝚌 [𝙾𝚗/𝙾𝚏𝚏] 
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚝𝚐 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚝𝚝 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚢𝚝𝚌𝚑 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚢𝚝𝚟𝚒𝚍 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚒𝚐 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚏𝚋 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚝𝚠𝚒𝚝 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝚊𝚕𝚕 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚟𝚒𝚛𝚞𝚜 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚗𝚝𝚒𝚠𝚊𝚖𝚎 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙰𝚞𝚝𝚘𝚛𝚎𝚜𝚎𝚝𝚐𝚌𝚕𝚒𝚗𝚔 [𝙾𝚗/𝙾𝚏𝚏]
│❐${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎 [𝚁𝚎𝚙𝚕𝚢/𝚃𝚊𝚐]
│❐${prefix}𝙳𝚎𝚖𝚘𝚝𝚎 [𝚁𝚎𝚙𝚕𝚢/𝚃𝚊𝚐]
│❐${prefix}𝚁𝚎𝚊𝚌𝚝 [𝚁𝚎𝚙𝚕𝚢 𝙴𝚖𝚘𝚓𝚒]
│❐${prefix}𝙶𝚎𝚝𝚙𝚙 [𝚁𝚎𝚙𝚕𝚢 𝚄𝚜𝚎𝚛]
│❐${prefix}𝚅𝚘𝚝𝚎
│❐${prefix}𝙳𝚎𝚟𝚘𝚝𝚎
│❐${prefix}𝚄𝚙𝚟𝚘𝚝𝚎
│❐${prefix}𝙲𝚑𝚎𝚌𝚔𝚟𝚘𝚝𝚎
│❐${prefix}𝙳𝚎𝚕𝚟𝚘𝚝𝚎
│ 
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙻𝙾𝙶𝙾 𝙼𝙴𝙽𝚄 ]───────◯*	
│ ╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│ ├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│ ╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰────────────╍╍╍╍╍╍╍╍╮
╭────────────╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙲𝚊𝚗𝚍𝚢
│❐${prefix}8𝚋𝚒𝚝
│❐${prefix}𝙷𝚘𝚛𝚛𝚘𝚛
│❐${prefix}𝙷𝚘𝚘𝚛𝚛𝚘𝚛
│❐${prefix}𝚁𝚎𝚝𝚛𝚘
│❐${prefix}𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔𝚗𝚎𝚘𝚗
│❐${prefix}𝙳𝚎𝚎𝚙𝚜𝚎𝚊
│❐${prefix}𝚂𝚌𝚒𝚏𝚒
│❐${prefix}𝙵𝚒𝚌𝚝𝚒𝚘𝚗
│❐${prefix}𝙱𝚎𝚛𝚛𝚢
│❐${prefix}𝙵𝚛𝚞𝚒𝚝𝚓𝚞𝚒𝚌𝚎
│❐${prefix}𝙱𝚒𝚜𝚌𝚞𝚒𝚝
│❐${prefix}𝚆𝚘𝚘𝚍
│❐${prefix}𝙲𝚑𝚘𝚌𝚘𝚕𝚊𝚝𝚎
│❐${prefix}𝙼𝚊𝚝𝚛𝚒𝚡
│❐${prefix}𝙱𝚕𝚘𝚘𝚍
│❐${prefix}𝙷𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗
│❐${prefix}𝚆𝚒𝚌𝚔𝚎𝚛
│❐${prefix}𝙳𝚊𝚛𝚔𝚐𝚘𝚕𝚍
│❐${prefix}𝙵𝚒𝚛𝚎𝚠𝚘𝚛𝚔
│❐${prefix}𝚂𝚔𝚎𝚕𝚎𝚝𝚘𝚗
│❐${prefix}𝚂𝚊𝚗𝚍
│❐${prefix}𝙶𝚕𝚞𝚎
│❐${prefix}𝙻𝚎𝚊𝚟𝚎𝚜
│❐${prefix}𝙼𝚊𝚐𝚖𝚊
│❐${prefix}𝙻𝚊𝚟𝚊
│❐${prefix}𝚁𝚘𝚌𝚔𝚊𝚛𝚝
│❐${prefix}𝙱𝚕𝚘𝚘𝚍𝚐𝚕𝚊𝚜
│❐${prefix}𝚄𝚗𝚍𝚎𝚛𝚠𝚊𝚝𝚎𝚛
│❐${prefix}𝚃𝚎𝚡𝚝𝚖𝚊𝚔𝚎𝚛
│❐${prefix}𝙷𝚘𝚗𝚎𝚢
│❐${prefix}𝙸𝚌𝚎
│❐${prefix}𝚆𝚊𝚝𝚎𝚛𝚌𝚘𝚕𝚘𝚛
│❐${prefix}𝙼𝚞𝚕𝚝𝚒𝚌𝚘𝚕𝚘𝚛
│❐${prefix}𝚂𝚗𝚘𝚠
│❐${prefix}𝙷𝚊𝚛𝚛𝚢𝚙𝚘𝚝
│❐${prefix}𝙷𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
│❐${prefix}𝙱𝚛𝚘𝚔𝚎𝚗𝚐𝚕𝚊𝚜𝚜
│❐${prefix}𝚆𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
│❐${prefix}𝚂𝚙𝚘𝚘𝚔𝚢
│❐${prefix}𝙲𝚒𝚛𝚌𝚞𝚒𝚝
│❐${prefix}𝙼𝚎𝚝𝚊𝚕𝚕𝚒𝚌
│❐${prefix}𝙳𝚎𝚖𝚘𝚗
│❐${prefix}𝚂𝚙𝚊𝚛𝚔𝚕𝚎𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
│❐${prefix}𝙲𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
│❐${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
│❐${prefix}3𝚍𝚋𝚘𝚡
│❐${prefix}𝚆𝚊𝚝𝚎𝚛𝚍𝚛𝚘𝚙
│❐${prefix}𝙻𝚒𝚘𝚗2
│❐${prefix}𝙿𝚊𝚙𝚎𝚛𝚌𝚞𝚝
│❐${prefix}𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
│❐${prefix}𝙽𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕
│❐${prefix}3𝚍𝚊𝚟𝚎𝚗𝚐𝚎𝚛𝚜
│❐${prefix}3𝚍𝚜𝚝𝚘𝚗𝚎
│❐${prefix}3𝚍𝚜𝚝𝚘𝚗𝚎2
│❐${prefix}𝚂𝚞𝚖𝚖𝚎𝚛𝚝𝚒𝚖𝚎
│❐${prefix}𝚃𝚑𝚞𝚗𝚍𝚎𝚛
│❐${prefix}𝚆𝚒𝚗𝚍𝚘𝚠
│❐${prefix}𝙶𝚛𝚊𝚏𝚏𝚒𝚝𝚒
│❐${prefix}𝙶𝚛𝚊𝚏𝚏𝚒𝚝𝚒𝚋𝚒𝚔𝚎
│❐${prefix}𝙿𝚘𝚛𝚗𝚑𝚞𝚋
│❐${prefix}𝙶𝚕𝚒𝚝𝚌𝚑
│❐${prefix}𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔𝚊𝚛𝚝
│❐${prefix}𝙶𝚕𝚒𝚝𝚌𝚑2
│❐${prefix}𝙶𝚕𝚒𝚝𝚌𝚑3
│❐${prefix}3𝚍𝚜𝚙𝚊𝚌𝚎
│❐${prefix}𝙻𝚒𝚘𝚗
│❐${prefix}3𝚍𝚗𝚎𝚘𝚗
│❐${prefix}𝙶𝚛𝚎𝚎𝚗𝚗𝚎𝚘𝚗
│❐${prefix}𝙱𝚘𝚔𝚎𝚑
│❐${prefix}𝙷𝚘𝚕𝚘𝚐𝚛𝚊𝚙𝚑𝚒𝚌
│❐${prefix}𝙱𝚎𝚊𝚛
│❐${prefix}𝚆𝚘𝚕𝚏
│❐${prefix}𝙹𝚘𝚔𝚎𝚛
│❐${prefix}𝙳𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
│❐${prefix}𝙳𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛2
│❐${prefix}𝚃𝚑𝚎𝚠𝚊𝚕𝚕
│❐${prefix}𝙽𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
│❐${prefix}𝙽𝚊𝚝𝚞𝚛𝚊𝚕
│❐${prefix}𝙲𝚊𝚛𝚋𝚘𝚗
│❐${prefix}𝙿𝚎𝚗𝚌𝚒𝚕
│❐${prefix}𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔2
│❐${prefix}𝙽𝚎𝚘𝚗
│❐${prefix}𝙽𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝2
│❐${prefix}𝚃𝚘𝚡𝚒𝚌
│❐${prefix}𝚂𝚝𝚛𝚊𝚠𝚋𝚎𝚛𝚛𝚢
│❐${prefix}𝙳𝚒𝚜𝚌𝚘𝚟𝚎𝚛𝚢
│❐${prefix}1917
│❐${prefix}𝚂𝚌𝚒_𝙵𝚒
│❐${prefix}𝙰𝚗𝚌𝚒𝚎𝚗𝚝
│❐${prefix}𝙵𝚊𝚋𝚛𝚒𝚌
│❐${prefix}𝙷𝚘𝚘𝚛𝚛𝚘𝚛
│❐${prefix}𝚆𝚑𝚒𝚝𝚎𝚋𝚎𝚊𝚛
│❐${prefix}𝙹𝚞𝚒𝚌𝚎
│❐${prefix}𝙱𝚊𝚝𝚖𝚊𝚗
│❐${prefix}𝙼𝚞𝚕𝚝𝚒𝚌𝚘𝚕𝚘𝚛
│❐${prefix}𝚆𝚘𝚗𝚍𝚎𝚛𝚏𝚞𝚕
│❐${prefix}𝚂𝚔𝚎𝚝𝚌𝚑
│❐${prefix}𝙼𝚊𝚛𝚟𝚎𝚕
│❐${prefix}𝙵𝚘𝚐𝚐𝚢
│❐${prefix}𝚆𝚛𝚒𝚝𝚒𝚗𝚐
│❐${prefix}𝙷𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚏𝚒𝚛𝚎
│❐${prefix}𝙷𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗
│❐${prefix}𝚆𝚊𝚝𝚎𝚛𝚌𝚘𝚕𝚘𝚛
│❐${prefix}𝙲𝚕𝚊𝚜𝚜𝚒𝚌
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄  ]───────◯*	  
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯	
│
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔 [𝚄𝚛𝚕]
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚊𝚞𝚍𝚒𝚘 [𝚄𝚛𝚕]
│❐${prefix}𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚄𝚛𝚕]
│❐${prefix}𝚂𝚙𝚘𝚝𝚒𝚏𝚢 [𝚄𝚛𝚕]
│❐${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 [𝚄𝚛𝚕]
│❐${prefix}𝚈𝚝𝚖𝚙3 [𝚄𝚛𝚕|𝚀𝚞𝚊𝚕𝚒𝚝𝚢]
│❐${prefix}𝚈𝚝𝚖𝚙4 [𝚄𝚛𝚕|𝚀𝚞𝚊𝚕𝚒𝚝𝚢]
│❐${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎 [𝚁𝚎𝚙𝚘 𝙻𝚒𝚗𝚔]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙿𝚕𝚊𝚢 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚂𝚘𝚗𝚐 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚈𝚝𝚜 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙻𝚢𝚛𝚒𝚌𝚜 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙶𝚘𝚘𝚐𝚕𝚎 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙶𝚘𝚘𝚐𝚕𝚎 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙰𝚗𝚒𝚖𝚎 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙸𝚖𝚊𝚐𝚎 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚂𝚎𝚊𝚛𝚌𝚑𝚗𝚘 [𝙽𝚞𝚖𝚋𝚎𝚛]
│❐${prefix}𝙷𝚘𝚛𝚘𝚜𝚌𝚘𝚙𝚎 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙸𝚖𝚍𝚋 [𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎]
│❐${prefix}𝚆𝚎𝚊𝚝𝚑𝚎𝚛 [𝙻𝚘𝚌 𝙽𝚊𝚖𝚎]
│❐${prefix}𝙶𝚎𝚗𝚜𝚑𝚒𝚗 [𝙲𝚑𝚊𝚛 𝙽𝚊𝚖𝚎]
│❐${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚀𝚞𝚎𝚛𝚢]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break 
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄  ]───────◯*	  
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚃𝚘𝚒𝚖𝚊𝚐𝚎 [𝚁𝚎𝚙𝚕𝚢 𝚂𝚝𝚒𝚌𝚔]
│❐${prefix}𝚂𝚝𝚒𝚌𝚔𝚎𝚛 [𝚁𝚎𝚙𝚕-𝚢 𝙸𝚖𝚐|𝙶𝚒𝚏]
│❐${prefix}𝚂𝚝𝚎𝚕𝚎𝚐𝚛𝚊𝚖 [𝚁𝚎𝚙𝚕𝚢 𝚞𝚛𝚕]
│❐${prefix}𝚃𝚊𝚔𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙸𝚖𝚐|𝙶𝚒𝚏|𝚂𝚝𝚒𝚔]
│❐${prefix}𝚂𝚖𝚎𝚖𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙸𝚖𝚐]
│❐${prefix}𝙴𝚖𝚘𝚓𝚒 [𝙴𝚖𝚘𝚓𝚒]
│❐${prefix}𝚃𝚘𝚟𝚒𝚍𝚎𝚘 [𝚁𝚎𝚙𝚕𝚢 𝙸𝚖𝚐]
│❐${prefix}𝚃𝚘𝚐𝚒𝚏 [𝚁𝚎𝚙𝚕𝚢 𝚂𝚝𝚒𝚌𝚔]
│❐${prefix}𝚃𝚘𝚟𝚗 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚃𝚘𝚖𝚙3 [𝚁𝚎𝚙𝚕𝚢 𝚅𝚗]
│❐${prefix}𝚃𝚘𝚊𝚞𝚍𝚒𝚘 [𝚁𝚎𝚙𝚕𝚢 𝚅𝚒𝚍]
│❐${prefix}𝙴𝚋𝚒𝚗𝚊𝚛𝚢 [𝚁𝚎𝚙𝚕𝚢 𝚃𝚡𝚝]
│❐${prefix}𝙳𝚋𝚒𝚗𝚊𝚛𝚢 [𝚁𝚎𝚙𝚕𝚢 𝚃𝚡𝚝]
│❐${prefix}𝚃𝚒𝚗𝚢𝚞𝚛𝚕 [𝙻𝚒𝚗𝚔]
│❐${prefix}𝚂𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚅𝚘𝚕𝚞𝚖𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙱𝚊𝚜𝚜 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙱𝚕𝚘𝚠𝚗 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙳𝚎𝚎𝚙 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙴𝚊𝚛𝚛𝚊𝚙𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙵𝚊𝚜𝚝 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙵𝚊𝚝 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝙽𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚁𝚎𝚟𝚎𝚛𝚜𝚎 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚁𝚘𝚋𝚘𝚝 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚂𝚕𝚘𝚠 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚂𝚖𝚘𝚘𝚝𝚑 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│❐${prefix}𝚂𝚚𝚞𝚒𝚛𝚛𝚎𝚕 [𝚁𝚎𝚙𝚕𝚢 𝙰𝚞𝚍]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄 ]───────◯*	   
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙲𝚘𝚏𝚏𝚎𝚎
│❐${prefix}𝚆𝚘𝚘𝚏
│❐${prefix}𝙼𝚎𝚘𝚠
│❐${prefix}𝙻𝚒𝚣𝚊𝚛𝚍
│❐${prefix}𝙲𝚑𝚒𝚗𝚎𝚜𝚎
│❐${prefix}𝙹𝚊𝚙𝚊𝚗𝚎𝚜𝚎
│❐${prefix}𝙺𝚘𝚛𝚎𝚊𝚗
│❐${prefix}𝙸𝚗𝚍𝚘
│❐${prefix}𝚃𝚑𝚊𝚒
│❐${prefix}𝚅𝚒𝚎𝚝𝚗𝚊𝚖𝚎𝚜𝚎
│❐${prefix}𝙼𝚊𝚕𝚊𝚢
│❐${prefix}𝙷𝚒𝚓𝚊𝚋
│❐${prefix}𝚁𝚊𝚗𝚍𝚘𝚖𝚐𝚒𝚛𝚕
│❐${prefix}𝚁𝚊𝚗𝚍𝚘𝚖𝚋𝚘𝚢
│❐${prefix}𝙰𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌
│❐${prefix}𝙰𝚗𝚝𝚒𝚠𝚘𝚛𝚔
│❐${prefix}𝙲𝚘𝚜𝚙𝚕𝚊𝚢
│❐${prefix}𝙲𝚊𝚛
│❐${prefix}𝙱𝚒𝚔𝚎
│❐${prefix}𝙳𝚘𝚐𝚐𝚘
│❐${prefix}𝙲𝚊𝚝
│❐${prefix}𝙽𝚘𝚝𝚗𝚘𝚝
│❐${prefix}𝙺𝚊𝚢𝚎𝚜
│❐${prefix}𝙹𝚞𝚜𝚝𝚒𝚗𝚊
│❐${prefix}𝚁𝚢𝚞𝚓𝚒𝚗
│❐${prefix}𝙱𝚘𝚗𝚎𝚔𝚊
│❐${prefix}𝚁𝚘𝚜𝚎
│❐${prefix}𝙺𝚙𝚘𝚙
│❐${prefix}𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
│❐${prefix}𝚄𝚕𝚣𝚣𝚊𝚗𝚐𝚋𝚘𝚢
│❐${prefix}𝚄𝚕𝚣𝚣𝚊𝚗𝚐𝚐𝚒𝚛𝚕
│❐${prefix}𝙿𝚞𝚋𝚐
│❐${prefix}𝙷𝚊𝚌𝚔𝚒𝚗𝚐
│❐${prefix}𝙿𝚛𝚘𝚏𝚒𝚕𝚎𝚙𝚒𝚌𝚝𝚞𝚛𝚎
│❐${prefix}𝙲𝚘𝚞𝚙𝚕𝚎𝚙𝚒𝚌𝚝𝚞𝚛𝚎
│❐${prefix}𝚆𝚊𝚕𝚕𝚙𝚑𝚘𝚗𝚎
│❐${prefix}𝚆𝚊𝚕𝚕𝚖𝚕
│❐${prefix}BŢŞ
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
} 
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝚅𝙸𝙳𝙴𝙾 𝙼𝙴𝙽𝚄 ]───────◯   
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚐𝚒𝚛𝚕	
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚗𝚞𝚔𝚑𝚝𝚢
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚙𝚊𝚗𝚛𝚒𝚔𝚊
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚔𝚊𝚢𝚎𝚜
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚝𝚗𝚘𝚝
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚐𝚑𝚎𝚊
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚜𝚊𝚗𝚝𝚞𝚢
│❐${prefix}𝚃𝚒𝚔𝚝𝚘𝚔𝚋𝚘𝚌𝚒𝚕
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break 
          case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')
const buttonMessage = { 
    image: unicorn,
    caption: `
╭───────[ 𝙴𝙼𝙾𝚃 𝙼𝙴𝙽𝚄  ]───────◯*	  
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙸𝚙𝚑𝚘𝚗𝚎𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝚂𝚊𝚖𝚜𝚞𝚗𝚐𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙹𝚘𝚢𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝚂𝚔𝚢𝚙𝚎𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝚃𝚠𝚒𝚝𝚝𝚎𝚛𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙼𝚒𝚌𝚛𝚘𝚜𝚘𝚏𝚝𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙶𝚘𝚘𝚐𝚕𝚎𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙿𝚎𝚍𝚒𝚊𝚎𝚖𝚘𝚓𝚒
│❐${prefix}𝙼𝚒𝚌𝚛𝚘𝚜𝚘𝚏𝚝𝚎𝚖𝚘𝚓𝚒
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_}`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')
const buttonMessage = {
    image: unicorn,
    caption: `
╭───────[ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚁𝚎𝚖𝚘𝚟𝚎𝚋𝚐 [𝚁𝚎𝚙𝚕𝚢 𝙸𝚖𝚐]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break 
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚗𝚎𝚔𝚘
│❐${prefix}𝚆𝚊𝚒𝚏𝚞
│❐${prefix}𝚂𝚑𝚒𝚗𝚘𝚋𝚞
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚊𝚠𝚘𝚘
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚊𝚒𝚏𝚞
│❐${prefix}𝙵𝚘𝚡𝚐𝚒𝚛𝚕
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚗𝚘𝚖
│❐${prefix}𝙶𝚘𝚘𝚜𝚎
│❐${prefix}8𝚋𝚊𝚕𝚕
│❐${prefix}𝙰𝚟𝚊𝚝𝚊𝚛
│❐${prefix}𝚃𝚒𝚌𝚔𝚕𝚎
│❐${prefix}𝙶𝚎𝚌𝚐
│❐${prefix}𝙵𝚎𝚎𝚍
│❐${prefix}𝙷𝚞𝚜𝚋𝚞
│❐${prefix}𝙽𝚎𝚔𝚘2
│❐${prefix}𝚁𝚊𝚗𝚍𝚘𝚖𝚊𝚗𝚒𝚖𝚎
│❐${prefix}𝚂𝚑𝚘𝚝𝚊
│❐${prefix}𝚆𝚊𝚒𝚏𝚞2
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚜𝚕𝚊𝚙
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚙𝚊𝚝
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚗𝚎𝚔𝚘
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚔𝚒𝚜𝚜
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚕𝚙
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚌𝚞𝚍𝚍𝚕𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚌𝚛𝚢
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚔𝚒𝚕𝚕
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚕𝚒𝚌𝚔
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚋𝚒𝚝𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚢𝚎𝚎𝚝
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚋𝚞𝚕𝚕𝚢
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚋𝚘𝚗𝚔
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚒𝚗𝚔
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚙𝚘𝚔𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚜𝚖𝚒𝚕𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚊𝚟𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚊𝚠𝚘𝚘
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚋𝚕𝚞𝚜𝚑
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚜𝚖𝚞𝚐
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚐𝚕𝚘𝚖𝚙
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚑𝚊𝚙𝚙𝚢
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚍𝚊𝚗𝚌𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚌𝚛𝚒𝚗𝚐𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚑𝚊𝚗𝚍𝚑𝚘𝚕𝚍
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚖𝚎𝚐𝚞𝚖𝚒𝚗
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚖𝚎𝚐𝚞𝚖𝚒𝚗
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚜𝚖𝚞𝚐
│❐${prefix}𝙻𝚘𝚕𝚒-𝚠𝚊𝚒𝚏𝚞
│❐${prefix}𝙲𝚘𝚞𝚙𝚕𝚎𝚙𝚙
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚊𝚕𝚕 [𝚀𝚞𝚎𝚛𝚢]
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚠𝚊𝚕𝚕2 [𝚀𝚞𝚎𝚛𝚢]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break 
            case 'stickermenu':{ 
var unicorn = await getBuffer(picak+'Sticker Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄  ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙿𝚊𝚝𝚛𝚒𝚌𝚔
│❐${prefix}𝙴𝚖𝚘𝚓𝚒
│❐${prefix}𝙴𝚖𝚘𝚓𝚒𝚖𝚒𝚡
│❐${prefix}𝙳𝚘𝚐𝚎
│❐${prefix}𝙻𝚘𝚟𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│❐${prefix}𝙰𝚗𝚒𝚖𝚎𝚜𝚝𝚒𝚌𝚔
│❐${prefix}𝚂𝚙𝚘𝚗𝚐𝚎𝚋𝚘𝚋
│❐${prefix}𝙶𝚘𝚓𝚘𝚜𝚊𝚝𝚘𝚛𝚞
│❐${prefix}𝙽𝚒𝚌𝚑𝚘𝚕𝚊𝚜
│❐${prefix}𝙲𝚊𝚛𝚝𝚘𝚘𝚗
│❐${prefix}𝚂𝚝𝚒𝚌𝚔𝚖𝚊𝚗
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break 
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙰𝙽𝙸𝙼𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄  ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙻𝚘𝚕𝚒
│❐${prefix}𝙱𝚞𝚕𝚕𝚢
│❐${prefix}𝙲𝚞𝚍𝚍𝚕𝚎
│❐${prefix}𝙲𝚛𝚢
│❐${prefix}𝙷𝚞𝚐
│❐${prefix}𝙰𝚠𝚘𝚘
│❐${prefix}𝙺𝚒𝚜𝚜
│❐${prefix}𝙻𝚒𝚌𝚔
│❐${prefix}𝙿𝚊𝚝
│❐${prefix}𝚂𝚖𝚞𝚐
│❐${prefix}𝙱𝚘𝚗𝚔
│❐${prefix}𝚈𝚎𝚎𝚝
│❐${prefix}𝙱𝚕𝚞𝚜𝚑
│❐${prefix}𝚂𝚖𝚒𝚕𝚎
│❐${prefix}𝚆𝚊𝚟𝚎
│❐${prefix}𝙷𝚒𝚐𝚑𝚏𝚒𝚟𝚎
│❐${prefix}𝙷𝚊𝚗𝚍𝚑𝚘𝚕𝚍
│❐${prefix}𝙽𝚘𝚖
│❐${prefix}𝙶𝚕𝚘𝚖𝚙
│❐${prefix}𝙱𝚒𝚝𝚎
│❐${prefix}𝚂𝚕𝚊𝚙
│❐${prefix}𝙺𝚒𝚕𝚕
│❐${prefix}𝙷𝚊𝚙𝚙𝚢
│❐${prefix}𝚆𝚒𝚗𝚔
│❐${prefix}𝙿𝚘𝚔𝚎
│❐${prefix}𝙳𝚊𝚗𝚌𝚎
│❐${prefix}𝙲𝚛𝚒𝚗𝚐𝚎
│❐${prefix}𝙽𝚎𝚔𝚘
│❐${prefix}𝙶𝚞𝚛𝚊
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break  
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚂𝚊𝚢 [𝚃𝚎𝚡𝚝]	
│❐${prefix}𝙳𝚎𝚏𝚒𝚗𝚎 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙷𝚘𝚠 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚆𝚑𝚎𝚗 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚆𝚑𝚎𝚛𝚎 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙸𝚜 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚆𝚑𝚊𝚝 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙲𝚊𝚗 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝚁𝚊𝚝𝚎 [𝚃𝚎𝚡𝚝]
│❐${prefix}𝙲𝚘𝚘𝚕𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝚂𝚝𝚞𝚙𝚒𝚍𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝚆𝚊𝚒𝚏𝚞𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙴𝚟𝚒𝚕𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙳𝚘𝚐𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙷𝚘𝚝𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝚂𝚖𝚊𝚛𝚝𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝚄𝚗𝚌𝚕𝚎𝚊𝚗𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙶𝚛𝚎𝚊𝚝𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙱𝚎𝚊𝚞𝚝𝚒𝚏𝚞𝚕𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙰𝚠𝚎𝚜𝚘𝚖𝚎𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙿𝚛𝚎𝚝𝚝𝚢𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙻𝚎𝚜𝚋𝚒𝚊𝚗𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙶𝚊𝚢𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙲𝚞𝚝𝚎𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝚄𝚐𝚕𝚢𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙷𝚘𝚛𝚗𝚢𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙻𝚘𝚟𝚎𝚕𝚢𝚌𝚑𝚎𝚌𝚔 [𝚃𝚊𝚐]
│❐${prefix}𝙲𝚘𝚞𝚙𝚕𝚎
│❐${prefix}𝚂𝚘𝚞𝚕𝚖𝚊𝚝𝚎
│❐${prefix}𝙷𝚘𝚝
│❐${prefix}𝚂𝚎𝚡𝚢
│❐${prefix}𝙺𝚒𝚗𝚍
│❐${prefix}𝙸𝚍𝚒𝚘𝚝
│❐${prefix}𝙷𝚊𝚗𝚍𝚜𝚘𝚖𝚎
│❐${prefix}𝙱𝚎𝚊𝚞𝚝𝚒𝚏𝚞𝚕
│❐${prefix}𝙲𝚞𝚝𝚎
│❐${prefix}𝙿𝚛𝚎𝚝𝚝𝚢
│❐${prefix}𝙻𝚎𝚜𝚋𝚒𝚊𝚗
│❐${prefix}𝙽𝚘𝚘𝚋
│❐${prefix}𝙱𝚊𝚜𝚝𝚊𝚛𝚍
│❐${prefix}𝙵𝚘𝚘𝚕𝚒𝚜𝚑
│❐${prefix}𝙽𝚎𝚛𝚍
│❐${prefix}𝙰𝚜𝚜𝚑𝚘𝚕𝚎
│❐${prefix}𝙶𝚊𝚢
│❐${prefix}𝚂𝚖𝚊𝚛𝚝
│❐${prefix}𝚂𝚝𝚞𝚋𝚋𝚕𝚎
│❐${prefix}𝙳𝚘𝚐
│❐${prefix}𝙷𝚘𝚛𝚗𝚢
│❐${prefix}𝙲𝚞𝚗𝚝
│❐${prefix}𝚆𝚒𝚋𝚞
│❐${prefix}𝙽𝚘𝚘𝚋𝚛𝚊
│❐${prefix}𝙽𝚒𝚋𝚋𝚊
│❐${prefix}𝙽𝚒𝚋𝚋𝚒
│❐${prefix}𝙲𝚘𝚖𝚛𝚊𝚍𝚎
│❐${prefix}𝙼𝚞𝚖𝚞
│❐${prefix}𝚁𝚊𝚜𝚌𝚊𝚕
│❐${prefix}𝚂𝚌𝚞𝚖𝚋𝚊𝚐
│❐${prefix}𝙽𝚞𝚝𝚜
│❐${prefix}𝙵𝚊𝚐𝚘𝚝
│❐${prefix}𝚂𝚌𝚘𝚞𝚗𝚍𝚛𝚎𝚕
│❐${prefix}𝙳𝚒𝚝𝚌𝚑
│❐${prefix}𝙳𝚘𝚙𝚎
│❐${prefix}𝙶𝚞𝚌𝚌𝚒
│❐${prefix}𝙻𝚒𝚝
│❐${prefix}𝙳𝚞𝚖𝚋𝚊𝚜𝚜
│❐${prefix}𝙲𝚛𝚊𝚌𝚔𝚑𝚎𝚊𝚍
│❐${prefix}𝙼𝚏
│❐${prefix}𝙼𝚘𝚝𝚑𝚎𝚛𝚏𝚞𝚌𝚔𝚎𝚛
│❐${prefix}𝚂𝚞𝚌𝚔𝚎𝚛
│❐${prefix}𝙵𝚞𝚌𝚔𝚋𝚘𝚢
│❐${prefix}𝙿𝚕𝚊𝚢𝚋𝚘𝚢
│❐${prefix}𝙵𝚞𝚌𝚔𝚐𝚒𝚛𝚕
│❐${prefix}𝙿𝚕𝚊𝚢𝚐𝚒𝚛𝚕
│❐${prefix}𝚀𝚞𝚘𝚝𝚎𝚜
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'soundmenu':{
var unicorn = await getBuffer(picak+'Sound Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝚂𝙾𝚄𝙽𝙳 𝙼𝙴𝙽𝚄  ]───────◯*	 
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚂𝚘𝚞𝚗𝚍1
│❐${prefix}𝚂𝚘𝚞𝚗𝚍2
│❐${prefix}𝚂𝚘𝚞𝚗𝚍3
│❐${prefix}𝚂𝚘𝚞𝚗𝚍4
│❐${prefix}𝚂𝚘𝚞𝚗𝚍5
│❐${prefix}𝚂𝚘𝚞𝚗𝚍6
│❐${prefix}𝚂𝚘𝚞𝚗𝚍7
│❐${prefix}𝚂𝚘𝚞𝚗𝚍8
│❐${prefix}𝚂𝚘𝚞𝚗𝚍9
│❐${prefix}𝚂𝚘𝚞𝚗𝚍10
│❐${prefix}𝚂𝚘𝚞𝚗𝚍11
│❐${prefix}𝚂𝚘𝚞𝚗𝚍12
│❐${prefix}𝚂𝚘𝚞𝚗𝚍13
│❐${prefix}𝚂𝚘𝚞𝚗𝚍14
│❐${prefix}𝚂𝚘𝚞𝚗𝚍15
│❐${prefix}𝚂𝚘𝚞𝚗𝚍16
│❐${prefix}𝚂𝚘𝚞𝚗𝚍17
│❐${prefix}𝚂𝚘𝚞𝚗𝚍18
│❐${prefix}𝚂𝚘𝚞𝚗𝚍19
│❐${prefix}𝚂𝚘𝚞𝚗𝚍20
│❐${prefix}𝚂𝚘𝚞𝚗𝚍21
│❐${prefix}𝚂𝚘𝚞𝚗𝚍22
│❐${prefix}𝚂𝚘𝚞𝚗𝚍23
│❐${prefix}𝚂𝚘𝚞𝚗𝚍24
│❐${prefix}𝚂𝚘𝚞𝚗𝚍25
│❐${prefix}𝚂𝚘𝚞𝚗𝚍26
│❐${prefix}𝚂𝚘𝚞𝚗𝚍27
│❐${prefix}𝚂𝚘𝚞𝚗𝚍28
│❐${prefix}𝚂𝚘𝚞𝚗𝚍29
│❐${prefix}𝚂𝚘𝚞𝚗𝚍30
│❐${prefix}𝚂𝚘𝚞𝚗𝚍31
│❐${prefix}𝚂𝚘𝚞𝚗𝚍32
│❐${prefix}𝚂𝚘𝚞𝚗𝚍33
│❐${prefix}𝚂𝚘𝚞𝚗𝚍34
│❐${prefix}𝚂𝚘𝚞𝚗𝚍35
│❐${prefix}𝚂𝚘𝚞𝚗𝚍36
│❐${prefix}𝚂𝚘𝚞𝚗𝚍37
│❐${prefix}𝚂𝚘𝚞𝚗𝚍38
│❐${prefix}𝚂𝚘𝚞𝚗𝚍39
│❐${prefix}𝚂𝚘𝚞𝚗𝚍40
│❐${prefix}𝚂𝚘𝚞𝚗𝚍41
│❐${prefix}𝚂𝚘𝚞𝚗𝚍42
│❐${prefix}𝚂𝚘𝚞𝚗𝚍43
│❐${prefix}𝚂𝚘𝚞𝚗𝚍44
│❐${prefix}𝚂𝚘𝚞𝚗𝚍45
│❐${prefix}𝚂𝚘𝚞𝚗𝚍46
│❐${prefix}𝚂𝚘𝚞𝚗𝚍47
│❐${prefix}𝚂𝚘𝚞𝚗𝚍48
│❐${prefix}𝚂𝚘𝚞𝚗𝚍49
│❐${prefix}𝚂𝚘𝚞𝚗𝚍50
│❐${prefix}𝚂𝚘𝚞𝚗𝚍51
│❐${prefix}𝚂𝚘𝚞𝚗𝚍52
│❐${prefix}𝚂𝚘𝚞𝚗𝚍53
│❐${prefix}𝚂𝚘𝚞𝚗𝚍54
│❐${prefix}𝚂𝚘𝚞𝚗𝚍55
│❐${prefix}𝚂𝚘𝚞𝚗𝚍56
│❐${prefix}𝚂𝚘𝚞𝚗𝚍57
│❐${prefix}𝚂𝚘𝚞𝚗𝚍58
│❐${prefix}𝚂𝚘𝚞𝚗𝚍59
│❐${prefix}𝚂𝚘𝚞𝚗𝚍60
│❐${prefix}𝚂𝚘𝚞𝚗𝚍61
│❐${prefix}𝚂𝚘𝚞𝚗𝚍62
│❐${prefix}𝚂𝚘𝚞𝚗𝚍63
│❐${prefix}𝚂𝚘𝚞𝚗𝚍64
│❐${prefix}𝚂𝚘𝚞𝚗𝚍65
│❐${prefix}𝚂𝚘𝚞𝚗𝚍66
│❐${prefix}𝚂𝚘𝚞𝚗𝚍67
│❐${prefix}𝚂𝚘𝚞𝚗𝚍68
│❐${prefix}𝚂𝚘𝚞𝚗𝚍69
│❐${prefix}𝚂𝚘𝚞𝚗𝚍70
│❐${prefix}𝚂𝚘𝚞𝚗𝚍71
│❐${prefix}𝚂𝚘𝚞𝚗𝚍72
│❐${prefix}𝚂𝚘𝚞𝚗𝚍73
│❐${prefix}𝚂𝚘𝚞𝚗𝚍74
│❐${prefix}𝚂𝚘𝚞𝚗𝚍75
│❐${prefix}𝚂𝚘𝚞𝚗𝚍76
│❐${prefix}𝚂𝚘𝚞𝚗𝚍77
│❐${prefix}𝚂𝚘𝚞𝚗𝚍78
│❐${prefix}𝚂𝚘𝚞𝚗𝚍79
│❐${prefix}𝚂𝚘𝚞𝚗𝚍80
│❐${prefix}𝚂𝚘𝚞𝚗𝚍81
│❐${prefix}𝚂𝚘𝚞𝚗𝚍82
│❐${prefix}𝚂𝚘𝚞𝚗𝚍83
│❐${prefix}𝚂𝚘𝚞𝚗𝚍84
│❐${prefix}𝚂𝚘𝚞𝚗𝚍85
│❐${prefix}𝚂𝚘𝚞𝚗𝚍86
│❐${prefix}𝚂𝚘𝚞𝚗𝚍87
│❐${prefix}𝚂𝚘𝚞𝚗𝚍88
│❐${prefix}𝚂𝚘𝚞𝚗𝚍89
│❐${prefix}𝚂𝚘𝚞𝚗𝚍90
│❐${prefix}𝚂𝚘𝚞𝚗𝚍91
│❐${prefix}𝚂𝚘𝚞𝚗𝚍92
│❐${prefix}𝚂𝚘𝚞𝚗𝚍93
│❐${prefix}𝚂𝚘𝚞𝚗𝚍94
│❐${prefix}𝚂𝚘𝚞𝚗𝚍95
│❐${prefix}𝚂𝚘𝚞𝚗𝚍96
│❐${prefix}𝚂𝚘𝚞𝚗𝚍97
│❐${prefix}𝚂𝚘𝚞𝚗𝚍98
│❐${prefix}𝚂𝚘𝚞𝚗𝚍99
│❐${prefix}𝚂𝚘𝚞𝚗𝚍100
│❐${prefix}𝚂𝚘𝚞𝚗𝚍101
│❐${prefix}𝚂𝚘𝚞𝚗𝚍102
│❐${prefix}𝚂𝚘𝚞𝚗𝚍103
│❐${prefix}𝚂𝚘𝚞𝚗𝚍104
│❐${prefix}𝚂𝚘𝚞𝚗𝚍105
│❐${prefix}𝚂𝚘𝚞𝚗𝚍106
│❐${prefix}𝚂𝚘𝚞𝚗𝚍107
│❐${prefix}𝚂𝚘𝚞𝚗𝚍108
│❐${prefix}𝚂𝚘𝚞𝚗𝚍109
│❐${prefix}𝚂𝚘𝚞𝚗𝚍110
│❐${prefix}𝚂𝚘𝚞𝚗𝚍111
│❐${prefix}𝚂𝚘𝚞𝚗𝚍112
│❐${prefix}𝚂𝚘𝚞𝚗𝚍113
│❐${prefix}𝚂𝚘𝚞𝚗𝚍114
│❐${prefix}𝚂𝚘𝚞𝚗𝚍115
│❐${prefix}𝚂𝚘𝚞𝚗𝚍116
│❐${prefix}𝚂𝚘𝚞𝚗𝚍117
│❐${prefix}𝚂𝚘𝚞𝚗𝚍118
│❐${prefix}𝚂𝚘𝚞𝚗𝚍119
│❐${prefix}𝚂𝚘𝚞𝚗𝚍120
│❐${prefix}𝚂𝚘𝚞𝚗𝚍121
│❐${prefix}𝚂𝚘𝚞𝚗𝚍122
│❐${prefix}𝚂𝚘𝚞𝚗𝚍123
│❐${prefix}𝚂𝚘𝚞𝚗𝚍124
│❐${prefix}𝚂𝚘𝚞𝚗𝚍125
│❐${prefix}𝚂𝚘𝚞𝚗𝚍126
│❐${prefix}𝚂𝚘𝚞𝚗𝚍127
│❐${prefix}𝚂𝚘𝚞𝚗𝚍128
│❐${prefix}𝚂𝚘𝚞𝚗𝚍129
│❐${prefix}𝚂𝚘𝚞𝚗𝚍130
│❐${prefix}𝚂𝚘𝚞𝚗𝚍131
│❐${prefix}𝚂𝚘𝚞𝚗𝚍132
│❐${prefix}𝚂𝚘𝚞𝚗𝚍133
│❐${prefix}𝚂𝚘𝚞𝚗𝚍134
│❐${prefix}𝚂𝚘𝚞𝚗𝚍135
│❐${prefix}𝚂𝚘𝚞𝚗𝚍136
│❐${prefix}𝚂𝚘𝚞𝚗𝚍137
│❐${prefix}𝚂𝚘𝚞𝚗𝚍138
│❐${prefix}𝚂𝚘𝚞𝚗𝚍139
│❐${prefix}𝚂𝚘𝚞𝚗𝚍140
│❐${prefix}𝚂𝚘𝚞𝚗𝚍141
│❐${prefix}𝚂𝚘𝚞𝚗𝚍142
│❐${prefix}𝚂𝚘𝚞𝚗𝚍143
│❐${prefix}𝚂𝚘𝚞𝚗𝚍144
│❐${prefix}𝚂𝚘𝚞𝚗𝚍145
│❐${prefix}𝚂𝚘𝚞𝚗𝚍146
│❐${prefix}𝚂𝚘𝚞𝚗𝚍147
│❐${prefix}𝚂𝚘𝚞𝚗𝚍148
│❐${prefix}𝚂𝚘𝚞𝚗𝚍149
│❐${prefix}𝚂𝚘𝚞𝚗𝚍150
│❐${prefix}𝚂𝚘𝚞𝚗𝚍151
│❐${prefix}𝚂𝚘𝚞𝚗𝚍152
│❐${prefix}𝚂𝚘𝚞𝚗𝚍153
│❐${prefix}𝚂𝚘𝚞𝚗𝚍154
│❐${prefix}𝚂𝚘𝚞𝚗𝚍155
│❐${prefix}𝚂𝚘𝚞𝚗𝚍156
│❐${prefix}𝚂𝚘𝚞𝚗𝚍157
│❐${prefix}𝚂𝚘𝚞𝚗𝚍158
│❐${prefix}𝚂𝚘𝚞𝚗𝚍159
│❐${prefix}𝚂𝚘𝚞𝚗𝚍160
│❐${prefix}𝚂𝚘𝚞𝚗𝚍161
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu':{
var unicorn = await getBuffer(picak+'Game Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭───────[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄  ]───────◯*	    
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚃𝚛𝚞𝚝𝚑
│❐${prefix}𝙳𝚊𝚛𝚎
│❐${prefix}𝚃𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
│❐${prefix}𝙳𝚎𝚕𝚝𝚝𝚝
│❐${prefix}𝙶𝚞𝚎𝚜𝚜 [𝙾𝚙𝚝𝚒𝚘𝚗]
│❐${prefix}𝙼𝚊𝚝𝚑 [𝙼𝚘𝚍𝚎]
│❐${prefix}𝚂𝚞𝚒𝚝𝚙𝚟𝚙 [𝚃𝚊𝚐]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭─────[ 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙼𝙴𝙽𝚄 ]──────◯*
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝙰𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
│❐${prefix}𝚂𝚝𝚊𝚛𝚝
│❐${prefix}𝙽𝚎𝚡𝚝
│❐${prefix}𝙻𝚎𝚊𝚟𝚎
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `$𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')
const buttonMessage = {
    image: unicorn,
    caption: `╭──────[ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 𝙼𝙴𝙽𝚄 ]───────◯*	
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚂𝚎𝚝𝚌𝚖𝚍
│❐${prefix}𝙻𝚒𝚜𝚝𝚌𝚖𝚍
│❐${prefix}𝙳𝚎𝚕𝚌𝚖𝚍
│❐${prefix}𝙻𝚘𝚌𝚔𝚌𝚖𝚍
│❐${prefix}𝙰𝚍𝚍𝚖𝚜𝚐
│❐${prefix}𝙻𝚒𝚜𝚝𝚖𝚜𝚐
│❐${prefix}𝙶𝚎𝚝𝚖𝚜𝚐
│❐${prefix}𝙳𝚎𝚕𝚖𝚜𝚐
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')
const Message = {
    image: unicorn,
    caption: `╭───────[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄  ]───────◯*	    
│╭⛒  *ᴏᴡɴᴇʀ* ${ownername}
│├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
│╰⛒  *ᴛɪᴍᴇ* ${bottime}
╰─────────────╍╍╍╍╍╍╍╍╍╍┅┅┅╮
╭─────────────╍╍╍╍╍╍╍╍╍╍╍╍╍╯
│
│❐${prefix}𝚊𝚏𝚔
│❐${prefix}𝚒𝚍
│❐${prefix}𝚝𝚘𝚚𝚛 [𝚕𝚒𝚗𝚔]
│❐${prefix}𝚛𝚎𝚙𝚎𝚊𝚝
│❐${prefix}𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎 [𝚝𝚎𝚡𝚝]
│❐${prefix}𝚝𝚘𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎
│❐${prefix}𝚏𝚕𝚒𝚙𝚝𝚎𝚡𝚝 [𝚝𝚎𝚡𝚝]] 
│❐${prefix}𝚊𝚕𝚒𝚟𝚎
│❐${prefix}𝚜𝚌𝚛𝚒𝚙𝚝
│❐${prefix}𝚙𝚒𝚗𝚐
│❐${prefix}𝚘𝚠𝚗𝚎𝚛
│❐${prefix}𝚖𝚎𝚗𝚞
│❐${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
│❐${prefix}𝚌𝚑𝚊𝚝𝚒𝚗𝚏𝚘
│❐${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
│❐${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
│❐${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
│❐${prefix}𝚍𝚘𝚗𝚊𝚝𝚎
│❐${prefix}𝚛𝚎𝚚𝚞𝚎𝚜𝚝
│❐${prefix}𝚛𝚎𝚙𝚘𝚛𝚝 [𝚋𝚞𝚐]
│
╰───────[ ${botname}  ]───────◯*	`,
    footer: `𝙍𝙖𝙩𝙚 𝙤𝙛 ${botname}\n➥${loading}__*ᗰᗩ᙭*_`,
    headerType: 4
}
const sendMsg = await NEXUS.sendMessage(m.chat, Message)
}
break

            default: 
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(Lang.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(Lang.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(Lang.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    NEXUS.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
    
