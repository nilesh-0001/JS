// element.innerHTML is used to populate a Div with Html search online about this method and create a website with a div tag containing a random joke given an array of jokes use math.random and fetch jokes from the internet (use any websaite to create the array) your website should show a random joke on every reload. min. length of your jokes array should be 10.
let jokes = {
  0: "• What do you call a pony with a cough?\nA little horse.",

  1: "• What did one hat say to the other?\nYou wait here. I’ll go on a head.",

  2: "• What do you call a magic dog?\nA labracadabrador.",

  3: "• What did the shark say when he ate the clownfish?\nThis tastes a little funny.",

  4: "• What’s orange and sounds like a carrot?\nA parrot.",

  5: "• Why can’t you hear a pterodactyl go to the bathroom?\nBecause the “P” is silent.",

  6: "• What do you call a woman with one leg?\nEileen.",

  7: "• What did the pirate say when he turned 80?\nAye matey.",

  8: "• Why did the frog take the bus to work today?\nHis car got toad away.",

  9: "• What did the buffalo say when his son left for college?\nBison.",

  10: "• What is an astronaut’s favorite part on a computer?\nThe space bar.",

  11: "• Why did the yogurt go to the art exhibition?\nBecause it was cultured.",

  12: "• What do you call an apology written in dots and dashes?\nRe-Morse code.",

  13: "• Did you hear about the two people who stole a calendar?\nThey each got six months.",

  14: "• Why did the hipster burn his mouth?\nHe drank the coffee before it was cool.",

  15: "• What do cows do on date night?\nGo to the moo-vies.",

  16: "• What do cows say when they hear a bad joke?\n“I am not amoosed.”",

  17: "• Why do French people eat snails?\nThey don’t like fast food.",

  18: "• Why did the golfer wear two pairs of pants? \nJust in case he got a hole in one",

  19: "• Why don’t the circus lions eat the clowns? \nBecause they taste funny",

  20: "• What did 0 say to 8?\n“Nice belt.”",

  21: "• What do you call a pig that does karate?\nA pork chop.",

  22: "• What did the football coach say to the broken vending machine?\nGive me my quarterback.",

  23: "• Why are elephants wrinkly?\nBecause you can’t iron them.",

  24: "• What did the cake say to the fork?\nYou want a piece of me?",

  25: "• Why did the strawberry cry?\nHe found himself in a jam.",

  26: "• Why is it annoying to eat next to basketball players?\nThey dribble all the time.",

  27: "• What did the lettuce say to the celery?\nQuit stalking me",

  28: "• What do you call a train carrying bubblegum?\nA chew-chew train.",

  29: "• What’s small and red and has a rough voice?\nA hoarse radish",

  30: "• Why do mushrooms get invited to all the parties?\nBecause they are such fungis.",

  31: "• Why shouldn’t you tell secrets in a cornfield?\nToo many ears.",

  32: "• Why couldn’t the bad sailor learn the alphabet?\nBecause he always got lost at “C.”",

  33: "• How did the two cats end their fight?\nThey hissed and made up.",

  34: "• “Did you hear about the guy who invented the knock-knock joke?\nHe won the ‘no-bell’ prize.”",

  35: "• What’s the best thing about Switzerland?\nI don’t know, but the flag is a big plus.",

  36: "• Why do we tell actors to “break a leg”?\nBecause every play has a cast.",

  37: "• Helvetica and Times New Roman walk into a bar.\n“Get out of here” shouts the bartender. “We don’t serve your type.”",

  38: "• Hear about the new restaurant called Karma?\nThere’s no menu : You get what you deserve.",

  39: "• A woman in labor suddenly shouted, “Shouldn’t Wouldn’t Couldn’t Didn’t Can’t”\n“Don’t worry,” said the doc. “Those are just contractions.”",

  40: "• A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender.\nThe bear shrugged. “I’m not sure; I was born with ,them.",

  41: "• Why don’t scientists trust atoms?\nBecause they make up everything.",

  42: "• Where are average things manufactured?\nThe satisfactory.",

  43: "• How do you drown a hipster?\nThrow him in the mainstream.",

  44: "• What sits at the bottom of the sea and twitches?\nA nervous wreck.",

  45: "• What does a nosy pepper do?\nGets jalapeño business",

  46: "• How does Moses make tea?\nHe brews.",

  47: "• Why can’t you explain puns to kleptomaniacs?\nThey always take things literally.",

  48: "• How do you keep a bagel from getting away?\nPut lox on it.",

  49: "• Why did the chicken go to the séance?\nTo get to the other side.",

  50: "• Did you hear about the mathematician who’s afraid of negative numbers?\nHe’ll stop at nothing to avoid them.",

  51: "• Yesterday I saw a guy spill all his Scrabble letters on the road.\nI asked him, “What’s the word on the street?”",

  52: "• I invented a new word\n“Plagiarism”",

  53: "• Did you hear about the actor who fell through the floorboards?\nHe was just going through a stage.",

  54: "• Did you hear about the claustrophobic astronaut?\nHe just needed a little space.",

  55: "• Why did the Oreo go to the dentist?\nBecause he lost his filling.",

  56: "• Where does Batman go to the bathroom?\nThe batroom.",

  57: "• Where does the sheep get his hair cut?\nThe baa-baa shop",

  58: "• Why are ghosts such bad liars?\nBecause they are easy to see through.",

  59: "• Why does Humpty Dumpty love autumn?\nBecause Humpty Dumpty had a great fall.",

  60: "• How do trees get online?\nThey just log on",

  61: "• What do you call a bear with no teeth?\nA gummy bear.",

  62: "• Why couldn’t the leopard play hide-and-seek?\nBecause he was always spotted.",

  63: "• Why do bees have sticky hair?\nBecause they use honeycombs.",

  64: "• Where do fish sleep?\nIn the riverbed.",

  65: "• What do you call an alligator in a vest?\nAn investigator.",

  66: "• I hate Russian dolls—\nThey’re so full of themselves.",
};

const randomNumber = Math.floor(Math.random() * 67);
alert("Enter Numbers below 66 to get a Joke")
const Jokegenerator = () => {
  let jokenum = prompt("Enter the Number");
  alert(jokes[jokenum]);
  let confr = confirm("Do you want to See the next joke");
  if (confr) {
    Jokegenerator();
  } else {
    alert("Thanks for Visiting");
  }
  
};

Jokegenerator();