export const data = {
  home: {
    adsvertiment: {
      productInfo: {
        id: 'lenovo-yoga-x-777',
        name: 'Lenovo Yoga X',
        saleTag: 'FLASH SALE 7.7.7',
        description:
          'Smarter and intuitive with the same expert design and detail. Plus combine innovative latest AI features',
        price: {
          original: 1500.0,
          sale: 750.0,
          currency: 'USD',
        },
        callToAction: 'Buy Now for $750',
        image: '/images/lenovo-yoga-x.png',
      },
    },
    banner: {
      products: [
        {
          id: 1,
          brand: 'SONY WH-H910N',
          product_name: 'Best in Hi-Res and Noise Cancelling',
          description:
            'Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.',
          image: ['/images/SonyHeadphone.png'],
          price: 234,
        },
        {
          id: 2,
          brand: 'Bose QuietComfort 45',
          product_name: 'Comfort and Silence Redefined',
          description:
            'Advanced noise cancellation with incredible comfort. Enjoy 24 hours of battery life and crystal clear audio for both music and calls.',
          image: ['/images/Macbook Pro 2018 1.png'],
          price: 299,
        },
        {
          id: 3,
          brand: 'Apple AirPods Max',
          product_name: 'Immersive Sound, Elegant Design',
          description:
            'Custom acoustic design with spatial audio and active noise cancellation. Seamlessly integrates with your Apple devices.',
          image: ['/images/Air.png'],
          price: 549,
        },
        {
          id: 4,
          brand: 'Sennheiser Momentum 4',
          product_name: 'Audiophile-Grade Wireless Sound',
          description:
            'Unrivaled sound clarity with adaptive noise canceling and a 60-hour battery life. Built for those who demand the best.',
          image: ['/images/iphone.png'],
          price: 379,
        },
        {
          id: 5,
          brand: 'JBL Tour One',
          product_name: 'Smart Noise Cancelling for Travelers',
          description:
            'Adaptive noise canceling with smart ambient technology. 50 hours of battery life and support for voice assistants.',
          image: ['/images/Cameradetail.png'],
          price: 299,
        },
      ],
    },
    benefit: {
      features: [
        {
          id: 1,
          icon: './images/Shipping.svg',
          name: 'Free Shipping',
          description: 'Free delivery for all orders',
          link: '',
        },
        {
          id: 2,
          icon: './images/Money.svg',
          name: 'Money Guarantee',
          description: '30 days money back',
          link: '',
        },
        {
          id: 3,
          icon: './images/Customer Service.svg',
          name: '24/7 Support',
          description: 'Friendly 24/7 support',
          link: '',
        },
        {
          id: 4,
          icon: './images/Card.svg',
          name: 'Secure Payment',
          description: 'All cards accepted',
          link: '',
        },
      ],
    },
    bestseller: {
      content: {
        heading: 'Best Seller Products',
        description: 'Check our best seller products on Elma website right now',
      },
      products: [
        {
          id: 1,
          name: 'Samsung Galaxy Watch 3',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Bitmap.png',
          sale: true,
          rating: 5,
          buttons: ['Add to cart', 'Quick view'],
        },
        {
          id: 2,
          name: 'Apple Watch 4 2020',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Category3.png',
          sale: false,
          rating: 5,
        },
        {
          id: 3,
          name: 'iPhone XS Max Pro',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/iphone.png',
          sale: true,
          rating: 5,
        },
        {
          id: 4,
          name: 'Beats by Dre C 3450',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Category6.png',
          sale: false,
          rating: 5,
        },
        {
          id: 5,
          name: 'Airpods 2nd Gen',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Air.png',
          sale: false,
          rating: 5,
        },
        {
          id: 6,
          name: 'Garmin Watch Fit X',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/clock.png',
          sale: true,
          rating: 5,
        },
        {
          id: 7,
          name: 'Women Yellow Turtleneck',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Category4.png',
          sale: false,
          rating: 5,
        },
        {
          id: 8,
          name: 'Harman Kardon Speaker',
          category: 'Men Fashion',
          price: 1725.0,
          image: '/images/Category2.png',
          sale: true,
          rating: 5,
        },
      ],
    },
    categories: [
      {
        id: 1,
        icon: './images/category/Phone.png',
        name: 'Category Name',
        items: '2.3k items',
        selected: true,
      },
      {
        id: 2,
        icon: './images/category/Camera.png',
        name: 'Category Name',
        items: '2.3k items',
        selected: false,
      },
      {
        id: 3,
        icon: './images/category/Computer.png',
        name: 'Category Name',
        items: '2.3k items',
        selected: false,
      },
      {
        id: 4,
        icon: './images/category/Mens fashion.png', // hoặc tên custom, như "fa-tank-top" nếu là SVG riêng
        name: 'Category Name',
        items: '2.3k items',
        selected: false,
      },
      {
        id: 5,
        icon: './images/category/Games.png',
        name: 'Category Name',
        items: '2.3k items',
        selected: false,
      },
      {
        id: 6,
        icon: './images/category/Healthy.png',
        name: 'Category Name',
        items: '2.3k items',
        selected: false,
      },
    ],
    productLists: [
      {
        id: 1,
        title: 'Product list 1',
        products: [
          {
            id: 101,
            image: 'images/iphone.png',
            name: 'Popular items from cat 01',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 102,
            image: 'images/iphone.png',
            name: 'Popular items from cat 01',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 103,
            image: 'images/iphone.png',
            name: 'Popular items from cat 01',
            price: 1725.0,
            rating: 4.6,
          },
        ],
        viewMoreLink: '/products/list-1',
      },
      {
        id: 2,
        title: 'Product list 2',
        products: [
          {
            id: 201,
            image: 'images/clock.png',
            name: 'Popular items from cat 02',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 202,
            image: 'images/clock.png',
            name: 'Popular items from cat 02',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 203,
            image: 'images/clock.png',
            name: 'Popular items from cat 02',
            price: 1725.0,
            rating: 4.6,
          },
        ],
        viewMoreLink: '/products/list-2',
      },
      {
        id: 3,
        title: 'Product list 3',
        products: [
          {
            id: 301,
            image: 'images/sweat.png',
            name: 'Popular items from cat 03',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 302,
            image: 'images/sweat.png',
            name: 'Popular items from cat 03',
            price: 1725.0,
            rating: 4.6,
          },
          {
            id: 303,
            image: 'images/sweat.png',
            name: 'Popular items from cat 03',
            price: 1725.0,
            rating: 4.6,
          },
        ],
        viewMoreLink: '/products/list-3',
      },
    ],
    blog: {
      header: {
        heading: 'Read our blog',
        description:
          'Check our latest article to get meaningfull content or tips for shopping',
      },
      blogPosts: [
        {
          id: 1,
          image: 'images/Blogitem1.png',
          date: '07 July 2020',
          title: 'Types of Blouse In Catalog fashion',
          description:
            'In order to discuss the general function of the logo, we must firstly identify and define the environment…',
          selected: true,
        },
        {
          id: 2,
          image: 'images/Blogitem2.png',
          date: '08 July 2020',
          title: 'Types of Blouse In Catalog fashion',
          description:
            'In order to discuss the general function of the logo, we must firstly identify and define the environment…',
          selected: false,
        },
        {
          id: 3,
          image: 'images/Blogitem3.png',
          date: '09 July 2020',
          title: 'Types of Blouse In Catalog fashion',
          description:
            'In order to discuss the general function of the logo, we must firstly identify and define the environment…',
          selected: false,
        },
      ],
    },
  },

  category: {
    header: {
      heading: 'Shop categories',
      description: 'Check all our categories to get what brand you needs',
    },
    productLists: [
      {
        id: 1,
        background: 'bg-teal/10',
        image: 'images/Category1.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'teal',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
      {
        id: 2,
        background: 'bg-green/10',
        image: 'images/Category2.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'green',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
      {
        id: 3,
        background: 'bg-orange/10',
        image: 'images/Category3.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'red',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
      {
        id: 4,
        background: 'bg-yellow/10',
        image: 'images/Category4.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'yellow',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
      {
        id: 5,
        background: 'bg-purple/10',
        image: 'images/Category5.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'purple',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
      {
        id: 6,
        background: 'bg-blue/10',
        image: 'images/Category6.png',
        title: 'Product list 1',
        items: '2,3k items',
        itemsColor: 'blue',
        categories: [
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
          { name: 'Category Name', quantity: 124 },
        ],
      },
    ],
    brand: {
      heading: 'Popular Brands',
      description: 'Check our best seller products on Elma website right now',
    },
    brandLists: [
      {
        id: 1,
        brand_name: 'Apple',
        background: 'white',
        logo: 'images/brands/Apple.png',
      },
      {
        id: 2,
        brand_name: 'Xiaomi',
        background: 'orange',
        logo: 'images/brands/Xiaomi.png',
      },
      {
        id: 3,
        brand_name: 'Wacom',
        background: 'green/10',
        logo: 'images/brands/Wacom.png',
      },
      {
        id: 4,
        brand_name: 'Asus',
        background: 'blue',
        logo: 'images/brands/Asus.png',
      },
      {
        id: 5,
        brand_name: 'Sony',
        background: 'orange/10',
        logo: 'images/brands/Sony.png',
      },
      {
        id: 6,
        brand_name: 'Barbour',
        background: 'purple',
        logo: 'images/brands/Barbour.png',
      },
      {
        id: 7,
        brand_name: 'Samsung',
        background: 'blue',
        logo: 'images/brands/Samsung.png',
      },
      {
        id: 8,
        brand_name: 'Fila',
        background: 'purple/20',
        logo: 'images/brands/Fila.png',
      },
    ],
  },

  register_alt: {
    headline:
      'Join with +2 Million seller who offer best product from all across country',
    subheadline: 'Sign up now and get all big benefit from Elma e-commerce:',
    benefits: [
      {
        icon: 'images/Shipping.svg',
        title: 'Free Shipping',
        description: 'You will get free shipping from all your transactions.',
        note: 'No terms, no transaction limit.',
      },
      {
        icon: 'images/Money.svg',
        title: 'Money Back Guarantee',
        description: 'You will get free shipping from all your transactions.',
        note: 'No terms, no transaction limit.',
      },
      {
        icon: 'images/Customer Service.svg',
        title: '24/7 Customer support',
        description: 'You will get free shipping from all your transactions.',
        note: 'No terms, no transaction limit.',
      },
    ],
    trusted_brands: [
      'images/register-alt-brand/Asus.png',
      'images/register-alt-brand/Xiaomi.png',
      'images/register-alt-brand/SamSung.png',
      'images/register-alt-brand/Sony.png',
      'images/register-alt-brand/Wacom.png',
      'images/register-alt-brand/Apple.png',
    ],
  },

  sign_in_alt: {
    headline:
      'Enjoy all big benefits fro Elma that you can’t find in other product again',
    subheadline: 'Sign in now and get all big benefit from Elma e-commerce:',
    benefits: [
      {
        icon: 'images/Shipping.svg',
        title: 'Free Shipping',
        description: 'You will get free shipping from all your transactions.',
      },
      {
        icon: 'images/Money.svg',
        title: 'Money Back Guarantee',
        description: 'You will get free shipping from all your transactions.',
      },
      {
        icon: 'images/Customer Service.svg',
        title: '24/7 Customer support',
        description: 'You will get free shipping from all your transactions.',
      },
      {
        icon: 'images/Customer Service.svg',
        title: 'Best Prices',
        description: 'You will get free shipping from all your transactions.',
      },
    ],
    trusted_brands: [
      'images/register-alt-brand/Asus.png',
      'images/register-alt-brand/Xiaomi.png',
      'images/register-alt-brand/SamSung.png',
      'images/register-alt-brand/Sony.png',
      'images/register-alt-brand/Wacom.png',
      'images/register-alt-brand/Apple.png',
    ],
  },

  cart: {
    heading: {
      heading: 'Shopping Cart',
      description: 'This is your cart based on your item you want to buy..',
    },
    products: [
      {
        id: 1,
        store: 'Apple',
        rank: 1,
        products: [
          {
            id: 1,
            product_name: 'Macbook Pro 2018',
            image: 'images/Macbook Pro 2018 1.png',
            type: 'Space Grey',
            price: 3500,
            quantity: 2,
          },
          {
            id: 2,
            product_name: 'iPhone XS Max Pro',
            image: 'images/iphone.png',
            type: 'Space Grey, 128 GB',
            price: 1725,
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        store: 'Samsung',
        rank: 2,
        products: [
          {
            id: 1,
            product_name: 'Samsung Galaxy Watch 3',
            image: 'images/clock.png',
            type: 'Mate Black',
            price: 1725,
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        store: 'Stradivarius',
        rank: 0,
        products: [
          {
            id: 1,
            product_name: 'Women Yellow Turtleneck',
            image: 'images/sweat.png',
            type: 'Yellow Pastel',
            price: 1725,
            quantity: 1,
          },
        ],
      },
      {
        id: 4,
        store: 'Beats',
        rank: 3,
        products: [
          {
            id: 1,
            product_name: 'Beats by Dre C 3450',
            image: 'images/Category6.png',
            type: 'Navy Blue',
            price: 1725,
            quantity: 1,
          },
        ],
      },
    ],
    productSuggest: [
      {
        name: 'Garmin Watch Fit X',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category1.png',
      },
      {
        name: 'Harman Kardon Speaker Black 04',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category2.png',
      },
      {
        name: 'iPhone XS Max Pro',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category3.png',
      },
      {
        name: 'Women Yellow Turtleneck M',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category4.png',
      },
      {
        name: 'Leather Bag Women',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category5.png',
      },
      {
        name: 'Garmin Watch Fit X',
        price: 1725.0,
        currency: '$',
        rating: 4.6,
        image: 'images/Category6.png',
      },
    ],
    addressSelector: {
      shippingMethods: [
        {
          id: 1,
          label: 'Nhanh',
          price: 21200,
          guarantee: 'Đảm bảo nhận hàng từ 5 Tháng 7 - 8 Tháng 7',
          note: 'Nhận Voucher trị giá ₫15.000 nếu đơn hàng được giao đến bạn sau ngày 7 Tháng 7 2025.',
        },
        {
          id: 2,
          label: 'Siêu Tốc - 4 Giờ',
          price: 78600,
          guarantee: 'Dự kiến giao hàng trong 4 Giờ',
          note: '(Không hỗ trợ chương trình Shopee Đóng Kiểm)',
        },
        {
          id: 3,
          label: 'Tiết kiệm',
          price: 18900,
          guarantee: 'Cam kết nhận hàng trong Ngày Mai',
          note: 'Nhận Voucher trị giá ₫15.000 nếu đơn hàng được giao đến bạn sau ngày 5 Tháng 7 2025.',
        },
      ],
    },
  },

  checkout: {
    address: [
      {
        id: 1,
        name: 'Lê Cao Tấn Lộc',
        phone: '+84 852 508 843',
        address:
          'Số 21, Đường Đường Số 4, Khu Phố 5, Phường Hiệp Bình Chánh, Thành Phố Thủ Đức, TP. Hồ Chí Minh',
        isDefault: true,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'Lê Cao Tấn Lộc',
        phone: '+84 852 508 843',
        address:
          'Thôn Đức Láng, Xã Thuận Minh, Huyện Hàm Thuận Bắc, Bình Thuận',
        isDefault: false,
        isAvailable: false, // "Địa chỉ lấy hàng"
      },
      {
        id: 3,
        name: 'Lê Cao Tấn Lộc',
        phone: '+84 852 508 843',
        address:
          'Đường An Sơn, Xóm Nhà Lá And Homestay, Phường 4, Thành Phố Đà Lạt, Lâm Đồng',
        isDefault: false,
        isAvailable: true,
      },
      {
        id: 4,
        name: 'Lê Cao Tấn Lộc',
        phone: '+84 852 508 843',
        address:
          'Số 19m, Đường Nguyễn Hữu Cảnh, Phường 19, Quận Bình Thạnh, TP. Hồ Chí Minh',
        isDefault: false,
        isAvailable: true,
      },
    ],
    shippingMethods: [
      {
        id: 1,
        name: 'Nhanh',
        price: 37700,
        guarantee: 'Đảm bảo nhận hàng từ 7 Tháng 7 - 8 Tháng 7',
        note: 'Nhận Voucher trị giá ₫15.000 nếu đơn hàng được giao đến bạn sau ngày 8 Tháng 7 2025.',
        selected: true,
      },
      {
        id: 2,
        name: 'Siêu Tốc - 4 Giờ',
        price: 92100,
        guarantee: 'Mua trước 18:00, Dự kiến giao hàng trong 4 Giờ',
        time_guarantee: 4,
        note: 'Kênh không hỗ trợ chương trình đồng kiểm',
      },
      {
        id: 3,
        name: 'Hàng Cồng Kềnh',
        price: 0,
        note: 'Dưới giới hạn kích thước tối thiểu',
        disabled: true,
      },
    ],
    shippingMethodToCabinet: [
      {
        id: 1,
        name: 'Tủ nhận hàng',
        price: 0,
        note: 'Địa chỉ lấy hàng của Người bán không được hỗ trợ, vui lòng liên hệ với Người bán để biết thêm thông tin. ',
        guarantee: '',
        time_guarantee: '',
      },
    ],
  },

  order: {
    dataOrders: [
      {
        orderId: 'SHOPEE123456',
        userId: 'USER123',
        store: {
          shopId: 'SHOP001',
          name: 'Apple',
          rank: 1,
        },
        status: 'WAITING FOR DELIVERY',
        statusDescription: 'Order has arrived at the sorting warehouse',
        payment: {
          method: 'ShopeePay',
          status: 'PAID',
        },
        logistics: {
          partner: 'GHN',
          trackingCode: 'GHN12345678',
          status: 'in_transit',
        },
        items: [
          {
            productId: 'PROD001',
            name: 'MacBook Pro 14 inch M4 Pro 2024 (12 Core CPU| 16 core GPU| 24GB RAM| 512GB SSD)',
            quantity: 1,
            price: 155000,
            images: 'images/Macbook Pro 2018 1.png',
          },
        ],
        voucherApplied: {
          voucherId: 'VOUCHER15K',
          discountAmount: 15000,
        },
        totalAmount: 131750,
        timestamps: {
          created: '2025-07-10T10:00:00Z',
          paid: '2025-07-10T10:01:00Z',
          shipped: '2025-07-11T08:00:00Z',
        },
      },
      {
        orderId: 'ORDER20250705XYZ',
        userId: 'USER_001',
        store: {
          storeId: 'SHOP_SAMSUNG_OFFICIAL',
          name: 'SAMSUNG OFFICIAL STORE',
          rank: 1,
          isMall: true,
        },
        status: 'READY TO SHIP',
        logistics: {
          expectedShipOutDate: '2025-07-07',
          statusLabel: 'VẬN CHUYỂN',
        },
        payment: {
          method: 'ShopeePay',
          status: 'PAID',
        },
        items: [
          {
            productId: 'RT22M4032BY/SV',
            name: '[Livestream] [Shopee - Lắp đặt 0Đ HN HCM] Tủ lạnh Samsung Inverter 236 lít RT22M4032BY/SV',
            category: 'Chính hãng',
            quantity: 1,
            priceOriginal: 6690000,
            priceDiscounted: 4211475,
            image: 'https://cf.shopee.vn/file/...', // Đặt đúng URL nếu dùng thật
          },
        ],
        voucherApplied: {
          discountAmount: 2478525,
        },
        totalAmount: 4211475,
        actions: {
          canContactSeller: true,
          canCancelOrder: true,
          canConfirmReceived: false,
          canRequestReturn: false,
        },
        timestamps: {
          created: '2025-07-05T09:00:00Z',
          paid: '2025-07-05T09:05:00Z',
          shipped: '',
        },
      },
    ],
  },

  order_tracking: {},

  order_tracking_detail: {
    products: [
      {
        id: 1,
        image: 'images/Air.png',
        name: 'Beats by Dre C 3450',
        price: 1725,
        quantity: 1,
      },
      {
        id: 2,
        image: 'images/Macbook Pro 2018 1.png',
        name: 'Macbook Pro 2018',
        price: 1725,
        quantity: 2,
      },
      {
        id: 3,
        image: 'images/Macbook Pro 2018 2.png',
        name: 'Macbook Pro 2018',
        price: 1725,
        quantity: 1,
      },
      {
        id: 4,
        image: 'images/Macbook Pro 2018 3.png',
        name: 'Macbook Pro 2018',
        price: 1725,
        quantity: 1,
      },
    ],
    bill_detail: [
      { id: 1, label: 'Subtotal', value: 1725 },
      { id: 2, label: 'Shipping', value: 0 },
      { id: 3, label: 'Tax', value: 10 },
      { id: 4, label: 'Discount', value: 125 },
    ],
    tracking_steps: [
      {
        description: 'Order confirmed by Seller & Elma system',
        date: '16 Jul 2020',
        time: '08:00 PM',
      },
      {
        description: 'Package received on DHL New York city',
        date: '17 Jul 2020',
        time: '08:00 PM',
      },
      {
        description: 'Package send from DHL New York city',
        date: '17 Jul 2020',
        time: '10:00 PM',
      },
      {
        description: 'Package arrive on DHL Washington DC',
        date: '18 Jul 2020',
        time: '07:00 AM',
      },
      {
        description: 'Package will send to your home by our courier (James)',
        date: '18 Jul 2020',
        time: '11:00 AM',
      },
    ],
  },

  product_detail: {
    comments: [
      {
        user: {
          name: 'Daisy Murphy',
          avatar:
            'https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          date: 'July 23, 2020',
        },
        rating: 5,
        helpfulPercentage: 83,
        content: {
          text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006. Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
          readMoreLink: '#',
          media: [
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        feedback: {
          likes: 1,
          dislikes: 0,
          userLiked: true,
          userDisliked: false,
        },
      },
      {
        user: {
          name: 'Hector Mariano',
          avatar:
            'https://images.unsplash.com/photo-1751042822183-709049032563?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          date: 'July 23, 2020',
        },
        rating: 5,
        helpfulPercentage: 83,
        content: {
          text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
          readMoreLink: '#',
          media: [],
        },
        feedback: {
          likes: 1,
          dislikes: 0,
          userLiked: false,
          userDisliked: true,
        },
      },
      {
        user: {
          name: 'Hector Mariano',
          avatar:
            'https://images.unsplash.com/photo-1751042822183-709049032563?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          date: 'July 23, 2020',
        },
        rating: 5,
        helpfulPercentage: 83,
        content: {
          text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
          readMoreLink: '#',
          media: [],
        },
        feedback: {
          likes: 1,
          dislikes: 0,
          userLiked: false,
          userDisliked: true,
        },
      },
    ],
    commentFilters: [
      { label: '5 stars', value: 5 },
      { label: '4 stars & up', value: 4 },
      { label: '3 stars & up', value: 3 },
      { label: '2 stars & up', value: 2 },
      { label: '1 star only', value: 1 },
      { label: 'With photos', value: 'photo' },
      { label: 'With videos', value: 'video' },
      { label: 'Without media', value: 'none' },
      { label: 'Most helpful', value: 'helpful' },
      { label: 'Most recent', value: 'recent' },
      { label: 'Highest rating', value: 'high_rating' },
      { label: 'Lowest rating', value: 'low_rating' },
      { label: 'Last 7 days', value: '7d' },
      { label: 'Last 30 days', value: '30d' },
      { label: 'Last 6 months', value: '6m' },
      { label: 'Custom range', value: 'custom' },
      { label: 'All regions', value: 'all' },
      { label: 'Vietnam', value: 'vn' },
      { label: 'US', value: 'us' },
      { label: 'Others', value: 'other' },
    ],
    product_detail: {
      name: 'Sony Alpha Mirrorless 4K Video Camera (Body Only)',
      rating: 4.6,
      product_sold: 261,
      product_watched: 3100,
      description:
        "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
      images: [
        { id: 1, image: 'images/Detail1.png' },
        { id: 2, image: 'images/Detail2.png' },
        { id: 3, image: 'images/Detail3.png' },
      ],
      type: [
        { id: 1, value: 'Body Only' },
        { id: 2, value: 'Full Camera' },
      ],
      color: [
        'Original',
        'Black',
        'Gray',
        // { id: 1, color: 'Original' },
        // { id: 2, color: 'Black' },
        // { id: 3, color: 'Gray' },
      ],
      price: 1999.99,
      overview:
        "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
      whatsInsideBox: {
        items: [
          'Sony Alpha (Body Only)',
          'BC-QZ1 Battery Charger',
          'Lithium-Ion Battery (2280mAh)',
          'Cable Protector',
          'Shoulder Strap',
          'Accessory Shoe Cap',
          'ALC-B1EM Body Cap for E-Mount',
          'Eyepiece Cap',
          'USB Type-C Cable',
        ],
      },
      code: [
        { id: 1, label: 'SKU Number', content: 'AIM-36403-00426' },
        { id: 2, label: 'Product Code', content: 'MTA-6593742' },
        { id: 3, label: 'EAN Code', content: '[AIWBPU0301OL]' },
      ],
      rate: [
        { id: 1, rate: 5.0, quantity: 1500, percentage: 75 },
        { id: 2, rate: 4.0, quantity: 1500, percentage: 65 },
        { id: 3, rate: 3.0, quantity: 1500, percentage: 45 },
        { id: 4, rate: 2.0, quantity: 1500, percentage: 20 },
        { id: 5, rate: 1.0, quantity: 1500, percentage: 8 },
      ],
    },
  },

  search: {
    filterSidebarData: {
      popularFilters: [
        {
          label: '⭐ 4 star or upper',
          value: '4_star_or_upper',
        },
        {
          label: 'Same day delivery',
          value: 'same_day_delivery',
        },
        {
          label: 'Super seller',
          value: 'super_seller',
        },
        {
          label: 'Sale Product',
          value: 'sale_product',
        },
      ],
      categories: [
        {
          icon: 'images/category/Headphones.png',
          name: 'Category 01',
          value: 'category_01',
        },
        {
          icon: 'images/category/Computer.png',
          name: 'Item Category 02',
          value: 'item_category_02',
        },
        {
          icon: 'images/category/Phone.png',
          name: 'Category list 03',
          value: 'category_list_03',
        },
        {
          icon: 'images/category/Healthy.png',
          name: 'Category 04',
          value: 'category_04',
        },
        {
          icon: 'images/category/Camera.png',
          name: 'Item Category 05',
          value: 'item_category_05',
        },
        {
          icon: 'images/category/Mens fashion.png',
          name: 'Category list 06',
          value: 'category_list_06',
        },
      ],
      seeAllLink: {
        text: 'See all categories',
        url: '#', // cập nhật URL thực tế nếu có
      },
    },
    colors: [
      { id: 1, color: 'blue' },
      { id: 2, color: 'green' },
      { id: 3, color: 'purple' },
      { id: 4, color: 'teal' },
      { id: 5, color: 'indigo' },
      { id: 6, color: 'yellow' },
      { id: 7, color: 'orange' },
      { id: 8, color: 'red' },
    ],

    filterOption: [{ id: 1, lable: 'highest_rating', value: 'Highest rating' }],

    store: {
      id: 1,
      image: 'images/Apple.png',
      feature: 'Featured store',
      name: 'Apple Store Official',
      product_sold: '10,5k',
      store_rating: 4.6,
    },

    products: [
      {
        id: 1,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 1.png',
        backgroundColor: 'bg-green',
      },
      {
        id: 2,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 1.png',
        backgroundColor: 'bg-blue',
      },
    ],

    search_results: [
      {
        id: 1,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: 'images/Macbook Pro 2018 1.png',
        favorite: true,
      },
      {
        id: 2,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: 'images/Macbook Pro 2018 2.png',
        favorite: false,
      },
      {
        id: 3,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: 'images/Macbook Pro 2018 3.png',
        favorite: true,
      },
      {
        id: 4,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 2.png',
        favorite: false,
      },
      {
        id: 5,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 3.png',
        favorite: true,
      },
      {
        id: 6,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 1.png',
        favorite: false,
      },
      {
        id: 7,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 3.png',
        favorite: true,
      },
      {
        id: 8,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 1.png',
        favorite: false,
      },
      {
        id: 9,
        name: 'Macbook Pro 2018',
        price: 1725.0,
        sale: true,
        currency: 'USD',
        store: 'Apple Store Official',
        rating: 4.6,
        image: '/images/Macbook Pro 2018 2.png',
        favorite: true,
      },
    ],
  },

  header: {
    socialIcons: [
      { name: 'fa-square-facebook', link: '' },
      { name: 'fa-twitter', link: '' },
      { name: 'fa-youtube', link: '' },
      { name: 'fa-instagram', link: '' },
    ],
  },
  footer: {
    socialIcons: [
      { id: 1, name: 'fa-square-facebook', link: '' },
      { id: 2, name: 'fa-twitter', link: '' },
      { id: 3, name: 'fa-linkedin', link: '' },
      { id: 4, name: 'fa-instagram', link: '' },
      { id: 4, name: 'fa-github', link: '' },
    ],
    footerNavigation: [
      {
        heading: 'First Menu',
        links: [
          'Features',
          'Enterprise',
          'Security',
          'Customer Stories',
          'Pricing',
          'Demo',
        ],
      },
      {
        heading: 'Second Menu',
        links: [
          'Engineering',
          'Financial Services',
          'Sales',
          'IT',
          'Customer Support',
          'Human Resources',
          'Media',
        ],
      },
      {
        heading: 'Third Menu',
        links: [
          'Tips',
          'Blog',
          'Event',
          'Certified Program',
          'Help Center',
          'API',
          'Download Template',
        ],
      },
      {
        heading: 'Fourth Menu',
        links: [
          'About Us',
          'Leadership',
          'News',
          'Media Kit',
          'Career',
          'Documentation',
        ],
      },
    ],
  },
};
