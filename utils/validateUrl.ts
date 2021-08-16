
export const validateUrl = (url: string) => {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#&//=]*)/gi;
    const regex = new RegExp(expression);

    // Check if url is even given
    if (url.length <= 0) return { valid: false, error: 'A URL must be provided.' };

    // Check if url is a valid url by matching regex (Requires http/https)
    if (url.match(regex)) {
        return { valid: true, error: null }
    } else {
        return { valid: false, error: 'Please enter a valid URL.' }
    };

}