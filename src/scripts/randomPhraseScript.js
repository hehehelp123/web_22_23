let phrase = 0;
const loader = document.getElementById("phrase-loader");

getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

setText = function (phrase, author) {
    document.getElementById("phrase-line").textContent = phrase;
    document.getElementById("phrase-author").textContent = "(c) " + author;
}

setValid = function (data) {
    loader.style.display = "none";
    setText(data["body"], data["email"]);
}

setError = function (code) {
    loader.style.display = "none";
    if(code === "nothing") {
        setText("Серверу тоже нужен отдых", "Я");
        return;
    }
    console.log(code);
    setText("!!!Что-то пошло не так!!!", "Вселенная");
}

generatePhrase = function () {
    let id = phrase + getRandomInt(500 - phrase);
    phrase++;
    let promise = new Promise(function(resolve, reject) {
        loader.style.display = "block";
        setTimeout(() => reject("nothing"), 5000);
        try {
            fetch('https://jsonplaceholder.typicode.com/comments/' + id)
                .then(response => response.json())
                .then(json => resolve(json));
        } catch (e) {
            reject(e);
        }
    });
    promise.then(setValid, setError)
}

generatePhrase()
document.getElementById("phrase-generate-button").onclick = generatePhrase;