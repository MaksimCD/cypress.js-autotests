
describe('Проверка авторизации на сайте Stay', function () {

    it('Позитивный кейс-Авторизация с верным логином и паролем', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('maximkg31@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('MAXIM347g');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')
})

})
