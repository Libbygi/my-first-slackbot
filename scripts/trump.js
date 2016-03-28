module.exports = function(bot){

//When trumpbot hears any of the defined greetings, he will spit out a randomized
//trump insult.
  bot.hear(/(hi|hello|sup|greetings|hola|hey|hay)/i, function(msg){
    var insults = [
      'You have no clue',
      'lightweight!',
      'desperate and sad',
      'total disaster',
      'total embarassment',
      'VERY weak on illegal immigration',
      'you will never make America great again',
      'SAD!',
      'You\'re totally incompetent as a manager and leader',
      'in bed w/ Wall Street',
      'you have zero chance',
      'you don\'t have what it takes',
      'I will sue you just for fun',
      'You couldn\'t be an elected dog catcher',
      'truly weird',
      'phony',
      'You have been very disloyal to Jeb',
      'you\'re very weak on illegal immigration',
      'you truly don\'t have a clue!',
      'should be fired'
    ]

    var num = Math.floor(Math.random()*20);
    return msg.reply(insults[num]);
  })

  //When trumpbot hears his own name, he responds 'dats me'
  bot.hear(/(trump|donald|drumpf)/i, function(msg){
    return msg.send("dats me");
  })

  //When trumpbot is asked 'what's your deal,' he responds with image.
  bot.respond(/what's your deal/i, function(msg){
    return msg.reply('I woke up like this: http://bit.ly/1Rm0WJh');

  })

//Each time the user asks 'how much will the wall cost?' trumpbot adds $1 billion
//to the previously-stated cost. Once the total passes $10 billion, he assures
//user that Mexico will pay for it.

  bot.respond(/how much will the wall cost\?/i, function(msg){
    var wallQuestionCount = bot.brain.get('wallTotal') * 1 || 7;
    bot.brain.set('wallTotal', wallQuestionCount + 1)

     if (wallQuestionCount > 9){
       return msg.reply("$" + wallQuestionCount + " billion; don't worry, Mexico's paying.")
     } else{
       return msg.reply('Only $' + wallQuestionCount + " billion")
     }
   })

   //User can ask trumpbot to expand on specific policy positions. Unless the User
   // asks about business or making deals, trumpbot will admit to not knowing anything

  bot.respond(/describe your policy positions regarding (.*)/i, function(msg){
      var policySubj = msg.match[1];
      if (policySubj == "business" || policySubj == "making deals"){
        return msg.reply("Trust me, I wrote the book on " + policySubj)
      } else{
        return msg.reply("I don't really know much about " + policySubj)
      }
    })
}
