import { newUser ,userUrl} from '../../fixtures/apiResuests.json'

describe('Test Add user to Pet Store API', () => {


  it("Create new user ", () => {
    let response = cy.getAPIresponse('POST', userUrl, newUser)

    response.then(res => {
      cy.log(JSON.stringify(res.body))
      expect(res.status).eql(200)
    })
  })

  
  it("Delete user", () => {
    cy.getAPIresponse('POST', userUrl, newUser)
    let response = cy.getAPIresponse('delete', userUrl+"/"+newUser.username)
    response.then(res => {
      cy.log(JSON.stringify(res.body))
      expect(res.status).eql(200)
    })
  })

})