let db;
const openRequest = window.indexedDB.open("playerScore_db", 1);


openRequest.addEventListener("error", () => {
    console.error("Database failed to open");
});

openRequest.addEventListener("success", () => {
    console.log("Database opened successfully");
    db = openRequest.result;
});

openRequest.addEventListener("upgradeneeded", e => {
    db = e.target.result;
    const objectStore = db.createObjectStore("playerScore_os", { keyPath: "id", autoIncrement: true });

    objectStore.createIndex("name", "name", { unique: false});
    objectStore.createIndex("score", "score", { unique: false});

    console.log("Database setup complete");
});


function addScore(e) {

    e.preventDefault();

    const newItem = { name: playerNameField.value, score: finalScore.value };
    const transaction = db.transaction(["playerScore_os"], "readwrite");
    const objectStore = transaction.objectStore("playerScore_os");
    const addRequest = objectStore.add(newItem);

    addRequest.addEventListener("success", () => {
        console.log("Score added");
    });

    transaction.addEventListener("complete", () => {
        console.log("Transaction completed: database modification finished");
    });

    transaction.addEventListener("error", () => {
        console.log("Transaction not opened due to error");
    });

}


function displayScore() {

    const objectStore = db.transaction("playerScore_os").objectStore("playerScore_os");
    objectStore.openCursor().addEventListener("success", (e) => {

        const cursor = e.target.result;

        if (cursor) {

            console.log(`${cursor.value.id}`);

        }
        

    });

}