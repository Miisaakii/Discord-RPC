var config = require('./config.json');
const keepAlive = require("./server");
const gradient = require('gradient-string');
let rpcGenerator = require("discordrpcgenerator")
const Discord = require('discord.js-selfbot-v13');
const { Client } = require('discord.js-selfbot-v13');
const { MessageEmbed, WebEmbed } = require ("discord.js-selfbot-v13");
const client = new Client({ checkUpdate: false });


var ID = config.RPC_ID
var TYPE = config.RPC_TYPE
var URL = config.RPC_URL
var STATE = config.RPC_STATE
var NAME = config.RPC_NAME
var DETAILS = config.RPC_DETAILS
var LARGE_IMAGE = config.RPC_LARGE_IMAGE
var LARGE_IMAGE_TEXT = config.RPC_LARGE_IMAGE_TEXT
var SMALL_IMAGE = config.RPC_SMALL_IMAGE
var SMALL_IMAGE_TEXT = config.RPC_SMALL_IMAGE_TEXT
var BUTTON_URL = config.RPC_BUTTON_URL
var BUTTON_TEXT = config.RPC_BUTTON_TEXT

function sleep(milliseconds) { const date = Date.now(); let currentDate = null; do { currentDate = Date.now(); } while (currentDate - date < milliseconds); }

client.on('ready', async () => 
{
    if (BUTTON_URL === "" && BUTTON_TEXT === "")
    {
        if (SMALL_IMAGE === "" && SMALL_IMAGE_TEXT === "")
        {
            const rpc = new Discord.RichPresence()
            .setApplicationId(ID)
            .setType(TYPE)
            .setURL(URL)
            .setState(STATE)
            .setName(NAME)
            .setDetails(DETAILS)
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(LARGE_IMAGE)
            .setAssetsLargeText(LARGE_IMAGE_TEXT)  
        
            client.user.setActivity(rpc);
        }
        else
        {
            const rpc = new Discord.RichPresence()
            .setApplicationId(ID)
            .setType(TYPE)
            .setURL(URL)
            .setState(STATE)
            .setName(NAME)
            .setDetails(DETAILS)
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(LARGE_IMAGE)
            .setAssetsLargeText(LARGE_IMAGE_TEXT)  
            .setAssetsSmallImage(SMALL_IMAGE)
            .setAssetsSmallText(SMALL_IMAGE_TEXT)
        
            client.user.setActivity(rpc);
        }
    }
    else
    {
        const rpc = new Discord.RichPresence()
        .setApplicationId(ID)
        .setType(TYPE)
        .setURL(URL)
        .setState(STATE)
        .setName(NAME)
        .setDetails(DETAILS)
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage(LARGE_IMAGE)
        .setAssetsLargeText(LARGE_IMAGE_TEXT)  
        .addButton(BUTTON_TEXT, BUTTON_URL)
    
        client.user.setActivity(rpc);
    }

    console.clear()
    console.log(gradient.morning(`[!] Connected to ${client.user.tag}`))
    console.log(gradient.morning(`[+] RPC enabled, check your profils`))
});

console.clear()
console.log(gradient.morning("[!] Welcome to Custom RPC made by Misaki, version 1.0"))
console.log(gradient.morning("[+] connecting to the account..."))
sleep(5000);
keepAlive(); 

client.login(config.TOKEN).catch(() => 
{  
    console.clear()
    return console.log("incorrect token provided.")
});    
