const Challenge = () => {
    
    const number1 = 8
    const number2 = 6
    
    const handleSumNumbers = () => {
        console.log(number1 + number2)
        
    }

    return (

        <div>
            <p>{`Number 1: ${number1}`}</p>
            <p>{`Number 2: ${number2}`}</p>
            <button onClick={handleSumNumbers}>Sum</button>
        </div>
    )
}

export default Challenge