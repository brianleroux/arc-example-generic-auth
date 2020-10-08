let arc = require('@architect/functions')
let layout = require('@architect/views/layout')

exports.handler = arc.http.async(reg)

let form = `<form action=/register method=post>
Sign up now!
  <input name=email type=email placeholder="add your email" required>
  <input name=password type=password required>
  <button>register</button>
</form>
`

async function reg(req) {
  return { 
    html: layout({
      account: req.session.account,
      body: form
    }) 
  }
}
