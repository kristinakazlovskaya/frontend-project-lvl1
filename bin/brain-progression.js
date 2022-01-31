#!/usr/bin/env node
import { progressionRules, getProgressionGameData } from '../src/games/progression-game.js';
import { startGame } from '../src/index.js';

startGame(progressionRules, getProgressionGameData);
