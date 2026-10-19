/* ==========================================================
   BANCO DE NÍVEIS (15 Níveis: Fácil, Médio e Difícil)
   ========================================================== */
var LEVELS = [
    {
        id: 1, difficulty: "Fácil",
        varsText: "a = 5",
        initialVars: { a: 5 },
        slots: 2, target: 15,
        cards: [
            { id: "c1", lines: ["c = a + 5"], apply: function(v) { v.c = v.a + 5; } },
            { id: "c2", lines: ["c = c + a"], apply: function(v) { if (v.c === undefined) throw "A variável 'c' foi usada antes de receber um valor inicial!"; v.c = v.c + v.a; } }
        ]
    },
    {
        id: 2, difficulty: "Fácil",
        varsText: "a = 10 e b = 4",
        initialVars: { a: 10, b: 4 },
        slots: 2, target: 26,
        cards: [
            { id: "c1", lines: ["c = a * 2"], apply: function(v) { v.c = v.a * 2; } },
            { id: "c2", lines: ["c = c + b + 2"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c + v.b + 2; } },
            { id: "c3", lines: ["c = a - b"], apply: function(v) { v.c = v.a - v.b; } }
        ]
    },
    {
        id: 3, difficulty: "Fácil",
        varsText: "a = 2 e b = 3",
        initialVars: { a: 2, b: 3 },
        slots: 3, target: 16,
        cards: [
            { id: "c1", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } },
            { id: "c2", lines: ["c = c + b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c + v.b; } },
            { id: "c3", lines: ["c = c * a"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c * v.a; } },
            { id: "c4", lines: ["c = 10"], apply: function(v) { v.c = 10; } }
        ]
    },
    {
        id: 4, difficulty: "Fácil",
        varsText: "a = 20 e b = 3",
        initialVars: { a: 20, b: 3 },
        slots: 2, target: 2,
        cards: [
            { id: "c1", lines: ["# Divisão inteira", "c = a // b"], apply: function(v) { v.c = Math.floor(v.a / v.b); } },
            { id: "c2", lines: ["# Resto da divisão", "c = c % 4"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c % 4; } },
            { id: "c3", lines: ["c = a - b"], apply: function(v) { v.c = v.a - v.b; } },
            { id: "c4", lines: ["c = c * 2"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c * 2; } }
        ]
    },
    {
        id: 5, difficulty: "Fácil",
        varsText: "a = 7 e b = 3",
        initialVars: { a: 7, b: 3 },
        slots: 3, target: 20,
        cards: [
            { id: "c1", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } },
            { id: "c2", lines: ["c = 9", "c = a + b + c"], apply: function(v) { v.c = 9; v.c = v.a + v.b + v.c; } },
            { id: "c3", lines: ["c = c*5*8"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = v.c * 5 * 8; } },
            { id: "c4", lines: ["c = c ** (1/2)"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = Math.pow(v.c, 0.5); } }
        ]
    },
    {
        id: 6, difficulty: "Médio",
        varsText: "a = 6 e b = 5",
        initialVars: { a: 6, b: 5 },
        slots: 2, target: 61,
        cards: [
            { id: "c1", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } },
            { id: "c2", lines: ["if c > 10:", "    c = c + 50"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; if (v.c > 10) v.c += 50; } },
            { id: "c3", lines: ["c = a"], apply: function(v) { v.c = v.a; } }
        ]
    },
    {
        id: 7, difficulty: "Médio",
        varsText: "a = 4 e b = 8",
        initialVars: { a: 4, b: 8 },
        slots: 2, target: 3,
        cards: [
            { id: "c1", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } },
            { id: "c2", lines: ["c = b - a"], apply: function(v) { v.c = v.b - v.a; } },
            { id: "c3", lines: ["if c >= 10:", "    c = c // 4", "else:", "    c = c * 10"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = (v.c >= 10) ? Math.floor(v.c / 4) : v.c * 10; } }
        ]
    },
    {
        id: 8, difficulty: "Médio",
        varsText: "a = 7 e b = 2",
        initialVars: { a: 7, b: 2 },
        slots: 3, target: 5,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["c = c + 3"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c += 3; } },
            { id: "c3", lines: ["if c % 2 == 0:", "    c = c // b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; if (v.c % 2 === 0) v.c = Math.floor(v.c / v.b); } },
            { id: "c4", lines: ["c = c * b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c *= v.b; } }
        ]
    },
    {
        id: 9, difficulty: "Médio",
        varsText: "a = 12 e b = 5",
        initialVars: { a: 12, b: 5 },
        slots: 3, target: 100,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["c = c + b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c += v.b; } },
            { id: "c3", lines: ["if c > 15 and b == 5:", "    c = 100", "else:", "    c = 0"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = (v.c > 15 && v.b === 5) ? 100 : 0; } },
            { id: "c4", lines: ["c = c - b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c -= v.b; } }
        ]
    },
    {
        id: 10, difficulty: "Médio",
        varsText: "a = 3 e b = 4",
        initialVars: { a: 3, b: 4 },
        slots: 3, target: 25,
        cards: [
            { id: "c1", lines: ["c = a * b"], apply: function(v) { v.c = v.a * v.b; } },
            { id: "c2", lines: ["if c > 10:", "    c = c - 7"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; if (v.c > 10) v.c -= 7; } },
            { id: "c3", lines: ["c = c ** 2"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c = Math.pow(v.c, 2); } },
            { id: "c4", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } }
        ]
    },
    {
        id: 11, difficulty: "Difícil",
        varsText: "a = 1 e b = 4",
        initialVars: { a: 1, b: 4 },
        slots: 2, target: 13,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["for i in range(3):", "    c = c + b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; for (var i = 0; i < 3; i++) v.c += v.b; } },
            { id: "c3", lines: ["c = b * 2"], apply: function(v) { v.c = v.b * 2; } }
        ]
    },
    {
        id: 12, difficulty: "Difícil",
        varsText: "a = 2",
        initialVars: { a: 2 },
        slots: 2, target: 8,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["for i in range(4):", "    c = c + i"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; for (var i = 0; i < 4; i++) v.c += i; } },
            { id: "c3", lines: ["c = 0"], apply: function(v) { v.c = 0; } }
        ]
    },
    {
        id: 13, difficulty: "Difícil",
        varsText: "a = 3 e b = 2",
        initialVars: { a: 3, b: 2 },
        slots: 3, target: 22,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["while c < 20:", "    c = c * b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; if (v.c <= 0) throw "Loop infinito evitado (c <= 0)!"; while (v.c < 20) v.c *= v.b; } },
            { id: "c3", lines: ["c = c - b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c -= v.b; } },
            { id: "c4", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } }
        ]
    },
    {
        id: 14, difficulty: "Difícil",
        varsText: "a = 0 e b = 5",
        initialVars: { a: 0, b: 5 },
        slots: 2, target: 6,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["for i in range(b):", "    if i % 2 == 0:", "        c = c + i"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; for (var i = 0; i < v.b; i++) { if (i % 2 === 0) v.c += i; } } },
            { id: "c3", lines: ["c = b"], apply: function(v) { v.c = v.b; } }
        ]
    },
    {
        id: 15, difficulty: "Difícil",
        varsText: "a = 2 e b = 3",
        initialVars: { a: 2, b: 3 },
        slots: 4, target: 14,
        cards: [
            { id: "c1", lines: ["c = a"], apply: function(v) { v.c = v.a; } },
            { id: "c2", lines: ["for i in range(b):", "    c = c * 2"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; for (var i = 0; i < v.b; i++) v.c *= 2; } },
            { id: "c3", lines: ["if c > 10:", "    c = c - b"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; if (v.c > 10) v.c -= v.b; } },
            { id: "c4", lines: ["c = c + 1"], apply: function(v) { if (v.c === undefined) throw "Variável 'c' não definida!"; v.c += 1; } },
            { id: "c5", lines: ["c = a + b"], apply: function(v) { v.c = v.a + v.b; } }
        ]
    }
];

/* ==========================================================
   GERADOR DE ÁUDIO SINTETIZADO (Web Audio API)
   ========================================================== */
var Sound = {
    ctx: null,
    musicInterval: null,
    init: function() {
        if (!this.ctx) {
            var AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
    },
    playTone: function(freq, duration, type, vol) {
        if (!window.Game.settings.sfx) return;
        try {
            this.init();
            if (!this.ctx) return;
            var osc = this.ctx.createOscillator();
            var gain = this.ctx.createGain();
            osc.type = type || 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(vol || 0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {}
    },
    click: function() { this.playTone(520, 0.08, 'triangle', 0.1); },
    step: function() { this.playTone(660, 0.14, 'sine', 0.12); },
    win: function() {
        var self = this;
        self.playTone(523.25, 0.12, 'triangle', 0.15);
        setTimeout(function() { self.playTone(659.25, 0.12, 'triangle', 0.15); }, 120);
        setTimeout(function() { self.playTone(783.99, 0.28, 'triangle', 0.18); }, 240);
    },
    error: function() {
        var self = this;
        self.playTone(220, 0.2, 'sawtooth', 0.12);
        setTimeout(function() { self.playTone(180, 0.25, 'sawtooth', 0.12); }, 150);
    },
    toggleMusicLoop: function(active) {
        var self = this;
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
        if (active) {
            var notes = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];
            var idx = 0;
            this.musicInterval = setInterval(function() {
                if (!window.Game.settings.music) return;
                try {
                    self.init();
                    if (!self.ctx) return;
                    var osc = self.ctx.createOscillator();
                    var gain = self.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(notes[idx % notes.length], self.ctx.currentTime);
                    gain.gain.setValueAtTime(0.03, self.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, self.ctx.currentTime + 0.45);
                    osc.connect(gain);
                    gain.connect(self.ctx.destination);
                    osc.start();
                    osc.stop(self.ctx.currentTime + 0.45);
                    idx++;
                } catch (e) {}
            }, 550);
        }
    }
};

/* ==========================================================
   CONTROLADOR PRINCIPAL DO JOGO
   ========================================================== */
window.Game = {
    currentLevelObj: null,
    slotState: [],
    selectedCardId: null,
    draggedCardId: null,
    isRunning: false,
    completedLevels: [],
    levelScores: {},
    elapsedSeconds: 0,
    timerInterval: null,
    failedAttempts: 0,
    settings: {
        sfx: true,
        music: false,
        darkTheme: false,
        unlockAll: false
    },

    init: function() {
        var self = this;
        this.loadStorage();
        this.applySettingsUI();
        this.renderLevelsGrid();

        var handEl = document.getElementById('hand-container');
        if (handEl) {
            handEl.ondragover = function(e) { self.allowDrop(e); };
            handEl.ondrop = function(e) { self.dropToHand(e); };
        }
    },

    loadStorage: function() {
        try {
            var savedCompleted = localStorage.getItem('cartasLogicas_completed');
            if (savedCompleted) this.completedLevels = JSON.parse(savedCompleted);
            var savedScores = localStorage.getItem('cartasLogicas_scores');
            if (savedScores) this.levelScores = JSON.parse(savedScores);
            var savedSettings = localStorage.getItem('cartasLogicas_settings');
            if (savedSettings) {
                var parsed = JSON.parse(savedSettings);
                for (var k in parsed) this.settings[k] = parsed[k];
            }
        } catch (e) {}
    },

    saveStorage: function() {
        try {
            localStorage.setItem('cartasLogicas_completed', JSON.stringify(this.completedLevels));
            localStorage.setItem('cartasLogicas_scores', JSON.stringify(this.levelScores));
            localStorage.setItem('cartasLogicas_settings', JSON.stringify(this.settings));
        } catch (e) {}
    },

    getTotalScore: function() {
        var total = 0;
        for (var k in this.levelScores) {
            if (this.levelScores.hasOwnProperty(k)) {
                total += Number(this.levelScores[k]) || 0;
            }
        }
        return total;
    },

    formatTime: function(sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        var mStr = m < 10 ? "0" + m : "" + m;
        var sStr = s < 10 ? "0" + s : "" + s;
        return mStr + ":" + sStr;
    },

    startTimer: function() {
        var self = this;
        this.stopTimer();
        this.timerInterval = setInterval(function() {
            self.elapsedSeconds++;
            var el = document.getElementById('game-timer');
            if (el) el.textContent = "Tempo: " + self.formatTime(self.elapsedSeconds);
        }, 1000);
    },

    stopTimer: function() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    calculateLevelScore: function(lvl) {
        var base = lvl.difficulty === "Fácil" ? 500 : (lvl.difficulty === "Médio" ? 1000 : 1500);
        var decayPerSec = lvl.difficulty === "Fácil" ? 10 : (lvl.difficulty === "Médio" ? 7 : 5);
        var speedBonus = Math.max(0, 500 - (this.elapsedSeconds * decayPerSec));
        var penalty = this.failedAttempts * 100;
        return Math.max(100, base + speedBonus - penalty);
    },

    showScreen: function(screenId) {
        Sound.click();
        this.hideFeedback();
        if (screenId !== 'screen-game') {
            this.stopTimer();
        }
        var screens = document.querySelectorAll('.screen');
        for (var i = 0; i < screens.length; i++) {
            screens[i].classList.remove('active');
        }
        var target = document.getElementById(screenId);
        if (target) target.classList.add('active');
        if (screenId === 'screen-levels') {
            this.renderLevelsGrid();
        }
        window.scrollTo(0, 0);
    },

    isLevelUnlocked: function(levelId) {
        if (this.settings.unlockAll || levelId === 1) return true;
        return this.completedLevels.indexOf(levelId - 1) !== -1 || this.completedLevels.indexOf(levelId) !== -1;
    },

    renderLevelsGrid: function() {
        var self = this;
        var container = document.getElementById('levels-grid');
        if (!container) return;
        container.innerHTML = '';

        var totalBanner = document.getElementById('total-score-banner');
        if (totalBanner) {
            totalBanner.textContent = "Pontos: " + this.getTotalScore();
        }

        var rows = [
            { label: 'Fácil', range: [1, 2, 3, 4, 5] },
            { label: 'Médio', range: [6, 7, 8, 9, 10] },
            { label: 'Difícil', range: [11, 12, 13, 14, 15] }
        ];

        for (var r = 0; r < rows.length; r++) {
            var row = rows[r];
            var rowEl = document.createElement('div');
            rowEl.className = 'level-row';

            for (var i = 0; i < row.range.length; i++) {
                (function(lvlId) {
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'level-btn';

                    var numSpan = document.createElement('span');
                    numSpan.textContent = lvlId;
                    btn.appendChild(numSpan);

                    var completed = self.completedLevels.indexOf(lvlId) !== -1;
                    var unlocked = self.isLevelUnlocked(lvlId);

                    if (completed) {
                        btn.classList.add('completed');
                        if (self.levelScores[lvlId]) {
                            var scoreTag = document.createElement('span');
                            scoreTag.className = 'level-score-tag';
                            scoreTag.textContent = self.levelScores[lvlId] + ' pts';
                            btn.appendChild(scoreTag);
                        }
                    }

                    if (!unlocked) {
                        btn.classList.add('locked');
                        btn.title = "Complete o nível anterior para desbloquear";
                        var svgNS = "http://www.w3.org/2000/svg";
                        var lockSvg = document.createElementNS(svgNS, "svg");
                        lockSvg.setAttribute("viewBox", "0 0 24 24");
                        lockSvg.setAttribute("class", "lock-svg");
                        var path = document.createElementNS(svgNS, "path");
                        path.setAttribute("d", "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z");
                        lockSvg.appendChild(path);
                        btn.appendChild(lockSvg);
                    } else {
                        btn.onclick = function() { self.startLevel(lvlId); };
                    }

                    rowEl.appendChild(btn);
                })(row.range[i]);
            }

            var labelEl = document.createElement('div');
            labelEl.className = 'difficulty-label';
            labelEl.textContent = row.label;
            rowEl.appendChild(labelEl);

            container.appendChild(rowEl);
        }
    },

    findLevel: function(levelId) {
        for (var i = 0; i < LEVELS.length; i++) {
            if (LEVELS[i].id === levelId) return LEVELS[i];
        }
        return null;
    },

    findCard: function(lvl, cardId) {
        for (var i = 0; i < lvl.cards.length; i++) {
            if (lvl.cards[i].id === cardId) return lvl.cards[i];
        }
        return null;
    },

    startLevel: function(levelId) {
        var lvl = this.findLevel(levelId);
        if (!lvl) return;

        this.currentLevelObj = lvl;
        this.slotState = [];
        for (var i = 0; i < lvl.slots; i++) this.slotState.push(null);
        this.selectedCardId = null;
        this.isRunning = false;
        this.elapsedSeconds = 0;
        this.failedAttempts = 0;

        document.getElementById('game-level-indicator').textContent = "Nível " + lvl.id + " - " + lvl.difficulty;
        document.getElementById('game-timer').textContent = "Tempo: 00:00";
        var best = this.levelScores[lvl.id] || 0;
        document.getElementById('game-best-score').textContent = "Recorde: " + best + " pts";

        document.getElementById('game-prompt').textContent =
            "Sabendo que " + lvl.varsText + ", selecione as cartas para os locais corretos para chegar a resposta.";
        document.getElementById('target-output').textContent = "R: " + lvl.target;
        document.getElementById('actual-output').textContent = "Esperado: " + lvl.target;
        document.getElementById('actual-output').style.color = '#94a3b8';

        this.hideFeedback();
        this.renderBoard();
        this.showScreen('screen-game');
        this.startTimer();
    },

    renderBoard: function() {
        var self = this;
        var slotsContainer = document.getElementById('slots-container');
        var handContainer = document.getElementById('hand-container');
        slotsContainer.innerHTML = '';
        handContainer.innerHTML = '';

        var lvl = this.currentLevelObj;

        for (var idx = 0; idx < this.slotState.length; idx++) {
            (function(slotIdx) {
                var cardId = self.slotState[slotIdx];
                var slotEl = document.createElement('div');
                slotEl.className = 'card-slot';
                slotEl.id = 'slot-' + slotIdx;
                if (self.selectedCardId && !cardId) {
                    slotEl.classList.add('highlight-target');
                }

                var numTag = document.createElement('span');
                numTag.className = 'slot-number';
                numTag.textContent = '#' + (slotIdx + 1);
                slotEl.appendChild(numTag);

                slotEl.onclick = function() { self.handleSlotClick(slotIdx); };
                slotEl.ondragover = function(e) {
                    e.preventDefault();
                    slotEl.classList.add('drag-over');
                };
                slotEl.ondragleave = function() { slotEl.classList.remove('drag-over'); };
                slotEl.ondrop = function(e) {
                    e.preventDefault();
                    slotEl.classList.remove('drag-over');
                    self.dropToSlot(slotIdx);
                };

                if (cardId) {
                    var cardObj = self.findCard(lvl, cardId);
                    if (cardObj) {
                        var cardEl = self.createCardElement(cardObj, true);
                        slotEl.appendChild(cardEl);
                    }
                }

                slotsContainer.appendChild(slotEl);

                if (slotIdx < self.slotState.length - 1) {
                    var arrow = document.createElement('span');
                    arrow.className = 'flow-symbol';
                    arrow.textContent = '→';
                    slotsContainer.appendChild(arrow);
                }
            })(idx);
        }

        for (var c = 0; c < lvl.cards.length; c++) {
            var cardObj = lvl.cards[c];
            if (this.slotState.indexOf(cardObj.id) === -1) {
                var cardEl = this.createCardElement(cardObj, false);
                handContainer.appendChild(cardEl);
            }
        }
    },

    createCardElement: function(cardObj, inSlot) {
        var self = this;
        var el = document.createElement('div');
        el.className = 'code-card';
        if (inSlot) el.classList.add('in-slot');
        if (this.selectedCardId === cardObj.id) el.classList.add('selected');
        el.textContent = cardObj.lines.join(String.fromCharCode(10));
        el.draggable = true;

        el.ondragstart = function() {
            if (self.isRunning) return;
            self.draggedCardId = cardObj.id;
        };

        el.onclick = function(e) {
            e.stopPropagation();
            if (self.isRunning) return;
            Sound.click();
            self.clearStepVisuals();

            if (inSlot) {
                var slotIdx = self.slotState.indexOf(cardObj.id);
                if (slotIdx !== -1) self.slotState[slotIdx] = null;
                self.selectedCardId = null;
                self.renderBoard();
                return;
            }

            if (self.selectedCardId === cardObj.id) {
                self.selectedCardId = null;
            } else {
                self.selectedCardId = cardObj.id;
            }
            self.renderBoard();
        };

        return el;
    },

    handleSlotClick: function(slotIdx) {
        if (this.isRunning) return;
        this.clearStepVisuals();

        if (this.selectedCardId) {
            Sound.click();
            var prevSlot = this.slotState.indexOf(this.selectedCardId);
            if (prevSlot !== -1) this.slotState[prevSlot] = null;

            this.slotState[slotIdx] = this.selectedCardId;
            this.selectedCardId = null;
            this.renderBoard();
        } else if (this.slotState[slotIdx]) {
            Sound.click();
            this.slotState[slotIdx] = null;
            this.renderBoard();
        }
    },

    allowDrop: function(e) {
        e.preventDefault();
    },

    dropToSlot: function(slotIdx) {
        if (this.isRunning || !this.draggedCardId) return;
        Sound.click();
        this.clearStepVisuals();

        var prevSlot = this.slotState.indexOf(this.draggedCardId);
        if (prevSlot !== -1) this.slotState[prevSlot] = null;

        this.slotState[slotIdx] = this.draggedCardId;
        this.draggedCardId = null;
        this.selectedCardId = null;
        this.renderBoard();
    },

    dropToHand: function(e) {
        e.preventDefault();
        if (this.isRunning || !this.draggedCardId) return;
        var prevSlot = this.slotState.indexOf(this.draggedCardId);
        if (prevSlot !== -1) {
            Sound.click();
            this.slotState[prevSlot] = null;
            this.draggedCardId = null;
            this.renderBoard();
        }
    },

    clearSlots: function() {
        if (this.isRunning) return;
        Sound.click();
        for (var i = 0; i < this.slotState.length; i++) this.slotState[i] = null;
        this.selectedCardId = null;
        this.clearStepVisuals();
        this.renderBoard();
    },

    clearStepVisuals: function() {
        var bubbles = document.querySelectorAll('.step-bubble');
        for (var i = 0; i < bubbles.length; i++) bubbles[i].remove();
        var slots = document.querySelectorAll('.card-slot');
        for (var j = 0; j < slots.length; j++) {
            slots[j].classList.remove('active-step', 'error-step');
        }
        this.hideFeedback();
    },

    hideFeedback: function() {
        var bar = document.getElementById('feedback-bar');
        if (bar) bar.className = 'feedback-bar';
        var winModal = document.getElementById('win-modal');
        if (winModal) winModal.classList.remove('active');
    },

    showWinModal: function(earnedScore) {
        var winModal = document.getElementById('win-modal');
        var heading = document.getElementById('win-modal-heading');
        var timeStat = document.getElementById('win-stat-time');
        var scoreStat = document.getElementById('win-stat-score');
        var nextBtn = document.getElementById('btn-next-level');

        var isLastLevel = this.currentLevelObj.id >= LEVELS.length;
        if (isLastLevel) {
            heading.innerHTML = "Sucesso!<br>Todos os níveis concluídos!";
            nextBtn.style.display = 'none';
        } else {
            heading.innerHTML = "Sucesso!<br>Avançar para o próximo nível?";
            nextBtn.style.display = 'inline-flex';
        }

        timeStat.textContent = "Tempo: " + this.formatTime(this.elapsedSeconds);
        scoreStat.textContent = "Pontos: +" + earnedScore;

        winModal.classList.add('active');
    },

    showErrorFeedback: function(message) {
        var bar = document.getElementById('feedback-bar');
        var txt = document.getElementById('feedback-text');
        bar.className = 'feedback-bar error';
        txt.textContent = message;
    },

    runCode: function() {
        var self = this;
        if (this.isRunning) return;
        this.clearStepVisuals();

        for (var s = 0; s < this.slotState.length; s++) {
            if (this.slotState[s] === null) {
                Sound.error();
                this.showErrorFeedback("Preencha todos os espaços vazios antes de clicar em Run.");
                return;
            }
        }

        this.isRunning = true;
        this.stopTimer();
        document.getElementById('btn-run').disabled = true;

        var lvl = this.currentLevelObj;
        var vars = {};
        for (var k in lvl.initialVars) vars[k] = lvl.initialVars[k];

        var stepIndex = 0;

        function executeNextStep() {
            if (stepIndex >= self.slotState.length) {
                var actualEl = document.getElementById('actual-output');
                actualEl.textContent = "Seu R: " + vars.c;

                if (vars.c === lvl.target) {
                    actualEl.style.color = '#22c55e';
                    Sound.win();

                    var earnedScore = self.calculateLevelScore(lvl);
                    var prevBest = self.levelScores[lvl.id] || 0;
                    if (earnedScore > prevBest) {
                        self.levelScores[lvl.id] = earnedScore;
                    }
                    if (self.completedLevels.indexOf(lvl.id) === -1) {
                        self.completedLevels.push(lvl.id);
                    }
                    self.saveStorage();

                    document.getElementById('game-best-score').textContent =
                        "Recorde: " + self.levelScores[lvl.id] + " pts";

                    self.showWinModal(earnedScore);
                } else {
                    actualEl.style.color = '#ef4444';
                    self.failedAttempts++;
                    Sound.error();
                    self.showErrorFeedback("Resultado incorreto: seu código gerou R: " + vars.c + ", mas o esperado é R: " + lvl.target + ".");
                    self.startTimer();
                }

                self.isRunning = false;
                document.getElementById('btn-run').disabled = false;
                return;
            }

            var slotEl = document.getElementById('slot-' + stepIndex);
            var cardObj = self.findCard(lvl, self.slotState[stepIndex]);

            slotEl.classList.add('active-step');
            Sound.step();

            setTimeout(function() {
                try {
                    cardObj.apply(vars);
                    var bubble = document.createElement('div');
                    bubble.className = 'step-bubble';
                    bubble.textContent = 'c = ' + vars.c;
                    slotEl.appendChild(bubble);
                } catch (errMsg) {
                    slotEl.classList.remove('active-step');
                    slotEl.classList.add('error-step');

                    var errBubble = document.createElement('div');
                    errBubble.className = 'step-bubble error';
                    errBubble.textContent = 'NameError!';
                    slotEl.appendChild(errBubble);

                    self.failedAttempts++;
                    Sound.error();
                    self.showErrorFeedback("Erro no Espaço #" + (stepIndex + 1) + ": " + errMsg);
                    self.isRunning = false;
                    document.getElementById('btn-run').disabled = false;
                    self.startTimer();
                    return;
                }

                stepIndex++;
                setTimeout(executeNextStep, 350);
            }, 550);
        }

        executeNextStep();
    },

    nextLevel: function() {
        this.hideFeedback();
        if (!this.currentLevelObj) return;
        var nextId = this.currentLevelObj.id + 1;
        if (nextId <= LEVELS.length) {
            this.startLevel(nextId);
        } else {
            this.showScreen('screen-levels');
        }
    },

    applySettingsUI: function() {
        document.body.classList.toggle('dark-theme', this.settings.darkTheme);
        document.getElementById('btn-toggle-sfx').textContent = this.settings.sfx ? "Ligado 🔊" : "Desligado 🔇";
        document.getElementById('btn-toggle-music').textContent = this.settings.music ? "Ligado 🎵" : "Desligado 🎵";
        document.getElementById('btn-toggle-theme').textContent = this.settings.darkTheme ? "Escuro 🌙" : "Azul Clássico ☀️";
        document.getElementById('btn-toggle-unlock').textContent = this.settings.unlockAll ? "Ativado 🔓" : "Desativado 🔒";
    },

    toggleSfx: function() {
        this.settings.sfx = !this.settings.sfx;
        Sound.click();
        this.saveStorage();
        this.applySettingsUI();
    },

    toggleMusic: function() {
        this.settings.music = !this.settings.music;
        Sound.click();
        Sound.toggleMusicLoop(this.settings.music);
        this.saveStorage();
        this.applySettingsUI();
    },

    toggleTheme: function() {
        this.settings.darkTheme = !this.settings.darkTheme;
        Sound.click();
        this.saveStorage();
        this.applySettingsUI();
    },

    toggleUnlockAll: function() {
        this.settings.unlockAll = !this.settings.unlockAll;
        Sound.click();
        this.saveStorage();
        this.applySettingsUI();
    },

    resetProgress: function() {
        Sound.click();
        this.completedLevels = [];
        this.levelScores = {};
        this.saveStorage();
        this.renderLevelsGrid();
        alert("Progresso e pontuações resetados com sucesso!");
    }
};

window.onload = function() { window.Game.init(); };