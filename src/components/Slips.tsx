
import { useState } from 'react'

function closeToZero(decimal: number) {
    if (decimal < 0.1) {
        return 0
    } else {
        return decimal
    }
}

function gcd(a: number, b: number) {
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
    if (decimal && decimal !== 1) {
        let decimalString = decimal.toString()
        let decimalArray = decimalString.split(".")
        let decimalPart = decimalArray[1]
        let repeating = false
        for (let i = 0; i < decimalPart.length; i++) {
            if (decimalPart[i] === decimalPart[i + 1]) {
                repeating = true
            }
        }
        if (decimalPart[decimalPart.length - 2] !== decimalPart[decimalPart.length - 1]) {
            repeating = false
        }

        if (repeating) {
            repeating = false
            let top = Math.round((decimal * 100 - decimal) * 10) / 10
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
        <div className="w-full flex flex-col py-4 text-3xl h-screen">
            <div className="w-full text-center p-2">
                <h1 className="text-5xl">Fraction Slips</h1>
                <p className="text-3xl py-2">
                    {/* <button>Show/Hide:</button><span>Result: {convertToFraction(resultOne)}</span> */}
                </p>
                <label className="inline-flex items-center cursor-pointer">BLUE
                    <input type="checkbox" className="sr-only peer" id="read" name="read" value="read" checked={markRed} onChange={() => {
                        setMarkRed(!markRed);
                    }} />
                    <div className="mx-2 relative w-11 h-6 bg-blue-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                    <span className="-ml-1 ms-3 font-medium">RED</span>
                </label>
            </div>
            <div className="w-full flex flex-row text-3xl py-1"><button className={buttonOne && divColor[0] == "blue" ? "w-full border-4 text-center border-blue-500 text-blue-500" : buttonOne && divColor[0] == "red" ? "w-full border-4 text-center border-red-500 text-red-500" : "w-full border-4 text-center"} onClick={() => {
                setButtonOne(!buttonOne)
                if (markRed) {
                    setDivColor(["red", ...divColor.slice(1, 26)])
                }
                else {
                    setDivColor(["blue", ...divColor.slice(1, 26)])
                }
                if (buttonOne) {
                    setResultOne(closeToZero(resultOne - 1))
                } else {
                    setResultOne(closeToZero(resultOne + 1))
                }
            }}>1</button></div>
            <div className="w-full flex flex-row space-x-1 pb-1">
                <button className={buttonTwo && divColor[1] == "blue" ? "w-1/2 border-4 text-center border-blue-500 text-blue-500" : buttonTwo && divColor[1] == "red" ? "w-1/2 border-4 text-center border-red-500 text-red-500" : "w-1/2 border-4 text-center"} onClick={() => {
                    setButtonTwo(!buttonTwo)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 1), "red", ...divColor.slice(2, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 1), "blue", ...divColor.slice(2, 26)])
                    }
                    if (buttonTwo) {
                        setResultOne(closeToZero(resultOne - 1 / 2))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 2))
                    }
                }}>1/2</button>
                <button className={buttonThree && divColor[2] == "blue" ? "w-1/2 border-4 text-center border-blue-500 text-blue-500" : buttonThree && divColor[2] == "red" ? "w-1/2 border-4 text-center border-red-500 text-red-500" : "w-1/2 border-4 text-center"} onClick={() => {
                    setButtonThree(!buttonThree)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 2), "red", ...divColor.slice(3, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 2), "blue", ...divColor.slice(3, 26)])
                    }
                    if (buttonThree) {
                        setResultOne(closeToZero(resultOne - 1 / 2))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 2))
                    }
                }}>1/2</button>
            </div>
            <div className="w-full flex flex-row  space-x-1 pb-1">
                <button className={buttonFour && divColor[3] == "blue" ? "w-1/3 border-4 text-center border-blue-500 text-blue-500" : buttonFour && divColor[3] == "red" ? "w-1/3 border-4 text-center border-red-500 text-red-500" : "w-1/3 border-4 text-center"} onClick={() => {
                    setButtonFour(!buttonFour)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 3), "red", ...divColor.slice(4, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 3), "blue", ...divColor.slice(4, 26)])
                    }
                    if (buttonFour) {
                        setResultOne(closeToZero(resultOne - 1 / 3))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 3))
                    }
                }}>1/3</button>
                <button className={buttonFive && divColor[4] == "blue" ? "w-1/3 border-4 text-center border-blue-500 text-blue-500" : buttonFive && divColor[4] == "red" ? "w-1/3 border-4 text-center border-red-500 text-red-500" : "w-1/3 border-4 text-center"} onClick={() => {
                    setButtonFive(!buttonFive)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 4), "red", ...divColor.slice(5, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 4), "blue", ...divColor.slice(5, 26)])
                    }
                    if (buttonFive) {
                        setResultOne(closeToZero(resultOne - 1 / 3))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 3))
                    }
                }}>1/3</button>
                <button className={buttonSix && divColor[5] == "blue" ? "w-1/3 border-4 text-center border-blue-500 text-blue-500" : buttonSix && divColor[5] == "red" ? "w-1/3 border-4 text-center border-red-500 text-red-500" : "w-1/3 border-4 text-center"} onClick={() => {
                    setButtonSix(!buttonSix)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 5), "red", ...divColor.slice(6, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 5), "blue", ...divColor.slice(6, 26)])
                    }
                    if (buttonSix) {
                        setResultOne(closeToZero(resultOne - 1 / 3))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 3))
                    }
                }}>1/3</button>
            </div>

            <div className="w-full flex flex-row space-x-1 pb-1">
                <button className={buttonSeven && divColor[6] == "blue" ? "w-1/4 border-4 text-center border-blue-500 text-blue-500" : buttonSeven && divColor[6] == "red" ? "w-1/4 border-4 text-center border-red-500 text-red-500" : "w-1/4 border-4 text-center"} onClick={() => {
                    setButtonSeven(!buttonSeven)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 6), "red", ...divColor.slice(7, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 6), "blue", ...divColor.slice(7, 26)])
                    }
                    if (buttonSeven) {
                        setResultOne(closeToZero(resultOne - 1 / 4))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 4))
                    }
                }}>1/4</button>
                <button className={buttonEight && divColor[7] == "blue" ? "w-1/4 border-4 text-center border-blue-500 text-blue-500" : buttonEight && divColor[7] == "red" ? "w-1/4 border-4 text-center border-red-500 text-red-500" : "w-1/4 border-4 text-center"} onClick={() => {
                    setButtonEight(!buttonEight)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 7), "red", ...divColor.slice(8, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 7), "blue", ...divColor.slice(8, 26)])
                    }
                    if (buttonEight) {
                        setResultOne(closeToZero(resultOne - 1 / 4))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 4))
                    }
                }}>1/4</button>
                <button className={buttonNine && divColor[8] == "blue" ? "w-1/4 border-4 text-center border-blue-500 text-blue-500" : buttonNine && divColor[8] == "red" ? "w-1/4 border-4 text-center border-red-500 text-red-500" : "w-1/4 border-4 text-center"} onClick={() => {
                    setButtonNine(!buttonNine)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 8), "red", ...divColor.slice(9, 26)])
                    }
                    else {
                        setDivColor([...divColor.slice(0, 8), "blue", ...divColor.slice(9, 26)])
                    }
                    if (buttonNine) {
                        setResultOne(closeToZero(resultOne - 1 / 4))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 4))
                    }
                }}>1/4</button>
                <button className={buttonTen && divColor[9] == "blue" ? "w-1/4 border-4 text-center border-blue-500 text-blue-500" : buttonTen && divColor[9] == "red" ? "w-1/4 border-4 text-center border-red-500 text-red-500" : "w-1/4 border-4 text-center"} onClick={() => {
                    setButtonTen(!buttonTen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 9), "red", ...divColor.slice(10, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 9), "blue", ...divColor.slice(10, 26)])
                    }
                    if (buttonTen) {
                        setResultOne(closeToZero(resultOne - 1 / 4))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 4))
                    }
                }} >1/4</button>
            </div>

            <div className="w-full flex flex-row  space-x-1 pb-1">
                <button className={buttonEleven && divColor[10] == "blue" ? "w-1/5 border-4 text-center border-blue-500 text-blue-500" : buttonEleven && divColor[10] == "red" ? "w-1/5 border-4 text-center border-red-500 text-red-500" : "w-1/5 border-4 text-center"} onClick={() => {
                    setButtonEleven(!buttonEleven)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 10), "red", ...divColor.slice(11, 26)])
                    }
                    else {
                        setDivColor([...divColor.slice(0, 10), "blue", ...divColor.slice(11, 26)])
                    }
                    if (buttonEleven) {
                        setResultOne(closeToZero(resultOne - 1 / 5))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 5))
                    }
                }}>1/5</button>
                <button className={buttonTwelve && divColor[11] == "blue" ? "w-1/5 border-4 text-center border-blue-500 text-blue-500" : buttonTwelve && divColor[11] == "red" ? "w-1/5 border-4 text-center border-red-500 text-red-500" : "w-1/5 border-4 text-center"} onClick={() => {
                    setButtonTwelve(!buttonTwelve)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 11), "red", ...divColor.slice(12, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 11), "blue", ...divColor.slice(12, 26)])
                    }
                    if (buttonTwelve) {
                        setResultOne(closeToZero(resultOne - 1 / 5))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 5))
                    }
                }
                }>1/5</button>
                <button className={buttonThirteen && divColor[12] == "blue" ? "w-1/5 border-4 text-center border-blue-500 text-blue-500" : buttonThirteen && divColor[12] == "red" ? "w-1/5 border-4 text-center border-red-500 text-red-500" : "w-1/5 border-4 text-center"} onClick={() => {
                    setButtonThirteen(!buttonThirteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 12), "red", ...divColor.slice(13, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 12), "blue", ...divColor.slice(13, 26)])
                    }
                    if (buttonThirteen) {
                        setResultOne(closeToZero(resultOne - 1 / 5))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 5))
                    }
                }} >1/5</button>
                <button className={buttonFourteen && divColor[13] == "blue" ? "w-1/5 border-4 text-center border-blue-500 text-blue-500" : buttonFourteen && divColor[13] == "red" ? "w-1/5 border-4 text-center border-red-500 text-red-500" : "w-1/5 border-4 text-center"} onClick={() => {
                    setButtonFourteen(!buttonFourteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 13), "red", ...divColor.slice(14, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 13), "blue", ...divColor.slice(14, 26)])
                    }
                    if (buttonFourteen) {
                        setResultOne(closeToZero(resultOne - 1 / 5))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 5))
                    }
                }
                }>1/5</button>
                <button className={buttonFifteen && divColor[14] == "blue" ? "w-1/5 border-4 text-center border-blue-500 text-blue-500" : buttonFifteen && divColor[14] == "red" ? "w-1/5 border-4 text-center border-red-500 text-red-500" : "w-1/5 border-4 text-center"} onClick={() => {
                    setButtonFifteen(!buttonFifteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 14), "red", ...divColor.slice(15, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 14), "blue", ...divColor.slice(15, 26)])
                    }
                    if (buttonFifteen) {
                        setResultOne(closeToZero(resultOne - 1 / 5))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 5))
                    }
                }
                }>1/5</button>
            </div>

            <div className="w-full flex flex-row  space-x-1 pb-1">
                <button className={buttonSixteen && divColor[15] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonSixteen && divColor[15] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonSixteen(!buttonSixteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 15), "red", ...divColor.slice(16, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 15), "blue", ...divColor.slice(16, 26)])
                    }
                    if (buttonSixteen) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }} >1/6</button>
                <button className={buttonSeventeen && divColor[16] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonSeventeen && divColor[16] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonSeventeen(!buttonSeventeen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 16), "red", ...divColor.slice(17, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 16), "blue", ...divColor.slice(17, 26)])
                    }
                    if (buttonSeventeen) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }}>1/6</button>
                <button className={buttonEighteen && divColor[17] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonEighteen && divColor[17] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonEighteen(!buttonEighteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 17), "red", ...divColor.slice(18, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 17), "blue", ...divColor.slice(18, 26)])
                    }
                    if (buttonEighteen) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }}>1/6</button>
                <button className={buttonNineteen && divColor[18] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonNineteen && divColor[18] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonNineteen(!buttonNineteen)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 18), "red", ...divColor.slice(19, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 18), "blue", ...divColor.slice(19, 26)])
                    }
                    if (buttonNineteen) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }}>1/6</button>
                <button className={buttonTwenty && divColor[19] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonTwenty && divColor[19] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonTwenty(!buttonTwenty)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 19), "red", ...divColor.slice(20, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 19), "blue", ...divColor.slice(20, 26)])
                    }
                    if (buttonTwenty) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }}>1/6</button>
                <button className={buttonTwentyOne && divColor[20] == "blue" ? "w-1/6 border-4 text-center border-blue-500 text-blue-500" : buttonTwentyOne && divColor[20] == "red" ? "w-1/6 border-4 text-center border-red-500 text-red-500" : "w-1/6 border-4 text-center"} onClick={() => {
                    setButtonTwentyOne(!buttonTwentyOne)
                    if (markRed) {
                        setDivColor([...divColor.slice(0, 20), "red", ...divColor.slice(21, 26)])
                    } else {
                        setDivColor([...divColor.slice(0, 20), "blue", ...divColor.slice(21, 26)])
                    }
                    if (buttonTwentyOne) {
                        setResultOne(closeToZero(resultOne - 1 / 6))
                    } else {
                        setResultOne(closeToZero(resultOne + 1 / 6))
                    }
                }}>1/6</button>
            </div>

        </div>
    )
}