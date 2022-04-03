class CalculateInterest {
  constructor () {
    this.renderResultCalculation = this.renderResultCalculation.bind(this)
  }

  renderHome (req, res) {
    res.render('home')
  }

  calculateInterestFinal (capital, interest, years) {
    return (capital * (interest / 100) * years)
  }

  renderResultCalculation (req, res) {
    const capital = parseInt(req.body.capital)
    const interest = parseInt(req.body.interest)
    const years = parseInt(req.body.years)

    res.render('home', {
      capital,
      interest,
      years,
      calculateTotal: this.calculateInterestFinal(capital, interest, years)
    })
  }
}

module.exports = CalculateInterest
