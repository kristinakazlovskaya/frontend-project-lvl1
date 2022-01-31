#!/usr/bin/env node
import { getEvenGameData, evenRules } from '../src/games/even-game.js';
import { startGame } from '../src/index.js';

startGame(evenRules, getEvenGameData);
