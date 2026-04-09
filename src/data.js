/**
 * DATA FOR FINAL YEAR PROJECT
 * Images should be placed in the /public folder
 */

export const HERO_SLIDES_DATA = [
  {
    id: 1,
    subtitle: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    desc: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    price: "$299",
    image: "/Img.png",
    color: "bg-[#F2F4F5]"
  },
  {
    id: 2,
    subtitle: "LIMITED EDITION",
    title: "Nintendo Switch",
    desc: "Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen.",
    price: "$349",
    image: "/switch.png", 
    color: "bg-[#E3E9EB]"
  },
  {
    id: 3,
    subtitle: "NEW ARRIVAL",
    title: "PlayStation 5",
    desc: "Experience lightning-fast loading with an ultra-high speed SSD.",
    price: "$499",
    image: "/ps5.png", 
    color: "bg-[#F2F4F5]"
  }
];

export const BEST_DEALS_DATA = [
  { id: 1, name: "Bose Sport Earbuds - Wireless...", price: "2,300", status: "SOLD OUT", image: "/FlipBuds.png" },
  { id: 2, name: "Simple Mobile 4G LTE Prepaid...", price: "220", image: "/SmartPhone.png" },
  { id: 3, name: "4K UHD LED Smart TV with...", price: "1,500", oldPrice: "865", discount: "19% OFF", image: "/TV.png" },
  { id: 4, name: "Sony DSCHX8 High Zoom Point...", price: "1,200", image: "/Camera.png" },
  { id: 5, name: "Dell Optiplex 7000x7480...", price: "1,200", image: "/Monitor.png" },
  { id: 6, name: "JBL FLIP 4 - Waterproof...", price: "1,200", image: "/Speaker.png" },
  { id: 7, name: "Portable Washing Machine...", price: "1,200", image: "/Washer.png" },
  { id: 8, name: "2-Barrel Carburetor Carb...", price: "1,200", image: "/Carb.png" },
];

export const COMPUTER_ACCESSORIES_DATA = [
  { 
    id: 1, 
    badge: "BEST DEALS", 
    name: "Amazon Basics High-Speed HDMI Cable", 
    price: "360", 
    oldPrice: "450",
    rating: 5, 
    image: "/hdmi.png",
    gallery: ["/hdmi.png", "/hdmi-side.png"], // Only 2 images for testing dynamic gallery
    description: "Experience high-quality audio and video with this Amazon Basics High-Speed HDMI Cable. Supports 4K video at 60 Hz, 2160p, and 48-bit/px color depth.",
    specifications: {
      "Type": "HDMI 2.0",
      "Length": "6 Feet",
      "Connector": "Gold-Plated",
      "Compatibility": "PS5, Xbox, Apple TV"
    },
    additionalInfo: "Comes with a 1-year limited warranty and frustration-free packaging.",
    reviews: [
      { user: "Ayo Israel", rating: 5, comment: "Perfect for my PS5 setup!" }
    ]
  },
  { 
    id: 3, 
    tag: "HOT", 
    name: "TOZO T6 True Wireless Earbuds", 
    price: "70", 
    oldPrice: "90",
    rating: 5, 
    image: "/tozo.png",
    gallery: ["/tozo.png", "/tozo-case.png", "/tozo-ear.png", "/tozo-box.png"], // 4 images for testing
    description: "The most powerful earbuds ever. BLazing-fast connectivity and amazing battery life.",
    specifications: {
      "Bluetooth": "5.3",
      "Waterproof": "IPX8",
      "Playtime": "30 Hours",
      "Charging": "Wireless Support"
    },
    additionalInfo: "Free 1 Year Warranty included.",
    reviews: [
      { user: "Oloyede", rating: 4, comment: "Sound quality is top notch!" }
    ]
  },
  { 
    id: 4, 
    name: "Dell Optiplex 7000x7480 All-in-One Monitor", 
    price: "250", 
    rating: 5, 
    image: "/monitor.png",
    gallery: ["/monitor.png"], // Just 1 image
    description: "A stunning Liquid Retina XDR display—the best ever in a monitor.",
    specifications: {
      "Screen": "24-inch",
      "Resolution": "4K UHD",
      "Panel": "IPS"
    },
    additionalInfo: "Secure payment method and 24/7 support.",
    reviews: []
  },
  { id: 5, name: "Samsung Electronics Samsung Galaxy S21 5G", price: "2,300", rating: 4, image: "/s21.png" },
  { id: 6, badge: "SALE", name: "4K UHD LED Smart TV with Chromecast", price: "220", rating: 4, image: "/tv.png" },
  { id: 7, name: "Wired Over-Ear Gaming Headphones", price: "1,500", rating: 5, image: "/headphones.png" },
  { id: 8, badge: "25% OFF", name: "Polaroid 57-Inch Photo/Video Tripod", price: "1,200", oldPrice: "1600", rating: 4, image: "/tripod.png" },
  { id: 9, badge: "BEST DEALS", name: "USB-C to Lightning Cable (6ft)", price: "25", rating: 5, image: "/cable.png" },
  { id: 10, name: "Logitech MX Master 3S Mouse", price: "99", rating: 5, image: "/mouse.png" },
  { id: 11, tag: "HOT", name: "Mechanical Gaming Keyboard RGB", price: "120", rating: 4, image: "/keyboard.png" },
  { id: 12, name: "External 1TB SSD Portable Drive", price: "110", rating: 5, image: "/ssd.png" },
  { id: 13, name: "Ring Light with Tripod Stand", price: "45", rating: 4, image: "/ringlight.png" },
  { id: 14, badge: "SALE", name: "Smart Home Security Camera", price: "60", rating: 4, image: "/camera.png" },
  { id: 15, name: "Noise Cancelling Headphones", price: "350", rating: 5, image: "/headphones-pro.png" },
  { id: 16, badge: "25% OFF", name: "Wireless Charging Pad", price: "30", oldPrice: "40", rating: 4, image: "/charger.png" },
];

export const FEATURED_PRODUCTS_DATA = [
  { id: 3, tag: "HOT", name: "TOZO T6 True Wireless Earbuds", price: "70", rating: 5, image: "/tozo.png" },
  { id: 5, name: "Samsung Galaxy S21 5G", price: "2,300", rating: 4, image: "/s21.png" },
  { id: 1, badge: "BEST DEALS", name: "Amazon Basics HDMI Cable", price: "360", rating: 5, image: "/hdmi.png" },
  { id: 2, name: "Portable Washing Machine", price: "80", rating: 4, image: "/washer.png" },
  { id: 7, name: "Wired Gaming Headphones", price: "1,500", rating: 5, image: "/headphones.png" },
  { id: 8, badge: "25% OFF", name: "Polaroid Photo Tripod", price: "1,200", oldPrice: "1600", rating: 4, image: "/tripod.png" },
  { id: 4, name: "Dell Optiplex All-in-One Monitor", price: "250", rating: 5, image: "/monitor.png" },
  { id: 6, badge: "SALE", name: "4K UHD LED Smart TV", price: "220", rating: 4, image: "/tv.png" },
];

export const LATEST_NEWS_DATA = {
  blogPosts: [
    { id: 1, image: "/Blog.jpg", author: "Kristin", date: "19 Dec, 2013", comments: "453", title: "The future of AI in consumer electronics", desc: "How smart devices are changing our daily routines..." },
    { id: 2, image: "/Blog1.jpg", author: "Robert", date: "28 Nov, 2015", comments: "738", title: "Top 10 gaming setups of 2026", desc: "A look into the most immersive setups ever built..." },
    { id: 3, image: "/Blog.jpg", author: "Arlene", date: "9 May, 2014", comments: "826", title: "Why your SSD choice matters", desc: "Performance benchmarks for the latest storage tech..." },
  ],
  miniLists: [
    { id: 1, name: "Bose Sport Earbuds - Wireless...", price: "1,500", image: "/FlipBuds.png" },
    { id: 2, name: "Simple Mobile 4G LTE Prepaid...", price: "1,500", image: "/SmartPhone.png" },
    { id: 3, name: "4K UHD LED Smart TV with...", price: "1,500", image: "/TV.png" },
  ]
};