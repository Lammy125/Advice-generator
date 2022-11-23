let advisedId = document.querySelector("#advisedId");
let adviseText = document.querySelector("#adviseText");
let generateButton = document.querySelector("#generateButton");
let baseUrl = "https://api.adviceslip.com/advice";

const generateAdvice = async () => {
    try {
        const response = await fetch (baseUrl);
        let data = await response.json();
        console.log(data);
        advisedId.innerText = `#${data.slip.id}`;
        adviseText.innerText = `"${data.slip.advice}"`;
    }catch (error) {
        console.log(error);
    }
}

