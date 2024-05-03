function authHeader() {
    let token = localStorage.getItem('token');
    if (token !== '') {
        return {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    } else {
        return {}
    }
}

const getAuthHeader = {
    authHeader
}

export default getAuthHeader;