import { writeFileSync, readFileSync } from 'fs';

export const register = terminalArguments => {
  const listOfApointment = [];
  const newApointment = {};
  const keys = ['animalName', 'years', 'animalType', 'animalColor', 'disease'];

  for (let i = 0; i < keys.length; i++) {
    newApointment[keys[i]] = terminalArguments[i];
  }
  listOfApointment.push(newApointment);

  const data = readFileSync('apointments.json', 'utf-8');
  const ListOfApointment = JSON.parse(data);
  const updateListOfApointment = [...ListOfApointment, newApointment];
  writeFileSync('apointments.json', JSON.stringify(updateListOfApointment));
};

export const read = () =>
  console.log(
    `The apointments are:`.bgCyan,
    readFileSync('apointments.json', 'utf-8')
  );

