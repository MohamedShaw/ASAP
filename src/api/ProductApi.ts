/* eslint-disable prettier/prettier */

import axios from 'axios';
import { API_ENDPOINT } from 'utils/urls.json';


export const getProductList = async () => {

    try {
        const response = await axios.get(
            `${API_ENDPOINT}products`
        );


        return response.data
    } catch (error) {


        throw "error"
    }

};

export const addTask = async (value: string) => {

    try {
        const res = await axios.post(`${API_ENDPOINT}/task`, {
            description: value,
        });
        return res.data
    } catch (error) {

        throw 'error'
    }

}


export const deleteTask = async (id: string) => {

    try {
        const res = await axios.delete(`${API_ENDPOINT}/task/${id}`);
        return res.data
    } catch (error) {

        throw 'error'
    }

}