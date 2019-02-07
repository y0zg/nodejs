const os = require('os');
console.log(os.freemem());
const { execFile } = require('child_process');
const child = execFile('free',['-m'], (error, stdout) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
