const db = require("./connection");
const { User, Product, Category, SubCategory } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Dog" },
    { name: "Cat" },
    { name: "Fish" },
    { name: "Hamster" },
    { name: "Bird" },
  ]);

  console.log("categories seeded");

  await SubCategory.deleteMany();

  const subCategories = await SubCategory.insertMany([
    { name: "Food" },
    { name: "Accessories" },
    { name: "Toys" },
    { name: "Care" },
    { name: "Treats" },
  ]);

  await Product.deleteMany();

  // create all seeds
  const products = await Product.insertMany([
    {
      id: 1,
      name: `Purina Natural Adult Dry Dog Food`,
      description: `One (1) 36 lb. Bag - Purina ONE High Protein, Natural Dry Dog Food, True Instinct With Real Salmon & Tuna
      Salmon is number 1 ingredient in this dry dog food with tuna to help deliver 30 percent protein that helps support strong muscles, including a healthy heart
      Purina ONE natural dog food with added vitamins, minerals and nutrients crafted by a veterinarian-recommended brand in Purina-owned, U.S. facilities
      100 percent nutrition for adult dogs, 0 percent fillers. Every ingredient has a purpose
      Dry dog food for skin and coat care includes omega-6 fatty acids and natural sources of glucosamine for joint health for dogs plus four antioxidant sources to help support a strong immune system`,
      price: `67.65`,
      url: `/assets/dogs/food/purina.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
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
      price: "$21.98",
      url: `/assets/dogs/food/pedegree.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
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
      url: `/assets/dogs/food/cesar.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
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
      url: `/assets/dogs/food/small_dog.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
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
      url: `/assets/dogs/food/wonder_bound.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      id: 6,
      name: `Portable Dog Water Bottle with Food`,
      description: `Avelora water bottle can hold max 19 ounces (550 ml) of water and 100 g food. It not only ensures dog drinking water easily but also cat, rabbit or other small pet to drinking water easily. You can put this bottle into your pocket, backpack or hanging on your hand with sling rope.`,
      price: `$18.99`,
      url: `/assets/dogs/accessories/food_bottle.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 7,
      name: `Absorbent Hooded Dog Bathrobe Towel`,
      description: `Ultra-Absorbent - BarkBox dog towel robes are fun AND functional. Enjoy an ultra-absorbent & fast-drying bathrobe that’s perfect for after bathtime, a rainy hike, or a dewy grass day. You’ll save your bathroom, car, and home from the dreaded wet-dog shake.`,
      price: `$18.99`,
      url: `/assets/dogs/accessories/towel.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 8,
      name: `Walking Kit`,
      description: `Premium Quality: The Bricobe dog accessories are durable. The dog collar is strong enough that your dog cannot nibble and destroy it. The leash has a strong braided rope with a padded area for your holding. The dog food bowl is collapsible and can be changed to be of any size.`,
      price: `$19.99`,
      url: `/assets/dogs/accessories/out_set.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 9,
      name: `Retractable Dog Leash`,
      description: `Light weight but sturdy --- 6.6 oz light weight that both adults and children can easily hold it. The light weight and ergonomic non-slip handle are designed to be held for long periods of time without fatigue. The leash consists of a high density strong nylon belt which has abrasion resistance.`,
      price: `$11.99`,
      url: `/assets/dogs/accessories/portable.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 10,
      name: `Dog Bandanas - 6PCS `,
      description: `PREMIUM QUALITY MATERIAL - Made of a durable dyed material making it the ideal bandanas for dogs, dual layer makes it long lasting, not like other low quality bandana with one layer only, our bandana he sewing machine work line is neat and straight. Breathable material, keeps your dog cool during those hot summer days. Machine wash and dry available.
      ONE SIZE FITS & FOLDABLE - Wedding dog bandana comes as a 18 x 18 inch Dog Bandana, which can be folded over multiple times. This dog bandana is ideal for small to medium size dogs.Please measure the size of your cutie and leave room to tie knot.`,
      price: `$12.99`,
      url: `/assets/dogs/accessories/bandanas.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 11,
      name: `Greenies Natural Dental Dog Treats`,
      description: `Treat your dog deliciously with the great taste of GREENIES Original Dental Treats
      GREENIES Dog Treats are proudly made in our Kansas City, MO, USA facility with the world’s finest ingredients
      GREENIES Dog Treats are made with natural ingredients plus vitamins, minerals, & nutrients`,
      price: `$18.98`,
      url: `/assets/dogs/treats/greenies.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
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
      url: `/assets/dogs/treats/soft_chewy.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      id: 13,
      name: `Blue Buffalo Training Treats `,
      description: `MEATY TRAINING TREATS: For dogs that love a meaty treat, BLUE Bits are tender, bite-sized morsels that are the perfect size for training. Plus with DHA to help support cognitive development, they’re an ideal puppy treat
      WHOLESOME INGREDIENTS: These dog treats don’t contain any chicken (or poultry) by-product meals and are free from corn, wheat and soy. Plus, they’re free from artificial preservatives like propylene glycol and colors like red dye 40`,
      price: `$9.99`,
      url: `/assets/dogs/treats/bits.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      id: 14,
      name: `Milk-Bone Flavor Dog Treats`,
      description: `Tasty mini dog treats prepared with care and right-sized for treating more often
      Crunchy texture helps freshen breath and reduce tartar build-up, perfect for sloppy doggie kisses
      Wholesome goodness at only 5 calories per treat with 12 vitamins and minerals`,
      price: `$11.48`,
      url: `/assets/dogs/treats/minis.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      id: 15,
      name: `Turkey Tendon and Chicken Dog Treats `,
      description: `Premium all natural dog chew treat made from US-sourced turkey tendon and chicken with NO preservatives, NO antibiotics, NO artificial flavors or coloring, NO steroids, NO growth hormones, and NO other harmful ingredients — a healthy natural alternative to rawhide products.`,
      price: `$12.34`,
      url: `/assets/dogs/treats/bones.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      id: 16,
      name: `Pet MD - Dog Ear Cleaner Wipes`,
      description: `Gentle and Safe for Regular Use which Prevents Ear Infections, Reduces Wax Build Up and Removes Debris in and Around the Ear
      100 Convenient, Alcohol Free, Soothing and Non-Irritating Disposable Ear Wipes for Dogs. For Dogs Over 12 Weeks Ol`,
      price: `$12.59`,
      url: `/assets/dogs/care/ear_wipes.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 17,
      name: `Portable Dog Paw Washer`,
      description: `For Proper Use & Effectiveness: The medium MudBuster is perfectly sized for medium sized dogs with paws between 2 ½”to 3 ½” wide. Actual Mudbuster measures 6 inches tall and 4 inches wide
      To use, add a little water, insert the muddy paw, do the twist, dab the paw dry, repeat for 3 more paws`,
      price: `$16.49`,
      url: `/assets/dogs/care/paw_cleaner.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 18,
      name: `Dog Shaver Clippers`,
      description: `Rechargeable dog trimmer with built-in battery is good for exceptional flexibility and maneuverability. And the cllipper itself has 5 adjustable functions for the comb from 0.8mm to 2mm.
      High quality stainless steel fixed blade and ceramic moving blade provide excellent cutting performance. The blade sharp enough eventhough it after a long time using. Detachable blades for ease of changing and cleaning.`,
      price: `$34.99`,
      url: `/assets/dogs/care/clippers.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 19,
      name: `Wild Alaskan Salmon Oil for Dogs`,
      description: `LIQUID FISH OIL FOR DOGS: Includes (1) 16 fl oz bottle of Natural Dog Company Wild Alaskan Salmon Oil that is formulated for dogs of any size, age, or breed and will support your dog's health from the inside out.
      SUPPORTS HEALTHY SKIN & SHINY COAT: Our oil softens skin and fur while relieving dry, itchy skin, reducing shedding, and minimizing skin allergy symptoms.`,
      price: `$25.95`,
      url: `/assets/dogs/care/oil.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 20,
      name: `Dog Skin Soother Moisturizing Stick`,
      description: `MOISTURIZING & SOOTHING FORMULA: It moisturizes, softens, and soothes dog paws for immediate relief. An ideal way to protect against extreme weather conditions, treating and healing scars, wounds, paw allergies, dry elbows, & more!
      EASY & QUICK TO APPLY: Clean paws before application. Gently rub onto paw pads. Paws will be slick right after application, allow time to dry. Best applied before bedtime. Repeat one to three times daily. Decrease application as the area improves.`,
      price: `$5.99`,
      url: `/assets/dogs/care/paw_soother.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 21,
      name: `Wobble Wag Giggle Ball`,
      description: `FUN FOR ALL BIG OR SMALL Wobble Wag Giggle Ball is great for dogs of all ages and sizes! The 4 clutch pockets on the toy make it easy for your dog to pick up during playtime!
      WOBBLE WAG GIGGLE Ball With just the nudge of a nose, off the ball goes! Wobble Wag Giggle does not require batteries - the secret is the internal tube noisemaker inside of the ball, the enticing “play-with-me” giggle sounds are sure to engage your pup as the toy rolls around!`,
      price: `$14.99`,
      url: `/assets/dogs/toys/ball.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      id: 22,
      name: ` Dog Chew Toys
   `,
      description: `VARIETY TYPE of DOG TOYS:【Random Color】3 Packs of dog rope toys,2 Packs Stuffed Squeaky Plush Dog Toy,and 1 Pack No Stuffing Dog Squeaky Toys
      SAFE DOG CHEW TOYS: Our dog toys are made of natural and non-toxic material that ensures the safety of dogs. Thicker fabric and better stitching make these toys more durable for dogs. It's suitable for teeth cleaning and chewing`,
      price: `$17.99`,
      url: `/assets/dogs/toys/toy_set.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      id: 23,
      name: `Interactive Dog Gator  Toy`,
      description: `This large dog toy is built to last. Hard nylon along with rubber are designed for aggressive chewers(except for very aggressive dogs). Ideal dog chew toys making it great for dogs who like to chew and gnaw, satisfies the dog’s natural urge to chew.No toy is indestructible, but this one is the closest.`,
      price: `$13.99`,
      url: `/assets/dogs/toys/gator.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      id: 24,
      name: `Tough Dog Chew Toy`,
      description: `Food Grade Material: Bite-resistant and environment friendly TPR materials corn,Non-toxic cotton rope.Safety for your lovely pet playing and teeth cleaning.
      Built-in Filling: Separate the corn product from the cotton rope, and put dog snacks / grits / peanut butter / Easy Treat / snacks / Ziggies stuffed toys in the middle aisle, which is more attractive to dogs for chewing and easy to clean.`,
      price: `$13.69`,
      url: `/assets/dogs/toys/corn.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 25,
      name: `Puppy Teething Chew Toy`,
      description: `Puppy Teething Chew Toys: This chew toy suitable for aggressive chewers small medium breed, playing with this toy regularly will relive dog's anxiety when they are at home by themselves, it come make dogs cleaning teeth by themselves.
      Effectively Clean Teeth: according to the features of dog's teeth, which can thoroughly clean dog's incisors, fangs and molars when playing the toy, calculus effectively, fully protecting dog's dental.`,
      price: `$11.99`,
      url: `/assets/dogs/toys/chew.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 26,
      name: `Purina ONE Tender Selects Blend`,
      description: `One (1) 22 Lb. Of Purina One Tender Selects With Real Salmon
      Real Salmon Is The #1 Ingredient
      High Protein Helps Support Strong Muscles
      Purina One Is Veterinarian Recommended
      100% Complete And Balanced Nutrition To Help Support Your Adult Cat'S Healthy Immune System`,
      price: `$35.99`,
      url: `/assets/cats/food/purinajpg.jpeg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
    },
    {
      id: 27,
      name: `Purina Fancy Feast Gravy Lovers
      `,
      description: `24 3 Ounce Cans Purina Fancy Feast Gravy Lovers Poultry and Beef Feast Collection Wet Cat Food Variety Pack
      Chicken, Turkey And Beef Flavors Cats Love
      100 percent complete and balanced nutrition
      Tender, delicate bites for a tempting texture
      Meaty morsels deliver and appetizing texture
      Included Components: (24) 3 ounce Cans - Purina fancy feast wet cat food, medleys wild salmon Florentine with garden greens in delicate sauce`,
      price: `$18.99`,
      url: `/assets/cats/food/fancy_feast.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
    },
    {
      id: 28,
      name: `Sheba Perfect Portions Cuts in Gravy `,
      description: `Contains twelve (12) 2.6 oz. twin pack trays (24 servings total) of SHEBA PERFECT PORTIONS Wet Cat Food Cuts in Gravy Variety Pack: (6) Roasted Chicken Entrée and (6) Tender Turkey Entrée
      Made with real protein, plus essential vitamins and minerals for any life stage, including mature cat maintenance and kitten growth`,
      price: `$10.98`,
      url: `/assets/cats/food/sheba.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
    },
    {
      id: 29,
      name: `Iams Proactive Health Adult Dry Cat Food`,
      description: `Contains one (1) 22 lb. bag of IAMS Proactie Healthy Adult Dry Cat Food with Chicken
      Chicken is the ingredient in this nutrient-rich cat food designed for a healthy body for play
      Support your cat’s healthy digestion with natural fiber and prebiotics
      Promotes healthy skin and glossy coat with omega-6 and -3 fatty acids`,
      price: `$29.42`,
      url: `/assets/cats/food/iams.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
    },
    {
      id: 30,
      name: `Purina Friskies Dry Cat Food`,
      description: `One (1) 22 lb. Bag - Purina Friskies Dry Cat Food, Farm Favorites With Chicken
      Made with natural, farm-raised chicken
      Flavors of carrots and spinach add flavorful variety
      No artificial flavors
      Made without artificial preservatives`,
      price: `$20.05`,
      url: `/assets/cats/food/friskies.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
    },
    {
      id: 31,
      name: `Cat Bed for Indoor with Anti-Slip Bottom,`,
      description: `SIZE DETAILS - S: 12.6*12inch, M: 15*13.4inch,L: 15.8*16inch The tent bed can accommodate most of the cat's body and provide a good sleeping experience for the cat. It’s ideal for indoor & outdoor use. Arrives as a vacuum packed bed!
      CLEANING RECOMMENDATIONS - Our cat bed is made of very good pp cotton, but due to the uneven shape of the cat bed cave, many users will break it after washing it with a washing machine. Therefore, for long-term use, we still recommend you to wash them by hand.`,
      price: `$16.99`,
      url: `/assets/cats/accessories/bed.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
    },
    {
      id: 32,
      name: `JUNSPOW Cat Bed`,
      description: `Isolation of moisture and cold: The size is about 42x45x 23cm. Large enough to keep pets away from hot, cold or dirty floors while resting or sleeping.
      Simple maintenance: The lid can be removed. Drainage is also great. It dries quickly in the shade. It also has a higher drying speed than polyurethane and hard cotton.`,
      price: `$29.99`,
      url: `/assets/cats/accessories/bed2.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
    },
    {
      id: 33,
      name: `Cat Carrier Backpack`,
      description: `Item Dimensions: Folded size 13" L x 11" W x 16.5" H. Expanded size : 13" L x 27.5" W x 16.5" H. Suggested Weight: 0-13lbs for small to medium cats, 0-10lbs for Dogs and puppies. Most Airline Approved under seat. Important: Please Check your airline requirements before traveling.
      Excellent Ventilation: 9 large Ventilation Holes on both sides and front, left and right ventilation nets ensure fresh air for fur-kids. The back expandable anti-scratching net provides maximum breathability that your pet will enjoy the outdoor time with you.
`,
      price: `$45.99`,
      url: `/assets/cats/accessories/backpack.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
    },
    {
      id: 34,
      name: `Cat Harness`,
      description: `Cat Harness with Leash, Fits Large to XL Cats: Size measuring: Neck Girth: 11" - 13.7", Chest Girth: 18.0" - 20.0". Please Measure your cat carefully and refer to the size chart before order. (Tips: Your cat's head circumference should be at least 11 inches or your cat may slip out.) Package includes: 1x Small Cat Walking Vest and 1x Walking Nylon Leash (150cm)`,
      price: `$15.42`,
      url: `/assets/cats/accessories/harness.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
    },
    {
      id: 35,
      name: `Cat Collar 
      `,
      description: `ADJUSTABLE SIZE: Each cat collar measures adjustable 7.5" to 10.8", please measure your cat's neck girth before ordering, leave 2 fingers room when wearing for relaxation.
      SOFT POLYESTER COTTON: Made of soft and durable Polyester cotton material, makes your pet feel relaxed and comfortable when wearing, in addition, quick release buckle can provide more safety for your cat.`,
      price: `$9.99`,
      url: `/assets/cats/accessories/collar.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
    },
    {
      id: 36,
      name: `Interactive Cat Toy for Indoor`,
      description: `【 Cat Exercise Toy: 360 degree random rotation,drive cats wild as it starts,Increasing cat's exercise while keeping cats entertained and stimulated,eliminate boredom.Help satisfy your cat’s need for exercise
      Silent Motor: Quiet design can make sure that your pets would not be scared.Let you also have a quiet and comfortable environment.Great holiday gift for cat owners.Christmas gifts for cats
      Automatic Cat Toy: Make play and exercise moderate, It will automatically power off after 15 minutes of rotating, which can let your cat avoid to play and exercise excessively.It's a fun and playful way to keep cats healthy and active`,
      price: `$19.99`,
      url: `/assets/cats/toys/toy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 37,
      name: `Potaroma Chirping Cat Balls `,
      description: `Cats Go Nuts – Make play fantastic with the 3 fluffy plush ball toys. The cat toys make lifelike animal chirping sounds once playtime begins, beckoning every bat, bite, chew, and chase! The 3 animal sounds are frog, cricket and bird chirping respectively. The balls keep quiet when left alone to save battery power`,
      price: `$14.99`,
      url: `/assets/cats/toys/catnip.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 38,
      name: `Potaroma Flopping Fish 10.5"`,
      description: `Interactive Fun for Cats: every time your feline touches this cat kicker toy, the automatic built-in motion sensor kicks into action and the cat teaser fish moves in a wiggling way, intriguing your cat to kick and play. Perfect Thanksgiving, Christmas and New Year gift for pet owners or your own pets
      Realistic Fish Simulation: the vivid moving fish toy looks like a real fish, an eye-catcher for cats, keeping your kitty on her paws and engaged in real time, alleviating boredom and loneliness and promoting cat's exercise when you are away from home`,
      price: `$12.99`,
      url: `/assets/cats/toys/fish_kit.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 39,
      name: `Cat Toy with Sturdy Scratching Pads`,
      description: `3IN1 CAT TOY+ CAT BED+ CAT SCRATCHER : Cats will be happy to "play soccer"... Lazy lying on the toy... and they will put their energy on the cat scratcher in the middle of the toy instead of your furniture.
      STURDINESS AND DURABILIT: 100% high-quality and environmentally friendly corrugated paper - green, safe and made to last and will last long time`,
      price: `$29.99`,
      url: `/assets/cats/toys/pad.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 40,
      name: `Interactive Cat Rainbow Wand Toy`,
      description: `Interactive Cat Toy: The colorful cat toy teaser wand is a great way to attract your cat’s attention. Your cat will love the cat string toy.
       Premium Quality: The cat wand toy is made from soft, colorful satin fabric and high-elastic wand. Both materials are non-toxic and 100% safe for your cats.`,
      price: ``,
      url: `/assets/cats/toys/teaser.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
    },
    {
      id: 41,
      name: `Cat Grooming Glove`,
      description: `Hair Remover: Perfect for long, short and curly haired dogs, cats, horses, and other pets, grooming the hair quickly, gently and effectively; The shedding hair sticks to the glove, making it easy to peel and throw hair away
      Bath Brush: Bathe the pets with this glove, which will clean the pet hair easily and give your pets a gentle massage without hurting their skin; Five finger design allows you to groom hard-to-reach places like tail or face`,
      price: `$16.99`,
      url: `/assets/cats/care/gloves.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
    },
    {
      id: 42,
      name: `Nail Clippers `,
      description: `FOR SMALL PETS: Our claw scissors have been designed to be used on small animals, such as dogs, kittens, puppies, birds and bunny. Use them as kitten nail clippers or as general pet nail trimmers.
      SAFE & EASY TO USE: Fitted with razor sharp blades made out of stainless steel and an ergonomic grip made out of a top grade plastic the production of these clippers does not harm the environment.`,
      price: `$12.99`,
      url: `/assets/cats/care/clips.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
    },
    {
      id: 43,
      name: `Cat Brush for Shedding`,
      description: `One-click Cleaning Button: After brushing your pet, simply click the button. The shutter will pop out, separating the brushed hair from the metal needle, then wipe the hair off. The button of dog brush for shedding short hair on the handle saves time and energy when grooming and cleaning.`,
      price: `$25.99`,
      url: `/assets/cats/care/brush.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
    },
    {
      id: 44,
      name: `Rocco & Roxie Cat Litter Box Odor Eliminator`,
      description: `EFFECTIVELY ABSORBS EVEN THE STRONGEST LITTER BOX SMELLS Our proprietary blend of essential oils neutralizes odors at a molecular level, keeping your litter box smelling fresher, longer.
      SAFE FOR PEOPLE, PETS AND THE PLANET Non toxic. 100% plant-based. Made from all-natural, highly absorbent corncob granules that effectively wick moisture from urine and feces`,
      price: `$11.92`,
      url: `/assets/cats/care/odor.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
    },
    {
      id: 45,
      name: `Cat Shampoo`,
      description: `SENSITIVE SKIN FORMULA - Approved and formulated by veterinarians, PetO’Cera cat shampoo features a blend of eleven botanical extracts. With allantoin and ceramide to enhance your cat’s healthy skin, our natural ingredients help to soothe and relieve your cat’s sensitive skin while calming irritations to stop scratching and deshedding.
      EASY TO USE - Simply apply this cat shampoo to your kitten’s wet coat and lightly work through from head to tail while avoiding the eyes. After bathing the cat, just rinse, towel, and dry. Fully enjoy the refreshing scent while playing with your cat!`,
      price: `$23.70`,
      url: `/assets/cats//care/soap.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
    },
    {
      id: 46,
      name: `Purina Friskies Party Mix Gravy `,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Crunch Gravylicious Chicken & Gravy Flavors
      Tasty chicken flavor helps satisfy your cat's poultry cravings
      Savory gravy flavor pleases her palate
      Cat treats with a crunchy texture your cat loves and also helps clean her teeth
      The unique shapes of these cat treats help keep her interes`,
      price: `$8.06`,
      url: `/assets/cats/treats/gravy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
    },
    {
      id: 47,
      name: `Purina Friskies Party Mix Cheesy Craze`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Cheezy Craze Crunch
      Made with real cheese in every bite
      With a blend of Cheddar, Swiss and Monterey Jack cheeses
      Under two calories per treat
      Delicious taste cats love`,
      price: `$9.08`,
      url: `/assets/cats/treats/cheesy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
    },
    {
      id: 48,
      name: `Purina Friskies Party Mix Chicken Lovers`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Chicken Lovers Crunch
      Real chicken is the number 1 ingredient
      Just 2 calories per treat for guilt-free snacking
      Crunchy texture helps clean her teeth
      Complete and balanced treat formulated for adult cats`,
      price: `$8.55`,
      url: `/assets/cats/treats/chicken.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
    },
    {
      id: 49,
      name: `Purina Friskies Party Mix Beachside Crunch`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Beachside Crunch
      Real ocean whitefish is the number 1 ingredient
      With shrimp, crab and tuna flavors
      Less than 2 calories per treat for guilt-free snacking
      Crunchy texture helps clean her teeth`,
      price: `$8.06`,
      url: `/assets/cats/treats/crunch.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
    },
    {
      id: 50,
      name: `Purina Friskies Party Mix Pumpkin `,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Natural Cat Treats, Party Mix Natural Yums With Pumpkin
      No artificial colors, flavors or preservatives
      Natural recipe with added vitamins, minerals and nutrients
      Made with real pumpkin and chicken for the taste cats love
      Fewer than 2 calories per treat for guilt-free snacking`,
      price: `$18.40`,
      url: `/assets/cats/treats/pumpkin.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
    },
  ]);

  process.exit();
});
