"use client"

import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

  // Initialize auth on mount
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      validateToken(token)
    } else {
      setIsLoading(false)
    }
  }, [])

  const validateToken = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUser(response.data.data)
      setIsLoading(false)
    } catch (err) {
      localStorage.removeItem("token")
      setIsLoading(false)
    }
  }

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        email,
        password,
      })
      const { token, user: userData } = response.data.data
      localStorage.setItem("token", token)
      setUser(userData)
      return userData
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name, email, password) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.post(`${API_URL}/user/signup`, {
        name,
        email,
        password,
      })
      const { token, user: userData } = response.data.data
      localStorage.setItem("token", token)
      setUser(userData)
      return userData
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const value = {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
