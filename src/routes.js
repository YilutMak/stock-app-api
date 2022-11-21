import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// WELCOME

// API | AUTH
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)

// API | MY PROFILE | AUTH REQUIRED
router.get('/api/my/profile', authenticateUser, (await import('./controllers/api/my/profile/show.js')).default)

// API | MY STOCKS | AUTH REQUIRED
router.get('/api/my/stocks', authenticateUser, (await import('./controllers/api/my/stocks/index.js')).default)
router.post('/api/my/stocks', authenticateUser, (await import('./controllers/api/my/stocks/create.js')).default)
router.delete('/api/my/stock/:id', authenticateUser, (await import('./controllers/api/my/stocks/destroy.js')).default)

// API | STOCKS
router.get('/api/stock/summary', (await import('./controllers/api/yahooFin/summary.js')).default)
router.get('/api/stock/recomendations', (await import('./controllers/api/yahooFin/recomendations.js')).default)
router.get('/api/stock/chartv2', (await import('./controllers/api/yahooFin/chartV2.js')).default)
router.get('/api/stock/chartv3', (await import('./controllers/api/yahooFin/chartV3.js')).default)
router.get('/api/stock/statisticsv2', (await import('./controllers/api/yahooFin/statisticsV2.js')).default)
router.get('/api/stock/statisticsv3', (await import('./controllers/api/yahooFin/statisticsV3.js')).default)
router.get('/api/stock/historicaldata', (await import('./controllers/api/yahooFin/historicalData.js')).default)
router.get('/api/stock/profile', (await import('./controllers/api/yahooFin/profile.js')).default)
router.get('/api/stock/financials', (await import('./controllers/api/yahooFin/financials.js')).default)
router.get('/api/stock/spark', (await import('./controllers/api/yahooFin/spark.js')).default)
router.get('/api/stock/movers', (await import('./controllers/api/yahooFin/movers.js')).default)
router.get('/api/stock/quotes', (await import('./controllers/api/yahooFin/quotes.js')).default)

export default router
