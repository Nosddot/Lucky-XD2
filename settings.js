
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RoKzZvOG1HYURibHRDTVRnYU9YRVB4OHVJelE4VjBMdEdsanpXeFFVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5sdFdOeWh1ZUE0REE4K0d6R0FCZTloZWtOKzIvcTA5Z09ObHJxK2tFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RlExUFV2TExXd3N5c0xGb0dLdVpGa2sydDlCN1FSenpLOWR3S1R0Q21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPY1dWcTFjajAxWXcvZGR5eUxqTjNsZUJGcDBzeDhZbENkYjVUT25YeUgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKemVaZVM2U3kvWlRodHhYODA2RGNwVHhLMHVvWTRCK3FHbFdxNWZwMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im13TUtzNFl3bXI4WU9FWVBOUFpKMEd2dW9lNjg2MnJwOTFsTHB6RUF1VVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9UV3BLcmdscTdSWG1Iby9RMUEySmJkNy9OalFpMzVEbE5jc3BQNGRVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW96V0tDbFFMS0RJeWJSNWlXZ3dYTkxMb3ppYlhzYWRxSmtxN3h1RXpERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5NSzcyYTBUR2piZGR5cStyMTMwbE5NVFk4bllDUWpkSVJDcEZnWjk2Zmc4YXpaaGJvS1dtY2lrMUQ2bnFLOU1Ma2pRR1FneXZjbjB6Y0VheHV6VGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiIxbmNyOTNpOUF2MDhWT1Q4MTlhcUl0cXBpMWNIb0YwZjZvbXZqTkZGdGlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyODk3MjI4MDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRERjBBNDk1QTJGMDVFNUExQ0ExNTExNzYyNUFBQUY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcwOTI4NzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyODk3MjI4MDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ3MjFFOTE3OTVCQ0VCQjUyMEE2MzAxMzQ5NjJCODczIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcwOTI4NzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNScExBcVhfUTN5OF9CYXE1eUZPTGciLCJwaG9uZUlkIjoiZWUyOTI2NDktN2ZiNC00MzlhLTgyZmYtNzVjOTU5NDllMmM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjByU3h0VmlYWFQzOTg1bSs2MlVJYnp4eFExUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWFN0QzJ3RVdzV1I5Y0plbTZDYm1hSG55UTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjIyODk3MjI4MDExOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi77yz77y177yr77y177yu77yhIiwibGlkIjoiMjc0NTIyMDI4NjcxMTc1OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdjE5NDRHRVBpMzdNVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1ZGcvU1RCUXRzZ2tNVlRsdmtrRHZvWFJ4bTNCdjVGT0gyMjNPVWpaWWtBPSIsImFjY291bnRTaWduYXR1cmUiOiJieXBLQ3lTZ2QyWlJMVWJWcElsV3FkTWN5OGNsa1NIZTUrMUREelZyRVZWeWtPMXBzRmFiZkM2REo0aFYxZTZLckdZUEtjTVc5NEFTaEROdnFuU09BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSDRBc0JRYXo1VUxQU3JocjVERXZiek9SbjB6UC9SSEFPK2tENFZUUnJVOW8raTJiekMxQ1E4V3JQdFZCTXpad0tlUXZNS21QQjM1d3haTU5vT1R1aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5NzIyODAxMTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVYWVAwa3dVTGJJSkRGVTViNUpBNzZGMGNadHdiK1JUaDl0dHpsSTJXSkEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzA5Mjg2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQd1QifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "22897228011",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "SUKUNA",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
