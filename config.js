
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA71VSY+jRhj9K6O6Rbam2TeppbAb29jGGG9RDixlwGDAUGDjkY855ZQcW+r8xv4JEe7umVEy6XSkUZCQoKr0vve+5dUnkOVxBUewBcInUJRx4yLYfaK2gEAAUr3bwRL0QeAiFwjAkHNtvrkcTnGgeq13oi/bhLusrZpEe77Z72YUMWLC6XCsUffg2gdF7aWx/wbgYmBO01SP2h6hy8y0rKRBttjQdyQvn9xyS6vGdsKu1CJNqntw7RDduIyzUC0ieIClm45gO3Pj8n306wG/VS+b2dA6YQ3Ok+3IIvapR6QFpSfh8rwwtMYZL3gmfSd9w7TLZbq0rdW4146U3kr1FsxQIibh0dy1yPDFpScVTJJo4jP9Kg4zGBgBzFCM2nfn3VHjQF8MV+bYOvuKEYTOrogZwhVDWQqIaL1QqmOz7lVe4ryPuDUaB+7+lHAIw+KdxWWXux25oRUtZYz51j9sEHIL2xmmZ+5r4rPytVeS/5J3TJ4oG/pcUBeRdg+1Q67IZGytc8puiCbUqsWEGEfqqiAd9X30tcTU/XAYXw6myp/rzXl/sHMyRIPMJBB/zjRe1q1ZbROY9YW+i+ryLZZaO6WUdmxGLDPxvGlvgPuFPR6MEvcYnQ37UtOptGakPLvswyLBqBWpwYGpeF7EOjtLFL0eQUVEno1Kj7JPCGLMpA3F+5uiBLZGAAT82gclDOMKlS6K86xbo9k+cIPGhn4J0S27YDLZeiUTq7PIK1fTdR3nvEntzXh8Cth0NJWidnMWhykXdOXug6LMfVhVMBjEFcrL1oRV5YawAsJPt0J1mkt4yBEcxgEQAE+xNEbQNIEzP1YfT5GLKrcoPmYQgT7YlfnBhEBAZQ374HZepEkMoyiFJzmZZVlR1liaEFlGlVhaVTmyE3h4jrmID7BC7qEAAs7SLMnzLMFd+9+JBquRIiPjWofLYzQvMxomYZyM4Swt8/8bDZVSZV7ECYJicJVmJV5VFZJSaVYhSIV6mwZNfTcaOEvKFE+KDKdRrKzhOKloisTRtKwpkvo2DYa//twHGTyj55HuGpEk+2AXlxVysrpIczd4nffXTdf38zpDdpv5cvcBSyDgX5YhQnEWVp2wOnNLP4obKHc6gLBz0wp+7n1YwuBVy4ufy3nQjSRN6quRubBBx70D+mtqBB77e3YytzsMnh4ffnl6fPj96fHh16fHh9+eHh/+6N4PwocfQB+kNyycJHCc5EicwRmauuF1G9fPMrqoAURunFZAAPLI9clmI6tDYnnHObou5qEohyL4IvvVWZ5HN6XXETVjN/wEa3jsGGejY25qY2zeRoY+1/07vs3S5qIga3P/DRAgAM7Vlkx9xJy5vUiX7PysGeyQ6TkeErlyqm98CSJFab0AJaVkWKtmeqo9alrjd/YdTW8vMbZSDupCb0lt6iGubPJFKZ/uu2gBbGIffh2sONXR/II7DE1icI02ppRw9lKfFDNyR86JujUHq3w102mmdpqGOHC1ZcyPG9YwD0N21gx4y9vnphzLlrM8K7NB3juy0Yvn3Tw3fbnr4hc7im+/uxjero6Xyv1bgZ95d22IXftfQbzcRf/g59IWLimo9IjZIhjfBaO8aI9HRbJ51c9tKZlnszu/oD3uxDo6uHbzUKQu2uXlAQigOngu6IMyr7umNrJd/kYkWTIMyXpWnboVEr8MyreciHg+NSvzYuBWERAAsWTZo9N1fSsWhY1c9Dp3QOweTZyC6583XeF7rQkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
