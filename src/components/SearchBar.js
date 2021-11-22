import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em' />
            <input  
                onChange={(event) => handleSearchNote(event.target.value)}
                type='text' 
                placeholder='Type to search...'
                style={{flex: 1}}
            />
        </div>
    );
}

export default SearchBar;
