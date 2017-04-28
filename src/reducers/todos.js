import { combineReducers } from 'redux';


import getTrack from './getTrack';
import getCard from './getCard';
import getProgress from './getProgress';
import getEcharts from './getEcharts';
import getTabledata from './getTabledata';


export default combineReducers({
	getTrack,
	getCard,
	getProgress,
	getEcharts,
	getTabledata,
});