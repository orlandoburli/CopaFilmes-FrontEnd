/// <reference types="cypress" />
const movies = [{ "id": "tt3606756", "titulo": "Os Incríveis 2", "ano": 2018, "nota": 8.5 }, { "id": "tt4881806", "titulo": "Jurassic World: Reino Ameaçado", "ano": 2018, "nota": 6.7 }, { "id": "tt5164214", "titulo": "Oito Mulheres e um Segredo", "ano": 2018, "nota": 6.3 }, { "id": "tt7784604", "titulo": "Hereditário", "ano": 2018, "nota": 7.8 }, { "id": "tt4154756", "titulo": "Vingadores: Guerra Infinita", "ano": 2018, "nota": 8.8 }, { "id": "tt5463162", "titulo": "Deadpool 2", "ano": 2018, "nota": 8.1 }, { "id": "tt3778644", "titulo": "Han Solo: Uma História Star Wars", "ano": 2018, "nota": 7.2 }, { "id": "tt3501632", "titulo": "Thor: Ragnarok", "ano": 2017, "nota": 7.9 }, { "id": "tt2854926", "titulo": "Te Peguei!", "ano": 2018, "nota": 7.1 }, { "id": "tt0317705", "titulo": "Os Incríveis", "ano": 2004, "nota": 8 }, { "id": "tt3799232", "titulo": "A Barraca do Beijo", "ano": 2018, "nota": 6.4 }, { "id": "tt1365519", "titulo": "Tomb Raider: A Origem", "ano": 2018, "nota": 6.5 }, { "id": "tt1825683", "titulo": "Pantera Negra", "ano": 2018, "nota": 7.5 }, { "id": "tt5834262", "titulo": "Hotel Artemis", "ano": 2018, "nota": 6.3 }, { "id": "tt7690670", "titulo": "Superfly", "ano": 2018, "nota": 5.1 }, { "id": "tt6499752", "titulo": "Upgrade", "ano": 2018, "nota": 7.8 }];

const champions = {
  firstPlace: movies[3],
  secondPlace: movies[1]
}

context('Champions', () => {

  context('Server online', () => {
    beforeEach(() => {
      cy.server({
        method: 'GET',
        delay: 100,
        status: 200,
        response: {}
      })

      cy.route('https://localhost:5001/api/movies', movies);

      cy.route({
        url: 'https://localhost:5001/api/movies',
        method: 'POST',
        response: champions
      })

      cy.visit('/')
    })

    it('Should select movie when click on it', () => {
      cy.wait(200)

      cy.get(`#movie-${movies[3].id}`)
        .click()
        .find('.fa-check-square-o')
        .should('be.visible')

      cy.get('.selecionados')
        .should('contain', 'Selecionados 1 de 8 filmes');
    })

    it('Should select 8 movies and click on generate', () => {

      cy.wait(200)

      cy.get(`#movie-${movies[3].id}`).click()
      cy.get(`#movie-${movies[5].id}`).click()
      cy.get(`#movie-${movies[9].id}`).click()
      cy.get(`#movie-${movies[10].id}`).click()
      cy.get(`#movie-${movies[13].id}`).click()
      cy.get(`#movie-${movies[14].id}`).click()
      cy.get(`#movie-${movies[15].id}`).click()
      cy.get(`#movie-${movies[1].id}`).click()

      cy.get('.selecionados').should('contain', 'Selecionados 8 de 8 filmes');

      cy.get('#btn-generate').click();

      cy.wait(200)

      cy.get('.movie-champion-position-1')
        .should('be.visible')
        .should('contain', champions.firstPlace.titulo)

      cy.get('.movie-champion-position-2')
        .should('be.visible')
        .should('contain', champions.secondPlace.titulo)
    })

    it('Should select 7 movies and show error message on try to generate', () => {
      cy.wait(200)

      cy.get(`#movie-${movies[3].id}`).click()
      cy.get(`#movie-${movies[5].id}`).click()
      cy.get(`#movie-${movies[9].id}`).click()
      cy.get(`#movie-${movies[10].id}`).click()
      cy.get(`#movie-${movies[13].id}`).click()
      cy.get(`#movie-${movies[14].id}`).click()
      cy.get(`#movie-${movies[15].id}`).click()

      cy.get('.selecionados').should('contain', 'Selecionados 7 de 8 filmes');

      cy.get('#btn-generate').click();

      cy.wait(200)

      cy.get('body')
        .find('.alert')
        .should('contain', 'Selecione 8 filmes para gerar o campeonato!')
    })

    it('Should select 9 movies and show error message on try to generate', () => {
      cy.wait(200)

      cy.get(`#movie-${movies[3].id}`).click()
      cy.get(`#movie-${movies[5].id}`).click()
      cy.get(`#movie-${movies[9].id}`).click()
      cy.get(`#movie-${movies[10].id}`).click()
      cy.get(`#movie-${movies[13].id}`).click()
      cy.get(`#movie-${movies[14].id}`).click()
      cy.get(`#movie-${movies[15].id}`).click()
      cy.get(`#movie-${movies[1].id}`).click()
      cy.get(`#movie-${movies[2].id}`).click()

      cy.get('.selecionados').should('contain', 'Selecionados 9 de 8 filmes');

      cy.get('#btn-generate').click();

      cy.wait(200)

      cy.get('body')
        .find('.alert')
        .should('contain', 'Selecione 8 filmes para gerar o campeonato!')
    })
  })

  context('Server offline', () => {
    beforeEach(() => {
      cy.server({
        method: 'GET',
        delay: 100,
        status: 200,
        response: {}
      })

      cy.route('https://localhost:5001/api/movies', movies);

      cy.route({
        url: 'https://localhost:5001/api/movies',
        method: 'POST',
        status: 400
      })

      cy.visit('/')
    })

    it('Should present error message when error is returned on post', () => {
      cy.wait(200)

      cy.get(`#movie-${movies[3].id}`).click()
      cy.get(`#movie-${movies[5].id}`).click()
      cy.get(`#movie-${movies[9].id}`).click()
      cy.get(`#movie-${movies[10].id}`).click()
      cy.get(`#movie-${movies[13].id}`).click()
      cy.get(`#movie-${movies[14].id}`).click()
      cy.get(`#movie-${movies[15].id}`).click()
      cy.get(`#movie-${movies[1].id}`).click()

      cy.get('.selecionados').should('contain', 'Selecionados 8 de 8 filmes');

      cy.get('#btn-generate').click();

      cy.wait(200)

      cy.get('.alert')
        .should('be.visible')
        .should('contain', 'Ocorreu um erro ao buscar o campeão dos filmes')
    })
  })
})
