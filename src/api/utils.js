export const handleResponse = (response) => {
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.data.message);
    }
}

export const handleError = (error) => {
    console.error(`API CALL FAILED$. ${error}`);
    throw new Error(error);
}