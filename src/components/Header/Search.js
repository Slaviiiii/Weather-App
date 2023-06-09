import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api'
export const Search = () => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        let data = [];
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=5000&namePrefix=${inputValue}`, geoApiOptions)
            const res = await response.json();
            let filteredData = res.data.filter((obj, index) => res.data.findIndex((item) => item.name === obj.name) === index);
            data = {
                options: filteredData.map(x => {
                    return {
                        value: `${x.latitude} ${x.longitude}`,
                        label: `${x.name}, ${x.countryCode}`
                    }
                })
            }
            return data
        }
        catch (err) {
            console.log(err.message)
        }

    }
    const handleOnChange = (searchValue) => {
        setSearch(searchValue)
    }
    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}