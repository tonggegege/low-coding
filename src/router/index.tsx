import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout/MainLayout'
import ManagerLayout from '../layouts/ManagerLayout/ManagerLayout'

import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import NotFound from '../views/NotFound/NotFound'
import List from '../views/Manager/List'
import Star from '../views/Manager/Star'
import Trash from '../views/Manager/Trash'
import QuestionLayout from '../layouts/QuestionLayout/QuestionLayout'
import Edit from '../views/Question/Edit/Edit'
import Stat from '../views/Question/Stat/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManagerLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          },
          {
            path: 'trash',
            element: <Trash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: '/question/edit/:id',
        element: <Edit />
      },
      {
        path: '/question/stat/:id',
        element: <Stat />
      }
    ]
  }
])

export default router

export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'
