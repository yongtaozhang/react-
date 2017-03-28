import { combineReducers } from 'redux';


import getTrack from './getTrack';
import getCard from './getCard';
import getProgress from './getProgress';
import getEcharts from './getEcharts';


export default combineReducers({
	getTrack,
	getCard,
	getProgress,
	getEcharts,
});