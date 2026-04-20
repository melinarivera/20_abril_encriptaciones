import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  return res.json({
    ok: true,
    message: 'Registro funcionando'
  });
});

router.post('/login', (req, res) => {
  return res.json({
    ok: true,
    message: 'Login funcionando'
  });
});

export default router;