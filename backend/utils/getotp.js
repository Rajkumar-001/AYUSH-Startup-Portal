const crypto = require('crypto');

function generateOTP() {
  return crypto.randomInt(100000, 999999).toString(); // Generates a 6-digit OTP
}

module.exports = { generateOTP };