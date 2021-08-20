describe('Quotes App', () => {
    beforeEach(() => {
      // Each test needs 'fresh state' !!
      // Tests should never rely on state left by previous tests !!
      // Every test must be able to work in isolation !!
      cy.visit('http://localhost:3000') // CAREFUL, SOME STUDENTS MIGHT BE ON A DIFFERENT PORT
    })

    it('sanity check to make sure tests work', () => {
        // "it" is a test.
        // "expect" is an assertion.
        // There can be several assertions per test, but they all need to relate
        // to "the one thing" we're testing.
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5) // strict ===
        expect({}).not.to.equal({})   // strict ===
        expect({}).to.eql({})         // not strict
      })

    })