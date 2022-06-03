# Ontwikkelen van een web-applicatie voor het DUST sensor platform.
The front-end of the dust project.
This project was made to give an overview and show all dust devices that are planted in the ground.
This front-end also gives a summary of the sensors that are connected to a device. 
And can display all values for each sensor if wished.

## Staging server

The staging server for this project can be found [here](https://dust-frontend.netlify.app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ad41b57-8940-4ec7-bd78-e03513d63bba/deploy-status)](https://app.netlify.com/sites/scintillating-hotteok-03eadd/deploys)

## Run this project

How to run is described here, don't forget to acually use this front-end that the back-end coming with this project is required and needs to be running on the host machine.

### Docker-compose

Docker and docker-compose files are available in the directory.
Just execute the following for the development version and the front-end will be online on port [8090](http://localhost:8090/)

```bash
docker-compose -f docker-compose.dev.yaml up
```

For the distribution
```bash
docker-compose up
```

### npm

To build the project using npm first execute the following:

```bash
npm install
```
then for development:

```bash
npm run serve
```

To build the project:

```bash
npm run build
```


## Collor pallet

The Color pallet was chosen with: [Adobe color-wheel](https://color.adobe.com/create/color-wheel)


## Libraries

[Vue3](https://vuejs.org/)

Using [chart.js](https://vue-chart-3.netlify.app/guide/usage/) for the sensor charts.

[Helper for charts.js](https://www.chartjs.org/docs/3.0.2/charts/line.html)

## Tests in vue using jest with typescript

[unit-tests-in-jest](https://alexjover.com/blog/write-the-first-vue-js-component-unit-test-in-jest/)

## Made by

Felix Falk as his bachelor thesis.






