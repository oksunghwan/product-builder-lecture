const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (html.dataset.theme === 'dark') {
        html.dataset.theme = 'light';
    } else {
        html.dataset.theme = 'dark';
    }
});

function generateOneLottoSet() {
    const numbers = [];
    while(numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if(!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function generateLotto() {
    const lottoSetsDiv = document.getElementById('lottoSets');
    lottoSetsDiv.innerHTML = '';
    
    for(let i = 1; i <= 5; i++) {
        const setDiv = document.createElement('div');
        setDiv.className = 'lotto-set';
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'set-label';
        labelDiv.textContent = `Set ${i}`;
        setDiv.appendChild(labelDiv);
        
        const numbersDiv = document.createElement('div');
        numbersDiv.className = 'numbers';
        
        const numbers = generateOneLottoSet();
        
        numbers.forEach(num => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'number';
            numberDiv.textContent = num;
            numbersDiv.appendChild(numberDiv);
        });
        
        setDiv.appendChild(numbersDiv);
        lottoSetsDiv.appendChild(setDiv);
    }
}

document.getElementById('generate').addEventListener('click', generateLotto);
