/**
 * 
 * @param {String} userName 
 * @param {String} password 
 * @param {String} role 
 * @param {String} status 
 */
function login(userName, password, role='admin', status='active'){
    console.log(userName, password, role, status);
}

login('savi','root');
login('savi','root', 'seller');
login('savi','root', '', 'inactive');