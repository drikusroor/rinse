import { Link, routes } from "@redwoodjs/router";
import { useAuth } from "src/auth";

import { FaUserCircle } from 'react-icons/fa'

type DashboardLayoutProps = {
  children?: React.ReactNode
  title?: string
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {

  const { currentUser } = useAuth()

  return (
    <div className="min-h-screen bg-slate-400">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo area */}
              </div>
              {currentUser && (
                <div className="hidden sm:-my-px sm:flex sm:space-x-8">
                  {/* Navigation Links */}
                  <Link to={routes.decks()} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Decks
                  </Link>
                  <Link to={routes.studySets()} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Study Sets
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="relative flex-shrink-0">
                <div className="group inline-block text-left">
                  <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-expanded="false" aria-haspopup="true" title={currentUser?.email} aria-label={currentUser?.email}>
                    <span className="sr-only">Open user menu</span>
                    {!currentUser ? (

                      <FaUserCircle className="h-8 w-8 text-gray-500" />
                    ) : (
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-white">
                        {currentUser?.email?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </button>
                  <div className="group-hover:block hidden absolute right-0">
                    <ul className="w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      {!currentUser ? (
                        <>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <Link to={routes.login()} className="text-gray-700 hover:text-gray-900 block w-full">
                              Sign in
                            </Link>
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <Link to={routes.signup()} className="text-gray-700 hover:text-gray-900 block w-full">
                              Sign up
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <Link to={routes.home()} className="text-gray-700 hover:text-gray-900 block w-full">
                              Home
                            </Link>
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <Link to={routes.login()} className="text-gray-700 hover:text-gray-900 block w-full">
                              Sign out
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title} {/* Display the title */}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="">
              {children} {/* Placeholder for page content */}
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout
