// Description
//   A command that prints a random Douglas Adams quote
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot da_quote - Returns a random Douglas Adams quote
//
// Notes:
//
//
// Author:
//   bronzehedwick
(function() {
  var quotes = [
    "He hoped and prayed that there wasn't an afterlife. Then he realized there was a contradiction involved here and merely hoped that there wasn't an afterlife.",
    "Humans are not proud of their ancestors, and rarely invite them round to dinner.",
    "I love deadlines. I like the whooshing sound they make as they fly by.",
    "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "In those days spirits were brave, the stakes were high, men were real men, women were real women and small furry creatures from Alpha Centauri were real small furry creatures from Alpha Centauri.",
    "It is a mistake to think you can solve any major problems just with potatoes.",
    "It is no coincidence that in no known language does the phrase 'As pretty as an Airport' appear.",
    "Life... is like a grapefruit. It's orange and squishy, and has a few pips in it, and some folks have half a one for breakfast.",
    "The ships hung in the sky in much the same way that bricks don't.",
    "There is a theory which states that if ever anybody discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
    "Time is an illusion. Lunchtime doubly so.",
    "You live and learn. At any rate, you live.",
    "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    "The last time anybody made a list of the top hundred character attributes of New Yorkers, common sense snuck in at number 79.",
    "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",
    "Nothing travels faster than the speed of light with the possible exception of bad news, which obeys its own special laws.",
    "Ah, this is obviously some strange usage of the word 'safe' that I wasn't previously aware of.",
    "The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.",
    "Anyone who is capable of getting themselves made President should on no account be allowed to do the job.",
    "Space is big. You just won't believe how vastly, hugely, mind- bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
    "Even he, to whom most things that most people would think were pretty smart were pretty dumb, thought it was pretty smart.",
    "I may not have gone where I intended to go, but I think I have ended up where I intended to be.",
    "If you don't change your beliefs, your life will be like this forever. Is that good news?",
    "My doctor says that I have a malformed public-duty gland and a natural deficiency in moral fibre, and that I am therefore excused from saving Universes.",
    "I really didn't foresee the Internet. But then, neither did the computer industry. Not that that tells us very much, of course - the computer industry didn't even foresee that the century was going to end",
    "The idea that Bill Gates has appeared like a knight in shining armour to lead all customers out of a mire of technological chaos neatly ignores the fact that it was he who, by peddling second-rate technology, led them into it in the first place.",
    "Very deep. You should send that into Reader's Digest, they've got a page for people like you.",
    "Capital letters were always the best way of dealing with things you didn't have a good answer to.",
    "Nothing travels faster than the speed of light with the possible exception of bad news, which follows its own laws",
    "Plenty of people did not care for him much, but then there is a huge difference between disliking somebody -- maybe even disliking them a lot -- and actually shooting them, strangling them, dragging them through the fields and setting their house on fire. It was a difference which kept the vast majority of the population alive from day to day.",
    "Time is an illusion, lunchtime doubly so.",
    "A computer terminal is not some clunky old television with a typewriter in front of it. It is an interface where the mind and body can connect with the universe and move bits of it about.",
    "I wrote an ad for Apple Computer: 'Macintosh - We might not get everything right, but at least we knew the century was going to end.",
    "The Macintosh may only have 10% of the market, but it is clearly the top 10%.",
    "First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we've realized it's a brochure.",
    "I've come up with a set of rules that describe our reactions to technologies. Anything that is in the world when you're born is normal and ordinary and is just part of the way the world works. Anything that's invented between when you're fifteen and thirty five is new and exciting and revolutionary and you can probably get a career in it. Anything invented after you're thirty-five is against the natural order of things.",
    "A nerd is someone who uses a telephone to talk to other people about telephones.",
    "Technology is a word that describes something that doesn't work yet",
    "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    "All it takes to fly is to hurl yourself at the ground... and miss.",
    "Men were real men, women were real women, and small, furry creatures from Alpha Centauri were real small, furry creatures from Alpha Centauri. Spirits were brave, men boldly split infinitives that no man had split before. Thus was the Empire forged.",
    "Several billion trillion tons of superhot exploding hydrogen nuclei rose slowly above the horizon and managed to look small, cold and slightly damp.",
    "Why stop now just when I'm hating it?",
    "See first, think later, then test. But always see first. Otherwise you will only see what you were expecting. Most scientists forget that.",
    "I'm spending a year dead for tax reasons.",
    "We have normality. I repeat, we have normality. Anything you still can't cope with is therefore your own problem.",
    "The mere thought hadn't even begun to speculate about the merest possibility of crossing my mind.",
    "Life is wasted on the living.",
    "If somebody thinks they're a hedgehog, presumably you just give 'em a mirror and a few pictures of hedgehogs and tell them to sort it out for themselves.",
    "Some say that the universe is made so that when we are about to understand it, it changes into something even more incomprehensible. And then there are those who say that this has already happened.",
    "I refuse to answer that question on the grounds that I don't know the answer",
    "There is a theory which states that if ever for any reason anyone discovers what exactly the Universe is for and why it is here it will instantly disappear and be replaced by something even more bizarre and inexplicable.",
    "This must be Thursday. I never could get the hang of Thursdays.",
    "Watch?? I'm gonna pray, Man! Know any good religions?",
    "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.",
    "We demand rigidly defined areas of doubt and uncertainty!",
    "I don't believe it. Prove it to me and I still won't believe it."
  ];

  module.exports = function(robot) {
    return robot.respond(/da_quote/i, function(msg) {
      return msg.send(msg.random(quotes));
    });
  };
}).call(this);

