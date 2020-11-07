import React, { Component } from 'react';
import Header from '../header/header.component';
import TabList from '../tab/tab-list.component';
import { fetchData } from '../../api';

let data;
export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            data
        }
    }

    async componentDidMount() {
        data = await fetchData();
        this.setState({ data: data });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {

        const { data } = this.state;

        return (
            <div >
                <Header />
                <TabList data={data} />
            </div>
        )
    }
}
