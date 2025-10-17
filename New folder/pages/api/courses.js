import { getFirestore } from 'firebase-admin/firestore'
import admin from '../../src/lib/firebaseAdmin'

export default async function handler(req, res){
  // This is a simple example endpoint returning mock courses.
  // Replace with Firestore access (admin.firestore()) in production.
  const courses = [
    { id: 'course-1', title: 'Intro to Algebra', shortDescription: 'Foundations of algebra' },
    { id: 'course-2', title: 'English Writing Basics', shortDescription: 'Grammar & composition' },
  ]
  res.status(200).json({ courses })
}
