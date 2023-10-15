import { createContext, useContext, useState, useEffect } from "react"

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [order, setOrder] = useState()
  const [orderItems, setOrderItems] = useState(0)


  async function signIn({ email, password }) {

    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common['authorization'] = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Not possible to sign in')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')

    setData({})
  }

  function addOrder() {
    const oldOrders = JSON.parse(localStorage.getItem('@foodexplorer:order')) || []
    let allOrders = 0

    oldOrders.forEach(item => {
      allOrders += item.quantity
    })

    setOrderItems(allOrders)

    if (order) {
      const oldOrders = JSON.parse(localStorage.getItem('@foodexplorer:order')) || []
      const index = oldOrders ? oldOrders.findIndex(dish => dish.dish_id === order.dish_id) : -1

      const updatedOrder = [...oldOrders]

      if (index !== -1) {
        updatedOrder[index].quantity += order.quantity
      } else {
        updatedOrder.push(order)
      }

      localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedOrder))

      setOrderItems(orderItems + order.quantity)

      setOrder()
      alert('Dish(es) successfully added to orders')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    if (token && user) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      addOrder,
      orderItems,
      setOrder,
      order,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }