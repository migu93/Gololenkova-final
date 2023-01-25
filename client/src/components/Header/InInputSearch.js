import React, {useState} from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputSearch = ({ value, onChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="d-flex align-items-center">
            <FormControl value={value} onChange={onChange} />
            <Button className="my-2" type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </div>
    );
};

export default InputSearch;
