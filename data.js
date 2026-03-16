const items = [
    {
      id: 1,
      name: "Nike Air Max 97 Off-White Menta",
      brand: "Nike",
      category: "shoes",
      audience: "men",
      size: "8",
      condition: "8/10. Good used condition with normal wear from use. Light outsole wear and minor creasing. No box or extra laces.",
      price: 350,
      status: "available",
      featured: false,
      images: [
      "images/airmax-offwhite-menta-1.PNG",
      "images/airmax-offwhite-menta-4.PNG",
          "images/airmax-offwhite-menta-2.PNG",
          "images/airmax-offwhite-menta-3.PNG"
          
      ],
      description: "Authentic Nike x Off-White Air Max 97 “Menta” from Virgil Abloh’s collaboration with Nike. Features translucent grey upper, gradient green-to-pink swoosh, signature Off-White text branding, and original blue zip-tie."
    },
    {
        id:2,
        name: "Louis Vuitton Damier Ebene Hampstead ",
        brand: "Louis Vuitton",
        category: "bags",
        audience: "women",
        size: "MM",
        condition: "8/10. Clean preowned Damier Ebene Canvas Tote with minimal sign of use. Hardware shows light surface wear from normal use. Interior is clean and no major stains or tears.",
        price: 875,
        status: "available",
        featured: false,
        images: [
            "images/LV-damier-ebene-1.PNG",
            "images/LV-damier-ebene-2.PNG"
            ],
        description: "  Authentic Louis Vuitton Damier Ebene tote bag featuring the iconic brown checkerboard coated canvas with dark brown leather trim and gold-tone hardware. Classic structured tote design with comfortable shoulder straps and front Louis Vuitton engraved plaque. Spacious interior perfect for everyday use. No box or dust bag for this bag. "
    },
     {
      id: 3,
      name: "Fear of God Essentials Hoodie Light Oatmeal",
      brand: "Fear of God Essentials",
      category: "apparel",
      audience: "unisex",
      size: "M",
      condition: "9.8/10. Brand new with original packaging and tags. Never worn. Clean fabric with no signs of wear. Zip Top Bag little creased.",
      price: "115",
      status: "available",
      featured: false,
      images: [
          "images/FOG-light-oatmilk-1.PNG",
          "images/FOG-light-oatmilk-2.PNG"
      ],
      description: "Authentic Fear of God Essentials hoodie featuring the signature ESSENTIALS Fear of God logo print on the chest and back. Premium heavyweight cotton blend with relaxed oversized fit and kangaroo pocket. Brand new with original packaging and tags."
  },
    {
      id: 4,
      name: "Tissot Watch",
      brand: "Tissot",
      category: "accessories",
      size: "One Size",
      condition: "9.5/10",
      price: 450,
      status: "sold",
      featured: false,
      images: [
        "images/watch-1.jpg",
        "images/watch-2.jpg"
      ],
      description: "Classic watch in excellent condition with a clean and versatile design."
    },
    {
      id: 5,
      name: "Labubu Figure",
      brand: "Pop Mart",
      category: "collectibles",
      size: "Standard",
      condition: "Mint",
      price: null,
      status: "collection",
      featured: false,
      images: [
        "images/labubu-1.jpg",
        "images/labubu-2.jpg"
      ],
      description: "Personal collection piece kept in mint condition."  
    },
    {
        id: 6,
        name: "Saint Laurent YSL Sunset Black Leather Chain Shoulder Bag",
        brand: "Saint Laurent",
        category: "bags",
        size: "Medium",
        condition: "9.5/10. Like New condition. Bag appears unused with very minimal handling wear. Light dust from storage but leather, corners, and hardware remain clean with no visible scratches or damage. Interior is clean. No original dust bag or box included.",
        price: 1900,
        status: "available",
        featured: true,
        images: [
            "images/YSL-sunset-1.PNG",
            "images/YSL-sunset-2.PNG",
            "images/YSL-sunset-3.PNG",
            "images/YSL-sunset-4.PNG"
        ],
        description: "Authentic Saint Laurent YSL Sunset chain shoulder bag crafted in smooth black leather with silver-tone YSL monogram hardware and chain strap. Features a structured flap design with magnetic closure and Saint Laurent Paris logo inside. Elegant and timeless bag perfect for everyday use or evening wear. Bag was stored and shows only light dust from storage. No dust bag or box included."
    },
    {
        id: 7,
        name: "See By Chloé Joan Small Crossbody Leather Bag",
        brand: "See By Chloé",
        category: "bags",
        audience: "women",
        size: "Small",
        condition: "9.5/10. New/ with tags. Bag appears new with original See By Chloé tag attached. Leather, corners, and strap are very clean with minimal signs of handling. Light dust from storage but no visible scratches or wear.",
        price: 380,
        status: "available",
        featured: false,
        images: [
            "images/chloe-2.PNG",
            "images/chloe-1.PNG"
        ],
        description: "Authentic See By Chloé Joan small crossbody bag crafted in smooth beige leather with the signature braided ring hardware and key charm detail on the front flap. Features a structured silhouette, gold-tone hardware, and adjustable crossbody strap. Elegant everyday bag that can be worn casually or dressed up. Bag includes original See By Chloé tag and was stored carefully with only light dust from storage."
    },
    {
        id: 8,
        name: "Hermès Eau De Citron Noir Eau De Cologne 100ml",
        brand: "Hermès",
        category: "accessories",
        size: "100ml",
        condition: "10/10. Brand new sealed in original plastic packaging. Box and product are clean with no signs of use.",
        price: 105,
        status: "available",
        featured: false,
        images: [
            "images/hermes-perfume-2.PNG",
            "images/hermes-perfume-1.PNG"
        ],
        description: "Authentic Hermès Eau De Citron Noir Eau De Cologne (100ml). A fresh citrus-woody fragrance created by Hermès perfumer Christine Nagel featuring notes of black lemon, black tea, and guaiac wood. Unisex scent suitable for both men and women. Brand new sealed in original packaging."
    },
    {
        id: 9,
        name: "Nike Air Force 1 Low Custom Blue Paisley Swoosh",
        brand: "Nike",
        category: "shoes",
        audience: "women",
        size: "6",
        condition: "10/10. Brand new with original box. Clean white leather uppers with custom blue paisley swoosh detailing. No signs of wear.",
        price: 90,
        status: "available",
        featured: false,
        images: [
            "images/airforce-1.PNG",
            "images/airforce-2.PNG"
        ],
        description: "Authentic Nike Air Force 1 Low featuring a custom blue paisley swoosh design on premium white leather. Classic AF1 silhouette with durable rubber outsole and cushioned Air midsole for everyday comfort. Brand new with original box and never worn. Unique custom pair perfect for casual wear or sneaker collectors."
    },
    
      
    {
        id:10,
        name: "Air Jordan 4 Retro Frozen Moments",
        brand: "Jordan",
        category: "shoes",
        audience: "women",
        size: "8",
        condition: "10/10. Brand new with original box. Never worn. Clean suede and leather uppers with chrome hardware. No flaws or signs of use.",
        price: "400",
        status: "available",
        featured: true,
        images: [
            "images/jordan4-forzen-2.PNG",
            "images/jordan4-forzen-1.PNG"
        ],
        description: "Authentic Air Jordan 4 Retro Frozen Moments featuring premium light grey suede and leather uppers with chrome wing hardware. Classic AJ4 design with visible Air cushioning and durable rubber outsole. Brand new with original box and never worn."
    },

    {
      id:11,
      name: "Nike Kobe 4 Protro Mambacita Gigi",
      brand: "Nike",
      category: "shoes",
      audience: "men",
      size: "9.5",
      condition: "10/10. Brand new with original box. Never worn. Clean uppers with spare laces included.",
      price: "490",
      status: "available",
      featured: true,
      images: [
          "images/Kobe4-protro-mamba-1.PNG",
          "images/Kobe4-protro-mamba-2.PNG",
          "images/Kobe4-protro-mamba-3.PNG"
      ],
      description: "Authentic Nike Kobe 4 Protro featuring a low-top performance design with responsive Zoom Air cushioning. Lightweight synthetic upper with classic black swoosh and durable traction outsole. Brand new with original box and never worn."
  },

  {
    id:12,
    name: "Nike Air Max 1 Patta Noise Aqua",
    brand: "Nike",
    category: "shoes",
    audience: "men",
    size: "8",
    condition: "10/10. Brand new with original box and accessories. Includes Patta bracelet pouch and extra laces. Never worn.",
    price: "240",
    status: "available",
    featured: false,
    images: [
        "images/patta-airmax-aqua-2.PNG",
        "images/patta-airmax-aqua-3.PNG",
        "images/patta-airmax-aqua-1.PNG"
    ],
    description: "Authentic Nike Air Max 1 Patta Noise Aqua collaboration featuring the signature wavy mudguard design and premium mesh and leather construction. Includes special Patta bracelet pouch accessory. Brand new with original box and never worn."
,

},
{
  id: 15,
  name: "Nike SB Dunk Low Yuto Horigome",
  brand: "Nike",
  category: "shoes",
  audience: "men",
  size: "11",
  condition: "10/10. Brand new with original box. Never worn. Clean suede and leather uppers with no signs of wear.",
  price: "340",
  status: "available",
  featured: false,
  images: [
      "images/sbdunk-yuto-1.PNG",
      "images/sbdunk-yuto-2.PNG"
  ],
  description: "Authentic Nike SB Dunk Low Yuto Horigome collaboration featuring premium grey suede overlays, white leather base, and brown accents. Designed in collaboration with Olympic skateboarder Yuto Horigome and finished with his signature feather logo on the heel. Brand new with original box and never worn."
},
{
  id: 13,
  name: "Air Jordan 1 Retro High OG Lost & Found Chicago",
  brand: "Jordan",
  category: "shoes",
  audience: "men",
  size: "8.5",
  condition: "10/10. Brand new with original box. Never worn. Clean leather uppers with vintage-style cracked black leather collar and classic Chicago color blocking.",
  price: "290",
  status: "available",
  featured: false,
  images: [
      "images/jordan1-lost-found-2.PNG",
      "images/jordan1-lost-found-1.PNG"
  ],
  description: "Authentic Air Jordan 1 Retro High OG Lost & Found Chicago featuring the iconic Chicago colorway with vintage inspired details including cracked leather collar and aged midsole. Premium leather construction with classic Air Jordan branding. Brand new with original box and never worn."
},
{
  id:14,
  name: "Air Jordan 3 Retro Powder Blue",
  brand: "Jordan",
  category: "shoes",
  audience: "men",
  size: "10",
  condition: "10/10. Brand new with original box and hang tag. Never worn. Clean leather uppers with classic elephant print overlays and no signs of wear.",
  price: "370",
  status: "available",
  featured: false,
  images: [
      "images/jordan3-powder-blue-1.PNG",
      "images/jordan3-powder-blue-2.PNG",
      "images/jordan3-powder-blue-3.PNG"
  ],
  description: "Authentic Air Jordan 3 Retro Powder Blue featuring premium blue leather uppers with signature elephant print overlays on the toe and heel. Classic AJ3 design with visible Air cushioning and durable rubber outsole. Includes original hang tag and box. Brand new and never worn."
}

  ];
