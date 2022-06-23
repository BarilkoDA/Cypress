const appURL = 'https://app-qa.sortly.co/',
      email = 'dmitry.barilko+qaaqa@jetruby.com',
      password = '123123123';

describe('Item move modal fields validation', () => {

    before(() => {
        //login page
        cy.visit(appURL);
        cy.get('input[name="email"]', { timeout: 15000 }).type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('form>div>button').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('be.visible').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        // Create folder

        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(2)').click();
        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('Folder');
        cy.get('[data-testid="submit-button"]').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('not.exist');
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
        

        // Draft Item

        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(1)').click();

        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('DraftItem');
        cy.get('[data-testid="quantity-field"]').clear();
        cy.get('[data-testid="quantity-field"]').click();
        cy.get('[data-testid="quantity-field"]').type('/b');
        cy.get('[data-testid="quantity-field"]').type(10);
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
        // Create Item 

        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(1)').click();

        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('TestItem');
        cy.get('[data-testid="quantity-field"]').clear();
        cy.get('[data-testid="quantity-field"]').click();
        cy.get('[data-testid="quantity-field"]').type('/b');
        cy.get('[data-testid="quantity-field"]').type(10);
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
         //Log out from the account
         cy.get('[data-testid="settings-button"]', { timeout: 10000 }).click();
         cy.get('[data-testid="logout"]').click();
         cy.get('[data-testid="submit-button"]').click();

    });
    beforeEach(() => {
      cy.visit(appURL);
      cy.get('input[name="email"]', { timeout: 15000 }).type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('form>div>button').click();

      cy.get('#modal-close-icon', { timeout: 15000 }).should('be.visible').click();
      cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
      cy.get('[data-testid="node-card-0"]', { timeout: 15000 }).should('be.visible');
    
      cy.get('[data-testid="name"]', { timeout: 10000 }).contains('TestItem').should('be.visible');
      cy.get('[data-testid="name"]').contains('TestItem').trigger('mouseover');
      
      cy.get('[data-testid="move"]').click();

      cy.get('#modal-wrapper').should('be.visible');
              
      cy.get('#modal-wrapper [data-testid="tree-list-row"]').contains('Folder').click();
        
    });
    // Input value | Validation message
    const alias = [
      [' ', 'is not a number'],
      ['text', 'is not a number'],
      ['11', 'must be less than or equal to 10']
    ];
    alias.forEach((item, i) => {
      it(`Verification of validations messages case ${i+1}`, () => {
        
          cy.get('[data-testid="keep-with-zero-qty"]').clear();
          cy.get('[data-testid="keep-with-zero-qty"]').type(item[0]);
          cy.get('.Input__ErrorMessage-sc-lw4znd-7').should('be.visible');
          cy.get('.Input__ErrorMessage-sc-lw4znd-7').should('have.text', item[1]);
          cy.get('[data-testid="cancel-button"]').click();
          cy.get('#modal-wrapper').should('not.exist');
      }); 
    });

    afterEach( () => {
      //Log out from the account
      cy.get('[data-testid="settings-button"]', { timeout: 10000 }).click();
      cy.get('[data-testid="logout"]').click();
      cy.get('[data-testid="submit-button"]').click();
    });
    after ( () => {
        //login page
        cy.visit(appURL);
        cy.get('input[name="email"]', { timeout: 15000 }).type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('form>div>button').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('be.visible').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="node-card-0"]', { timeout: 15000 }).should('be.visible');
        cy.get('[data-testid="node-card-0"]').trigger('mouseover');
        cy.get('[data-testid="checkbox"]').click();
        cy.get('[data-testid="bulk-select-header-anchor"]').click();
        cy.get('[data-testid="all-nodes-option"]').should('be.visible').click();
        cy.get('.ui__SpinnerWrapper-sc-14t8x9n-7').should('not.exist');
      
        cy.get('#bulk-actions [data-testid="dropdown-anchor"]').click();
        cy.get('[data-testid="bulk-delete"]').click();
        cy.get('[data-testid="submit-button"]').click();

        cy.get('#modal-wrapper', { timeout: 15000 }).should('not.exist'); 

        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="settings-button"]', { timeout: 10000 }).click();
        cy.get('[data-testid="logout"]').click();
        cy.get('[data-testid="submit-button"]').click();
    });
  });