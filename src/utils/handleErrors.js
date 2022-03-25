const handleErrors = (res, message = 'Algo sucedio', code = 403) => {
  res.status(code)
  res.json({ message })
}
module.exports = handleErrors
