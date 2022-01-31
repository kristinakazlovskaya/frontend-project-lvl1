#!/usr/bin/env node
import { gcdRules, getGcdGameData } from '../src/games/gcd-game.js';
import { startGame } from '../src/index.js';

startGame(gcdRules, getGcdGameData);
