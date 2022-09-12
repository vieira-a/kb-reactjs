import React, {useState} from "react";

function InputTest(){

    const [valueConvert, setValueConvert] = useState(''); //pega a temperatura para converter
    const [temperatureSelect, setTemperatureSelect] = useState('') //seleciona a temperatura base para conversão

    let convertedFahreheit = 0;
    let convertedCelcius = 0;
    let convertedKelvin = 0;

    const calculateValue = () => {
        if(temperatureSelect === 'fahrenheit'){
            fahrenheitToCelcius()
            fahrenheitToKelvin()
        }
        if(temperatureSelect === 'celcius'){
            celciusToFahrenheit()
            celciusToKelvin()
        }
        if(temperatureSelect === 'kelvin'){
            kelvinToCelcius()
            kelvinToFahrenheit()
        }
    }
    calculateValue()
    
    function celciusToFahrenheit(){
        convertedCelcius = Number(valueConvert);
        convertedFahreheit = ((Number(valueConvert) * 9/5) + 32).toFixed(2);
    }

    function celciusToKelvin() {
        convertedCelcius = Number(valueConvert);
        convertedKelvin = (Number(valueConvert) + 273.15).toFixed(2);
        
    }

    function fahrenheitToCelcius(){
        convertedFahreheit = Number(valueConvert)
        convertedCelcius = ((Number(valueConvert) - 32) * 5/9).toFixed(2)
        
    }

    function fahrenheitToKelvin() {
        convertedFahreheit = Number(valueConvert)
        convertedKelvin = ((Number(valueConvert) - 32) * 5/9 + 273.15).toFixed(2)

    }

    function kelvinToCelcius(){
        convertedKelvin = Number(valueConvert)
        convertedCelcius = (Number(valueConvert) - 273.15).toFixed(2);
        
    }

    function kelvinToFahrenheit(){
        convertedKelvin = Number(valueConvert)
        convertedFahreheit = (Number(valueConvert) - 273) * 1.8 + 32
    }

    return(
        <div>
            <input type="number" onChange={(e) => setValueConvert(e.target.value)} value={valueConvert}></input>
            <label><input type="radio" onClick={(e)=> setTemperatureSelect(e.target.value)} name="selecTemperatures" value="celcius"></input>Celcius</label>
            <label><input type="radio" onClick={(e)=> setTemperatureSelect(e.target.value)} name="selecTemperatures" value="fahrenheit"></input>Fahrenheit</label>
            <label><input type="radio" onClick={(e)=> setTemperatureSelect(e.target.value)} name="selecTemperatures" value="kelvin"></input>Kelvin</label>
            <h1>Temperatura em Celcius: {convertedCelcius}</h1>
            <h1>Temperatura em Fahrenheit: {convertedFahreheit}</h1>
            <h1>Temperatura em Kelvin: {convertedKelvin}</h1>
            
        </div>
        
    )

}

export default InputTest;