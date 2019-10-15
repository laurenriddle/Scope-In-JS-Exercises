// console.log("Test Log!")



// C is for Cookie Exercise

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }




// Conjunction Function Exercise

// let conjoinedWord;
// const conjunction = function (firstWord, secondWord) {
//     conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")

// console.log(conjoinedWord)







// Mod Squad Exercise


    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
         HTMLRepresentation += `<div>${member}</div>`
    })


document.querySelector(".show-info").innerHTML = HTMLRepresentation