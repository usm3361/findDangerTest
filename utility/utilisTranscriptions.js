import fs from "fs";

async function getTranscriptionsList() {
  const res = await fetch(
    "https://spies-test-server.vercel.app/transcriptions"
  );
  const data = await res.text();
  return data;
}
function writeTranscriptionsJson(data) {
  const jsonData = data;
  fs.writeFile("./data/transcriptions.json", jsonData, "utf-8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return;
    }
    console.log("JSON file created successfully!");
  });
}

writeTranscriptionsJson(await getTranscriptionsList());
