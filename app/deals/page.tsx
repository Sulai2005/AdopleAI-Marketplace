"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, ChevronDown, Sun, Moon, ShoppingCart, Bell } from 'lucide-react'
import { useState, useEffect } from "react"
import Link from "next/link"

export default function DealsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPlanType, setPlanType] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [priceRange, setPriceRange] = useState("All")
  const [sortBy, setSortBy] = useState("Recommended")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    cardBg: isDarkMode ? "bg-gray-800" : "bg-white",
    cardBorder: isDarkMode ? "border-gray-700" : "border-gray-200",
    headerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    sidebarBg: isDarkMode ? "bg-gray-800" : "bg-gray-50",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    inputBg: isDarkMode ? "bg-gray-700" : "bg-white",
    inputBorder: isDarkMode ? "border-gray-600" : "border-gray-300",
    footerBg: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    footerBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    hoverBg: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100",
  }

  const products = [
    {
      name: "Grigora",
      category: "Web builders",
      image: "/web-builder-interface-purple-gradient.png",
      price: 59,
      originalPrice: 299,
      rating: 5.0,
      reviews: 42,
      description: "Create websites, blogs, and online stores with a drag-and-drop builder and a host of SEO tools",
    },
    {
      name: "Jodian",
      category: "AI Video",
      image: "/ai-platform-interface-blue-gradient.png",
      price: 69,
      originalPrice: 516,
      rating: 4.9,
      reviews: 73,
      description:
        "Use this AI platform to create stunning visual content with interactive elements like forms, polls, and...",
    },
    {
      name: "Restreamer",
      category: "Lead generation",
      image: "/streaming-software-interface-dark-purple.png",
      price: 39,
      originalPrice: 468,
      rating: 4.8,
      reviews: 156,
      description: "Unleash your marketing strategies and boost lead generation with an AI ad generator",
    },
    {
      name: "Fluent 3D",
      category: "Web builders",
      image: "/web-design-tool-interface-blue-gradient.png",
      price: 49,
      originalPrice: 588,
      rating: 4.7,
      reviews: 89,
      description:
        "Build websites fast with an all-in-one WordPress theme featuring building blocks, templates, and...",
    },
    {
      name: "Beyond",
      category: "Crypto",
      image: "/software-dashboard-interface.png",
      price: 59,
      originalPrice: 348,
      rating: 4.6,
      reviews: 31,
      description: "AI-powered insights for smarter crypto investments",
    },
    {
      name: "Senuto",
      category: "Customer support",
      image: "/analytics-dashboard.png",
      price: 69,
      originalPrice: 240,
      rating: 4.8,
      reviews: 117,
      description: "Build customized AI chatbots to engage customers and automate daily tasks",
    },
    {
      name: "Lumical",
      category: "Calendar & scheduling",
      image: "/project-management-tool.png",
      price: 59,
      originalPrice: 360,
      rating: 4.7,
      reviews: 94,
      description: "Create stunning scheduling pages and manage your bookings with advanced calendar features",
    },
    {
      name: "Sendr",
      category: "Lead generation",
      image: "/design-software-interface.png",
      price: 79,
      originalPrice: 588,
      rating: 4.9,
      reviews: 23,
      description: "Turn contact data into personalized pages and dynamic videos that convert",
    },
    {
      name: "WizeTool",
      category: "WhatsApp",
      image: "/web-builder-interface-purple-gradient.png",
      price: 69,
      originalPrice: 240,
      rating: 4.6,
      reviews: 52,
      description: "The simplest & most affordable way to automate WhatsApp for SEO and accessibility",
    },
    {
      name: "ClickGiant",
      category: "SEO",
      image: "/ai-platform-interface-blue-gradient.png",
      price: 79,
      originalPrice: 600,
      rating: 4.8,
      reviews: 67,
      description: "Effortless SEO automation to boost rankings without plugins or technical headaches",
    },
    {
      name: "Playzo",
      category: "Content marketing",
      image: "/streaming-software-interface-dark-purple.png",
      price: 69,
      originalPrice: 828,
      rating: 4.7,
      reviews: 45,
      description: "Create engaging social media content and AI-powered success for boost sales, and enhance learning",
    },
    {
      name: "AiTest.ai",
      category: "SEO",
      image: "/web-design-tool-interface-blue-gradient.png",
      price: 69,
      originalPrice: 360,
      rating: 4.9,
      reviews: 38,
      description: "Automation QA test for images to improve your website's SEO and accessibility",
    },
  ]

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Header */}
      <header className={`border-b ${themeClasses.headerBorder} px-4 py-3`}>
        <div className="max-w-7xl mx-auto">
          {/* Top banner */}
          <div className="bg-blue-600 text-white text-center py-2 px-4 rounded mb-4 text-sm">
            Welcome! 10% off is waiting in your cart—sign up. ↗
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold hover:text-green-400 transition-colors">
                ADOPLE
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search products"
                    className={`pl-10 ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text}`}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${themeClasses.textSecondary}`}>Sell on Adople</span>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" size="sm">
                Log in
              </Button>
              <Bell className="w-5 h-5" />
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 mt-4">
            <a href="#" className="hover:text-green-400">
              Software
            </a>
            <a href="#" className="hover:text-green-400">
              Courses & more
            </a>
            <a href="#" className="hover:text-green-400">
              New arrivals
            </a>
            <a href="#" className="hover:text-green-400">
              Ending soon
            </a>
            <div className="ml-auto">
              <Button className="bg-green-500 hover:bg-green-600 text-black text-sm">
                🎯 AskAdople and get 10% off
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`w-64 ${themeClasses.sidebarBg} p-6 rounded-lg h-fit`}>
            <div className="space-y-6">
              {/* Shop by */}
              <div>
                <h3 className="font-semibold mb-3">Shop by</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className={`${themeClasses.textSecondary} ${themeClasses.hoverBg} block p-1 rounded`}>
                      Software
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${themeClasses.textSecondary} ${themeClasses.hoverBg} block p-1 rounded`}>
                      Courses & learning
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${themeClasses.textSecondary} ${themeClasses.hoverBg} block p-1 rounded`}>
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${themeClasses.textSecondary} ${themeClasses.hoverBg} block p-1 rounded`}>
                      Creative resources
                    </a>
                  </li>
                </ul>
              </div>

              {/* ADOPLE SELECT */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-600 text-white">ADOPLE SELECT</Badge>
                  <span className="text-sm">?</span>
                </div>
              </div>

              {/* Integrations */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Integrations</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Plan type */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Plan type</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Status */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Status</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Price range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Price range</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Browse products</h1>
                <p className={`${themeClasses.textSecondary}`}>416 products</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Sort by:</span>
                <select
                  className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} px-3 py-1 rounded border`}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="p-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                        ADOPLE SELECT
                      </Badge>
                    </div>
                    <CardTitle className={`${themeClasses.text} mb-1 text-lg`}>{product.name}</CardTitle>
                    <p className={`text-sm ${themeClasses.textMuted} mb-2`}>in {product.category}</p>
                    <CardDescription className={`${themeClasses.textSecondary} text-sm mb-3 line-clamp-2`}>
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className={`text-sm ${themeClasses.textMuted} ml-1`}>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="w-full">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className={`text-2xl font-bold ${themeClasses.text}`}>${product.price}</span>
                        <span className={`text-sm ${themeClasses.textMuted} line-through`}>
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Get lifetime deal</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className={`px-4 py-12 ${themeClasses.footerBg} border-t ${themeClasses.footerBorder} mt-16`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ADOPLE</h4>
              <p className={`${themeClasses.textMuted} text-sm mb-4`}>
                Part of the Sumo family since 2010. Adople is the #1 digital marketplace to buy software, courses, and
                tools to grow your business.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Account</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Log in
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Redeem
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Adople</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Sum-lings
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Learn</h4>
              <ul className={`space-y-2 text-sm ${themeClasses.textMuted}`}>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    How to start an online business
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    What is the creator economy
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${themeClasses.text}`}>
                    Entrepreneur resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`border-t ${themeClasses.footerBorder} pt-8 flex flex-col md:flex-row justify-between items-center`}
          >
            <p className={`${themeClasses.textMuted} text-sm`}>© 2025 Adople. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
