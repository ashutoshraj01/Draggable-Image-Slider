import axios from 'axios';
import config  from '../config/config';

const requisitionDataUrl = config.requisitionData;

const getData = () => {
  return axios
    .get(requisitionDataUrl)
    .then((response) => {
      return response;
    })  
    .catch((err) => {
      console.log('err', err);
    });
};

export const getRequisitionService = {
    getData,
};
