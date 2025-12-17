import input from "analiza-sync";
import { SearchPeoplebyAge, SearchPeoplebyName } from "./func.js";

export async function menu() {
  let play = true;
  while (play) {
    console.log("======= Menu =======");
    console.log("1. Search People by Name");
    console.log("2. Search People by Age");
    console.log("3. exit");

    const choice = input("Please enter a number of your choice;\nchoice:    ");

    if (choice === "1") {
      const inputName = input(
        "Please enter the name you want to search for\nPlease enter:   "
      ).toLowerCase();
      await SearchPeoplebyName(inputName);
    } else if (choice === "2") {
      const inputAge = parseInt(
        input("Please enter the age you want to search for\nPlease enter:   ")
      );
      await SearchPeoplebyAge(inputAge);
    } else if (choice === "3") {
        console.log('===========')
      console.log("ByeBye");
      play = false;
    }
  }
}
menu();
