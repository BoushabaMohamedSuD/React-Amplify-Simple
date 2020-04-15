import { ValidationTextFields } from '../items/item';
import { Auth } from 'aws-amplify';
console.log('get session');
Auth.currentAuthenticatedUser({
    bypassCache: false
}).then(user => console.log(user))
    .catch(err => console.log(err));