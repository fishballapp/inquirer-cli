import editor from '@inquirer/editor';

(async () => {
  const answer = await editor({ message: process.env.INQUIRER_MESSAGE });
  console.error(`"${answer}"`);
})();
