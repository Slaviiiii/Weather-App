import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL } from '../../api'
export const Search = () => {
    const [search, setSearch] = useState(null);
    let initValue = "Sofia";
 
    const loadOptions = async (inputValue) => {
        let data = [];
        let response = "";
        try {
            if(inputValue === "") {
                response = await fetch(`${GEO_API_URL}/search.json?key=0062ffea6dda492b9c8204406231006&q=${initValue}`); 
            } else {
                response = await fetch(`${GEO_API_URL}/search.json?key=0062ffea6dda492b9c8204406231006&q=${inputValue}`); 
            }
            const res = await response.json();
            data = {
                options: res.map(x => {
                    return {
                        value: `${x.lat} ${x.lon}`,
                        label: `${x.name}, ${x.country}`
                    }
                })
            }
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const handleOnChange = (searchValue) => {
        setSearch(searchValue);

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