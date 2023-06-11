import { AsyncPaginate } from 'react-select-async-paginate';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext'

export const Search = () => {
    const { loadOptions, handleOnChange, search } = useContext(WeatherContext);
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