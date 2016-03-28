#TRUMPBOT: A slackbot that's just tryin' to make America great again.

###Features and uses

1. When trumpbot hears any of these pre-defined greetings **('hi', 'hello', 'sup', 'greetings', 'hola', 'hey', 'hay'),** he will shoot a random trump insult back to the user.
2. When trumpbot hears his own name **('Donald', 'Trump', or 'Drumpf')**, he responds: **'dats me'**.
3. When trumpbot is asked **'what's your deal,'** he responds with a meme and a Beyonce lyric.
4. Each time the user asks **'how much will the wall cost?'** trumpbot adds $1 billion
to the previously-stated wall cost. Once the total surpasses $10 billion, he also assures the
user that Mexico will pay for it.
5. The user can ask trumpbot to expand on specific policy positions, by saying, **'describe your policy
positions regarding [insert subect]'.** Unless the user asks about 'business' or 'making deals',
trumpbot will admit to not knowing much about that subject.

###Approach
I used the Math object to randomize insults stored in an array when the user greets the bot.
I used the `brain` memory function to tally the number of times the user asks about the cost of the Wall, and conditionals to change the bot's response once the sum surpasses a certain amount.
I used the wildcard match function to accept policy subjects from the user in part **5**, and conditionals again to change the bot's response for certain inputs.


###Files needed
See trump.js in the scripts folder.


###Install instructions

Set up Hubot locally by installing the necessary files via terminal:

`$ npm install -g yo hubot generator-hubot`
`mkdir mybot`
`cd mybot`
`yo hubot`

This will prompt you to answer a few questions about your bot.

Owner: hit enter
Bot Name: Give the bot a name
Description: Optional Description
Bot Adapter: slack
`npm install hubot-slack --save`

Test your bot locally with your own API token inserted:

`HUBOT_SLACK_TOKEN=[TOKEN-GOES-HERE] ./bin/hubot --adapter slack`
