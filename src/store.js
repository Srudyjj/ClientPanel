import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBC4b3JxGkMT5o7NHqe2ETrVlcsbbstGjI',
  authDomain: 'clientpanel-d8d12.firebaseapp.com',
  databaseURL: 'https://clientpanel-d8d12.firebaseio.com',
  projectId: 'clientpanel-d8d12',
  storageBucket: 'clientpanel-d8d12.appspot.com',
  messagingSenderId: '952485196948'
};
// firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReduser = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReduser,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
