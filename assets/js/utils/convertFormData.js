function convertFormData(form) {
    const formData = {};
    const data = new FormData(form);
    data.forEach((value, key) => {
        formDataObject[key] = value;
    });

    return formData;
}

export default convertFormData;
