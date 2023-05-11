
export default (data) => {
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid';
    }
    if(!data.email) {
        errors.e2 = 'Email is required';
    }
    if(data.email.length > 35){
        errors.e3 = `Email can't be longer than 35 characters`
    }
    if((!/\d/.test(data.password))){
        errors.p1 = 'Password needs to have a number';
    }
    if(data.password.length < 6 && data.password.length > 10){
        errors.p2 = 'Password needs to be between 6 and 10 characters';
    }
    return errors
}