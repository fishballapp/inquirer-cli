import editor from '@inquirer/editor';

void (async () => {
  const answer = await editor({ message: process.env.INQUIRER_MESSAGE });
  console.error(`"${answer}"`);
})();
