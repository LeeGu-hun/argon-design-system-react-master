/*!

=========================================================
* Argon Design System React -  v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import 'assets/scss/argon-design-system-react.scss?v1.1.0'

// import Index from "views/Index.js";
import Landing from 'views/examples/Landing.js'
import CarApplication from 'views/examples/CarApplication.js'
import CarInquiry from 'views/examples/CarInquiry.js'
import CarRegist from 'views/examples/CarRegist.js'
import MemInquiry from 'views/examples/MemInquiry.js'
import MemRegist from 'views/examples/MemRegist.js'
import Login from 'views/examples/Login.js'
import Profile from 'views/examples/Profile.js'
import Register from 'views/examples/Register.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/car-application-page" exact element={<CarApplication />} />
      <Route path="/car-inquiry-page" exact element={<CarInquiry />} />
      <Route path="/car-regist-page" exact element={<CarRegist />} />
      <Route path="/mem-inquiry-page" exact element={<MemInquiry />} />
      <Route path="/mem-regist-page" exact element={<MemRegist />} />

      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)
