let loreData;

fetch('lore-data.json')
    .then(res => res.json())
    .then(data => loreData = data);

// Helper to pick random
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Generate lore function 
function generateLore({ race, charClass, background, personality, tragedy }) {
    const r = race || pickRandom(Object.keys(loreData.races));
    const c = charClass || pickRandom(Object.keys(loreData.classes));
    const b = background || pickRandom(Object.keys(loreData.backgrounds));
    const p = personality || pickRandom(Object.keys(loreData.personalities));
    const t = tragedy || 'balanced';

    const raceLine = pickRandom(loreData.races[r].flavor);
    const classLine = pickRandom(loreData.classes[c].flavor);
    const backgroundLine = pickRandom(loreData.backgrounds[b]);
    const personalityLine = pickRandom(loreData.personalities[p]);
    const tragedyLine = pickRandom(loreData.tragedy[t]);
    const goalLine = pickRandom(loreData.goals);

    return `A ${r} ${c} who ${raceLine}. ${backgroundLine}, they ${personalityLine}, having ${tragedyLine}. Now they journey ${goalLine}`;
}

// Once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lore-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh

        if (!loreData) {
            result.textContent = "Loading lore data...";
            return;
        }

        const formData = new FormData(form);

        const lore = generateLore({
            race: formData.get('race'),
            charClass: formData.get('charClass'),
            personality: formData.get('personality'),
            tragedy: formData.get('tragedy'),
        });

        result.textContent = lore;
    });
});