const botDoorPath = './images/robot.svg';
const beachDoorPath = './images/beach.svg';
const spaceDoorPath = './images/space.svg';
const closedDoorPath = './images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Access door elements from the HTML
const doorImage1 = document.getElementById(`door1`);
const doorImage2 = document.getElementById(`door2`);
const doorImage3 = document.getElementById(`door3`);

const startButton = document.getElementById(`start`);

// Define game logic functions

// Check if a door has been clicked
function isClicked(door) {
    return (door.getAttribute('src') === closedDoorPath);
}

// Check if a door contains a bot
function isBot(door) {
    return (door.getAttribute('src') === botDoorPath);
}

// Handle game over scenario
function gameOver(status) {
    if (status === 'win') {
        startButton.innerHTML = 'You win!!! yipeee (: ';
    } else {
        startButton.innerHTML = 'You loose!!! nuuu ): ';
    }
    currentlyPlaying = false;
}

// Play the door
function playDoor(door) {
    numClosedDoors--; // Decrement the number of closed doors
    if (numClosedDoors === 0) {
        gameOver('win'); // If all doors are open, player wins
    } else if (isBot(door)) {
        gameOver(); // If bot is behind the door, player loses
    }
}

// Generate a random chore door (door with bot)
function randomChoreDoorGenerator() {
    const choreDoor = Math.floor(Math.random() * numClosedDoors); // Generate random index for chore door
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor1 = beachDoorPath;
    }
}

// Add onclick event handlers to doors and start button

// Start a new game round
function startRound() {
    // Reset all door images to closed doors
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;

    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck! (; '; // Update start button text
    randomChoreDoorGenerator(); // Generate a new chore door
}

// Event handlers for door clicks

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
        doorImage1.src = openDoor1; // Open the clicked door
        playDoor(doorImage1); // Handle the door interaction
    }
}

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
        doorImage2.src = openDoor2; // Open the clicked door
        playDoor(doorImage2); // Handle the door interaction
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
        doorImage3.src = openDoor3; // Open the clicked door
        playDoor(doorImage3); // Handle the door interaction
    }
}

// Event handler for start button click
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound(); // Start a new game round if game is not currently playing
    }
}

startRound();
