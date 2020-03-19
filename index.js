const tpCalculator = document.getElementById("tp-calculator")

document.addEventListener("DOMContentLoaded", () => {
   
    tpCalculator.addEventListener("submit", (event) => calculateTP(event))
}
)

function calculateTP(event){
    event.preventDefault()
    const rolls = document.getElementById("rolls").value
    const sheetsPerRoll = document.getElementById("sheets-per-roll").value
    const visits = document.getElementById("visits").value
    const wipes = document.getElementById("wipes").value
    const sheetsPerWipe = document.getElementById("sheets-per-wipe").value

    const totalSheets = rolls * sheetsPerRoll
    const wipesPerDay = visits * wipes
    const sheetsUsedPerDay = wipesPerDay * sheetsPerWipe

    authenticateTotoal(totalSheets, sheetsUsedPerDay)
   

}

function authenticateTotoal(totalSheets, sheetsUsedPerDay){
    if(totalSheets === 0 || sheetsUsedPerDay === 0){
        document.getElementById("error").style.display = "block"
     } else {
         const daysInQuarentine = totalSheets / sheetsUsedPerDay
         displayResults(daysInQuarentine)
     }
}

function displayResults(daysInQuarentine){
    const days = Math.round(daysInQuarentine)
    tpCalculator.style.display = "none"
    document.getElementById("results").style.display="block"
    const dummyText = document.getElementById("results-to-display").innerHTML
    const result = dummyText.replace("x", `${days}`)
    document.getElementById("results-to-display").innerHTML = result
}