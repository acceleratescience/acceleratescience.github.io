const fetch = require('node-fetch');

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/66c5db56f8ce52214d4eab11';

export default async () => {
  const res = await fetch(BUILD_HOOK, {
    method: 'POST',
  });

  console.log('Build hook response:', res);
  return new Response("OK");
};

export const config = {
  schedule: '@daily',
};
