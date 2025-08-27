const newman = require('newman');
require('dotenv').config();

newman.run(
  {
   
    collection: 'https://api.postman.com/collections/39155864-b257c027-879c-404a-8ae6-611333065e40?access_key=${process.env.PMAT_KEY}',

    iterationCount: 1,

    reporters: ['cli', 'htmlextra'],

    reporter: {
      htmlextra: {
        export: './Reports/report.html', 
        darkTheme: true
      }
    }
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log('✓ Collection run complete!');
  }
);
