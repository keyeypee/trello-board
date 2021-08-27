const getFormValues = (form) => {
    const { elements } = form;
    const obj ={};
    for(let i = 0 ; i < elements.length ; i++){
        const item = elements.item(i);
        obj[item.name] = item.value;
    }

    return obj;
}

export default getFormValues;