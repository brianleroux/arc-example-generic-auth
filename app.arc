@app
authflow

@http
get /

get /admin # super important
get /login
get /logout
get /register
get /forgot
get /reset/:token

post /register
post /login
post /logout
post /forgot
post /reset

@tables
# accounts key of email
data
  scopeID *String
  dataID **String
  ttl TTL
