import { useState }  from 'react'

const identity_url = process.env.REACT_APP_IDENTITY_URL

export const useSignupService = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const signupUser = async(payload) => {
        setLoading(true)

        try{
            const res = await fetch(`${identity_url}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
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

    const clearError = () => setError(null)

    return { error, loading, signupUser, clearError };
}
