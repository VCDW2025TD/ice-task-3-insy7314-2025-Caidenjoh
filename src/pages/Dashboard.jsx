import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Dashboard = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          navigate('/login')
          return
        }

        // You can add API calls here to fetch user data or posts
        setUserData({ email: 'user@example.com' }) // Placeholder
      } catch (err) {
        setError('Failed to load dashboard data')
        if (err.response?.status === 401) {
          localStorage.removeItem('token')
          navigate('/login')
        }
      }
    }

    fetchData()
  }, [navigate])

  if (error) {
    return (
      <div className="form-container">
        <div className="form-error">{error}</div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="form-container">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Welcome to your Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <p>You are logged in as: {userData.email}</p>
        <div className="mt-4">
          <h3>Quick Actions</h3>
          <ul>
            <li>Create a new post</li>
            <li>View your posts</li>
            <li>Edit your profile</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
