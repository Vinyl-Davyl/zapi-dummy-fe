import { useState }  from 'react'
import axios from 'axios'

const identity_url = process.env.REACT_APP_IDENTITY_URL

export const useSignupService = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const signUser = async(payload) => {
        setLoading(true)

        const config = {
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        }

        try{
            const res = await axios.post(`${identity_url}/auth/signup`, config)
        const data = await res.json()

        if(!res.ok) {
            throw new Error(data.message)
        }

        setLoading(false)
        return data
        }catch(err) {
            setLoading(false)
            setError(err.message)
        }

    }

    const clearError = () => {
        setError(null)
    }

    return { error, loading, signUser, clearError };
}
