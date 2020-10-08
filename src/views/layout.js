module.exports = function layout(params) {

  let logout = `<a href=/logout>logout</a>`
  let notauthed = `<a href=/login>login</a> | <a href=/register>register</a>`

  return `<!doctype html>
<html>
<h1>my login app</h1>
${ params.account ? logout : notauthed }
${ params.body }
</html>`
}
