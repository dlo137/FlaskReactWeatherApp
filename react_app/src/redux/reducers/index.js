import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  whitelist: [
		// add reducers to that you want to persist
	],
};
const rootReducer = combineReducers({
	// write youre reducers here
});

export default persistReducer(persistConfig, rootReducer);