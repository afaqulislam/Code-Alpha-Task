let currentInput = '0';
let expression = '';
let history = [];
let historyOpen = false;

const display = document.getElementById('display');
const expressionEl = document.getElementById('expression');
const historyList = document.getElementById('historyList');
const historyPanel = document.getElementById('historyPanel');

function updateDisplay() {
    display.textContent = currentInput;
    expressionEl.textContent = expression;
    display.classList.toggle('shrink', currentInput.length > 12);
}

function appendChar(char) {
    if (currentInput === 'Error') {
        currentInput = '';
        expression = '';
    }
    if (currentInput === '0' && char !== '.' && char !== '(' && char !== ')') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    expression = currentInput;
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    expression = '';
    display.classList.remove('error');
    updateDisplay();
}

function deleteLast() {
    if (currentInput === 'Error') { clearAll(); return; }
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '' || currentInput === '-') currentInput = '0';
    expression = currentInput;
    updateDisplay();
}

function toggleSign() {
    if (currentInput === 'Error' || currentInput === '0') return;
    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
    expression = currentInput;
    updateDisplay();
}

function percentage() {
    let value = parseFloat(currentInput);
    if (isNaN(value)) return;
    let result = value / 100;
    addToHistory(value + '%', result);
    currentInput = String(result);
    expression = currentInput;
    updateDisplay();
}

function infixToPostfix(tokens) {
    let output = [], operators = [];
    let p = { '+': 1, '-': 1, '*': 2, '/': 2 };
    for (let t of tokens) {
        if (!isNaN(t)) output.push(parseFloat(t));
        else if (t === '(') operators.push(t);
        else if (t === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') output.push(operators.pop());
            operators.pop();
        } else {
            while (operators.length && operators[operators.length - 1] !== '(' && p[operators[operators.length - 1]] >= p[t])
                output.push(operators.pop());
            operators.push(t);
        }
    }
    while (operators.length) output.push(operators.pop());
    return output;
}

function evaluatePostfix(postfix) {
    let stack = [];
    for (let t of postfix) {
        if (typeof t === 'number') { stack.push(t); continue; }
        let b = stack.pop(), a = stack.pop();
        if (a === undefined || b === undefined) return null;
        if (t === '+') stack.push(a + b);
        else if (t === '-') stack.push(a - b);
        else if (t === '*') stack.push(a * b);
        else if (t === '/') stack.push(b === 0 ? null : a / b);
    }
    return stack[0];
}

function safeCalculate(expr) {
    try {
        let tokens = expr.match(/(\d+\.?\d*|[+\-*/()])/g);
        if (!tokens) return null;
        let postfix = infixToPostfix(tokens);
        return evaluatePostfix(postfix);
    } catch { return null; }
}

function calculate() {
    if (currentInput === 'Error') return;
    let result = safeCalculate(currentInput);
    if (result === null || result === undefined || isNaN(result) || !isFinite(result)) {
        currentInput = 'Error';
        display.classList.add('error');
        updateDisplay();
        return;
    }
    let rounded = parseFloat(result.toFixed(10));
    let displayExpr = currentInput.replace(/\*/g, 'x').replace(/\//g, '÷');
    addToHistory(displayExpr, rounded);
    currentInput = String(rounded);
    expression = currentInput;
    display.classList.remove('error');
    updateDisplay();
}

function addToHistory(expr, result) {
    history.unshift({ expr, result });
    if (history.length > 20) history.pop();
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                <p>No calculations yet</p>
            </div>`;
        return;
    }
    history.forEach((item, i) => {
        let div = document.createElement('div');
        div.className = 'history-item';
        div.style.animationDelay = (i * 0.05) + 's';
        div.innerHTML = `
            <div class="history-item-expr">${item.expr}</div>
            <div class="history-item-result">= ${item.result}</div>`;
        div.onclick = () => {
            currentInput = String(item.result);
            expression = currentInput;
            display.classList.remove('error');
            updateDisplay();
        };
        historyList.appendChild(div);
    });
}

function clearHistory() {
    history = [];
    renderHistory();
}

function toggleHistory() {
    historyOpen = !historyOpen;
    historyPanel.classList.toggle('open', historyOpen);
    document.getElementById('historyToggle').classList.toggle('active', historyOpen);
    if (historyOpen) renderHistory();
}

function toggleTheme() {
    let next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('calc-theme', next);
}

function loadTheme() {
    let saved = localStorage.getItem('calc-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
}

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendChar(e.key);
    else if (e.key === '.') appendChar('.');
    else if (e.key === '+') appendChar('+');
    else if (e.key === '-') appendChar('-');
    else if (e.key === '*') appendChar('*');
    else if (e.key === '/') appendChar('/');
    else if (e.key === '%') percentage();
    else if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); calculate(); }
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === 'Escape') clearAll();
    else if (e.key === 'h' || e.key === 'H') toggleHistory();
    else if (e.key === 'd' || e.key === 'D') toggleTheme();
});

loadTheme();
updateDisplay();
