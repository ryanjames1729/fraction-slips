
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

        if(repeating) {
            repeating = false
            let top = Math.round(decimal*10-decimal)
            let bot = 9
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

    return (
        <div className="w-full flex flex-col">
            <div className="w-full text-center">
                <h1 className="text-2xl">Fraction Slips</h1>
                <p>
                    <span>Result: {convertToFraction(resultOne)}</span>
                </p>
            </div>
            <div className="w-full flex flex-row"><button className={buttonOne ? "w-full border-2 text-center border-blue-500 text-blue-500" : "w-full border-2 text-center"} onClick={()=>{
                setButtonOne(!buttonOne)
                if(buttonOne){
                    setResultOne(closeToZero(resultOne - 1))
                } else {
                    setResultOne(closeToZero(resultOne + 1))
                }
            }}>1</button></div>
            <div className="w-full flex flex-row">
                <button className={buttonTwo ? "w-1/2 border-2 text-center border-blue-500 text-blue-500" : "w-1/2 border-2 text-center"} onClick={()=>{
                setButtonTwo(!buttonTwo)
                if(buttonTwo){
                    setResultOne(closeToZero(resultOne - 1/2))
                } else {
                    setResultOne(closeToZero(resultOne + 1/2))
                }}}>1/2</button>
                <button className={buttonThree ? "w-1/2 border-2 text-center border-blue-500 text-blue-500" : "w-1/2 border-2 text-center"} onClick={()=>{
                setButtonThree(!buttonThree)
                if(buttonThree){
                    setResultOne(closeToZero(resultOne - 1/2))
                } else {
                    setResultOne(closeToZero(resultOne + 1/2))
                }}}>1/2</button>
                </div>
            <div className="w-full flex flex-row">
            <button className={buttonFour ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonFour(!buttonFour)
                if(buttonFour){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            <button className={buttonFive ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonFive(!buttonFive)
                if(buttonFive){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            <button className={buttonSix ? "w-1/3 border-2 text-center border-blue-500 text-blue-500" : "w-1/3 border-2 text-center"} onClick={()=>{
                setButtonSix(!buttonSix)
                if(buttonSix){
                    setResultOne(closeToZero(resultOne - 1/3))
                } else {
                    setResultOne(closeToZero(resultOne + 1/3))
                }}}>1/3</button>
            </div>

            <div className="w-full flex flex-row">
            <button className={buttonSeven ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonSeven(!buttonSeven)
                if(buttonSeven){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonEight ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonEight(!buttonEight)
                if(buttonEight){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonNine ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonNine(!buttonNine)
                if(buttonNine){
                    setResultOne(closeToZero(resultOne - 1/4))
                } else {
                    setResultOne(closeToZero(resultOne + 1/4))
                }}}>1/4</button>
            <button className={buttonTen ? "w-1/4 border-2 text-center border-blue-500 text-blue-500" : "w-1/4 border-2 text-center"} onClick={()=>{
                setButtonTen(!buttonTen)
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

        </div>
    )
}