
// code generated with v0.dev vercel from https://v0.dev/chat with multiple inputs:
// https://v0.dev/chat/tsLDCL95ZDD
// * redesign the page starting from the image in nextjs /react
// * add modal
// * redesign the page starting from the image adding the posibility to sign up
// * can you optimize the code ? // failed to optimize 100%
// * can you generate code using next react and tailwind ? 
// * generate a dashboard page for a user to display timesheet reports, project allocations, and other functionalities similar with Open Air
// * please modify the code so will be optimized splitted into separated files per section // failed to split into separated files per section
// * generate a dashboard page for a user to display timesheet reports, project allocations, and other functionalities similar with Open Air but using a blue header and colored icons
// * please use dynamic data for all tables

'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Bell, Settings, ChevronDown, Search, ArrowRight, X, Calendar } from 'lucide-react'

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg?height=32&width=32" alt="Casama logo" width={32} height={32} className="rounded-full" />
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-indigo-200">Dashboard</a></li>
                <li><a href="#" className="hover:text-indigo-200">Browse Pools</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell size={20} />
            <Settings size={20} />
            <div className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="User avatar" width={32} height={32} className="rounded-full" />
              <span>Timothy B.</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Greeting Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Hello Timothy,</h1>
            <p className="text-gray-600">This is what we have for you today</p>
          </div>
          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => setIsModalOpen(true)}
          >
            Create Pool
          </button>
        </div>

        {/* Balance Section */}
        <div className="bg-indigo-600 text-white p-6 rounded-lg mb-8">
          <h2 className="text-xl mb-4">Balance</h2>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-4xl font-bold">$12,223</p>
              <ul className="mt-2">
                <li>$14,552 Total Income</li>
                <li>$11,883 Earned</li>
                <li>$2,668 Expenses</li>
              </ul>
            </div>
            <div className="text-right">
              <p>Market Cap</p>
              <p className="text-2xl font-bold">$12,223</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-indigo-400 rounded-full">
            <div className="h-full w-3/4 bg-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Public Pools Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Public</h2>
            <div className="relative">
              <input type="text" placeholder="Search" className="pl-8 pr-4 py-2 rounded-md border border-gray-300" />
              <Search size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="space-y-4">
            {['Polkadot into Vechain', 'Solana into Polygon Matic', 'Let\'s BNB into Avalanche'].map((pool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${index === 0 ? 'bg-pink-500' : index === 1 ? 'bg-yellow-500' : 'bg-orange-500'}`}>
                    {pool.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold">{pool}</p>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className={`bg-${index === 0 ? 'pink' : index === 1 ? 'yellow' : 'orange'}-500 h-2 rounded-full`} style={{width: `${[95, 52, 24][index]}%`}}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-bold">${[15, 18, 21][index] + ',000'}</p>
                  <div className="flex -space-x-1">
                    {['AG', 'JS', 'TR', 'RJ'].map((initial, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full bg-${['pink', 'blue', 'yellow', 'indigo'][i]}-400 flex items-center justify-center text-white text-xs`}>
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Cake icon" width={24} height={24} />
                    <span>8 cakes left</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Trending</h2>
            <button className="text-indigo-600 flex items-center">
              See more <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="bg-indigo-800 text-white p-4 rounded-lg" style={{backgroundImage: 'url(/placeholder.svg?height=200&width=400)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Cake icon" width={24} height={24} />
                <span>8 cakes left</span>
              </div>
              <button className="bg-white text-indigo-800 px-3 py-1 rounded-md text-sm hover:bg-indigo-100">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Create Pool Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create a pool</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">Step 2 of 3 | Voting Rules</p>
            <form>
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-lg font-medium">Votings</span>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration of voting</label>
                <div className="flex space-x-2">
                  {['6h', '24h', '3 days'].map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {duration}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Calendar size={16} />
                    <span className="ml-1">Custom date</span>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">How many % is minimum need to win</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="51%"
                  />
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Calendar size={16} />
                    <span className="ml-1">Custom date</span>
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Min number of members that have to vote</label>
                <select className="form-select block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>50 members</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <div>
                  <button
                    type="button"
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}