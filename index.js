const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`Bot Trophy & Crown Safe
By : ${chalk.bold(`by:FazXy & Renald
`);

  const auth = rs.question('Tempel auth kamu! : ');
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgRed(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.white(`User : ${username}`)} | ${chalk.red(`$country}`)} ${chalk.yellow(`${trophy}`)} | ${chalk.blue(${crown}`)}`));
      await sleep(6000);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Akun Lu ke banned bang selamat tinggal`));
     break;
    }
  }


})();
