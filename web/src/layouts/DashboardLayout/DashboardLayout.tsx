import { FaPlusCircle, FaUserCircle } from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

interface AddNewButton {
  to: () => string
  label: string
}

type DashboardLayoutProps = {
  children?: React.ReactNode
  title?: string
  addNewButton?: AddNewButton
}

const DashboardLayout = ({
  children,
  addNewButton,
  title,
}: DashboardLayoutProps) => {
  const { currentUser } = useAuth()

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay">
        <div className="absolute inset-0 bg-grainy bg-10%"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-aqua to-salmon-light mix-blend-multiply"></div>
      </div>
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                {/* Logo area */}
              </div>
              {currentUser && (
                <div className="hidden sm:-my-px sm:flex sm:space-x-8">
                  {/* Navigation Links */}
                  <Link
                    to={routes.playOverview()}
                    className="group inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-sand transition-colors hover:text-salmon-light"
                  >
                    <span className="rounded bg-forest p-3 drop-shadow-lg transition">
                      Play!
                    </span>
                  </Link>
                  <Link
                    to={routes.decks()}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Decks
                  </Link>
                  <Link
                    to={routes.studySets()}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Study Sets
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="relative flex-shrink-0">
                <div className="group inline-block text-left">
                  <button
                    type="button"
                    className="flex rounded-full bg-sand text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                    title={currentUser?.email}
                    aria-label={currentUser?.email}
                  >
                    <span className="sr-only">Open user menu</span>
                    {!currentUser ? (
                      <FaUserCircle className="h-8 w-8 text-gray-500" />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
                        {currentUser?.email?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </button>
                  <div className="absolute right-0 z-10 hidden group-hover:block">
                    <ul
                      className="mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      {!currentUser ? (
                        <>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Link
                              to={routes.login()}
                              className="block w-full text-gray-700 hover:text-gray-900"
                            >
                              Sign in
                            </Link>
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Link
                              to={routes.signup()}
                              className="block w-full text-gray-700 hover:text-gray-900"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Link
                              to={routes.login()}
                              className="block w-full text-gray-700 hover:text-gray-900"
                            >
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
      <header>
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="pr-10 font-display text-3xl font-bold leading-tight text-sand">
            {title}
          </h1>
          {addNewButton?.to && (
            <Link
              to={addNewButton.to()}
              className="group absolute right-2 top-0 z-0 mr-6 mt-6 cursor-pointer"
              title={addNewButton.label}
              aria-label={addNewButton.label}
            >
              <span className="sr-only">{addNewButton.label}</span>
              <FaPlusCircle className="h-8 w-8 rounded-full border-2 border-sand bg-sand fill-forest transition duration-150 ease-in-out hover:scale-110 group-hover:fill-aqua" />
            </Link>
          )}
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
  )
}

export default DashboardLayout
