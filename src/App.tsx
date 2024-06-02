import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
// import SubPage1 from './SubPage1'
import SubPage2 from './SubPage2'
import MainPage from './MainPage'
// import { Button } from './components/ui/button'
import { Dashboard } from './Dashboard'
// import { SheetContent } from './components/ui/sheet'
import {
  // Home,
  LineChart,
  Package,
  // Package2,
  // ShoppingCart,
  // Users,
} from 'lucide-react'
// import { Badge } from './components/ui/badge'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from './components/ui/card'
// import { ModeToggle } from './components/mode-toggle'
// import { Dashboard2 } from './Dashboard2'

export default function App() {
  return (
    <div className='flex h-full items-stretch'>
      <Router basename='/service1'>
        <Sidebar2 />
        <Routes>
          <Route path='dashboard1' element={<Dashboard />} />
          <Route path='dashboard2' element={<SubPage2 />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  )
}

// function Sidebar() {
//   const location = useLocation()
//   return (
//     <div className='h-full w-72 bg-orange-500 bg-opacity-50'>
//       <h6>side bar</h6>
//       <div className='mt-3 flex flex-col gap-1'>
//         <Button asChild variant={'link'} className='hover:bg-red-400'>
//           <Link
//             to={'/'}
//             className={`${location.pathname === '/' ? 'bg-red-600' : ''}`}
//           >
//             go to Main Page
//           </Link>
//         </Button>
//         <Button asChild variant={'link'}>
//           <Link
//             to={'/subpage1'}
//             className={`${location.pathname === '/subpage1' ? 'bg-red-600' : ''}`}
//           >
//             go to SubPage 1
//           </Link>
//         </Button>

//         <Button asChild variant={'link'}>
//           <Link
//             to={'/subpage2'}
//             className={`${location.pathname === '/subpage2' ? 'bg-red-600' : ''}`}
//           >
//             go to SubPage 1
//           </Link>
//         </Button>
//         <Button asChild variant={'link'}>
//           <Link
//             to={'/dashboard'}
//             className={`${location.pathname === '/dashboard' ? 'bg-red-600' : ''}`}
//           >
//             go to Dashboard
//           </Link>
//         </Button>
//       </div>
//       {/* <ModeToggle /> */}
//     </div>
//   )
// }

function Sidebar2() {
  const location = useLocation()
  return (
    <div className='border-r pt-3'>
      <nav className='grid w-72 items-start px-2 text-sm font-medium lg:px-4'>
        {/* <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Home className='h-4 w-4' />
        Dashboard
      </a>
      <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <ShoppingCart className='h-4 w-4' />
        Orders
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
          6
        </Badge>
      </a> */}
        <Link
          to='/dashboard1'
          className={`flex items-center gap-3 rounded-lg ${location.pathname === '/dashboard1' ? 'bg-muted' : ''} px-3 py-2 text-primary transition-all hover:text-primary`}
        >
          <Package className='h-4 w-4' />
          Dashboard 1{' '}
        </Link>
        {/* <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Users className='h-4 w-4' />
        Customers
      </a> */}
        <Link
          to='/dashboard2'
          className={`flex items-center gap-3 rounded-lg ${location.pathname === '/dashboard2' ? 'bg-muted' : ''} px-3 py-2 text-primary transition-all hover:text-primary`}
        >
          <LineChart className='h-4 w-4' />
          Dashboard 2
        </Link>
      </nav>
    </div>
  )
}
