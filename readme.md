Run Develoment using PM2
```bash
yarn dev
```
View logs
yarn pm2 logs


"webpack": "webpack -wd", // w watch, d dev mode


testing

```bash
yarn test
```
to debug (add debugger;)
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```
to inspect in chrome:
chrome://inspect/