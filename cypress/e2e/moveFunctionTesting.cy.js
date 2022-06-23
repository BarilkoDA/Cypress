const appURL = 'https://app-qa.sortly.co/',
      email = 'dmitry.barilko+qaaqa@jetruby.com',
      password = '123123123';

describe('Move function test',  () => {

    before( () => {
        //Initial conditions
        //cy.viewport(1440, 900);
        //login page
        cy.visit(appURL);
        cy.get('input[name="email"]', { timeout: 15000 }).type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('form>div>button').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('be.visible').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        
        //Create first folder
        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(2)').click();
        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('Folder_A');
        cy.get('[data-testid="submit-button"]').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('not.exist');
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('be.visible');
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('not.exist');
        //Create second folder
        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(2)').click();
        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('Folder_B');
        cy.get('[data-testid="submit-button"]').click();

        cy.get('#modal-close-icon', { timeout: 15000 }).should('not.exist');
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('be.visible');
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('not.exist');
        //Go to the folder A
       
        cy.get('[data-testid="tree-list-row"]').contains('Folder_A').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        // Create first Item

        cy.get('[data-testid="add-button"]').click();
        cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(1)').click();

        cy.get('#modal-wrapper').should('be.visible');

        cy.get('[name="name"]').click();
        cy.get('[name="name"]').type('SecondItemForMoving');
        cy.get('[data-testid="quantity-field"]').clear();
        cy.get('[data-testid="quantity-field"]').click();
        cy.get('[data-testid="quantity-field"]').type(10);
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('be.visible');
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('not.exist');
         // Create second Item

         cy.get('[data-testid="add-button"]').click();
         cy.get('.AddButton__OptionsWrapper-sc-5k7at3-0>div>div:nth-child(1)').click();
 
         cy.get('#modal-wrapper').should('be.visible');

         cy.get('[name="name"]').click();
         cy.get('[name="name"]').type('FirstItemForMoving');
         cy.get('[data-testid="quantity-field"]').clear();
         cy.get('[data-testid="quantity-field"]').click();
         cy.get('[data-testid="quantity-field"]').type(10);
         cy.get('[data-testid="submit-button"]').click();
         cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
         cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();
         cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('be.visible');
        cy.get('.ui__SpinnerWrapper-sc-b64exg-0', { timeout: 10000 }).should('not.exist');

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

        cy.get('[data-testid="tree-list-row"]', { timeout: 10000 }).contains('Folder_A').should('be.visible');
        cy.get('[data-testid="tree-list-row"]').contains('Folder_A').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 15000 }).should('not.exist');
    });
    
     it('Test 1: Verify close modal window by cross button.', () => {
       
         cy.get('[data-testid="node-card-0"]', { timeout: 10000 }).should('be.visible');
		 cy.get('[data-testid="node-card-0"]').trigger('mouseover');
         cy.get('[data-testid="move"]').click();

         cy.get('#modal-wrapper').should('be.visible');

         cy.get('[data-testid="cancel-button"]', { timeout: 10000 }).should('be.visible');
         cy.get('[data-testid="cancel-button"]').click();
        
         cy.get('#modal-wrapper').should('not.exist');

         cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '10 units');
    });
    it('Test 2: Verify close modal window by click outside the modal.',  () => {
        cy.get('[data-testid="node-card-0"]', { timeout: 10000 }).should('be.visible');
        cy.get('[data-testid="node-card-0"]').trigger('mouseover');
        cy.get('[data-testid="move"]').click();

        cy.get('#modal-wrapper').should('be.visible');

        cy.get('body').click(0,0); // Click outside move modal

        cy.get('#modal-wrapper').should('not.exist'); 

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '10 units');
    });
     it('Test 3: Verifying the data filling for the "Quantity to move" field.',  () => {
        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').should('be.visible');
        cy.get('[data-testid="name"]').contains('FirstItemForMoving').trigger('mouseover');
        
        cy.get('[data-testid="move"]').click();

        cy.get('#modal-wrapper').should('be.visible');
                
        cy.get('#modal-wrapper [data-testid="tree-list-row"]').contains('Folder_B').click();
        
        cy.get('[data-testid="keep-with-zero-qty"]').clear();
        cy.get('[data-testid="keep-with-zero-qty"]').type(0);

        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('#modal-wrapper').should('not.exist'); 
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('[data-testid="notification-popup"]').should('be.visible');
        cy.get('[data-testid="notification-popup"]').should('contain', 'Move Success');
        cy.get('[data-testid="notification-popup"]', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '10 units');

        cy.get('[data-testid="tree-list-row"]').contains('Folder_B').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '0 unit');
    });
    
    it('Test 4: Move 5 qty.',  () => {
        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').should('be.visible');
        cy.get('[data-testid="name"]').contains('FirstItemForMoving').trigger('mouseover');
        
        cy.get('[data-testid="move"]').click();

        cy.get('#modal-wrapper').should('be.visible');
                
        cy.get('#modal-wrapper [data-testid="tree-list-row"]').contains('Folder_B').click();
        
        cy.get('[data-testid="keep-with-zero-qty"]').clear();
        cy.get('[data-testid="keep-with-zero-qty"]').type(5);

        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('#modal-wrapper').should('not.exist'); 
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('[data-testid="notification-popup"]').should('be.visible');
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '5 units');

        cy.get('[data-testid="tree-list-row"]').contains('Folder_B').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '5 units');
    });

    it('Test 5: Move full qty.',  () => {
        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').should('be.visible');
        cy.get('[data-testid="name"]').contains('FirstItemForMoving').trigger('mouseover');
        
        cy.get('[data-testid="move"]').click();

        cy.get('#modal-wrapper').should('be.visible');
                
        cy.get('#modal-wrapper [data-testid="tree-list-row"]').contains('Folder_B').click();

        cy.get('[data-testid="move-all-button"]').click();

        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('#modal-wrapper').should('not.exist'); 
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('[data-testid="notification-popup"]').should('be.visible');
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').should('not.exist');
        cy.get('[data-testid="tree-list-row"]').contains('Folder_B').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '10 units');
    });
    it('Test 6: Move full qty with Leave 0 qty on item.',  () => {
        cy.get('[data-testid="tree-list-row"]').contains('Folder_B').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]').contains('FirstItemForMoving').trigger('mouseover');
        
        cy.get('[data-testid="move"]').click();

        cy.get('#modal-wrapper').should('be.visible');
                
        cy.get('#modal-wrapper [data-testid="tree-list-row"]').contains('Folder_A').click();

        cy.get('[data-testid="move-all-button"]').click();

        cy.get('.ui__SwitcherRoot-sc-ebhfot-1').click();

        cy.get('[data-testid="submit-button"]').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('#modal-wrapper', { timeout: 10000 }).should('not.exist'); 
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');
        cy.get('[data-testid="notification-popup"]').should('be.visible');
        cy.get('.AlertTemplate__Close-sc-1uycziq-5').click();

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '0 unit');

        cy.get('[data-testid="tree-list-row"]').contains('Folder_A').click();
        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="name"]', { timeout: 10000 }).contains('FirstItemForMoving').closest('div').should('contain', '10 units');
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

        cy.get('#modal-wrapper', { timeout: 20000 }).should('not.exist'); 

        cy.get('.Spinner__StyledFlex-sc-19ibjy7-3', { timeout: 10000 }).should('not.exist');

        cy.get('[data-testid="settings-button"]', { timeout: 10000 }).click();
        cy.get('[data-testid="logout"]').click();
        cy.get('[data-testid="submit-button"]').click();
    });
  });