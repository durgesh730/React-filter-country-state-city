import React, { useState, useEffect } from "react";

function Main() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/https://d32sbion19muhj.cloudfront.net/pub/interview/countries")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCountries(data?.data);
            })
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            fetch(
                `http://localhost:8080/https://d32sbion19muhj.cloudfront.net/pub/interview/states?countryId=${selectedCountry}`
            )
                .then((response) => response.json())
                .then((data) => {
                    // Filter the states to include only those from the selected country
                    const statesFromSelectedCountry = data.data.filter(
                        (state) => state.country_id === parseInt(selectedCountry)
                    );
                    setStates(statesFromSelectedCountry);
                    // Clear the selectedState when a new country is selected
                    setSelectedState("");
                })
                .catch((error) => console.error("Error fetching states:", error));
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            fetch(
                `http://localhost:8080/https://d32sbion19muhj.cloudfront.net/pub/interview/cities?stateId=${selectedState}`
            )
                .then((response) => response.json())
                .then((data) => {
                    // Filter the states to include only those from the selected country
                    const cityFromSelectedstate = data.data.filter(
                        (state) => state.state_id === parseInt(selectedState)
                    );
                    console.log(cityFromSelectedstate, "ksnkjsna")
                    setCities(cityFromSelectedstate);
                })
                .catch((error) => console.error("Error fetching cities:", error));
        }
    }, [selectedState]);

    return (
        <div className="App">
            <label htmlFor="country">Country:</label>
            <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
            >
                <option value="">Select Country</option>
                {countries?.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country?.name}
                    </option>
                ))}
            </select>

            <label htmlFor="state">State:</label>
            <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
            >
                <option value="">Select State</option>
                {states?.map((state) => (
                    <option key={state.id} value={state.id}>
                        {state?.name}
                    </option>
                ))}
            </select>

            <label htmlFor="city">City:</label>
            <select id="city">
                <option value="">Select City</option>
                {cities?.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city?.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Main;
