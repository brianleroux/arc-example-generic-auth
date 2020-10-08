let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let layout = require('@architect/views/layout')

exports.handler = arc.http.async(auth, admin)

async function admin(req) {
  let html = layout({ 
    account: req.session.account,
    body: `this is protected` 
  })
  return { html }
}
