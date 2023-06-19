
export class ResourcePage {

    /*========================================================================== *\
      Selectors
    /* ========================================================================== */
   

    constructor() {
        this.resourcePageLink ="[href='/resources']"
        this.resourcePageTitle=".container > h3"
     }

    /* ========================================================================== *\
        Re-Usable methods
    /* ========================================================================== */
    openResourcePage()  {
        cy.get(this.resourcePageLink).click()

    }

    checkResourcePageTitle(title) 
    {
        cy.get(this.resourcePageTitle).then(el => {
            expect(el.text()).eql(title)
        })
    }
   

  
}
