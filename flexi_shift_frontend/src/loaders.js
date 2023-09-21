import url from './url';

// Index loader to load all shifts
export const indexLoader = async() => {
    // make api call to backend index route
    const response = await fetch(url)
    // turn resposne into a js object
    const shifts = await response.json()
    // return the js object so the Index component can use it
    return shifts
};

// Show loader to load a single shift
export const showLoader = async({params}) => {
    // grab the id from params
    const id = params.id
    // make api call to backend show route
    const response = await fetch(url + id)
    // turn response into js object
    const shift = await response.json()
    // return the js object so the Show component can use it
    return shift
}