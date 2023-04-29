// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, UserSetting, Todo } = initSchema(schema);

export {
  Post,
  UserSetting,
  Todo
};