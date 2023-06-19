import { HomePage } from '../modeules/uiTestingPlayground/pages/home'
import {ResourcePage} from '../modeules/uiTestingPlayground/pages/resoruces'
import uiTest from '../fixtures/uiTest.json'


const homePage = new HomePage()
const resourcePage = new ResourcePage()
describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Check Home Page header and URL", () => {

        homePage.openHomePage()
        homePage.checkHomePageTitle(uiTest.homeHeader)
        cy.url().should("contain", uiTest.homeUrl)
    })

    it("Check Resource Page header and URL", () => {

        resourcePage.openResourcePage()
        resourcePage.checkResourcePageTitle(uiTest.resourceHeader)
        cy.url().should("contain", uiTest.resourceUrl)
    })
})