# Covid19 Data Visualisation

<img src="src/assets/covidUk.gif"  height="300"/>


## About The Project

COVID19 Data Visualisation is a simplified version of The GOV UK Cases Webpage (https://coronavirus.data.gov.uk/details/cases)
</br></br>
It is developed to demonstrate:
 * Developing a React application using React Class and Function components
 * Consuming a REST API,
 * Displaying fetched data with Material UI
 * Displaying datasets with DevExpress Chart and Grid


### Features
* Fetches the data from Rest API
* Lists UK Countries
* Displays daily Covid cases on Chart for each country
* Displays the dataset (daily and cumulative data) on Grid Component for each country


### Built With
* React
* Javascript
* Material UI
* DevExtreme REACTIVE
* <a href="https://coronavirus.data.gov.uk/cases"> coronavirus.data.gov.uk</a> API is consumed to develop this application.


## Getting Started

To get a local copy up and running please install these:
</br>

    yarn add axios
    yarn add react-count-up

    Material-UI:
    yarn add @material-ui/core
    yarn add @material-ui/icons

    DevExpress:
    npm i --save @devexpress/dx-react-core @devexpress/dx-react-chart
    npm i --save @devexpress/dx-react-chart-material-ui
