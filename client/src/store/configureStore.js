import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/users'
import notesReducer from '../reducers/notes'
import categoriesReducer from "../reducers/categories";
import noteReducer from '../reducers/note'
import categoryReducer from '../reducers/category'
import tagsReducer from '../reducers/tags';
import tagReducer from '../reducers/tag';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: usersReducer,
      notes: notesReducer,
      categories: categoriesReducer,
      note: noteReducer,
      category: categoryReducer,
      tags: tagsReducer,
      tag: tagReducer
    })
  );
  return store
}

export default configureStore