import { defineBackend } from '@aws-amplify/backend';
import { get_function } from './functions/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';

defineBackend({
  auth,
  data,
  get_function,
});
