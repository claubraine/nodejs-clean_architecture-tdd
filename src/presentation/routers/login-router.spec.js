
const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-param-error')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('Should return 400 if no email is provide', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.router(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
  test('Should return 400 if no password is provide', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.router(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
  test('Should return 500 if no httpRequest', () => {
    const sut = makeSut()
    const httpResponse = sut.router()
    expect(httpResponse.statusCode).toBe(500)
  })
  test('Should return 500 if no httpRequest as no body', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.router(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
