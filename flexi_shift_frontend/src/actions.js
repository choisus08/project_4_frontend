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


// Register Action
export const registerAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the new user
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    // send the new user to our backend API
    const response = await fetch (`${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of the error
        alert(response.statusText)
        // redirect back to the frontend signup route
        return redirect('/register')
    }
    // redirect back to the frontend login route
    return redirect('/login')
};

export const loginAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    const response = await fetch(`${url}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if (response.status >= 400) {
        alert(response.statusText)
        return redirect('/login')
    }
    localStorage.setItem('loggedIn', JSON.stringify({status: true}))
    return redirect('/dashboard')
};