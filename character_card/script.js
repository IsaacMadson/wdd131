const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    attacked() {
        if (this.health >= 20) {
            this.health -= 20;
            updateLog(`${this.name} was attacked and lost 20 health! Current health: ${this.health}`);
        } else {
            this.health = 0;
            updateLog(`${this.name} has died!`);
            alert('Character Died');

        }
        updateCharacterDisplay(); 
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
        updateLog(`${this.name} leveled up to Level ${this.level}! Health increased by 20. Current health: ${this.health}`);
        updateCharacterDisplay(); 
    }
};
const characterImage = document.querySelector('.image');
const characterName = document.querySelector('.name');
const characterClass = document.getElementById('class');
const characterLevel = document.getElementById('level');
const characterHealth = document.getElementById('health');
const attackedButton = document.getElementById('attacked');
const levelUpButton = document.getElementById('levelup');
const logElement = document.getElementById('log');
function updateCharacterDisplay() {
    characterImage.src = character.image;
    characterImage.alt = `${character.name} the ${character.class}`; 
    characterName.textContent = character.name;
    characterClass.textContent = character.class;
    characterLevel.textContent = character.level;
    characterHealth.textContent = character.health;
}
function updateLog(message) {
    logElement.textContent = message;
}
attackedButton.addEventListener('click', () => {
    character.attacked();
});
levelUpButton.addEventListener('click', () => {
    character.levelUp();
});
updateCharacterDisplay();
updateLog("Welcome to Snortleblat's character card!");