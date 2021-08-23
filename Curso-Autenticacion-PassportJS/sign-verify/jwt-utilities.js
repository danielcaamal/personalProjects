const jwt = require('jsonwebtoken');

// Read -node index.js option nameOrToken
const [, , option, secret, nameOrToken] = process.argv;

// Verifying option, secret and nameOrToken
if (!option || !secret || !nameOrToken) {
    return console.log("Missing Arguments");
}

// Sign name, returns Token
function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

// Returns decodified Token
function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

if (option == 'sign') {
    console.log(signToken({ sub: nameOrToken }, secret));
} else if (option == 'verify') {
    console.log(verifyToken(nameOrToken, secret));
} else {
    console.log('Options needs to be "sign" or "verify"');
}

// DEPENDENCIES: jsonwebtoken
// SIGN:
// input: node sign-verify/jwt-utilities.js sign secret "MESSAGE"
// output: TOKEN

// VERIFY:
// input: node sign-verify/jwt-utilities.js verify secret -TOKEN
// output: { sub: 'MESSAGE', iat: #}