const products = [
  {
    id: 9,
    title: "Corner Sofa",
    shortdescription:
      "This corner sofa adds comfort and modernity to the room in your home.",
    description: `
    <div class="space-y-6 text-lg text-gray-800">
  <!-- English Paragraphs -->
  <p class="font-medium leading-relaxed">
    This corner sofa adds comfort and modernity to the room in your home.
  </p>
  <p class="font-medium leading-relaxed">
    With its easy design and soft cushions, this sofa provides you with a comfortable experience.
  </p>
  <p class="font-medium leading-relaxed">
    This sofa, which can accommodate 4-5 people, is available in various colors, including red, blue, and brown.
  </p>

  <!-- Nepali Paragraphs -->
  <p class="font-medium leading-relaxed">
    यो कोर्नर सोफा तपाईंको घरको कोठामा आराम र आधुनिकता थप्छ।
  </p>
  <p class="font-medium leading-relaxed">
    सजिलो डिजाइन र मुलायम गद्दीको साथ, यो सोफाले तपाईंलाई आरामदायक अनुभव प्रदान गर्दछ।
  </p>
  <p class="font-medium leading-relaxed">
    ४-५ जना बस्न सक्ने ठाउँ भएको यो सोफा विभिन्न रंगहरूमा उपलब्ध छ, जसमा रातो, नीलो, र खैरो समावेश छन्।
  </p>
</div>
    `,
    price: 40000,
    imageSrc: [
      "/products/cornersofa.jpg",
      "/products/cornersofa002.jpg",
      "/products/cornersofa003.jpg",
      "/products/cornersofa004.jpg",
      "/products/cornersofa005.jpg",
    ],
  },
  {
    id: 6,
    title: "Round Sofa",
    shortdescription:
      "This round sofa adds elegance and comfort to your living room.",
    description: `
   <div class="text-lg space-y-6">
  <!-- Title for English description -->
  <p class="font-bold text-2xl text-gray-800 mb-4">Modern Elegance, Cozy Comfort:</p>

  <!-- English description list -->
  <ol class="list-decimal pl-5 space-y-3 text-gray-700">
    <li><span class="font-semibold">Stylish Design:</span> Curved and chic for a sophisticated look.</li>
    <li><span class="font-semibold">Ultimate Comfort:</span> Plush cushions for a relaxing experience.</li>
    <li><span class="font-semibold">Perfect Fit:</span> Enhances any living room with elegance.</li>
  </ol>

  <!-- Title for Nepali description -->
  <p class="font-bold text-2xl text-gray-800 mb-4 mt-6">आधुनिक सुरुचिपूर्णता, आरामदायक अनुभव:</p>

  <!-- Nepali description list -->
  <ol class="list-decimal pl-5 space-y-3 text-gray-700">
    <li><span class="font-semibold">सजिलो डिजाइन:</span> वक्र र ठाँटदार</li>
    <li><span class="font-semibold">सुविधा:</span> मुलायम कुशनहरू</li>
    <li><span class="font-semibold">सजावट:</span> कुनै पनि कोठालाई सुन्दर बनाउनुहोस्</li>
  </ol>
</div>
    `,
    price: 40000,
    imageSrc: ["/products/roundsofa.jpg", "/products/roundsofa002.jpg"],
  },
  {
    id: 8,
    title: "Wall Drarz",
    shortdescription:
      "Wall Drarz is a modern wall cabinet that combines functionality with style.",
    description: `
      <p>Wall Drarz is a modern wall cabinet that combines functionality with style.</p>
      <p>It provides ample storage space for your belongings while complementing any room decor.</p>
      <p>Perfect for organizing and decluttering, this cabinet adds a sleek touch to your living space.</p>
    `,
    price: 40000,
    imageSrc: ["/products/wallDaraz.jpg"],
  },
  {
    id: 2,
    title: "Tv Daraz",
    shortdescription:
      "TV Daraz is a modern TV stand that combines functionality with style.",
    description: `
      <p>TV Daraz is a modern TV stand that combines functionality with style.</p>
      <p>It is designed to hold your television securely while providing storage for entertainment accessories.</p>
      <p>The sleek design complements any living room decor and keeps your media devices organized.</p>
    `,
    price: 40000,
    imageSrc: [
      "/products/tv1.jpg",
      "/products/tv2.jpg",
      "/products/tv3.jpg",
      "/products/tv4.jpg",
      "/products/tv5.jpg",
    ],
  },
  {
    id: 3,
    title: "Bed",
    shortdescription:
      "This bed provides you with a comfortable sleep. Its sturdy frame and soft mattress ensure a relaxing experience while sleeping.",
    description: `
      <p>This bed provides you with a comfortable sleep. Its sturdy frame and soft mattress ensure a relaxing experience while sleeping.</p>
      <p>With ample space, this bed will look great in your room and fit in easily. Available in various colors and designs, this bed will add beauty to your room.</p>
      <p>यो बेड तपाईंलाई आरामदायक निद्रा दिन्छ। यसको मजबूत फ्रेम र नरम गद्दीले सुत्दा आरामदायक महसुस हुन्छ।</p>
      <p>पर्याप्त स्थान भएको यो बेड तपाईंको कोठामा राम्रो देखिनेछ र सजिलै मिल्नेछ।</p>
      <p>विभिन्न रंग र डिजाइनमा उपलब्ध, यो बेड तपाईंको कोठामा सुन्दरता थप्नेछ।</p>
    `,
    price: 40000,
    imageSrc: [
      "/products/bed1.jpg",
      "/products/bed2.jpg",
      "/products/bed3.jpg",
      "/products/bed4.jpg",
      "/products/bed5.jpg",
    ],
  },
  {
    id: 4,
    title: "Study Table",
    shortdescription:
      "A study table that combines modern aesthetics with functionality.",
    description: `
      <p>A study table that combines modern aesthetics with functionality.</p>
      <p>Perfect for home offices or study rooms, it provides ample workspace and storage.</p>
      <p>Its sleek design makes it a great addition to any work environment.</p>
    `,
    price: 40000,
    imageSrc: ["/products/studytable1.jpg"],
  },
  {
    id: 5,
    title: "3 Seater Sofa",
    shortdescription:
      "This sofa is comfortable and attractive, bringing peace to your home.",
    description: `
      <p>यो सोफा आरामदायक र आकर्षक छ, जसले तपाईंको घरमा शान्ति ल्याउँछ।</p>
      <p>यसको मुलायम कपडा र गद्दीहरूले लामो समयसम्म बस्दा पनि आरामदायिक अनुभव दिन्छ।</p>
      <p>३ जना बस्न सक्ने ठाउँ भएको यो सोफा आधुनिक डिजाइनमा उपलब्ध छ र विभिन्न रंगमा पाइन्छ।</p>
    `,
    price: 40000,
    imageSrc: ["/products/3seatersofa.jpg"],
  },
  {
    id: 7,
    title: "5 Seater Sofa",
    shortdescription:
      "5 Seater Sofa is a modern sofa that combines comfort with style.",
    description: `
   <div class="space-y-6 text-lg text-gray-800">
  <!-- English Text -->
  <p class="font-medium leading-relaxed">
    The 5 Seater Sofa is a modern sofa that combines comfort with style.
  </p>
  <p class="font-medium leading-relaxed">
    Ideal for larger living spaces, offering enough room for family and friends.
  </p>
  <p class="font-medium leading-relaxed">
    The sofa's design ensures that your living area looks sophisticated and inviting.
  </p>

  <!-- Nepali Text -->
  <p class="font-medium leading-relaxed">
    ५ Seater सोफा एक आधुनिक सोफा हो जसले आराम र स्टाइललाई सँगै मिलाउँछ।
  </p>
  <p class="font-medium leading-relaxed">
    ठूलो कोठाहरूको लागि आदर्श, परिवार र साथीहरूका लागि पर्याप्त स्थान प्रदान गर्दछ।
  </p>
  <p class="font-medium leading-relaxed">
    सोफाको डिजाइनले तपाईंको बस्ने क्षेत्रलाई ठाँटदार र आकर्षक बनाउँछ।
  </p>
</div>
    `,
    price: 40000,
    imageSrc: ["/products/5seatersofa.jpg", "/products/5seatersofa002.jpg"],
  },
];

export default products;

export const CarouselImgMobile = [
  "/products/cornersofa003.jpg",
  "/products/cornersofa.jpg",
  "/products/roundsofa002.jpg",
  "/products/cornersofa004.jpg",
  "/products/cornersofa005.jpg",
];

export const MainImage = {
  background: "/products/maindesktop.webp",
  backgroundmobile: "/products/mainmobile.webp",
  furniturePiece: "/products/sofa4.jpeg",
};
