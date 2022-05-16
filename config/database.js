
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
