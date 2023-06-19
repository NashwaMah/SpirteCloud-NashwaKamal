
export class HomePage {

    /*========================================================================== *\
      Selectors
    /* ========================================================================== */
   

    constructor() {
        this.homePageLink ="[href='/home']"
        this.homePageTitle="#title"
     }

    /* ========================================================================== *\
        Re-Usable methods
    /* ========================================================================== */
    openHomePage()  {
       cy.get(this.homePageLink).click()

    }

    checkHomePageTitle(title) 
    {
        cy.get(this.homePageTitle).then(el => {
            expect(el.text()).eql(title)
        })
    }
   
    openUrlFromHomePage(urlName)
    {
        cy.get("a").contains(urlName).click()
    }

  
}
