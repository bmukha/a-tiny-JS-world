/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

const dog = {
  species: 'dog',
  name: 'Beethoven',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof',
  friends: ['Clyde'],
};

const cat = {
  species: 'cat',
  name: 'Grizabella',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'meow',
  friends: ['Bonnie'],
};

const man = {
  species: 'human',
  name: 'Clyde',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Get rich or die trying!',
  friends: ['Bonnie', 'Beethoven'],
};

const woman = {
  species: 'human',
  name: 'Bonnie',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'I have the right to not answer a questions!',
  friends: ['Clyde', 'Grizabella'],
};

const catwoman = {
  species: 'human',
  name: 'Selina',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: cat.saying,
  friends: [],
};

const characters = [dog, cat, man, woman, catwoman];

const props = [
  'species',
  'name',
  'gender',
  'legs',
  'hands',
  'saying',
  'friends',
];

characters.forEach((character) => {
  let representation = '';
  for (let i = 0; i < props.length; i++) {
    if (props[i] === 'hands' && character[props[i]] === 0) {
      continue;
    } else if (i < props.length - 1) {
      representation += `${character[props[i]]}; `;
    } else {
      representation += `${character[props[i]].join(', ')}`;
    }
  }
  print(representation);
});
