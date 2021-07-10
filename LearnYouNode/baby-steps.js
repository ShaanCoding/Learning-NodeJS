let processes = process.argv;

let sum = 0;

for (let i = 2; i < processes.length; i++) {
  sum += parseInt(processes[i]);
}

console.log(sum);
