import { orderURL ,newOrder } from '../../fixtures/apiResuests.json'

describe('Test Order Pet', () => {


  it("Place order for pet ", () => {
    let response = cy.getAPIresponse('POST', orderURL, newOrder)

    response.then(res => {
      expect(res.status).eql(200)
      expect(JSON.stringify(res.body)).eq(JSON.stringify(newOrder))
    })
  })

  it("Find Purchase Order", () => {
    let response = cy.getAPIresponse('GET', orderURL+'/'+ newOrder.id)
    response.then(res => {
     delete res.body.shipDate;
     delete newOrder.shipDate
      expect(JSON.stringify(res.body)).eq(JSON.stringify(newOrder))
    })
  })

  it("Delete Purchase Order By ID", () => {
    cy.getAPIresponse('POST', orderURL, newOrder)
    let response = cy.getAPIresponse('delete', orderURL+'/'+ newOrder.id)
    response.then(res => {
      expect(res.status).eql(200)
      expect(parseInt( res.body.message)).eql(newOrder.id)
    })
  })

})