/**
  Placeholder admin SDK initialiser for Next.js server-side functions.
  To use:
  - Create a Firebase service account and put the JSON into an env var or file.
  - Initialize admin like below (ensure private key newlines are handled).
*/
import admin from 'firebase-admin'

if(!admin.apps.length){
  const privateKey = process.env.FIREBASE_PRIVATE_KEY || ''
  try{
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // replace escaped newlines
        privateKey: privateKey.replace(/\\n/g, '\n'),
      })
    })
  }catch(e){
    console.warn('Firebase admin init skipped (missing env vars).', e.message)
  }
}

export default admin
