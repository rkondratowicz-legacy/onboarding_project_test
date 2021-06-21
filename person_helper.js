const Helper = require('@codeceptjs/helper');
require('dotenv').config();
const sql = require('mssql');

const dbConfig = {
  user: process.env.LEGACYDB_USER,
  password: process.env.LEGACYDB_PASSWORD,
  server: process.env.LEGACYDB_HOST,
  database: process.env.LEGACYDB_SCHEMA,
  connectionTimeout: 60000,
  requestTimeout: 60000,
  options: {
    encrypt: false,
    instanceName: process.env.LEGACYDB_INSTANCE,
    port: process.env.LEGACYDB_PORT
  }
}

class PersonHelper extends Helper {

  async getJanusPersonRecord() {

    const query = `SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')`;

    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query(query);
    const person = result.recordset[0];

    return person;

  }

  // // before/after hooks
  // /**
  //  * @protected
  //  */
  // _before() {
  //   // remove if not used
  // }

  // /**
  //  * @protected
  //  */
  // _after() {
  //   // remove if not used
  // }

  // // add custom methods here
  // // If you need to access other helpers
  // // use: this.helpers['helperName']

}

module.exports = PersonHelper;
