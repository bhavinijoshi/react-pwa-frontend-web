//https://serverless-stack.com/chapters/environments-in-create-react-app.html
//pass REACT_APP_ENVIRONMENT=production or REACT_APP_ENVIRONMENT=development or default REACT_APP_ENVIRONMENT=localhost
//to call to npm start to get this variable
const config = require(`./${process.env.REACT_APP_ENVIRONMENT}`).default;

export default config;
