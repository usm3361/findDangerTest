import input from "analiza-sync";
import { SearchPeoplebyAge, SearchPeoplebyName } from "./func.js";
import { getPeopleList } from "./utility/utilisPeople.js";
import { getTranscriptionsList } from "./utility/utilisTranscriptions.js";

export async function menu() {
  let play = true;
  while (play) {
    console.log("======= Menu =======");
    console.log("1. get arrey of people");
    console.log("2. get arrey of TRANSCRIPTIONS");
    console.log("3. Search People by Name");
    console.log("4. Search People by Age");
    console.log("0. exit");

    const choice = input("Please enter a number of your choice;\nchoice:    ");

    if (choice === "1") {
      const arreyPeople = await getPeopleList()
      console.log(arreyPeople)

    } else if (choice === "2") {
      const arreyTrans = await getTranscriptionsList()
      console.log(arreyTrans)
    }
    else if (choice === "3") {
      const inputName = input(
        "Please enter the name you want to search for\nPlease enter:   "
      ).toLowerCase();
      await SearchPeoplebyName(inputName);
    } else if (choice === "4") {
      const inputAge = parseInt(
        input("Please enter the age you want to search for\nPlease enter:   ")
      );
      await SearchPeoplebyAge(inputAge);
    } else if (choice === "0") {
      console.log("===========");
      console.log("ByeBye");
      play = false;
    }
  }
}
menu();
