import { newUser, userUrl } from '../../fixtures/apiResuests.json'

describe('Test Add user to Pet Store API', () => {


    it("Create new user ", () => {
        let response = cy.getAPIresponse('POST', userUrl, newUser)
        response.then(res => {
            expect(res.status).eql(200)
            expect(parseInt(res.body.message)).eql(newUser.id)

        })
    })


    it("Delete user", () => {
        cy.getAPIresponse('POST', userUrl, newUser)
        let response = cy.getAPIresponse('delete', userUrl + "/" + newUser.username)
        response.then(res => {
            expect(res.status).eql(200)
            expect(res.body.message).eql(newUser.username)

        })
    })

})