const { exec } = require('child_process');

exec('awk \'/MemFree/{free=$2} /MemTotal/{total=$2} /MemAvailable/{available=$2} END{print free+available}\' /proc/meminfo', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(stdout);
});
