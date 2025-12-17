import fs from "fs";

export async function getPeopleList() {
  const res = await fetch("https://spies-test-server.vercel.app/people");
  const data = await res.text();
  console.log(data)
  return data;
}
export async function writePeopleJson(data) {
  const jsonData = data;
  fs.writeFile("./data/people.json", jsonData, "utf-8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return;
    }
    console.log("JSON file created successfully!");
  });
}