let arc = require('@architect/functions')
let layout = require('@architect/views/layout')

exports.handler = arc.http.async(login)

let loginform = `<form action=/login method=post>
  <input name=email type=email placeholder="add your email" required>
  <input name=password type=password required>
  <button>login</button>
</form>
`

async function login(req) {
  return { 
    html: layout({
      account: req.session.account,
      body: loginform
    }) 
  }
}
