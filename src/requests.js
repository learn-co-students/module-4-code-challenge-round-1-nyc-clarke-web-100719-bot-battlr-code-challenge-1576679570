const botsURL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

const parseData = resp => resp.json()
const catchError = error => console.log(`%c${error}`, "color: red")

export const fetchBots = () => fetch(botsURL)
                                .then(parseData)
                                .catch(catchError)

