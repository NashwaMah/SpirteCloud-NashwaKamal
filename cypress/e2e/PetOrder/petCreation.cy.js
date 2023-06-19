import { newPet ,updatePet , petURL } from '../../fixtures/apiResuests.json'

describe('Test Pet Store API', () => {


  it("Add new pet", () => {
    let response = cy.getAPIresponse('POST', petURL, newPet)

    response.then(res => {
      cy.log(JSON.stringify(res.body))
      expect(res.status).eql(200)
    })
  })

  it("Update Pet", () => {
    let response = cy.getAPIresponse('PUT', petURL, newPet)

    response.then(res => {
      cy.log(JSON.stringify(res.body))
    })
  })

  it("Delete Pet", () => {
    cy.getAPIresponse('POST', petURL, updatePet)
    let response = cy.getAPIresponse('delete', petURL+'/'+updatePet.id)
    response.then(res => {
      cy.log(JSON.stringify(res.body))
      expect(res.status).eql(200)
    })
  })

})