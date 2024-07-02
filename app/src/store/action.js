export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = () => {
  return (dispatch) => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data[0]));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
};
