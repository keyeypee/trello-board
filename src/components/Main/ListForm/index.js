import React, { useRef, useState } from 'react';
import getFormValues from '../../../utils/getFormValues';
import { Form, Error } from './styles';

const ListForm = ({ onSectionFormSubmit, listObj }) => {
    const ref = useRef();
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const values = getFormValues(ref.current);
        if (listObj.hasOwnProperty(values.listTitle)) {
            setError('List with same name already exists.');
            return;
        }
        if (!values.listTitle) {
            setError('List title cannot be empty.');
            return;
        }
        onSectionFormSubmit(values);
    };

    return (
        <Form onSubmit={onSubmit} ref={ref}>
            <h3>Add a New List</h3>
            <input type="text" name="listTitle" placeholder="Enter List Title" />
            {error && <Error>{error}</Error>}
            <button type="submit">Create List</button>
        </Form>
    );
};

export default ListForm;
