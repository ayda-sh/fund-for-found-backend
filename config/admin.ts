export default ({ env }) => ({
  auth: {
    secret: 'f1357471cb165226653dae3e1ae4d3723645abe1471c9a124b9f874c1aa91d09',
  },
  apiToken: {
    salt: 'wWXhTF3XjG5lc3GK9NNNqg==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
