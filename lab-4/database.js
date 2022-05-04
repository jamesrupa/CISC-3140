const sql3 = require('better-sqlite3');
const   db = new sql3( 'memory.db' );
const  csv = require('csv-parser');
const   fs = require('fs');

// create table
db.exec( 'CREATE TABLE IF NOT EXISTS cars ( itemName TEXT, itemDescription TEXT, unitPrice REAL );' );
//db.exec( 'DROP TABLE menuItems;' );

const insrow = db.prepare( 'insert into menuItems ( itemName, itemDescription, unitPrice ) VALUES (?, ?, ?)' );


fs.createReadStream('C:/Users/path/to/csv/file.csv')
  .pipe(csv({"separator":";"}))
  .on('data', (row) => {
    
    insrow.run( row.itemName, row.itemDescription, row.unitPrice );
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    db.close();
  });
      