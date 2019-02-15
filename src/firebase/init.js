import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBURYL-_4jD6DiQepMqJzMrtPdm-c5tRyo",
  authDomain: "lyft-log.firebaseapp.com",
  databaseURL: "https://lyft-log.firebaseio.com",
  projectId: "lyft-log",
  storageBucket: "lyft-log.appspot.com",
  messagingSenderId: "1015630077743"
}

firebase.initializeApp(config)

const fb = firebase.firestore()
const auth = firebase.auth() 

fb.settings({ timestampsInSnapshots: true })

export {
  fb,
  auth
}