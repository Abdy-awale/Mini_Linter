let story =
	'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

// REMOVE OVERUSED WORDS  //
let storyWords = story.split(' ');
// console.log(storyWords.length);
overusedWords.forEach((n) => {
	let removeNext = false;
	storyWords.forEach((e, index) => {
		if (n === e && removeNext === true) {
			storyWords.splice(index, 1);
			removeNext = false;
		} else if (n === e && removeNext === false) {
			removeNext = true;
		}
	});
});
const complete = storyWords.join(' ');
// console.log(complete);
// MASUODS BEAUTIFUL CODE //

let betterWords = storyWords.filter((word) => {
	return !unnecessaryWords.includes(word);
});
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
const overUsed = storyWords.forEach((word) => {
	if (word === 'really') {
		reallyCount += 1;
	} else if (word === 'very') {
		veryCount += 1;
	} else if (word === 'basically') {
		basicallyCount += 1;
	}
});
let sentences = 0;
const sentenceLoop = storyWords.forEach((word) => {
	if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
		sentences += 1;
	}
});

// let count = story.match(/\./g).length + story.match(/!/g).length;
// console.log(count);
// let greatestWord = '';
// storyWords.forEach((e, i) => {
// 	let word = e;
// 	if (e.includes('.') || e.includes(',') || e.includes('!')) {
// 		word = e.substring(0, e.length - 2);
// 	}
//   story.match(/word/g).length
// });

let sentencesCount = 0;
const loopScentence = storyWords.forEach((word) => {
	if (word[word.length - 1] === '.' || word[word.length - 1] === 'e') {
		sentencesCount += 1;
	}
});
console.log(sentencesCount);
console.log(sentences);
// Function that Logs
const logIn = (a, i, e, o, u) => {
	console.log(`Word Counts : ${a.length}`);
	console.log(`Sentences Counts : ${i}`);
	console.log(`Really Counts : ` + e);
	console.log(`Very Counts :` + o);
	console.log(`Basically Counts :` + u);
};
console.log(
	logIn(betterWords, sentences, reallyCount, veryCount, basicallyCount),
);
