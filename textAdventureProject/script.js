const textDiv = document.getElementById("textContainer");
const buttonDiv = document.getElementById("choiceButtons");
const imageElement = document.getElementById("backgroundImageElement");
const backButton = document.getElementById("backBtn");
const startButtonDiv = document.getElementById("startButtonContainer");
const backGroundMusic = new Audio('./res/music/tocatafuga.mp3');

backButton.onclick = lastNode;

const nodeHistory = [];

class Choice {
    constructor(text, node = null) {
        this.text = text;
        this.node = node;
    }
}

class StoryNode {
    constructor(text, choices = [], imagePath = "./res/images/default.png") {
        this.text = text;
        this.choices = choices;
        this.imagePath = imagePath;
    }
}

function appendChoice(choice){
    let button = document.createElement("button");
    button.innerHTML = choice.text;
    button.onclick = function () {if (choice.node) {nextNode(choice.node)}};
    buttonDiv.appendChild(button);
}

function renderNode(node) {
    textDiv.innerHTML = `<p>${node.text}</p>`;
    buttonDiv.innerHTML = ``;
    for (const choice of node.choices) {
        appendChoice(choice);
    }
    if(nodeHistory.length > 1) {
        buttonDiv.appendChild(backButton);
    }
    imageElement.setAttribute("src",node.imagePath);
}

function nextNode(node) {
    nodeHistory.push(node);
    renderNode(node);
}

function lastNode() {
    if(nodeHistory.length > 1){
        nodeHistory.pop();
        renderNode(nodeHistory.at(-1));
    }
}

const node10 = new StoryNode(`You start to run, clutching your pouch tight in your hands you dart through the village to get to your horse, you see more and more skeletons appearing out of the shadows out to kill you but you somehow manage to evade ally of them. Jumping onto your horse you gallop away as fast as the beast can carry, not once looking back. After half an hour you slow down and look into your pouch. The saving petals are there. Your father might yet live.`,
[],
"./res/images/win.png");
const node9 = new StoryNode(`You turn around and you stare at a headless monstrosity axe above you. The last thing you hear is a swush as you join the ranks of undead soldiers.`,
[],
'./res/images/axe_kill.png');
const node8 = new StoryNode(`You keep collecting the petals... shortly after you hear the zing of metal turn around and you stare at a headless monstrosity axe above you. The last thing you hear is a swush as you join the ranks of undead soldiers.`,
[],
'./res/images/axe_kill.png');
const node7 = new StoryNode(`As you pick the petals, putting them into your belt pouch you see a shadow slowly growing over you. A feeling of immediate danger overcomes you. What do you do?`,
[new Choice("Run",node10), new Choice("Keep collecting petals", node8), new Choice("Turn around and face whatever is there",node9)],
"./res/images/well.png");
const node6 = new StoryNode(`You start sneaking, avoiding the bones and twigs on the floor as to not attract any danger. A constant feeling of pressure and dread creeps up to you as you can hear every single silent breath you take as if it was a herald's trumpet anouncing your presence. What feels like half an hour later you finally get up to well. The lilies around it almost sparkle like diamonds in the moonlight. For a short moment a rush of happiness lightens your mood. Before you the precious flowers ripe for harvest.`,
[new Choice("Start picking the flower petals", node7)],
"./res/images/well.png");
const node5 = new StoryNode(`Hiding in the barrel you see an undead warrior coming spear in hand. The abomnination stops for a moment, appearantly looking around what made the noise. A few long seconds later it disappears again. It seems like you just barely dodged an early grave.`,
[new Choice("Cautiously sneak up to the well", node6)]);
const node4 = new StoryNode(`You draw your weapon and prepare for combat. Finding a skeleton clad in chainmail an infernal grin put on it for eternity. You exchange blows with your enemy but all your effort is in vain. The undead defeats you with a deadly blow to the head, your last thought that you'll probably join it in shambling and killing till the end of time.`,
[],
'./res/images/skeleton_kill.png');
const node3 = new StoryNode(`You start running in the direction of the well when you suddenly feel a bony, cold grip on your shoulder. As you turn around the last thing you see is a grinning skull as a spear goes through you stomach, dooming you to forever join the army of the damned.`,
[],
'./res/images/skeleton_kill.png');
const node2 = new StoryNode(`You try listening to the night and can hear chains clang together. Someone or something is there, possibly waiting for you. What do you do?`,
[new Choice("Try sneaking past the thing that lurks in the night",node6), new Choice("Draw your sword and engage the thing in combat", node4)]);
const node1 = new StoryNode(`Stepping forward you take some quick strides when you suddenly hear a loud crack ringing through the night. You look down and realise you stepped on a bone. Another moment and you hear the rattling and clanging of chainmail from your right. What do you do?`,
[new Choice("Start running down the street to the well", node3), new Choice("Hide in a nearby barrrel", node5), new Choice("Draw your sword and prepare for a fight", node4)]);
const node0 = new StoryNode(
`You get off your horse. Before you, you see the houses of <strong>Troutberk</strong>. The barber-surgeon sent you here to get petals of the local lilies growing around Trouberk's well. It's your father's last chance to cure his disease the barber said. The only problem, this village is touched by the curse of undeath. The gibbous moon threateningly hangs over you casting light down at your destination as if to mock you. The way ahead seems clear, the whole village that silent you could hear a needle drop. What do you intend to do next?`
,[new Choice("Venture ahead, courage is the way!",node1), new Choice("Take a good look around, better safe than sorry!",node2)]);

buttonDiv.innerHTML="";

function startGame() {
    backGroundMusic.play();
    startButtonDiv.innerHTML = "";
    nextNode(node0);
}
