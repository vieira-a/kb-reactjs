const UserDetails = ({name, age}) => {

    const emiteCnh = () => {
        if(age >= 18){
            return 'Sim'
        } else {
            return 'Não'
        }
    }
    
    return (
        
        <>

            <h2>Nome: {name}</h2>
            <h3>Idade: {age}</h3>
            {/* <p>Pode ter CNH: {age >= 18 ? 'Sim' : 'Não'}</p> */}
            <p>Pode ter CNH: {emiteCnh()}</p>
        
        </>
  );
};

export default UserDetails;