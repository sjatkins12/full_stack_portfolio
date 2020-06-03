import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { githubSaga } from "./github";
import { aiSaga } from "./ai";
import { contactInfoSaga } from "./contactInfo";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers(), applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(githubSaga);
  sagaMiddleware.run(aiSaga);
  sagaMiddleware.run(contactInfoSaga);
  return store;
}
