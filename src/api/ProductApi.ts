/* eslint-disable prettier/prettier */

import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from 'utils/urls.json';


export const getProductList = async (page: number) => {

    try {
        const limit = 5;
        const response = await axios.get(
            `${API_ENDPOINT}products?limit=${limit * page}`
        );
        return response.data
    } catch (error) {

        throw "error"
    }

};
