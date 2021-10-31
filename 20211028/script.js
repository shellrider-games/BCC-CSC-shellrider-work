function changeBackground(imgPath) {
  if(!imgPath instanceof String) { return; }
  const background = document.getElementById("background");
  background.style.backgroundImage = `url(${imgPath})`;
}

function runGame() {
  changeBackground('./ressources/images/B_cabin.jpg');
  if (
    confirm(
      "You come across a strange house in the woods. Do you want to go in?"
    )
  ) {
    const porridgeChoice = +prompt(
      `You walk into the cabin and see a lovely kitchen.
On the table are three bowls of porridge.
Do you try 1 (hot), 2 (cold) or 3 (just right)?`
    );
    switch (porridgeChoice) {
      case 1:
        alert(
          `The porridge is too hot! You burned your mouth!
FIN`
        );
        break;
      case 2:
        alert(
          `The porridge is too cold!
FIN`
        );
        break;
      case 3:
        alert(`The porridge is just right!`);

        const chairChoice = prompt(
          `You walk into the living room and see three chairs.
A BIG one, MEDIUM one and SMALL one.
Which one do you choose`
        ).toLowerCase();
        if (chairChoice === "big") {
          alert(
            `The chair is way to small.
FIN`
          );
        } else if (chairChoice === "small") {
          alert(
            `The chair is way to small.
FIN`
          );
        } else {
          alert(`The chair is just right...`);

          const bedChoice = prompt(
            `You walk into the next room over and see three beds, a (BIG) one, a (MEDIUM) one and a (SMALL) one.
Which one do you choose?`
          ).toLowerCase();

          if (bedChoice === "big") {
            alert(
              `The bed is way to small.
FIN`
            );
          } else if (bedChoice === "small") {
            alert(
              `The bed is way to small.
FIN`
            );
          } else {
            alert("It's just right and you fall into a deep slumber.");
            alert("You wake up to see three bears looking at you.");
            alert("You are shocked and get up in order to run away");
            alert(
              "However, you can not run fast enough.\n\nYou have been eaten!\n\n(Dark Souls screen blends in and music plays)"
            );
          }
        }
        break;
      default:
        break;
    }
  } else {
    alert(
      `You don't go into the cabin. Well... That's all Folks.
FIN`
    );
  }
}