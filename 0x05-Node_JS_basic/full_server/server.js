import express from 'express';
import AppRoute from './routes';

const PORT = 1245;
const app = express();

app.use(AppRoute).listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});

export default app;
