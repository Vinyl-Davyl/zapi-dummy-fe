import { useState } from 'react'

const url = process.env.REACT_APP_LOGIN_URL

export const useLoginService = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const loginUser = async(payload) => {
        setLoading(true)

        try {
            const res = await fetch(url, {
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
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return { error, loading, loginUser }
}

export const setWithExpiry = (key, value, expiration) => {
    const now = new Date()

    const item = {
        value,
        expiry: now.getTime() + expiration
    }
    localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = (key) => {
    const jsonObject = localStorage.getItem(key)

    if(!jsonObject) return null

    const item = JSON.parse(jsonObject)
    const now  = new Date()

    if(now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }

    return item.value
}
