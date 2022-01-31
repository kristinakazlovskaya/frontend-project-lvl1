#!/usr/bin/env node
import { primeRules, getPrimeGameData } from '../src/games/prime-game.js';
import { startGame } from '../src/index.js';

startGame(primeRules, getPrimeGameData);
