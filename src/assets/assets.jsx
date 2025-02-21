import back_icon from './back_icon.png'
import search_icon from './search_icon.png'
import shopping_cart from './shopping_cart.png'
import hoodie from './hoodie.png'
import hoodie_back from './hoodie_back.png'
import logo_image from './logo_image.png'
import profile_icon from './profile_icon.png'
import menu_icon from './menu_icon.png'
import merch from './merch.png'
import merch_back from './merch_back.png'
import panda from './panda.png'
import clogo from './clogo.png'
import exchange from './exchange.png'
import cust_support from './cust_support.jpg'
import returns from './returns.png'
import dropdown_icon from './dropdown_icon.png'
import cross_icon from './cross_icon.png'
import shirt from './shirt.png'
import shirt_back from './shirt_back.png'
import spant from './spant.png'
import spant_back from './spant_back.png'
import star from './star.png'
import dull_star from './dull_star.png'
import bin from './bin.png'
import Paypal_logo from './Paypal-Logo.png'
import applePay_logo from './applePay_logo.png'
import contact_us_image from './contact-us-image.png'


export const assets = {
    back_icon,
    contact_us_image,
    Paypal_logo,
    applePay_logo,
    bin,
    search_icon,
    shopping_cart, 
    logo_image,
    profile_icon,
    menu_icon,
    hoodie,
    merch,
    panda,
    clogo,
    star,
    dull_star,
    exchange,
    cust_support,
    returns,
    dropdown_icon,
    cross_icon,
    hoodie_back,
    merch_back,
    shirt,
    shirt_back,
    spant,
    spant_back
}

export const products = [
    {
      _id: "1",
      name: "Classic Leather Jacket",
      description: "A stylish and durable leather jacket for all seasons.",
      price: 120.99,
      image: [hoodie, hoodie_back],
      category: "Men",
      subCategory: "Hoodies",
      sizes: ["S", "M", "L", "XL"],
      date: "2025-02-04",
      bestseller: true,
    },
    {
      _id: "2",
      name: "Wireless Bluetooth Headphones",
      description: "High-quality noise-canceling Bluetooth headphones.",
      price: 79.99,
      image: [hoodie, hoodie_back],
      category: "Women",
      subCategory: "Hoodies",
      sizes: [],
      date: "2025-01-20",
      bestseller: true,
    },
    {
      _id: "3",
      name: "Running Sneakers",
      description: "Lightweight and comfortable sneakers for daily runs.",
      price: 89.99,
      image: [hoodie, hoodie_back],
      category: "Men",
      subCategory: "Hoodies",
      sizes: ["7", "8", "9", "10", "11"],
      date: "2025-01-15",
      bestseller: false,
    },
    {
      _id: "4",
      name: "Smartwatch Series 5",
      description: "A smartwatch with health tracking and long battery life.",
      price: 199.99,
      image: [merch, merch_back],
      category: "Women",
      subCategory: "Hoodies",
      sizes: [],
      date: "2024-12-30",
      bestseller: true,
    },
    {
      _id: "5",
      name: "Cotton T-Shirt",
      description: "A breathable cotton t-shirt, available in multiple colors.",
      price: 25.99,
      image: [merch,merch_back],
      category: "Kids",
      subCategory: "Hoodies",
      sizes: ["S", "M", "L", "XL", "XXL"],
      date: "2025-01-10",
      bestseller: false,
    },
    {
      _id: "6",
      name: "Backpack Pro",
      description: "A spacious and durable backpack for travel and work.",
      price: 959.99,
      image: [merch, merch_back],
      category: "Kids",
      subCategory: "Hoodies",
      sizes: [],
      date: "2025-02-01",
      bestseller: true,
    },
    {
      _id: "7",
      name: "Backpack Pro",
      description: "A spacious and durable backpack for travel and work.",
      price: 59.99,
      image: [shirt, shirt_back],
      category: "Kids",
      subCategory: "Shirts",
      sizes: [],
      date: "2025-02-01",
      bestseller: true,
    },
    {
      _id: "8",
      name: "Backpack Pro",
      description: "A spacious and durable backpack for travel and work.",
      price: 259.99,
      image: [spant, spant_back],
      category: "Kids",
      subCategory: "Sweat Pants",
      sizes: [],
      date: "2025-02-01",
      bestseller: true,
    },
    {
      _id: "9",
      name: "Backpack Pro",
      description: "A spacious and durable backpack for travel and work.",
      price: 759.99,
      image: [shirt, shirt_back],
      category: "Kids",
      subCategory: "Shirts",
      sizes: [],
      date: "2025-02-01",
      bestseller: true,
    },
    {
      _id: "10",
      name: "Backpack Pro",
      description: "A spacious and durable backpack for travel and work.",
      price: 359.99,
      image: [spant, spant_back],
      category: "Kids",
      subCategory: "Sweat Pants",
      sizes: [],
      date: "2025-02-01",
      bestseller: true,
    },
  ];

