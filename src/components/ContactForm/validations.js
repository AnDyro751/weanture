const validate = (values, props /* only available when using withFormik */) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Campo requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Dirección de correo inválida';
    }
    if (!values.name) {
        errors.name = "Campo requerido"
    } else if (values.name.length > 50) {
        errors.name = "Ingresa un nombre más corto"
    }
    if (!values.message) {
        errors.message = "Campo requerido"
    } else if (values.name.length > 500) {
        errors.message = "Mensaje demasiado largo";
    }

    return errors;
};
export {validate}
