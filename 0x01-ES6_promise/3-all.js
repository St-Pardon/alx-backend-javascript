import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()]) // imported are functions
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
