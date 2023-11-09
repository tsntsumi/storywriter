"use client"

import React, { useCallback, useEffect, useState } from "react"

import { User as FirebaseUser } from "firebase/auth"
import {
  buildCollection,
  buildProperty,
  buildEnumValues,
  EntityReference,
  Authenticator,
  FirebaseCMSApp
} from "firecms"

import "typeface-rubik"
import "@fontsource/ibm-plex-mono"
import firebaseConfig from "@/firebase-config"

import { productsCollection } from "@/lib/collections/products"
import { blogCollection } from "@/lib/collections/blogentries"

export default function CMS() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!")
      }

      console.log("Allowing access to", user?.email)

      return true
    },
    []
  )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center">Now loading...</div>
  }

  return (
    <FirebaseCMSApp
      name={"Story Make Sales"}
      basePath={"/cms"}
      authentication={myAuthenticator}
      collections={[blogCollection, productsCollection]}
      firebaseConfig={firebaseConfig}
    />
  )
}
