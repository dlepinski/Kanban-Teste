describe('Validação de Criação e Edição de Cards no Kanban', () => {
    it('Adicionando novos itens', () => {
        cy.visit('https://kanban-dusky-five.vercel.app');
        cy.log('LIMPAR LISTAS EXISTENTES ANTES DE ADICIONAR NOVA');

        cy.get('div[id$="trash"]').each($el => {
            cy.wrap($el).click();
        });
        cy.log('ADICIONA NOVA LISTA');

        cy.contains('Adicionar outra lista')
            .should('be.visible')
            .click();
        cy.get('input[type="text"]')
            .click()
            .type('Lista Teste do Cypress');
        cy.contains('button', 'Adicionar Lista')
            .click();
        cy.log('ADICIONA NOVA TAREFA');

        cy.contains('Adicionar Tarefa')
            .should('be.visible')
            .click();
        cy.get('input[type="text"]')
            .click()
            .type('Tarefa teste');
        cy.contains('button', 'Enviar')
            .click();
        cy.log('ADICIONA NOVA TAG');

        cy.get('.sc-gKXOVf')
            .click();
        cy.get('#1Color')
            .click();
        cy.get('section > .custom-input > p')
            .type('Tag Teste');
        cy.contains('button', 'Enviar')
            .click();
    });
    it('Excluindo Itens', () => {
        cy.visit('https://kanban-dusky-five.vercel.app');
        cy.log('LIMPAR LISTAS EXISTENTES ANTES DE ADICIONAR NOVA');

        cy.get('div[id$="trash"]').each($el => {
            cy.wrap($el).click();
        });
        cy.log('ADICIONA NOVA LISTA');

        cy.contains('Adicionar outra lista')
            .should('be.visible')
            .click();
        cy.get('input[type="text"]')
            .click()
            .type('Lista Teste do Cypress');
        cy.contains('button', 'Adicionar Lista')
            .click();
        cy.log('ADICIONA NOVA TAREFA');

        cy.contains('Adicionar Tarefa')
            .should('be.visible')
            .click();
        cy.get('input[type="text"]')
            .click()
            .type('Tarefa teste');
        cy.contains('button', 'Enviar')
            .click();
        cy.log('EXCLUI TAREFA');

        cy.get('.content')
            .first()
            .trigger('mouseover');
        cy.get('.content .trash')
            .first()
            .click({ force: true });
        cy.log('EXCLUI LISTA');

        cy.get('div[id$="trash"]')
            .click();
    });
});