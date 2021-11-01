const textDiv = document.getElementById("textContainer");
const buttonDiv = document.getElementById("choiceButtons");
const imageElement = document.getElementById("backgroundImageElement");
const backButton = document.getElementById("backBtn");

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
    button.onclick = function () {if (choice.node) {renderNode(choice.node)}};
    buttonDiv.appendChild(button);
}

function renderNode(node) {
    textDiv.innerHTML = `<p>${node.text}</p>`;
    buttonDiv.innerHTML = ``;
    for (const choice of node.choices) {
        appendChoice(choice);
    }
    buttonDiv.appendChild(backButton);
    imageElement.setAttribute("src",node.imagePath);
}

const node2 = new StoryNode(`You try to listen for any danger but rocks fall and everybody dies!`);
const node1 = new StoryNode(`You are super couragous, you die!`);
const node0 = new StoryNode(
`You get off your horse. Before you, you see the houses of <strong>Troutberk</strong>. The barber-surgeon sent you here to get petals of the local lilies growing around Trouberk's well. It's your father's last chance to cure his disease the barber said. The only problem, this village is touched by the curse of undeath. The gibbous moon threateningly hangs over you casting light down at your destination as if to mock you. The way ahead seems clear, the whole village that silent you could hear a needle drop. What do you intend to do next?`
,[new Choice("Venture ahead, courage is the way!",node1), new Choice("Take a good look around, better safe than sorry!",node2)]);
renderNode(node0);