let advisedId = document.querySelector("#advisedId");
let adviseText = document.querySelector("#adviseText");
let generateButton = document.querySelector("#generateButton");
let baseUrl = "https://api.adviceslip.com/advice%22";

const generateAdvice = async () => {
    try {
        const response = await fetch (baseUrl);
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}

