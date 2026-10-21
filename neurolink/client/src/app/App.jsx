import { useEffect, useState } from 'react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { LandingPage } from '../pages/public/LandingPage'
import { LoginPage } from '../pages/auth/LoginPage'
import { OverviewPage } from '../pages/dashboard/OverviewPage'
import { GenericPage } from '../pages/dashboard/GenericPage'

const validPages = new Set(['overview','people','health-records','smartwatch','routines','location','conversations','daily-recap','reports','alerts','doctors','settings'])
function parseRoute() { const route = window.location.hash.slice(1) || '/'; return route === '/login' ? { view:'login' } : route.startsWith('/dashboard/') ? { view:'dashboard', page: validPages.has(route.split('/')[2]) ? route.split('/')[2] : 'overview' } : { view:'landing' } }
export default function App() { const [route,setRoute]=useState(parseRoute); useEffect(()=>{const change=()=>setRoute(parseRoute()); addEventListener('hashchange',change); return()=>removeEventListener('hashchange',change)},[]); const go=(path)=>window.location.hash=path; if(route.view==='landing') return <LandingPage onLogin={()=>go('/login')}/>; if(route.view==='login') return <LoginPage onSuccess={()=>go('/dashboard/overview')} onBack={()=>go('/')}/>; const navigate=(page)=>go(`/dashboard/${page}`); return <DashboardLayout current={route.page} onNavigate={navigate} onLogout={()=>go('/')} >{route.page==='overview' ? <OverviewPage onNavigate={navigate}/> : <GenericPage page={route.page}/>}</DashboardLayout> }
