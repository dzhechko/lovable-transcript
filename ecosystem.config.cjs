module.exports = {
  apps: [
    {
      name: 'static-transcript',
      script: 'python3',
      args: '-m http.server 8080 --bind 0.0.0.0',
      env: {
        PORT: 8080
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
};