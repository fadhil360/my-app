// userData.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

// Simpan progress pengguna
export const saveUserProgress = async (userId, progress) => {
  await setDoc(doc(db, 'users', userId), { progress }, { merge: true });
};

// Ambil data pengguna
export const getUserData = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};
