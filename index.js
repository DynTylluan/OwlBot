//
// Hello! Welcome to the source code for OwlBot
//
// If the bot is offline, go to this URL: https://owlman-bot.glitch.me
// The source is currently found here: https://github.com/DynTylluan/OwlBot
//

console.log("OwlBot is ready to destroy pussies!");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("[REMOVED]");

// Last updated
bot.on("message", message => {
  if (message.author == bot.user) {
    return;
  }
  if (message.content == ">update") {
    message.channel.send(
      "> **The bot's source code was last updated on** `2019-09-29` **by** `OwlMan`"
    );
    // message.channel.send("The bot's source code was last updated on YYYY-MM-DD by XXX");
  }
});

// Ping Check
// const http = require('http');
// const express = require('express');
// const app = express();
// app.get("/", (request, response) => {
//     console.log(Date.now() + " Ping Received");
//     response.sendStatus(200);
// });
// app.listen(process.env.PORT);
// setInterval(() => {
//     http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
// }, 280000);

// Bot Activity Status
bot.on("ready", () => {
  bot.user.setStatus("available");
  bot.user.setPresence({
    game: {
      name: "My wife left me in 1995 | >help",
      type: "STREAMING",
      url: "https://www.twitch.tv/monstercat"
    }
  });
  // Set Rainbow role trigger
  // var channel = bot.channels.get("585611642595966979").send("!cauvong <@&585564317567680529>");
});

// Rainbow role trigger (Turns OFF when bot is offline)
// (Since 2019-08-24, Rainbow bot doesn't works anymore, this command will be remain until further function)
//
// bot.on("message", (message) => {
//	  if (message.content == "!cauvong <@&585564317567680529>") {
//        setTimeout(function(){
//            bot.channels.get("585611642595966979").send("!cauvong <@&585564317567680529>");
//        }, 1200000);	}
// });

// Messages
bot.on("message", message => {
  // Prevent bot from responding to its own messages
  if (message.author == bot.user) {
    return;
  }

  // Commands

  // Check if content of message is ">ping"
  if (message.content == ">ping") {
    // Call .send() on the channel object the message was sent in
    message.channel.send("h");
  }
  if (message.content == ">help") {
    message.channel.send(
      "To find more commands/credits for the bot, check out this URL: https://tehleroy.neocities.org/discord/owlbot.html"
    );
  }
  if (message.content == ">time") {
    message.channel.send(
      "It is time https://owlman.neocities.org/odds/its_time.png"
    );
  }
  if (message.content == ">weather") {
    message.channel.send("I hope it's raining :) I love rain");
  }
  if (message.content == ">heather") {
    message.channel.send("<:owosneaky:523048376179359744>");
  }
  // 	if (message.content == ">yiff") {
  //      bot.channels.get("518634475496931329").send("$sr yiff");
  //  }
  //  if (message.content == ">yaoi") {
  //      bot.channels.get("518634475496931329").send("$sr yaoi");
  //  }
  // 	if (message.content == ">pr0n") {
  //      bot.channels.get("518634475496931329").send("https://owlman.neocities.org/odds/awi4r4.png");
  //  }
  // 	if (message.content == ">furry") {
  //      bot.channels.get("518634475496931329").send("https://owlman.neocities.org/odds/party/received_381842359299468.png");
  //  }
  if (message.content == ">piss") {
    message.channel.send(
      "I’ve come to make an announcement, " +
        message.author.username +
        "’s a bitch ass mother fucker. They pissed on my fucking wife. That’s right, they took it little quilly dick out and they pissed on my fucking wife, and they said it dick was **THIS BIG**. And I said *“that’s disgusting!”* So I’m making a callout post on my __twitter.com__. " +
        message.author.username +
        ", you got a small dick, it’s the size of this walnut except **WAY** smaller. And guess what, here’s what my dong looks like: **PFFFFFFFFGJT**. That’s right baby. All point, no quills, no pillows, look at that it looks like two balls and a bong. They fucked my wife so guess what, I’m gonna **FUCK THE EARTH. THATS RIGHT THIS IS WHAT YOU GET,** ***__MY SUPER LAZER PISS!!__*** Except I’m not gonna piss on the earth, I’m gonna go higher. I’m pissing on the ***__MOOOOOON!!!!!!__*** How do you like that Obama? **I PISSED ON THE MOON YOU IDIOT!** You have twenty three hours before the piss droplets hit the fucking Earth! Now get out of my fucking sight before I piss on you too!"
    );
  }
  // Show all server emojis
  if (message.content === ">emojis") {
    const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
    message.channel.send(emojiList);
  }
  // Repeat what the user says
  if (message.content.startsWith(">say")) {
    message.channel.send(
      message.author.username + " says: " + message.content.replace(">say ", "")
    );
  }
  // Send a message through the bot
  if (message.content.startsWith(">send")) {
    message.delete(1);
    message.channel.send(message.content.replace(">send ", ""));
  }
  // Sin after sin
  if (message.content == ">music") {
    message.channel.send(
      "!p https://www.youtube.com/playlist?list=PLA68NtSTRIbpJkwBUpgN4aKSagBqQ7Sd8"
    );
  }
  // FFS bot
  if (message.content == ">fuck") {
    message.channel.send("Yeah, I'm working, twat");
  }
  // FFS bot
  if (
    message.content ==
    "https://tenor.com/view/milk-and-mocha-dance-dancing-music-gif-12302383"
  ) {
    message.channel.send("**YES, DANCE, DANCE!**");
  }
  // Check if the bots user was tagged in the message
  if (message.content.includes(bot.user.toString())) {
    // Send acknowledgement message
    message.channel.send(
      "Well you know what " + message.author.toString() + ", guess what?"
    );
  }
  if (
    ["what?", "piss?", "chicken butt?"].includes(message.content.toLowerCase())
  ) {
    message.channel.send("Chicken Butt");
  }

  // Colors roles Commands

  // Show all available colors
  if (
    message.content == ">colors" ||
    message.content == ">colorslist" ||
    message.content == ">color" ||
    message.content == ">colorlist"
  ) {
    const exampleEmbed = new Discord.RichEmbed()
      // message.channel.send("To give yourself a new color, simply type in `>iam xyz`, to remove a color, enter `>iamnot xyz`");
      .attachFiles(["embed/colors.png"])
      .setImage("attachment://colors.png");
    message.channel.send(exampleEmbed);
  }

  // Show all available colours (British English)
  if (
    message.content == ">colours" ||
    message.content == ">colour" ||
    message.content == ">colourslist" ||
    message.content == ">colourlist"
  ) {
    const exampleEmbed = new Discord.RichEmbed()
      // message.channel.send("To give yourself a new colour, simply type in `>iam xyz`, to remove a colour, enter `>iamnot xyz`");
      .setImage("https://owlman.neocities.org/odds/colours.png");
    message.channel.send(exampleEmbed);
  }

  // The "xyz" color / colour
  if (message.content.toLowerCase() == ">iam " + "xyz") {
    message.channel
      .send("*He he ha ha, funny*")
      .then(sentMessage => {
        sentMessage.delete(10000);
        message.delete(1);
      })
      .catch();
  }
  if (message.content.toLowerCase() == ">iamnot " + "xyz") {
    message.channel
      .send(
        "Well the thing is... You never __**had**__ this role, *now did you?*"
      )
      .then(sentMessage => {
        sentMessage.delete(10000);
        message.delete(1);
      })
      .catch();
  }

  // Rainbow
  // (Since 2019-08-24, Rainbow bot doesn't works anymore, this command will be remain until further function)

  if (message.content.toLowerCase() == ">iam " + "rainbow") {
    message.channel
      .send("``This role isn't used any longer``")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (message.content.toLowerCase() == ">iamnot " + "rainbow") {
    message.channel
      .send("``This role isn't used any longer``")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  //  if (message.content.toLowerCase() == ">iam " + "rainbow") {
  //      message.member.addRole("585564317567680529");
  //      message.channel.send((message.author.username) + " enjoy your <@&585564317567680529> color role!").then(sentMessage => {
  //         sentMessage.delete(3000);
  //		   message.delete (1);
  //      }).catch();
  //  }
  //  if (message.content.toLowerCase() == ">iamnot " + "rainbow") {
  //     message.member.removeRole("585564317567680529");
  //     message.channel.send("<@&585564317567680529> color role successfully removed!").then(sentMessage => {
  // 		  sentMessage.delete(3000);
  // 		  message.delete (1);
  //     }).catch();
  //  }

  // Light Red
  if (
    message.content.toLowerCase() == ">iam " + "light red" ||
    message.content.toLowerCase() == ">iam " + "1"
  ) {
    message.member.addRole("608191366090063892");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608191366090063892> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "light red" ||
    message.content.toLowerCase() == ">iamnot " + "1"
  ) {
    message.member.removeRole("608191366090063892");
    message.channel
      .send("<@&608191366090063892> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Red
  if (
    message.content.toLowerCase() == ">iam " + "red" ||
    message.content.toLowerCase() == ">iam " + "2"
  ) {
    message.member.addRole("519029920530169857");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519029920530169857> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "red" ||
    message.content.toLowerCase() == ">iamnot " + "2"
  ) {
    message.member.removeRole("519029920530169857");
    message.channel
      .send("<@&519029920530169857> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Satan Red
  if (
    message.content.toLowerCase() == ">iam " + "satan red" ||
    message.content.toLowerCase() == ">iam " + "3"
  ) {
    message.member.addRole("608084225115160616");
    message.channel
      .send(message.author.username + " is evil in league with Satan")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "satan red" ||
    message.content.toLowerCase() == ">iamnot " + "3"
  ) {
    message.member.removeRole("608084225115160616");
    message.channel
      .send("Hmm, too edgy for you then?")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Deep Orange
  if (
    message.content.toLowerCase() == ">iam " + "deep orange" ||
    message.content.toLowerCase() == ">iam " + "4"
  ) {
    message.member.addRole("519052968155283456");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519052968155283456> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "deep orange" ||
    message.content.toLowerCase() == ">iamnot " + "4"
  ) {
    message.member.removeRole("519052968155283456");
    message.channel
      .send("<@&519052968155283456> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Orange
  if (
    message.content.toLowerCase() == ">iam " + "orange" ||
    message.content.toLowerCase() == ">iam " + "5"
  ) {
    message.member.addRole("519031205656788993");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519031205656788993> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "orange" ||
    message.content.toLowerCase() == ">iamnot " + "5"
  ) {
    message.member.removeRole("519031205656788993");
    message.channel
      .send("<@&519031205656788993> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Brown
  if (
    message.content.toLowerCase() == ">iam " + "brown" ||
    message.content.toLowerCase() == ">iam " + "6"
  ) {
    message.member.addRole("519036336351477761");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519036336351477761> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "brown" ||
    message.content.toLowerCase() == ">iamnot " + "6"
  ) {
    message.member.removeRole("519036336351477761");
    message.channel
      .send("<@&519036336351477761> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Piss Yellow
  if (
    message.content.toLowerCase() == ">iam " + "piss yellow" ||
    message.content.toLowerCase() == ">iam " + "7"
  ) {
    message.member.addRole("608084227485073418");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084227485073418> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "piss yellow" ||
    message.content.toLowerCase() == ">iamnot " + "7"
  ) {
    message.member.removeRole("608084227485073418");
    message.channel
      .send("<@&608084227485073418> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Yellow
  if (
    message.content.toLowerCase() == ">iam " + "yellow" ||
    message.content.toLowerCase() == ">iam " + "8"
  ) {
    message.member.addRole("519031288422727745");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519031288422727745> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "yellow" ||
    message.content.toLowerCase() == ">iamnot " + "8"
  ) {
    message.member.removeRole("519031288422727745");
    message.channel
      .send("<@&519031288422727745> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Light Yellow
  if (
    message.content.toLowerCase() == ">iam " + "light yellow" ||
    message.content.toLowerCase() == ">iam " + "9"
  ) {
    message.member.addRole("608084233327476737");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084233327476737> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "light yellow" ||
    message.content.toLowerCase() == ">iamnot " + "9"
  ) {
    message.member.removeRole("608084233327476737");
    message.channel
      .send("<@&608084233327476737> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Lime
  if (
    message.content.toLowerCase() == ">iam " + "lime" ||
    message.content.toLowerCase() == ">iam " + "10"
  ) {
    message.member.addRole("519031608997707797");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519031608997707797> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "lime" ||
    message.content.toLowerCase() == ">iamnot " + "10"
  ) {
    message.member.removeRole("519031608997707797");
    message.channel
      .send("<@&519031608997707797> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Mint Green
  if (
    message.content.toLowerCase() == ">iam " + "mint green" ||
    message.content.toLowerCase() == ">iam " + "11"
  ) {
    message.member.addRole("608084229930090526");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084229930090526> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "mint green" ||
    message.content.toLowerCase() == ">iamnot " + "11"
  ) {
    message.member.removeRole("608084229930090526");
    message.channel
      .send("<@&608084229930090526> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Light Green
  if (
    message.content.toLowerCase() == ">iam " + "light green" ||
    message.content.toLowerCase() == ">iam " + "12"
  ) {
    message.member.addRole("519052647278444545");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519052647278444545> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "light green" ||
    message.content.toLowerCase() == ">iamnot " + "12"
  ) {
    message.member.removeRole("519052647278444545");
    message.channel
      .send("<@&519052647278444545> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Green
  if (
    message.content.toLowerCase() == ">iam " + "green" ||
    message.content.toLowerCase() == ">iam " + "13"
  ) {
    message.member.addRole("519031954188795936");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519031954188795936> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "green" ||
    message.content.toLowerCase() == ">iamnot " + "13"
  ) {
    message.member.removeRole("519031954188795936");
    message.channel
      .send("<@&519031954188795936> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Tree Green
  if (
    message.content.toLowerCase() == ">iam " + "tree green" ||
    message.content.toLowerCase() == ">iam " + "14"
  ) {
    message.member.addRole("608084229825364014");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084229825364014> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "tree green" ||
    message.content.toLowerCase() == ">iamnot " + "14"
  ) {
    message.member.removeRole("608084229825364014");
    message.channel
      .send("<@&608084229825364014> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Aquamarine
  if (
    message.content.toLowerCase() == ">iam " + "aquamarine" ||
    message.content.toLowerCase() == ">iam " + "15"
  ) {
    message.member.addRole("519032187815985152");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519032187815985152> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "aquamarine" ||
    message.content.toLowerCase() == ">iamnot " + "15"
  ) {
    message.member.removeRole("519032187815985152");
    message.channel
      .send("<@&519032187815985152> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Teal
  if (
    message.content.toLowerCase() == ">iam " + "teal" ||
    message.content.toLowerCase() == ">iam " + "16"
  ) {
    message.member.addRole("519052208080420865");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519052208080420865> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "teal" ||
    message.content.toLowerCase() == ">iamnot " + "16"
  ) {
    message.member.removeRole("519052208080420865");
    message.channel
      .send("<@&519052208080420865> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Cyan
  if (
    message.content.toLowerCase() == ">iam " + "cyan" ||
    message.content.toLowerCase() == ">iam " + "17"
  ) {
    message.member.addRole("519032473561071675");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519032473561071675> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "cyan" ||
    message.content.toLowerCase() == ">iamnot " + "17"
  ) {
    message.member.removeRole("519032473561071675");
    message.channel
      .send("<@&519032473561071675> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Pastel Cyan
  if (
    message.content.toLowerCase() == ">iam " + "pastel cyan" ||
    message.content.toLowerCase() == ">iam " + "18"
  ) {
    message.member.addRole("608087343030730753");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608087343030730753> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "pastel cyan" ||
    message.content.toLowerCase() == ">iamnot " + "18"
  ) {
    message.member.removeRole("608087343030730753");
    message.channel
      .send("<@&608087343030730753> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Light Blue
  if (
    message.content.toLowerCase() == ">iam " + "light blue" ||
    message.content.toLowerCase() == ">iam " + "19"
  ) {
    message.member.addRole("519032676100079626");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519032676100079626> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "light blue" ||
    message.content.toLowerCase() == ">iamnot " + "19"
  ) {
    message.member.removeRole("519032676100079626");
    message.channel
      .send("<@&519032676100079626> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Discord Blue
  if (
    message.content.toLowerCase() == ">iam " + "discord blue" ||
    message.content.toLowerCase() == ">iam " + "20"
  ) {
    message.member.addRole("608087654420185104");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608087654420185104> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "discord blue" ||
    message.content.toLowerCase() == ">iamnot " + "20"
  ) {
    message.member.removeRole("608087654420185104");
    message.channel
      .send("<@&608087654420185104> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Blue
  if (
    message.content.toLowerCase() == ">iam " + "blue" ||
    message.content.toLowerCase() == ">iam " + "21"
  ) {
    message.member.addRole("519033502390550530");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519033502390550530> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "blue" ||
    message.content.toLowerCase() == ">iamnot " + "21"
  ) {
    message.member.removeRole("519033502390550530");
    message.channel
      .send("<@&519033502390550530> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Navy Blue
  if (
    message.content.toLowerCase() == ">iam " + "navy blue" ||
    message.content.toLowerCase() == ">iam " + "22"
  ) {
    message.member.addRole("608084227027632128");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084227027632128> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "navy blue" ||
    message.content.toLowerCase() == ">iamnot " + "22"
  ) {
    message.member.removeRole("608084227027632128");
    message.channel
      .send("<@&608084227027632128> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Indigo
  if (
    message.content.toLowerCase() == ">iam " + "indigo" ||
    message.content.toLowerCase() == ">iam " + "23"
  ) {
    message.member.addRole("519034578866929674");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519034578866929674> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "indigo" ||
    message.content.toLowerCase() == ">iamnot " + "23"
  ) {
    message.member.removeRole("519034578866929674");
    message.channel
      .send("<@&519034578866929674> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Deep Purple
  if (
    message.content.toLowerCase() == ">iam " + "deep purple" ||
    message.content.toLowerCase() == ">iam " + "24"
  ) {
    message.member.addRole("519053870425702430");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519053870425702430> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "deep purple" ||
    message.content.toLowerCase() == ">iamnot " + "24"
  ) {
    message.member.removeRole("519053870425702430");
    message.channel
      .send("<@&519053870425702430> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Purple
  if (
    message.content.toLowerCase() == ">iam " + "purple" ||
    message.content.toLowerCase() == ">iam " + "25"
  ) {
    message.member.addRole("519033808180477952");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519033808180477952> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "purple" ||
    message.content.toLowerCase() == ">iamnot " + "25"
  ) {
    message.member.removeRole("519033808180477952");
    message.channel
      .send("<@&519033808180477952> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Mauve
  if (
    message.content.toLowerCase() == ">iam " + "mauve" ||
    message.content.toLowerCase() == ">iam " + "26"
  ) {
    message.member.addRole("608084233625272332");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608084233625272332> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "mauve" ||
    message.content.toLowerCase() == ">iamnot " + "26"
  ) {
    message.member.removeRole("608084233625272332");
    message.channel
      .send("<@&608084233625272332> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Magenta
  if (
    message.content.toLowerCase() == ">iam " + "magenta" ||
    message.content.toLowerCase() == ">iam " + "27"
  ) {
    message.member.addRole("519033938170216458");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519033938170216458> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "magenta" ||
    message.content.toLowerCase() == ">iamnot " + "27"
  ) {
    message.member.removeRole("519033938170216458");
    message.channel
      .send("<@&519033938170216458> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Hot Pink
  if (
    message.content.toLowerCase() == ">iam " + "hot pink" ||
    message.content.toLowerCase() == ">iam " + "28"
  ) {
    message.member.addRole("519034420552794122");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519034420552794122> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "hot pink" ||
    message.content.toLowerCase() == ">iamnot " + "28"
  ) {
    message.member.removeRole("519034420552794122");
    message.channel
      .send("<@&519034420552794122> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Pink
  if (
    message.content.toLowerCase() == ">iam " + "pink" ||
    message.content.toLowerCase() == ">iam " + "29"
  ) {
    message.member.addRole("519034029907902484");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519034029907902484> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "pink" ||
    message.content.toLowerCase() == ">iamnot " + "29"
  ) {
    message.member.removeRole("519034029907902484");
    message.channel
      .send("<@&519034029907902484> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Pastel Pink
  if (
    message.content.toLowerCase() == ">iam " + "pastel pink" ||
    message.content.toLowerCase() == ">iam " + "30"
  ) {
    message.member.addRole("608087340434325504");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608087340434325504> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "pastel pink" ||
    message.content.toLowerCase() == ">iamnot " + "30"
  ) {
    message.member.removeRole("608087340434325504");
    message.channel
      .send("<@&608087340434325504> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Ivory
  if (
    message.content.toLowerCase() == ">iam " + "ivory" ||
    message.content.toLowerCase() == ">iam " + "31"
  ) {
    message.member.addRole("608086842428096532");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608086842428096532> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "ivory" ||
    message.content.toLowerCase() == ">iamnot " + "31"
  ) {
    message.member.removeRole("608086842428096532");
    message.channel
      .send("<@&608086842428096532> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // White
  if (
    message.content.toLowerCase() == ">iam " + "white" ||
    message.content.toLowerCase() == ">iam " + "32"
  ) {
    message.member.addRole("519034029907902484");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519034029907902484> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "white" ||
    message.content.toLowerCase() == ">iamnot " + "32"
  ) {
    message.member.removeRole("519034129069899776");
    message.channel
      .send("<@&519034129069899776> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Light Gray / Light Grey (UK)
  if (
    message.content.toLowerCase() == ">iam " + "light gray" ||
    message.content.toLowerCase() == ">iam " + "light grey" ||
    message.content.toLowerCase() == ">iam " + "33"
  ) {
    message.member.addRole("519036592254615562");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519036592254615562> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "light gray" ||
    message.content.toLowerCase() == ">iamnot " + "light grey" ||
    message.content.toLowerCase() == ">iamnot " + "33"
  ) {
    message.member.removeRole("519036592254615562");
    message.channel
      .send("<@&519036592254615562> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Blue Gray / Blue Grey
  if (
    message.content.toLowerCase() == ">iam " + "blue gray" ||
    message.content.toLowerCase() == ">iam " + "blue grey" ||
    message.content.toLowerCase() == ">iam " + "34"
  ) {
    message.member.addRole("519055342290862080");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519055342290862080> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "blue gray" ||
    message.content.toLowerCase() == ">iamnot " + "blue grey" ||
    message.content.toLowerCase() == ">iamnot " + "34"
  ) {
    message.member.removeRole("519055342290862080");
    message.channel
      .send("<@&519055342290862080> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Gray / Grey
  if (
    message.content.toLowerCase() == ">iam " + "gray" ||
    message.content.toLowerCase() == ">iam " + "grey" ||
    message.content.toLowerCase() == ">iam " + "35"
  ) {
    message.member.addRole("519036758416031745");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519036758416031745> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "gray" ||
    message.content.toLowerCase() == ">iamnot " + "grey" ||
    message.content.toLowerCase() == ">iamnot " + "35"
  ) {
    message.member.removeRole("519036758416031745");
    message.channel
      .send("<@&519036758416031745> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Black
  if (
    message.content.toLowerCase() == ">iam " + "black" ||
    message.content.toLowerCase() == ">iam " + "36"
  ) {
    message.member.addRole("519034171058946048");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&519034171058946048> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "black" ||
    message.content.toLowerCase() == ">iamnot " + "36"
  ) {
    message.member.removeRole("519034171058946048");
    message.channel
      .send("<@&519034171058946048> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Invisible
  if (
    message.content.toLowerCase() == ">iam " + "invisible" ||
    message.content.toLowerCase() == ">iam " + "37"
  ) {
    message.member.addRole("608080962043117588");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&608080962043117588> color role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "invisible" ||
    message.content.toLowerCase() == ">iamnot " + "37"
  ) {
    message.member.removeRole("608080962043117588");
    message.channel
      .send("<@&608080962043117588> color role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // PRONOUNS ROLES

  // He / Him
  if (
    message.content.toLowerCase() == ">iam " + "male" ||
    message.content.toLowerCase() == ">iam " + "man" ||
    message.content.toLowerCase() == ">iam " + "boy" ||
    message.content.toLowerCase() == ">iam " + "he" ||
    message.content.toLowerCase() == ">iam " + "him"
  ) {
    message.member.addRole("624365203399770150");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&624365203399770150> pronoun role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "male" ||
    message.content.toLowerCase() == ">iamnot " + "man" ||
    message.content.toLowerCase() == ">iamnot " + "boy" ||
    message.content.toLowerCase() == ">iamnot " + "he" ||
    message.content.toLowerCase() == ">iamnot " + "him"
  ) {
    message.member.removeRole("624365203399770150");
    message.channel
      .send("<@&624365203399770150> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // She / Her
  if (
    message.content.toLowerCase() == ">iam " + "female" ||
    message.content.toLowerCase() == ">iam " + "woman" ||
    message.content.toLowerCase() == ">iam " + "girl" ||
    message.content.toLowerCase() == ">iam " + "she" ||
    message.content.toLowerCase() == ">iam " + "her"
  ) {
    message.member.addRole("624365743219408915");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&624365743219408915> pronoun role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "invisible" ||
    message.content.toLowerCase() == ">iamnot " + "37"
  ) {
    message.member.removeRole("624365743219408915");
    message.channel
      .send("<@&624365743219408915> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // They / Their
  if (
    message.content.toLowerCase() == ">iam " + "neutral" ||
    message.content.toLowerCase() == ">iam " + "genderless" ||
    message.content.toLowerCase() == ">iam " + "they" ||
    message.content.toLowerCase() == ">iam " + "their"
  ) {
    message.member.addRole("624365748965343244");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&624365748965343244> pronoun role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "neutral" ||
    message.content.toLowerCase() == ">iamnot " + "genderless" ||
    message.content.toLowerCase() == ">iamnot " + "they" ||
    message.content.toLowerCase() == ">iamnot " + "their"
  ) {
    message.member.removeRole("624365748965343244");
    message.channel
      .send("<@&624365748965343244> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // Other
  if (message.content.toLowerCase() == ">iam " + "hmhb") {
    message.member.addRole("624382114464530472");
    message.channel
      .send(
        message.author.username +
          " enjoy your <@&624382114464530472> pronoun role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (message.content.toLowerCase() == ">iamnot " + "hmhb") {
    message.member.removeRole("624382114464530472");
    message.channel
      .send("<@&624382114464530472> pronoun role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // GROUPS ROLES

  // Cult movie roles
  if (
    message.content.toLowerCase() == ">movie" ||
    message.content.toLowerCase() == ">movies"
  ) {
    message.channel.send(
      "```Cult Movie Night celebrates the very best (and worst) of cult movies. If you want to join the Cult Movie Night Club, type in `>iam cult' and you will be given the role. Please note that this means that you will be @ted when an event starts.```"
    );
    // ^The full thing should really be "[...] will be @ted when an event starts. To find out more, check out this URL https://tehleroy.neocities.org/discord/movie.html", but as of publication of *THIS* version of the bot's code, the URL will just go to a 404.
  }
  if (message.content.toLowerCase() == ">iam " + "cult") {
    message.member.addRole("622168721498177587");
    message.channel
      .send(
        message.author.username +
          " You now have the <@&622168721498177587> role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (message.content.toLowerCase() == ">iamnot " + "cult") {
    message.member.removeRole("622168721498177587");
    message.channel
      .send("<@&622168721498177587> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // On Neocities
  if (
    message.content.toLowerCase() == ">iam " + "neocities" ||
    message.content.toLowerCase() == ">iam " + "nc"
  ) {
    message.member.addRole("625785658899693608");
    message.channel
      .send(
        message.author.username +
          " You now have the <@&625785658899693608> role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "neocities" ||
    message.content.toLowerCase() == ">iamnot " + "nc"
  ) {
    message.member.removeRole("625785658899693608");
    message.channel
      .send("<@&625785658899693608> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // News Subscriber (Announcements ping role)

  if (
    message.content.toLowerCase() == ">iam " + "news" ||
    message.content.toLowerCase() == ">iam " + "newsletter"
  ) {
    message.member.addRole("628767206989103134");
    message.channel
      .send(
        message.author.username +
          " You now have the <@&628767206989103134> role!"
      )
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }
  if (
    message.content.toLowerCase() == ">iamnot " + "news" ||
    message.content.toLowerCase() == ">iamnot " + "newsletter"
  ) {
    message.member.removeRole("628767206989103134");
    message.channel
      .send("<@&628767206989103134> role successfully removed!")
      .then(sentMessage => {
        sentMessage.delete(3000);
        message.delete(1);
      })
      .catch();
  }

  // SHIT OWLMAN WOULD SAY

  // Reply to single words
  if (message.content.toLowerCase() == "copyright") {
    message.channel.send("You mean that thing that holds back people?");
  }
  if (message.content.toLowerCase() == "h") {
    message.channel.send("I love my wife");
  }
  if (message.content.toLowerCase() == "+help") {
    message.channel.send("Shut the fuck up, RoboRandy, you wanna be OwlBot");
  }
  if (message.content.toLowerCase() == "a") {
    message.channel.send("quirky !!");
  }
  if (message.content.toLowerCase() == "i love your wife too") {
    message.channel.send("I'm so glad you're my wife's boyfriend");
  }
  if (message.content.toLowerCase() == "piss") {
    message.channel.send("Will you fuck off?");
  }
  if (message.content.toLowerCase() == "owo") {
    message.channel.send("https://owlman.neocities.org/odds/owo_fire.gif");
  }
  // if (message.content == ":brutal:") {
  //     message.channel.send("_starts to headbang_");
  // }
  if (message.content.toLowerCase() == "metal") {
    message.channel.send("<:metal:605328047616294912>");
  }
  if (message.content.toLowerCase() == "<:catto:617090169400721470>") {
    message.channel.send("Stop posting that bloody cat emote");
  }
  if (message.content.toLowerCase() == ":catto:") {
    message.channel.send("Stop posting that bloody cat emote");
  }
  if (message.content.toLowerCase() == "brexit") {
    message.channel.send("Oh God...");
  }
  if (message.content.toLowerCase() == "are you a robot?") {
    message.channel.send("yeah?");
  }
  if (
    ["drunk", "beer", "alcohol", "whisky", "drinking", "wine"].includes(
      message.content.toLowerCase()
    )
  ) {
    message.channel.send("Fill her up!");
  }
  if (["minion", "minions"].includes(message.content.toLowerCase())) {
    message.channel.send("Oh dude, that is **SO EPIC**!");
  }
  if (["foot", "feet"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "...If you are into that, I guess https://owlman.neocities.org/odds/myfoot.png"
    );
  }
  if (["libtard", "liberal"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "https://owlman.neocities.org/odds/how_to_own_a_libtard_lol_follow_bigblonddaddy69_on_ig_for_more_epic_memes.gif"
    );
  }
  if (["owly", "james"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "https://owlman.neocities.org/odds/how_to_own_a_libtard_lol_follow_bigblonddaddy69_on_ig_for_more_epic_memes.gif"
    );
  }
  // If a user types "des" then ROBORANDY#3485 (bot) will respond with "pa", if you look at the code, you can work out the rest
  if (message.content.toLowerCase() == "pa") {
    message.channel.send("cito");
  }
  // Being nice and proper
  if (
    message.content.toLowerCase() == "Good morning" ||
    message.content.toLowerCase() == "GM"
  ) {
    message.channel.send("Good morning back to you, hope you have a nice day");
  }
  if (message.content.toLowerCase() == "Good afternoon") {
    message.channel.send(
      "Good afternoon back to you, hopefully your day is going well so far"
    );
  }
  if (message.content.toLowerCase() == "Good evening") {
    message.channel.send("Good evening, hope you have had a good day");
  }
  if (message.content.toLowerCase() == "Good night") {
    message.channel.send("Night night");
  }

  // Reply to included words on messages
  // if (message.content.toLowerCase().includes("tea")) {
  //     message.channel.send("O_O SOMEONE SAY TEA?");
  // }
  // if (message.content.toLowerCase().includes("doom")) {
  //     message.channel.send("**SOMEONE SAY DOOM???**");
  // }
  // if (message.content.toLowerCase().includes("rain")) {
  //     message.channel.send("**SOMEONE SAY RAIN????**");
  // }

  // Check if the bots user was tagged in the message
  if (message.content.includes(bot.user.toString())) {
    // Send acknowledgement message
    message.channel.send(
      "Well you know what " + message.author.toString() + ", guess what?"
    );
  }
  if (
    ["what?", "piss?", "chicken butt?"].includes(message.content.toLowerCase())
  ) {
    message.channel.send("Chicken Butt");
  }
});

// Random answers from a single word
function randomMessage() {
  var randomNumber = Math.round(Math.random() * 2); // 0, 1 or 2
  switch (randomNumber) {
    case 0:
      return "I shitted";
    case 1:
      return "I cummed";
    case 2:
      return "I pissed";
  }
}
bot.on("message", message => {
  if (message.content.toLowerCase() == "oof") {
    message.channel.send(randomMessage());
  }
});
