let t = 100;
const slashes = '|/-\|';
for (let slash of slashes) {
  t = t + 200;
  setTimeout(() => {
    process.stdout.write(`\r${slash}   `);
  }, t);
}