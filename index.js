const functions = require('firebase-functions');
const fs = require('fs');

exports.joke = functions.https.onRequest((request, response) => {
    getData(response, "j");
});
exports.inspireMe = functions.https.onRequest((request, response) => {
    getData(response, "i");
});

function getData(response, qType="j"){
    try{
        let res_text="";
        let contents;
        switch(qType){
            case "j":
                contents = fs.readFileSync("jokes.json");
                let all_jokes = JSON.parse(contents);
                let joke_JSON=all_jokes[getRandomArbitrary(all_jokes.length)];
                if(joke_JSON["type"]=="twopart"){
                    res_text+=joke_JSON["setup"]+"\n";
                    res_text+=joke_JSON["delivery"]+"\n";
                }else{
                    res_text=joke_JSON["joke"]+"\n";
                }
                break;
            default:
                contents = fs.readFileSync("quotes.json");
                let all_quotes = JSON.parse(contents);
                let quote_JSON=all_quotes[getRandomArbitrary(all_quotes.length)];
                res_text=quote_JSON["quote"]+"\n — "+quote_JSON["author"]+"\n";
                break;
        }
        response.send(res_text);
    }catch(e){
        response.send("Ouch!");
        console.error(e);
    }
}
function getRandomArbitrary(max) {
    return Math.round(Math.random() * max);
}