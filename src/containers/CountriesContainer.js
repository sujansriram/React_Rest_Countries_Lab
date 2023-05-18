import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesContainer = () => {

    const[countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries()
    }, [])



    const handleVisit = (country) => {
        if(visitedCountries.includes(country)){
            const updatedCountries = [country, ...countries];
            const updatedVisitedCountries = visitedCountries.filter(countryObject => countryObject.name.common !== country.name.common)
            setVisitedCountries(updatedVisitedCountries);
            setCountries(updatedCountries);
        } else if (countries.includes(country)){
            const updatedVisitedCountries = [...visitedCountries, country];
            const updatedCountries = countries.filter(countryObject => countryObject.name.common !== country.name.common)
            setVisitedCountries(updatedVisitedCountries);
            setCountries(updatedCountries);
        }
        
    }

    return (  
        <>
            <div class="visited_countries">
                <h2>Countries I have already visited:</h2>
                {visitedCountries.map((country) => (
                    <Country country={country} handleVisit={handleVisit} visited={true}/>))}
            </div>
            
            <div class="countries_to_visit">
                <h2>Countries I want to visit:</h2>
                <ul>{countries.map((country) => (
                    <Country country={country} handleVisit={handleVisit} visited={false}/>))}</ul>
            </div>
        </>
    );
}
 
export default CountriesContainer;