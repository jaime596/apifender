
module.exports = {
  server: "dbfender.carkazoib54f.us-east-1.rds.amazonaws.com",
  port: 1433,
  user: "admin",
  password: "unafacil123&",
  database: "projectFender",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }

}


// exports.getConnection = async function () {
//   try {
//     const pool = await sql.connect(sqlConfig)
//     return pool
//   } catch (err) {
//     console.log(err)
//   }
// }
