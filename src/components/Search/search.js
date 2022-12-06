import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api-constants";

const Search = (onSearchChange) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
                geoApiOptions);

            const resJson = await response.json();

            const options = resJson?.data?.map((city) => {
                return {
                    value: `${city.latitude}, ${city.longitude} `,
                    label: `${city.name}, ${city.countryCode}`,
                };
            });

            return { options: options || [] };
        } catch (err) {
            console.log('err ::: ', err);
        }
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    };

    return (
        <AsyncPaginate
            placeholder="Search the city"
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}

        />
    )
}

export default Search;