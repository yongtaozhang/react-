import xFetch from './xFetch';


const GetOption = {
  headers: {
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json',
  },
  method: 'GET',
};

export async function getTrack() {
  return xFetch('/pjt/api/gettrack', GetOption);
}
export async function getCard() {
  return xFetch('/pjt/api/getcard', GetOption);
}
export async function getProgress() {
  return xFetch('/pjt/api/getprogress', GetOption);
}
export async function getEcharts(){
	return xFetch('/pjt/api/getcharts', GetOption);
}