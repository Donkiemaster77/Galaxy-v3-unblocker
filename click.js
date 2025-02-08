let score = 0;
let clickMultiplier = 1; // Initial multiplier for clicks
let upgrade1Cost = 1;
let upgrade2Cost = 100;
let upgrade3Cost = 10000;
let upgrade4Cost = 1000000;

const scoreElement = document.getElementById('score');
const clickerButton = document.getElementById('clicker-btn');
const buyUpgrade1Button = document.getElementById('buy-upgrade1');
const buyUpgrade2Button = document.getElementById('buy-upgrade2');
const buyUpgrade3Button = document.getElementById('buy-upgrade3');
const buyUpgrade4Button = document.getElementById('buy-upgrade4');
const upgrade1CostElement = document.getElementById('upgrade1-cost');
const upgrade2CostElement = document.getElementById('upgrade2-cost');
const upgrade3CostElement = document.getElementById('upgrade3-cost');
const upgrade4CostElement = document.getElementById('upgrade4-cost');

// Update the score display
function updateScore() {
    scoreElement.textContent = score;
}

// Handle the clicking logic
clickerButton.addEventListener('click', () => {
    score += clickMultiplier;  // Increase score based on the current click multiplier
    updateScore();
});

// Handle Upgrade 1 purchase
buyUpgrade1Button.addEventListener('click', () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        clickMultiplier += 1;  // Increase the click multiplier by 1
        upgrade1Cost = Math.floor(upgrade1Cost * 1.5); // Increase the cost of Upgrade 1
        upgrade1CostElement.textContent = upgrade1Cost;
        updateScore();
    }
});

// Handle Upgrade 2 purchase
buyUpgrade2Button.addEventListener('click', () => {
    if (score >= upgrade2Cost) {
        score -= upgrade2Cost;
        clickMultiplier += 10;  // Increase the click multiplier by 10
        upgrade2Cost = Math.floor(upgrade2Cost * 1.5); // Increase the cost of Upgrade 2
        upgrade2CostElement.textContent = upgrade2Cost;
        updateScore();
    }
});

// Handle Upgrade 3 purchase
buyUpgrade3Button.addEventListener('click', () => {
    if (score >= upgrade3Cost) {
        score -= upgrade3Cost;
        clickMultiplier += 100;  // Increase the click multiplier by 100
        upgrade3Cost = Math.floor(upgrade3Cost * 1.5); // Increase the cost of Upgrade 3
        upgrade3CostElement.textContent = upgrade3Cost;
        updateScore();
    }
});

// Handle Upgrade 4 purchase
buyUpgrade4Button.addEventListener('click', () => {
    if (score >= upgrade4Cost) {
        score -= upgrade4Cost;
        clickMultiplier += 1000;  // Increase the click multiplier by 1000
        upgrade4Cost = Math.floor(upgrade4Cost * 1.5); // Increase the cost of Upgrade 4
        upgrade4CostElement.textContent = upgrade4Cost;
        updateScore();
    }
});

