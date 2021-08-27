import React, { useRef, useState } from 'react';
import getFormValues from '../../../utils/getFormValues';
import { Form, Error } from './styles';

const CardForm = ({ onCardFormSubmit, listTitle }) => {
    const ref = useRef();
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const values = getFormValues(ref.current);
        if (!values.title) {
            setError('Title cannot be empty.');
            return;
        }
        if (!values.description) {
            setError('Description cannot be empty.');
            return;
        }
        onCardFormSubmit(values);
    };

    return (
        <Form onSubmit={onSubmit} ref={ref}>
            <h3>Add a New Card to {listTitle}</h3>
            <input type="text" name="title" placeholder="Enter Card Title" />
            <input type="text" name="description" placeholder="Enter Card Description" />
            {error && <Error>{error}</Error>}
            <button type="submit">Create Card</button>
        </Form>
    );
};

export default CardForm;
