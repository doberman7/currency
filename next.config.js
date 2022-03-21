const dotenv = require('dotenv');
// TO DO move to env
// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config();
// }
module.exports = {  
  // reactStrictMode: true,
  
  env: {
     ACCESS_KEY:process.env.ACCESS_KEY//necesario para que el env file sea leido
  },
}
