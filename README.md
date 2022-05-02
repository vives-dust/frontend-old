# dust-frontend
The frontend of the dust project.
This project was made to give an overview and show all dust devices that are planted in the ground.
This frontend also gives a summeray of the sensors that are connected to a device. 
And can display all values for each sensor if wished.

## Staging server

The staging server for this project can be found [here](https://scintillating-hotteok-03eadd.netlify.app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ad41b57-8940-4ec7-bd78-e03513d63bba/deploy-status)](https://app.netlify.com/sites/scintillating-hotteok-03eadd/deploys)

## Run this project

How to run is described here, don't forget to accually use this frontend that the backend coming with this project is requiered and needs to be running on the host machine.

### Docker-compose

Docker and docker-compose files are available in the directory.
Just execute the following for the development version and the frontend will be online on port [8090](http://localhost:8090/)

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

The Color pallet was chosen with: [Adobe collor-wheel](https://color.adobe.com/create/color-wheel)


## Libraries

[Vue3](https://vuejs.org/)

using [chart.js](https://vue-chart-3.netlify.app/guide/usage/) for the sensor charts.

[helper for charts.js](https://www.chartjs.org/docs/3.0.2/charts/line.html)

## Made by

Felix Falk as his bachelor thesis.

