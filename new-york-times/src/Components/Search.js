import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import searchIcon from '../Icons/search.svg'

function Search(props){
    return(
        <>
            <TextField
            style={{margin: "25px"}}
            variant="outlined"
            type="search"
            label="Search"
            onChange={props.onChange}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <img alt="search" style={{height: "50px"}} src={searchIcon}/>
                </InputAdornment>
            ),
            }}  
            />
        </>
    )
}

export default Search