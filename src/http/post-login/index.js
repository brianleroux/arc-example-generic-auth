let arc = require('@architect/functions')
let data = require('@begin/data')
let bcrypt = require('bcryptjs')

exports.handler = arc.http.async(/*debug,*/ login)

//async function debug(req) {return {req}}

async function login(req) {

  let result = await data.get({
    table: 'accounts',
    key: req.body.email
  })

  if (!result) {
    return {
      session: {},
      location: '/?notfound'
    }
  }

  let hash = result.password
  let good = bcrypt.compareSync(req.body.password, hash)

  if (good) {
    return {
      session: {account: { email: req.body.email }},
      location: '/admin'
    }
  }
  else {
    return {
      session: {},
      location: '/?badpassword'
    }
  }
}
