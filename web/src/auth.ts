import { createDbAuthClient, createAuth } from '@redwoodjs/auth-dbauth-web'

let dbAuthClient
if (process.env.NODE_ENV === 'test') {
  dbAuthClient = createDbAuthClient()
} else {
  const WebAuthnClient = require('@redwoodjs/auth-dbauth-web/webAuthn').default
  dbAuthClient = createDbAuthClient({ webAuthn: new WebAuthnClient() })
}

export const { AuthProvider, useAuth } = createAuth(dbAuthClient)
