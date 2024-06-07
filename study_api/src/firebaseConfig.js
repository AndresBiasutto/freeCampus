const admin = require('firebase-admin');
const {
  FIREBASE
} = process.env;
const serviceAccount = require('./studycloud-7ffd9-firebase-adminsdk-ak44o-3728d66474.json'); // Cambia esta ruta

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://studycloud-7ffd9.appspot.com' // Cambia esto por tu bucket de Firebase
});

const bucket = admin.storage().bucket();
module.exports = bucket;
