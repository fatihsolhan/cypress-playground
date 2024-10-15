describe('test',  () => {
  it('Configure UC Voice - Cisco Catalyst SDWAN', () => {
    cy.viewport(1440, 900);
    cy.visit('https://7c4f-2001-420-c0e0-1007-00-855.ngrok-free.app/index.html');
    cy.getAI('#j_username').type('admin');
    cy.getAI('#continueBtn').click();
    cy.getAI('#j_password').type('Cisco#123@Viptela');
    cy.getAI('#loginBtn').click();
    cy.wait(30000);
    // wait for element to appear
    cy.ifExists('.walkme-to-remove>div:nth-child(4)')
      .then(el => { if (el) cy.wrap(el).click(); });
    cy.getAI('.nav-item', { parentSelectors: ['[data-testid="Workflows"]'] }).click();
    cy.getAI('div', { parentSelectors: ['[data-testid="Workflow Library"]'] }).click();
    cy.getAI('button', { parentSelectors: ['#workflow-library-configureucvoice-action'] }).click();
    cy.getAI('//div/*[normalize-space(.)="Let’s do it"]').click();
    cy.getAI('#input-5', { parentSelectors: ['[data-testid="Name"]'] }).type('testgenai-3 a');
    cy.getAI('.hbr-stepper--content').click();
    cy.getAI('[name="name"]>div>hbr-banner').should('include.text', 'Name cannot contain any spaces or characters like ^&<>!');
    cy.getAI('#input-5', { parentSelectors: ['[data-testid="Name"]'] }).type('testgenai-33');
    cy.getAI('div', { parentSelectors: ['[name="srst"]', '.checkbox__icon>hbr-icon'] }).click();
    cy.getAI('button', { parentSelectors: ['.hbr-stepper--cta_right>hbr-button'] }).click();
    cy.getAI('div', { parentSelectors: ['[aria-label="Max Phones"]', '[aria-label="More options"]>hbr-icon'] }).click();
    cy.getAI('div', { parentSelectors: ['[data-testid="Max Phones"]>div>div:nth-child(1)>[role="combobox"]>hbr-menu>hbr-menu-item:nth-child(2)'] }).click();
    cy.getAI('div', { parentSelectors: ['[aria-label="Max Directory Numbers"]', '[aria-label="More options"]>hbr-icon'] }).click();
    cy.getAI('div', { parentSelectors: ['[data-testid="Max Directory Numbers"]>div>div:nth-child(1)>[role="combobox"]>hbr-menu>hbr-menu-item:nth-child(2)'] }).click();
    cy.getAI('div', { parentSelectors: ['[aria-label="Music on Hold"]', '[aria-label="More options"]>hbr-icon'] }).click();
    cy.getAI('div', { parentSelectors: ['[data-testid="Music on Hold"]>div>div:nth-child(1)>[role="combobox"]>hbr-menu>hbr-menu-item:nth-child(2)'] }).click();
    cy.getAI('button', { parentSelectors: ['.hbr-stepper--cta_right>hbr-button:nth-child(2)'] }).click();
  })
});
