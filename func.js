import fs from "fs";

export async function readFilePeopleJSON() {
  const data = await fs.promises.readFile("./data/PEOPLE.json", "utf8");
  const people = JSON.parse(data);
  return people;
}
export async function readFileTransJSON() {
  const data = await fs.promises.readFile("./data/TRANSCRIPTIONS.json", "utf8");
  const trans = JSON.parse(data);
  return trans;
}

export async function SearchPeoplebyName(name) {
  const arreyObjOfPeople = await readFilePeopleJSON();

  const arrayPeopleByNameOfFounds = [];
  for (const people of arreyObjOfPeople) {
    if (people.name.toLowerCase() === name) {
      arrayPeopleByNameOfFounds.push(people);
    }
  }
  if (arrayPeopleByNameOfFounds.length > 0) {
    console.log(arrayPeopleByNameOfFounds);
  } else {
    console.log("person was not found");
  }
}
export async function SearchPeoplebyAge(age) {
  const arreyObjOfPeople = await readFilePeopleJSON();

  const arrayPeopleByAgeOfFounds = [];
  for (const people of arreyObjOfPeople) {
    if (people.age === age) {
      arrayPeopleByAgeOfFounds.push(people);
    }
  }
  if (arrayPeopleByAgeOfFounds.length > 0) {
    console.log(arrayPeopleByAgeOfFounds);
  } else {
    console.log("person was not found");
  }
}

export async function getwordDangerous() {
    const arreyObjOftrans = await readFileTransJSON();
    const gh = arreyObjOftrans.content
    console.log(gh)
   }


const wordDangerous = ["death", "knife", "bomb", "attack"];
getwordDangerous()