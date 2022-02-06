const App = require('./app');
const port = process.env.PORT || 3000;

App.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
