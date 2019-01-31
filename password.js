if (process.argv.length !== 4) {
  console.log("Wrong numbers of arguments.");
} else {
  process.argv.shift();
  process.argv.shift(); //deletes first 2 default arguments

  const amount = parseInt(process.argv[1], 10);

  for (let i = 0; i < amount; i++) {
    generatePassword(parseInt(process.argv[0], 10));
  }
}

function generatePassword(length) {
  var password = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    password += possible.charAt(Math.floor(Math.random() * possible.length));

  console.log(password);
}
