import { HomePage } from '../modeules/uiTestingPlayground/pages/home'
import { ResourcePage } from '../modeules/uiTestingPlayground/pages/resoruces'
import uiTest from '../fixtures/uiTest.json'


const homePage = new HomePage()
const resourcePage = new ResourcePage()
describe('Test UI testing playground', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Open Home Link , check URL and Title", () => {

        homePage.openHomePage()
        homePage.checkHomePageTitle(uiTest.homeHeader)
        cy.url().should("contain", uiTest.homeUrl)
    })

    it("Open resource Link , Check URL and Title", () => {

        resourcePage.openResourcePage()
        resourcePage.checkResourcePageTitle(uiTest.resourceHeader)
        cy.url().should("contain", uiTest.resourceUrl)
    })

    it("Open Specific Link from HomePage and check redirection", () => {

        homePage.openHomePage()
        homePage.openUrlFromHomePage(uiTest.linkToOpenFromHomepage)
        cy.url().should("contain", uiTest.homelinkCheck)
    })

    it("Open Specific Link from HomePage and check redirection", () => {
        const urlRedirects = [];
        cy.on('url:changed', (url) => {
                urlRedirects.push(url);
            });
        resourcePage.openResourcePage()
        homePage.openUrlFromHomePage(uiTest.linkToOpenFromResourcepage)
        cy.then(() => {
            expect(urlRedirects[1]).to.eq(uiTest.resourcelinkCheck);
        });
    })
})