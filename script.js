let money = localStorage.getItem('money') ? parseInt(localStorage.getItem('money')) : 1000;
let games = localStorage.getItem('games') ? parseInt(localStorage.getItem('games')) : 0;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 1000;
let featureCost = localStorage.getItem('featureCost') ? parseInt(localStorage.getItem('featureCost')) : 200;
let gameValue = localStorage.getItem('gameValue') ? parseInt(localStorage.getItem('gameValue')) : 800;
let upgradeLevel = localStorage.getItem('upgradeLevel') ? parseInt(localStorage.getItem('upgradeLevel')) : 1;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('money').textContent = money;
    document.getElementById('games').textContent = games;
    document.getElementById('upgrade-cost').textContent = upgradeCost;
    document.getElementById('feature-cost').textContent = featureCost;
    document.getElementById('upgrade-level').textContent = upgradeLevel;

    updateButtonStates();

    document.getElementById('develop').addEventListener('click', () => {
        if (money >= 500) {
            money -= 500;
            games++;
            gameValue += 200; // Augmente la valeur du jeu chaque fois qu'un jeu est développé
            document.getElementById('money').textContent = money;
            document.getElementById('games').textContent = games;
            localStorage.setItem('money', money);
            localStorage.setItem('games', games);
            localStorage.setItem('gameValue', gameValue);
            updateButtonStates();
        } else {
            alert("Pas assez d'argent pour développer un jeu !");
        }
    });

    document.getElementById('sell').addEventListener('click', () => {
        if (games > 0) {
            games--;
            money += gameValue; // Utilise la valeur actuelle du jeu
            document.getElementById('money').textContent = money;
            document.getElementById('games').textContent = games;
            localStorage.setItem('money', money);
            localStorage.setItem('games', games);
            updateButtonStates();
        } else {
            alert("Pas de jeux à vendre !");
        }
    });

    document.getElementById('upgrade').addEventListener('click', () => {
        if (money >= upgradeCost) {
            money -= upgradeCost;
            upgradeLevel++; // Augmente le niveau d'amélioration
            upgradeCost += 500; // Augmente le coût de l'amélioration à chaque fois
            document.getElementById('money').textContent = money;
            document.getElementById('upgrade-cost').textContent = upgradeCost;
            document.getElementById('upgrade-level').textContent = upgradeLevel;
            localStorage.setItem('money', money);
            localStorage.setItem('upgradeCost', upgradeCost);
            localStorage.setItem('upgradeLevel', upgradeLevel);
            alert("Studio amélioré au niveau " + upgradeLevel + " !");
            updateButtonStates();
        } else {
            alert("Pas assez d'argent pour améliorer le studio !");
        }
    });

    document.getElementById('market').addEventListener('click', () => {
        if (money >= 300) {
            money -= 300;
            money += 1000;
            document.getElementById('money').textContent = money;
            localStorage.setItem('money', money);
            alert("Campagne marketing réussie !");
            updateButtonStates();
        } else {
            alert("Pas assez d'argent pour lancer une campagne marketing !");
        }
    });

    document.getElementById('add-feature').addEventListener('click', () => {
        if (money >= featureCost) {
            money -= featureCost;
            featureCost += 100; // Augmente le coût pour ajouter une fonctionnalité à chaque fois
            gameValue += 300; // Augmente la valeur du jeu
            document.getElementById('money').textContent = money;
            document.getElementById('feature-cost').textContent = featureCost;
            localStorage.setItem('money', money);
            localStorage.setItem('featureCost', featureCost);
            localStorage.setItem('gameValue', gameValue);
            alert("Une nouvelle fonctionnalité a été ajoutée à vos jeux !");
            updateButtonStates();
        } else {
            alert("Pas assez d'argent pour ajouter une fonctionnalité !");
        }
    });

    document.getElementById('reset-game').addEventListener('click', () => {
        money = 1000;
        games = 0;
        upgradeCost = 1000;
        featureCost = 200;
        gameValue = 800;
        upgradeLevel = 1;
        document.getElementById('money').textContent = money;
        document.getElementById('games').textContent = games;
        document.getElementById('upgrade-cost').textContent = upgradeCost;
        document.getElementById('feature-cost').textContent = featureCost;
        document.getElementById('upgrade-level').textContent = upgradeLevel;
        localStorage.setItem('money', money);
        localStorage.setItem('games', games);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('featureCost', featureCost);
        localStorage.setItem('gameValue', gameValue);
        localStorage.setItem('upgradeLevel', upgradeLevel);
        alert("Le jeu a été réinitialisé !");
        updateButtonStates();
    });

    function updateButtonStates() {
        document.getElementById('develop').disabled = money < 500;
        document.getElementById('sell').disabled = games <= 0;
        document.getElementById('upgrade').disabled = money < upgradeCost;
        document.getElementById('market').disabled = money < 300;
        document.getElementById('add-feature').disabled = money < featureCost || games <= 0;
    }
});
