function executeTests() {
    document.getElementById("botId").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission 

        let botName = document.getElementById("botName").value;

        //Logica do bot
        let action;

        if (botName == "start") {
            action = "Bot started";
        } else if (botName == "stop") {
            action = "Bot stopped";
        } else if (botName == "pause") {
            action = "Bot paused";
        } else {
            action = "Unknown command";
        }

        //Show the results
        document.getElementById("result").innerHTML = action;

        
        });
        // Função Resetar - CORRIGIDA DE VERDADE
        document.getElementById('resetBtn').addEventListener('click', function () {
        document.getElementById('botId').reset();
        document.getElementById('result').innerHTML = "";
    });

    }

//Call the function
window.onload = executeTests;