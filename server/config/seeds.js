// create all seeds
const products = [
    // dogs
  {
    id: 1,
    name: `Purina Natural Adult Dry Dog Food`,
    description: `One (1) 36 lb. Bag - Purina ONE High Protein, Natural Dry Dog Food, True Instinct With Real Salmon & Tuna
      Salmon is number 1 ingredient in this dry dog food with tuna to help deliver 30 percent protein that helps support strong muscles, including a healthy heart
      Purina ONE natural dog food with added vitamins, minerals and nutrients crafted by a veterinarian-recommended brand in Purina-owned, U.S. facilities
      100 percent nutrition for adult dogs, 0 percent fillers. Every ingredient has a purpose
      Dry dog food for skin and coat care includes omega-6 fatty acids and natural sources of glucosamine for joint health for dogs plus four antioxidant sources to help support a strong immune system`,
    price: `67.65`,
    url: `purina.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 2,
    name: `Pedigree Dry Dog Food`,
    description: `Contains one (1) PEDIGREE Complete Nutrition Adult Dry Dog Food Roasted Chicken, Rice & Vegetable Flavor Dog Kibble, 30 lb. Bonus Bag
     This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious chicken flavor dogs love
     Provides whole grains and helps support healthy digestion
     Delivers complete and balanced nutrition enriched with omega-6 fatty acids to help nourish your dog’s skin and coat
     Made in the USA with the World’s Finest Ingredients`,
    price: `$21.98 `,
    url: `pedegree.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 3,
    name: `Cesar Gourmet Wet Dog Food Variety Packs – 24 Trays`,
    description: `Contains one (1) 24 count case of 3.5 ounce easy peel trays of Cesar Wet Dog Food Poultry Variety Pack: (6) Duck Recipe, (6) Grilled Chicken Flavor, (6) Oven Roasted, Chicken Flavor, (6) Turkey Recipe
    Crafted without grains and with US Chicken, U.S., Turkey or Duck as the ingredient
    Cesar Wet Dog Food is complete and balanced and fortified with vitamins and minerals to help dogs of all sizes, especially small dog breeds, stay healthy
    Made in the USA with the world's finest ingredients, Cesar makes a great meal on its own or as a moist dog food topper mixed with dry food
    This gourmet dog food is served in convenient trays with easy, peel-away freshness seals`,
    price: `$23.48`,
    url: `cesar.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 4,
    name: `Royal Canin Small Adult Dry Dog Food`,
    description: `SMALL BREED DOG FOOD: Royal Canin Small Breed Adult Dry Dog Food is precise nutrition specifically made for small dogs 10 months to 8 years old weighing 9–22 lb
    WEIGHT MAINTENANCE: L-carnitine helps maintain a healthy weight, while helping to meet the high energy needs of small dog breeds
    SKIN AND COAT HEALTH: Optimal levels of fatty acids like EPA and DHA support skin and a healthy dog coat
    SPECIALIZED KIBBLE: Small breed adult dog food has an exclusive kibble design adapted for miniature jaws
    GREAT FOR PICKY EATERS: Enhanced palatable dog food satisfies the fussy appetites of small dogs`,
    price: `$25.99`,
    url: `small_dog.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 5,
    name: `Wonder Bound High Protein`,
    description: `Real chicken is the #1 ingredient in this tasty blend of crunchy kibble and tender shreds
    Contains 26% protein and no artificial colors or flavors
    Omega-6 fatty acids support healthy skin, coat; antioxidant nutrients support healthy immune system
    Glucosamine supports healthy joints; prebiotic fiber supports digestive health
    Gradual transitioning helps to avoid dietary upsets. See instructions below or on the bag.
    Made in the USA, using domestic and globally sourced ingredients from trusted suppliers
    30 LB bag of Wonder Bound Adult Dry Dog Food, Chicken & Brown Rice Recipe shredded blend`,
    price: `$39.45`,
    url: `wonder_bound.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 6,
    name: `Portable Dog Water Bottle with Food`,
    description: `Avelora water bottle can hold max 19 ounces (550 ml) of water and 100 g food. It not only ensures dog drinking water easily but also cat, rabbit or other small pet to drinking water easily. You can put this bottle into your pocket, backpack or hanging on your hand with sling rope.`,
    price: `$18.99`,
    url: `food_bottle.jpg`,
    category: 1,
    subCategory: 3,
    quantity: 100,
  },
  {
    id: 7,
    name: `Absorbent Hooded Dog Bathrobe Towel`,
    description: `Ultra-Absorbent - BarkBox dog towel robes are fun AND functional. Enjoy an ultra-absorbent & fast-drying bathrobe that’s perfect for after bathtime, a rainy hike, or a dewy grass day. You’ll save your bathroom, car, and home from the dreaded wet-dog shake.`,
    price: `$18.99`,
    url: `towel.jpg`,
    category: 1,
    subCategory: 3,
    quantity: 100,
  },
  {
    id: 8,
    name: `Walking Kit`,
    description: `Premium Quality: The Bricobe dog accessories are durable. The dog collar is strong enough that your dog cannot nibble and destroy it. The leash has a strong braided rope with a padded area for your holding. The dog food bowl is collapsible and can be changed to be of any size.`,
    price: `$19.99`,
    url: `out_set.jpg`,
    category: 1,
    subCategory: 3,
    quantity: 100,
  },
  {
    id: 9,
    name: `Retractable Dog Leash`,
    description: `Light weight but sturdy --- 6.6 oz light weight that both adults and children can easily hold it. The light weight and ergonomic non-slip handle are designed to be held for long periods of time without fatigue. The leash consists of a high density strong nylon belt which has abrasion resistance.`,
    price: `$11.99`,
    url: `portable.jpg`,
    category: 1,
    subCategory: 3,
    quantity: 100,
  },
  {
    id: 10,
    name: `Dog Bandanas - 6PCS `,
    description: `PREMIUM QUALITY MATERIAL - Made of a durable dyed material making it the ideal bandanas for dogs, dual layer makes it long lasting, not like other low quality bandana with one layer only, our bandana he sewing machine work line is neat and straight. Breathable material, keeps your dog cool during those hot summer days. Machine wash and dry available.
    ONE SIZE FITS & FOLDABLE - Wedding dog bandana comes as a 18 x 18 inch Dog Bandana, which can be folded over multiple times. This dog bandana is ideal for small to medium size dogs.Please measure the size of your cutie and leave room to tie knot.`,
    price: `$12.99`,
    url: `bandanas.jpg`,
    category: 1,
    subCategory: 3,
    quantity: 100,
  },
  {
    id: 11,
    name: `Greenies Natural Dental Dog Treats`,
    description: `Treat your dog deliciously with the great taste of GREENIES Original Dental Treats
    GREENIES Dog Treats are proudly made in our Kansas City, MO, USA facility with the world’s finest ingredients
    GREENIES Dog Treats are made with natural ingredients plus vitamins, minerals, & nutrients`,
    price: `$18.98`,
    url: `greenies.jpg`,
    category: 1,
    subCategory: 1,
    quantity: 100,
  },
  {
    id: 12,
    name: `Milk-Bone Soft & Chewy Dog Treats
    `,
    description: `Contains 25-ounce containers of Milk-Bone Soft and Chewy Beef and Filet Mignon Recipe With Chuck Roast dog treats
    Soft and chewy dog treats made with real chuck roast
    Fortified with 12 vitamins and minerals
    Great for dogs of all sizes`,
    price: `$12.33`,
    url: `soft_chewy.jpg`,
    category: 1,
    subCategory: 2,
    quantity: 100,
  },
  {
    id: 13,
    name: `Blue Buffalo Training Treats `,
    description: `MEATY TRAINING TREATS: For dogs that love a meaty treat, BLUE Bits are tender, bite-sized morsels that are the perfect size for training. Plus with DHA to help support cognitive development, they’re an ideal puppy treat
    WHOLESOME INGREDIENTS: These dog treats don’t contain any chicken (or poultry) by-product meals and are free from corn, wheat and soy. Plus, they’re free from artificial preservatives like propylene glycol and colors like red dye 40`,
    price: `$9.99`,
    url: `bits.jpg`,
    category: 1,
    subCategory: 2,
    quantity: 100,
  },
  {
    id: 14,
    name: `Milk-Bone Flavor Dog Treats`,
    description: `Tasty mini dog treats prepared with care and right-sized for treating more often
   Crunchy texture helps freshen breath and reduce tartar build-up, perfect for sloppy doggie kisses
   Wholesome goodness at only 5 calories per treat with 12 vitamins and minerals`,
    price: `$11.48`,
    url: `minis.jpg`,
    category: 1,
    subCategory: 2,
    quantity: 100,
  },
  {
    id: 15,
    name: `Turkey Tendon and Chicken Dog Treats `,
    description: `Premium all natural dog chew treat made from US-sourced turkey tendon and chicken with NO preservatives, NO antibiotics, NO artificial flavors or coloring, NO steroids, NO growth hormones, and NO other harmful ingredients — a healthy natural alternative to rawhide products.`,
    price: `$12.34`,
    url: `bones.jpg`,
    category: 1,
    subCategory: 2,
    quantity: 100,
  },
  {
    id: 16,
    name: `Pet MD - Dog Ear Cleaner Wipes `,
    description: `Gentle and Safe for Regular Use which Prevents Ear Infections, Reduces Wax Build Up and Removes Debris in and Around the Ear
   100 Convenient, Alcohol Free, Soothing and Non-Irritating Disposable Ear Wipes for Dogs. For Dogs Over 12 Weeks Ol`,
    price: `$12.59`,
    url: `ear_wipes.jpg`,
    category: 1,
    subCategory: 4,
    quantity: 100,
  },
  {
    id: 17,
    name: `Portable Dog Paw Washer`,
    description: `For Proper Use & Effectiveness: The medium MudBuster is perfectly sized for medium sized dogs with paws between 2 ½”to 3 ½” wide. Actual Mudbuster measures 6 inches tall and 4 inches wide
   To use, add a little water, insert the muddy paw, do the twist, dab the paw dry, repeat for 3 more paws`,
    price: `$16.49`,
    url: `paw_cleaner`,
    category: 1,
    subCategory: 4,
    quantity: 100,
  },
  {
    id: 18,
    name: `Dog Shaver Clippers
   `,
    description: `Rechargeable dog trimmer with built-in battery is good for exceptional flexibility and maneuverability. And the cllipper itself has 5 adjustable functions for the comb from 0.8mm to 2mm.
   High quality stainless steel fixed blade and ceramic moving blade provide excellent cutting performance. The blade sharp enough eventhough it after a long time using. Detachable blades for ease of changing and cleaning.`,
    price: `$34.99`,
    url: `clippers.jpg`,
    category: 1,
    subCategory: 4,
    quantity: 100,
  },
  {
    id: 19,
    name: `Wild Alaskan Salmon Oil for Dogs`,
    description: `LIQUID FISH OIL FOR DOGS: Includes (1) 16 fl oz bottle of Natural Dog Company Wild Alaskan Salmon Oil that is formulated for dogs of any size, age, or breed and will support your dog's health from the inside out.
   SUPPORTS HEALTHY SKIN & SHINY COAT: Our oil softens skin and fur while relieving dry, itchy skin, reducing shedding, and minimizing skin allergy symptoms.`,
    price: `$25.95`,
    url: `oil.jpg`,
    category: 1,
    subCategory: 4,
    quantity: 100,
  },
  {
    id: 20,
    name: `Dog Skin Soother Moisturizing Stick`,
    description: `MOISTURIZING & SOOTHING FORMULA: It moisturizes, softens, and soothes dog paws for immediate relief. An ideal way to protect against extreme weather conditions, treating and healing scars, wounds, paw allergies, dry elbows, & more!
   EASY & QUICK TO APPLY: Clean paws before application. Gently rub onto paw pads. Paws will be slick right after application, allow time to dry. Best applied before bedtime. Repeat one to three times daily. Decrease application as the area improves.`,
    price: `$5.99`,
    url: `paw_soother.jpg`,
    category: 1,
    subCategory: 4,
    quantity: 100,
  },
  {
    id: 21,
    name: `Wobble Wag Giggle Ball`,
    description: `FUN FOR ALL BIG OR SMALL Wobble Wag Giggle Ball is great for dogs of all ages and sizes! The 4 clutch pockets on the toy make it easy for your dog to pick up during playtime!
   WOBBLE WAG GIGGLE Ball With just the nudge of a nose, off the ball goes! Wobble Wag Giggle does not require batteries - the secret is the internal tube noisemaker inside of the ball, the enticing “play-with-me” giggle sounds are sure to engage your pup as the toy rolls around!`,
    price: `$14.99`,
    url: `ball.jpg`,
    category: 1,
    subCategory: 5,
    quantity: 100,
  },
  {
    id: 22,
    name: ` Dog Chew Toys
   `,
    description: `VARIETY TYPE of DOG TOYS:【Random Color】3 Packs of dog rope toys,2 Packs Stuffed Squeaky Plush Dog Toy,and 1 Pack No Stuffing Dog Squeaky Toys
   SAFE DOG CHEW TOYS: Our dog toys are made of natural and non-toxic material that ensures the safety of dogs. Thicker fabric and better stitching make these toys more durable for dogs. It's suitable for teeth cleaning and chewing`,
    price: `$17.99`,
    url: `toy_set.jpg`,
    category: 1,
    subCategory: 5,
    quantity: 100,
  },
  {
    id: 23,
    name: `Interactive Dog Gator  Toy`,
    description: `This large dog toy is built to last. Hard nylon along with rubber are designed for aggressive chewers(except for very aggressive dogs). Ideal dog chew toys making it great for dogs who like to chew and gnaw, satisfies the dog’s natural urge to chew.No toy is indestructible, but this one is the closest.`,
    price: `$13.99`,
    url: `gator.jpg`,
    category: 1,
    subCategory: 5,
    quantity: 100,
  },
  {
    id: 24,
    name: `Tough Dog Chew Toy`,
    description: `Food Grade Material: Bite-resistant and environment friendly TPR materials corn,Non-toxic cotton rope.Safety for your lovely pet playing and teeth cleaning.
    Built-in Filling: Separate the corn product from the cotton rope, and put dog snacks / grits / peanut butter / Easy Treat / snacks / Ziggies stuffed toys in the middle aisle, which is more attractive to dogs for chewing and easy to clean.`,
    price: `$13.69`,
    url: `corn.jpg`,
    category: 1,
    subCategory: 5,
  },
  {
    id: 25,
    name: `Puppy Teething Chew Toy`,
    description: `Puppy Teething Chew Toys: This chew toy suitable for aggressive chewers small medium breed, playing with this toy regularly will relive dog's anxiety when they are at home by themselves, it come make dogs cleaning teeth by themselves.
   Effectively Clean Teeth: according to the features of dog's teeth, which can thoroughly clean dog's incisors, fangs and molars when playing the toy, calculus effectively, fully protecting dog's dental.`,
    price: `$11.99`,
    url: `chew.jpg`,
    category: 1,
    subCategory: 5,
  },
];
