
import { useState } from 'react'

function closeToZero(decimal: number) {
    if(decimal < 0.1){
        return 0
    } else {
        return decimal
    }
}

function gcd(a: number, b: number)
{
    if (a == 0)
        return b;
    else if (b == 0)
        return a;
    if (a < b)
        return gcd(a, b % a);
    else
        return gcd(b, a % b);
}
  

function convertToFraction(decimal: number) {
    // check if the decimal is a repeating decimal
    if(decimal && decimal !== 1){
        let decimalString = decimal.toString()
        let decimalArray = decimalString.split(".")
        let decimalPart = decimalArray[1]
        let repeating = false
        for(let i = 0; i < decimalPart.length; i++){
            if(decimalPart[i] === decimalPart[i+1]){
                repeating = true
            }
        }
        if(decimalPart[decimalPart.length-2] !== decimalPart[decimalPart.length-1]){
            repeating = false
        }

        if(repeating) {
            repeating = false
            let top = Math.round((decimal*100-decimal)*10)/10
            let bot = 99
            console.log(top, bot)
            let num = Math.round(top / gcd(top, bot))
            let deno = Math.round(bot / gcd(top, bot))
            return num + "/" + deno
        }
    }
    

  

    // Fetch letegral value of the decimal
    let letVal = Math.floor(decimal);
   
    // Fetch fractional part of the decimal
    let fVal = decimal - letVal;
   
    // Consider precision value to
    // convert fractional part to
    // letegral equivalent
    let pVal = 1000000000;
   
    // Calculate GCD of letegral
    // equivalent of fractional
    // part and precision value
    let gcdVal = gcd(Math.round(
                      fVal * pVal), pVal);
    
    // Calculate num and deno
    let num = Math.round(fVal * pVal) / gcdVal;
    let deno = pVal / gcdVal;
   
    // Print the fraction
    return (letVal * deno) + num + "/" + deno;

}

export default function Slips() {

    const [resultOne, setResultOne] = useState(0)
    const [buttonOne, setButtonOne] = useState(false)

    const [buttonTwo, setButtonTwo] = useState(false)
    const [buttonThree, setButtonThree] = useState(false)

    const [buttonFour, setButtonFour] = useState(false)
    const [buttonFive, setButtonFive] = useState(false)
    const [buttonSix, setButtonSix] = useState(false)

    const [buttonSeven, setButtonSeven] = useState(false)
    const [buttonEight, setButtonEight] = useState(false)
    const [buttonNine, setButtonNine] = useState(false)
    const [buttonTen, setButtonTen] = useState(false)

    const [buttonEleven, setButtonEleven] = useState(false)
    const [buttonTwelve, setButtonTwelve] = useState(false)
    const [buttonThirteen, setButtonThirteen] = useState(false)
    const [buttonFourteen, setButtonFourteen] = useState(false)
    const [buttonFifteen, setButtonFifteen] = useState(false)

    const [buttonSixteen, setButtonSixteen] = useState(false)
    const [buttonSeventeen, setButtonSeventeen] = useState(false)
    const [buttonEighteen, setButtonEighteen] = useState(false)
    const [buttonNineteen, setButtonNineteen] = useState(false)
    const [buttonTwenty, setButtonTwenty] = useState(false)
    const [buttonTwentyOne, setButtonTwentyOne] = useState(false)

    const [markRed, setMarkRed] = useState(false)
    const [divColor, setDivColor] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])


    return (
        <div className="w-full flex flex-col py-4 text-3xl">
            <div className="w-full text-center p-2">
                <h1 className="text-5xl">Fraction Slips</h1>
                <p className="text-3xl py-2">
                    {/* <button>Show/Hide:</button><span>Result: {convertToFraction(resultOne)}</span> */}
                </p>
                <label className="inline-flex items-center cursor-pointer">BLUE
                <input type="checkbox" className="sr-only peer" id="read" name="read" value="read" checked={markRed} onChange={() => {
                    setMarkRed(!markRed);
                  }}/>
                <div className="mx-2 relative w-11 h-6 bg-blue-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                <span className="-ml-1 ms-3 font-medium text-gray-900 dark:text-gray-300">RED</span>
            </label>
            </div>
            <div className="w-full flex flex-row text-3xl"><button className={buttonOne && divColor[0] == "blue" ? "w-full border-2 text-center border-blue-500 text-blue-500" : buttonOne && divColor[0] == "red" ? "w-full border-2 text-center border-red-500 text-red-500" : "w-full border-2 text-center"} onClick={()=>{
                setButtonOne(!buttonOne)
                if(markRed){
                    setDivColor(["red", ...divColor.slice(1, 26)])
                }
                else {
                    setDivColor(["blue", ...divColor.slice(1, 26)])
                }
                if(buttonOne){
                    setResultOne(closeToZero(resultOne - 1))
                } else {
                    setResultOne(closeToZero(resultOne + 1))
                }
            }}>1</button></div>
            <div className="w-full flex flex-row">
                <button className={buttonTwo && divColor[1] == "blue" ? "w-1/2 border-2 text-center border-blue-500 text-blue-500" : buttonTwo && divColor[1] == "red" ? "w-1/2 border-2 text-center border-red-500 text-red-500" : "w-1/2 border-2 text-center"} onClick={()=>{
                setButtonTwo(!buttonTwo)
                if(markRed){
                    setDivColor([...divColor.slice(0, 1), "red", ...divColor.slice(2, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 1), "blue", ...divColor.slice(2, 26)])
                }
                if(buttonTwo){
                    setResultOne(closeToZero(resultOne - 1/2))
                } else {
                    setResultOne(closeToZero(resultOne + 1/2))
                }}}>1/2</button>
                <button className={buttonThree && divColor[2] == "blue" ? "w-1/2 border-2 text-center border-blue-500 text-blue-500" : buttonThree && divColor[2] == "red" ? "w-1/2 border-2 text-center border-red-500 text-red-500" : "w-1/2 border-2 text-center"} onClick={()=>{
                setButtonThree(!buttonThree)
                if(markRed){
                    setDivColor([...divColor.slice(0, 2), "red", ...divColor.slice(3, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 2), "blue", ...divColor.slice(3, 26)])
                }
                if(buttonThree){
                    setResultOne(closeToZero(resultOne - 1/2))
                } else {
                    setResultOne(closeToZero(resultOne + 1/2))
                }}}>1/2</button>
                </div>
            <div className="w-full flex flex-row">
            <button className={buttonFour && divColor[3] == "blue" ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : buttonFour && divColor[3] == "red" ? "w-1/3 border-2 text-center border-red-500 text-red-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonFour(!buttonFour)
                if(markRed){
                    setDivColor([...divColor.slice(0, 3), "red", ...divColor.slice(4, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 3), "blue", ...divColor.slice(4, 26)])
                }
                if(buttonFour){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            <button className={buttonFive && divColor[4] == "blue" ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : buttonFive && divColor[4] == "red" ? "w-1/3 border-2 text-center border-red-500 text-red-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonFive(!buttonFive)
                if(markRed){
                    setDivColor([...divColor.slice(0, 4), "red", ...divColor.slice(5, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 4), "blue", ...divColor.slice(5, 26)])
                }
                if(buttonFive){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            <button className={buttonSix && divColor[5] == "blue" ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : buttonSix && divColor[5] == "red" ? "w-1/3 border-2 text-center border-red-500 text-red-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonSix(!buttonSix)
                if(markRed){
                    setDivColor([...divColor.slice(0, 5), "red", ...divColor.slice(6, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 5), "blue", ...divColor.slice(6, 26)])
                }
                if(buttonSix){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            </div>

            <div className="w-full flex flex-row">
            <button className={buttonSeven && divColor[6] == "blue" ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : buttonSeven && divColor[6] == "red" ? "w-1/4 border-2 text-center border-red-500 text-red-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonSeven(!buttonSeven)
                if(markRed){
                    setDivColor([...divColor.slice(0, 6), "red", ...divColor.slice(7, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 6), "blue", ...divColor.slice(7, 26)])
                }
                if(buttonSeven){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonEight && divColor[7] == "blue" ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : buttonEight && divColor[7] == "red" ? "w-1/4 border-2 text-center border-red-500 text-red-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonEight(!buttonEight)
                if(markRed){
                    setDivColor([...divColor.slice(0, 7), "red", ...divColor.slice(8, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 7), "blue", ...divColor.slice(8, 26)])
                }
                if(buttonEight){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonNine && divColor[8] == "blue" ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : buttonNine && divColor[8] == "red" ? "w-1/4 border-2 text-center border-red-500 text-red-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonNine(!buttonNine)
                if(markRed){
                    setDivColor([...divColor.slice(0, 8), "red", ...divColor.slice(9, 26)])
                }
                else {
                    setDivColor([...divColor.slice(0, 8), "blue", ...divColor.slice(9, 26)])
                }
                if(buttonNine){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonTen && divColor[9] == "blue" ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : buttonTen && divColor[9] == "red" ? "w-1/4 border-2 text-center border-red-500 text-red-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonTen(!buttonTen)
                if(markRed){
                    setDivColor([...divColor.slice(0, 9), "red", ...divColor.slice(10, 26)])
                } else {
                    setDivColor([...divColor.slice(0, 9), "blue", ...divColor.slice(10, 26)])
                }
                if(buttonTen){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}} >1/4</button>
            </div>

            <div className="w-full flex flex-row">
            <button className={buttonEleven ? "w-1/5 border-2 text-center border-blue-500 text-blue-500" : "w-1/5 border-2 text-center"} onClick={()=>{
                setButtonEleven(!buttonEleven)
                if(buttonEleven){
                    setResultOne(closeToZero(resultOne - 1/5))
                } else {
                    setResultOne(closeToZero(resultOne + 1/5))
                }}}>1/5</button>
            <button className={buttonTwelve ? "w-1/5 border-2 text-center border-blue-500 text-blue-500" : "w-1/5 border-2 text-center"} onClick={()=>{
                setButtonTwelve(!buttonTwelve)
                if(buttonTwelve){
                    setResultOne(closeToZero(resultOne - 1/5))
                } else {
                    setResultOne(closeToZero(resultOne + 1/5))
                }}
            }>1/5</button>
            <button className={buttonThirteen ? "w-1/5 border-2 text-center border-blue-500 text-blue-500" : "w-1/5 border-2 text-center"} onClick={()=>{
                setButtonThirteen(!buttonThirteen)
                if(buttonThirteen){
                    setResultOne(closeToZero(resultOne - 1/5))
                } else {
                    setResultOne(closeToZero(resultOne + 1/5))
                }}} >1/5</button>
            <button className={buttonFourteen ? "w-1/5 border-2 text-center border-blue-500 text-blue-500" : "w-1/5 border-2 text-center"} onClick={()=>{
                setButtonFourteen(!buttonFourteen)
                if(buttonFourteen){
                    setResultOne(closeToZero(resultOne - 1/5))
                } else {
                    setResultOne(closeToZero(resultOne + 1/5))
                }}
            }>1/5</button>
            <button className={buttonFifteen ? "w-1/5 border-2 text-center border-blue-500 text-blue-500" : "w-1/5 border-2 text-center"} onClick={()=>{
                setButtonFifteen(!buttonFifteen)
                if(buttonFifteen){
                    setResultOne(closeToZero(resultOne - 1/5))
                } else {
                    setResultOne(closeToZero(resultOne + 1/5))
                }}
            }>1/5</button>
            </div>

            <div className="w-full flex flex-row">
            <button className={buttonSixteen ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonSixteen(!buttonSixteen)
                if(buttonSixteen){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}} >1/6</button>
            <button className={buttonSeventeen ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonSeventeen(!buttonSeventeen)
                if(buttonSeventeen){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}}>1/6</button>
            <button className={buttonEighteen ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonEighteen(!buttonEighteen)
                if(buttonEighteen){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}}>1/6</button>
            <button className={buttonNineteen ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonNineteen(!buttonNineteen)
                if(buttonNineteen){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}}>1/6</button>
            <button className={buttonTwenty ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonTwenty(!buttonTwenty)
                if(buttonTwenty){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}}>1/6</button>
            <button className={buttonTwentyOne ? "w-1/6 border-2 text-center border-blue-500 text-blue-500" : "w-1/6 border-2 text-center"} onClick={()=>{
                setButtonTwentyOne(!buttonTwentyOne)
                if(buttonTwentyOne){
                    setResultOne(closeToZero(resultOne - 1/6))
                } else {
                    setResultOne(closeToZero(resultOne + 1/6))
                }}}>1/6</button>
            </div>

        </div>
    )
}