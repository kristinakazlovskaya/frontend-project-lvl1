#!/usr/bin/env node
import { calcRules, getCalcData } from '../src/games/calc-game.js';
import { startGame } from '../src/index.js';

startGame(calcRules, getCalcData);
