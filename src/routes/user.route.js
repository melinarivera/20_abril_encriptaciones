import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Email y password son obligatorios'
    });
  }

  return res.json({
    ok: true,
    message: 'Registro funcionando'
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Email y password son obligatorios'
    });
  }

  return res.json({
    ok: true,
    message: 'Login funcionando'
  });
});

export default router;