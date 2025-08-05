import express from 'express';
import 'dotenv/config';

const app = express();

app.set('view engine','ejs');
app.set('views',`${__dirname}/views/`);

 
app.listen(process.env.PORT, () => {
  console.log(`Server running ai http://localhost:${process.env.PORT}`);
  console.log(`env port: ${process.env.PORT}`)
});