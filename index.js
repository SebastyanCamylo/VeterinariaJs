import colors from 'colors';
import { register, read } from './operations.js';

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

if (command === 'register') {
  register(commandArgs);
} else if (command === 'read') {
  read();
} else {
  console.error(`Invalid command: ${command}`.bgGreen);
}