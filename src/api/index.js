import axios from 'axios';

let countriesData;
let ukData;
const count = 0;

export const fetchData = async () => {

    countriesData = await fetchCountryData();
    ukData = await fetchUkData();

    //reset the id count
    id = 0;
    return sortData();
}

const fetchCountryData = async () => {

    try {

        let url = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22%7D&format=json';
        const { data: { data } } = await axios.get(url);

        /* Data 

        areaCode: "E92000001"
        areaName: "England"
        areaType: "nation"
        cumCasesByPublishDate: 879046
        date: "2020-11-01"
        newCasesByPublishDate: 20602
        */
        return await data;
    }
    catch (error) {
        console.log('Function: fetchCountryData \n' + error);
        return error;
    }
}

const fetchUkData = async () => {

    try {
        let url = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json';
        const { data: { data } } = await axios.get(url);

        /* Data

        areaCode: "K02000001"
        areaName: "United Kingdom"
        areaType: "overview"
        cumCasesBySpecimenDate: 1018878
        date: "2020-10-29"
        newCasesBySpecimenDate: 19525
         */
        return data.map(item => convertData(item));;
    }
    catch (error) {
        console.log('Function: fetchUkData \n' + error);
        return error;
    }
}
// Converts United Kingdom data to others
const convertData = (item) => {
    let data = {
        areaCode: item.areaCode,
        areaName: item.areaName,
        areaType: item.areaType,
        cumCasesByPublishDate: item.cumCasesBySpecimenDate,
        date: item.date,
        newCasesByPublishDate: item.newCasesBySpecimenDate
    }
    return data;
}

// Returns all countries in the dataset
export const sortData = () => {

    let countryList = [...new Set(countriesData.map(country => country.areaName))];
    countryList.unshift("United Kingdom"); //Add UK to the country list

    return countryList.map(country => getDataByCountry(country));
}

//Returns daily cases by selected country
let id = 0;
export const getDataByCountry = (country) => {

    let data = countriesData;

    if (country === 'United Kingdom')
        data = ukData;

    let filteredData = data.filter(d => d.areaName === country);

    //Extract Date and Daily Case Data to use in Charts
    const rawData = filteredData.map(({ date, newCasesByPublishDate }) =>
        ({ date, newCasesByPublishDate }));

    const gridData = data.filter(d => d.areaName === country).map(({ date, newCasesByPublishDate, cumCasesByPublishDate }) =>
        ({ date, newCasesByPublishDate, cumCasesByPublishDate }));

    //Get the first one on the list to set the country information
    let first = filteredData[0];

    //Reverse the chart data 
    const chartData = sliceReverse(rawData);

    //Set the data format 
    const countryData = {
        id: id,
        name: first.areaName,
        lastUpdated: first.date,
        lastDailyCases: first.newCasesByPublishDate,
        cumulativeCases: first.cumCasesByPublishDate,
        chartData: chartData,
        gridData: gridData
    }

    id++;

    return countryData;
}

//reverse the dataset to use in the chart
const sliceReverse = (data) => {
    if (count === 0) {
        return data.reverse();
    }
    return data.slice(0, count).reverse();
}

