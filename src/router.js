const express = require('express')
const CalculateInterest = require('./controllers/calculateInterest')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const calculateInterest = new CalculateInterest()

// Routes
router.get('/', calculateInterest.renderHome)
router.post('/', calculateInterest.renderResultCalculation)
router.get('*', pageController.renderNotFound)

module.exports = router
