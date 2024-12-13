export default function isEmailValid(email: string, ...validations: ((str: string) => boolean)[]): boolean {

    for(let i = 0; i < validations.length; i++) {
        if(!validations[i](email)) return false;
    }
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    return emailRegexp.test(email)
    
}