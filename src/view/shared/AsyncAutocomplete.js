/** 
Autocomplete Async Component 
->No form required
->has LOCAL searching
->has default option selection
**/

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const AsyncAutocomplete = React.memo((props) => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const {
        defaultOption,
        fetchOptions,
        onSelect,
        labelKey = "label",
        label = "Label",
        variant = "outlined",
        fullWidth = false,
        ...rest
    } = props

    React.useEffect(() => {
        (async () => {
            const response = await fetchOptions();
            setOptions(response);
        })();
    }, [defaultOption, fetchOptions]);
    return (
        <Autocomplete
            key={options.length}
            id="asynchronous"
            style={{ width: fullWidth ? "100%" : 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.id === value.id}
            defaultValue={options?.find((option) => option.id === defaultOption)}
            onChange={(_, value) => onSelect(value)}
            getOptionLabel={(option) => option[labelKey]}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant={variant}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
            {...rest}
        />
    );
})

export default AsyncAutocomplete
