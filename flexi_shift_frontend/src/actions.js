import { redirect } from "react-router-dom";
import url from './url';


// Create Action
export const createAction = async({request}) => {
    //get form data
    const formData = await request.formData()

    // construct request body
    const newShift = {
        name: formData.get("name") + " " + formData.get("lastname"),
        position: formData.get("position"),
        date: formData.get("date"),
        start_time: formData.get("start_time"),
        end_time: formData.get("end_time"),
    }

    // send request to backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newShift)
    })

      // redirect to index page
      return redirect('/')
};


// Update Action
export const updateAction = async({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedShift = {
        name: formData.get("name"),
        position: formData.get("position"),
        date: formData.get("date"),
        start_time: formData.get("start_time"),
        end_time: formData.get("end_time"),
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(updatedShift)
    })

    return redirect(`/post/${id}`)
}


// Delete Action
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })

    return redirect('/')
}
