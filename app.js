const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;

const start = async () => {
  try {
      await mongoose.connect(config.get('mongoUri'), {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      });

      app.listen(PORT, () => console.log(`hello, port ${PORT}`));
  } catch (e) {
      console.log(e.message);
      process.exit(1)
  }
};

start();