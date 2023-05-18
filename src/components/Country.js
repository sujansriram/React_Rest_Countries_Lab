const Country = ({country, handleVisit}) => {
    
    return ( 
        <>
            <li>{country.name.common} {country.flag}</li>
            <button onClick={() => {handleVisit(country);}}>Visited</button>
        </>
     );
}
 
export default Country;