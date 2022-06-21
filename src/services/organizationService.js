import { useState } from 'react'
import { useSelector } from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL


export const useOrganizationService = () => {
    // eslint-disable-next-line
    const { user } = useSelector(store => store.user)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const organizationUser = async(payload, profileId) => {
        setLoading(true)
        
        try {
            const res = await fetch(`${base_url}/organisation/create/${profileId}`, {
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

    const clearError = () => {
        setError(null)
    }
    return { error, loading, organizationUser, clearError }
}
