import { initializeApp } from "firebase/app"
import firebaseConfig from "@/firebase-config"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const apps = {}

function firebaseApps() {
  if (!apps.app) {
    apps.app = initializeApp(firebaseConfig)
  }

  return apps
}

function app() {
  return firebaseApps().app
}

function db() {
  if (!firebaseApps().db) {
    firebaseApps().db = getFirestore(app())
  }
  return firebaseApps().db
}

function auth() {
  if (!firebaseApps().auth) {
    firebaseApps().auth = getAuth(app())
  }
  return firebaseApps().auth
}

function storage() {
  if (!firebaseApps().storage) {
    firebaseApps().storage = getStorage(app())
  }
  return firebaseApps().storage
}

export { app, db, auth, storage }
