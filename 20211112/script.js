// This is the scenario object which holds all the scenarios.
let scenario = {
  one: {
    image: './images/noSight.png',
    text: 'You wake up infront of a pathway... You only have your cloths and you can barely see anything... You are confused. <br/>What was even your name?\n',
  },
  two: {
    image: './images/Cave_Nele-Diel.jpg',
    text: 'Welcome <span class="player">PLAYER!!</span><br/>You hear mysterious sounds, but you cannot make up from where they are. However, you feel the urge to get up and go... <br/>There are only two ways, where do you go?',
    buttons: [
      ['Follow left path', 'advanceTo(scenario.three)'],
      ['Follow right path', 'advanceTo(scenario.ending)'],
    ],
    sound: './sound/horror-background.mp3',
  },
  three: {
    image: './images/imugi_by_arvalis.jpg',
    text: 'A giant monsterous snake appears infront of you! After a brief moment of stun you try to grab your weapon... but there is none. You see a small shimmer of light behind the snake which could be an exit! What are you going to do?<br/>Are you goning to fight it or run?',
    buttons: [
      ['Fight with whatever lies around', 'advanceTo(scenario.four)'],
      ['Run for your life', 'advanceTo(scenario.ending)'],
    ],
    sound: './sound/angry-beast.mp3',
  },
  four: {
    image: './images/game-over.jpg',
    text: '<span class="player">PLAYER</span> could not defeat the monster that appeared...',
    buttons: [['Restart', 'advanceTo(scenario.two)']],
    sound: './sound/game-over.mp3',
  },
  ending: {
    image: './images/blossoming_tree_tomtc.jpg',
    text: 'A ray of sun light is shining down from the ceiling on a beatuiful cherryblossom tree. It seems you found a way through this cave. <br/><br/>You managed to get through somehow it seems. Soon you will make your way out into freedom...',
    buttons: [['To be continued...', 'reset()']],
    sound: './sound/finish.mp3',
  },
};

// ===========================================================
//                         START HERE
// ===========================================================

function startGame() {
  
}