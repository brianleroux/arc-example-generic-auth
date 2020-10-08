let arc = require('@architect/functions')
let layout = require('@architect/views/layout')

exports.handler = arc.http.async(index)

async function index(req) {
  return { 
    html: layout({
      account: req.session.account,
      body: 'hi from index'
    }) 
  }
}
