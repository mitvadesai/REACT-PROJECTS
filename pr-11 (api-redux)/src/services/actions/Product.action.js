import axios from 'axios';


export const addProduct = () => {
    return {
        type: "Add_Product",
    }
}
export const updateProduct = () => {
    return {
        type: "Update_Product",
    }
}
export const getAllProduct = (data) => {
    return {
        type: "Get_All_Product",
        payload: data
    }
}


export const getProduct = (data) => {
    return {
        type: "Get_Product",
        payload: data
    }
}
export const loading = () => {
    return {
        type: "Loading",
    }
}

export const getAllProductAsync = () => {
    return (dispatch) => {
        dispatch(loading())

        axios.get('http://localhost:3000/Product').then((res) => {
            dispatch(getAllProduct(res.data));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const AddProductAsync = (data) => {
    return (dispatch) => {
        dispatch(loading())
        axios.post('http://localhost:3000/Product', data).
            then((res) => {
                dispatch(addProduct());
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const deleteProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading())
        axios.delete(`http://localhost:3000/Product/${id}`).
            then((res) => {
                dispatch(getAllProductAsync());
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const getProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading())
        axios.get(`http://localhost:3000/Product/${id}`).
            then((res) => {
                // console.log(res.data);
                dispatch(getProduct(res.data));
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const updateProductAsync = (id, data) => {
    return (dispatch) => {
        // dispatch(loading())
        axios.put(`http://localhost:3000/Product/${id}`, data).
            then((res) => {
                dispatch(updateProduct());
            }).catch((err) => {
                console.log(err);
            })
    }
}