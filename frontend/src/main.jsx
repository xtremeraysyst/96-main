import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./components/Layout"; 
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CreateContractPage from "./pages/CreateContractPage.jsx"
import CandidateDetailPage from './pages/CandidateDetailPage'
import CreatePasswordPage from './pages/CreatePasswordPage'
import DashboardPage from "./pages/DashboardPage.jsx";

createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Pages WITHOUT layout */}
      <Route index element={<DashboardPage />} />
      <Route path='create/:id' element={<CreateContractPage />} />
      <Route path='candidate_detail' element={<CandidateDetailPage />} />
      {/* Pages WITH layout */}
      <Route element={<Layout />}>
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='password' element={<CreatePasswordPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
</StrictMode>
)
