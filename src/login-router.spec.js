class LoginRouter {
  router (httpRequest) {
    if (!httpRequest.body.email || !httpRequest.body.password) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no email is provide', () => {
    const sut = new LoginRouter()
    const httoRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.router(httoRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  test('Should return 400 if no password is provide', () => {
    const sut = new LoginRouter()
    const httoRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.router(httoRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
