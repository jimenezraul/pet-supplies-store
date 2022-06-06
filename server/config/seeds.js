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

  console.log("subcategories seeded");

  await Product.deleteMany();

  // create all seeds
  const products = await Product.insertMany([
    {
      name: `Purina Natural Adult Dry Dog Food`,
      description: `One (1) 36 lb. Bag - Purina ONE High Protein, Natural Dry Dog Food, True Instinct With Real Salmon & Tuna
      Salmon is number 1 ingredient in this dry dog food with tuna to help deliver 30 percent protein that helps support strong muscles, including a healthy heart
      Purina ONE natural dog food with added vitamins, minerals and nutrients crafted by a veterinarian-recommended brand in Purina-owned, U.S. facilities
      100 percent nutrition for adult dogs, 0 percent fillers. Every ingredient has a purpose
      Dry dog food for skin and coat care includes omega-6 fatty acids and natural sources of glucosamine for joint health for dogs plus four antioxidant sources to help support a strong immune system`,
      price: 67.65,
      image_url: `/assets/categories/dogs/food/purina.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Pedigree Dry Dog Food`,
      description: `Contains one (1) PEDIGREE Complete Nutrition Adult Dry Dog Food Roasted Chicken, Rice & Vegetable Flavor Dog Kibble, 30 lb. Bonus Bag
      This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious chicken flavor dogs love
      Provides whole grains and helps support healthy digestion
      Delivers complete and balanced nutrition enriched with omega-6 fatty acids to help nourish your dog’s skin and coat
      Made in the USA with the World’s Finest Ingredients`,
      price: 21.98,
      image_url: `/assets/categories/dogs/food/pedegree.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Cesar Gourmet Wet Dog Food Variety Packs – 24 Trays`,
      description: `Contains one (1) 24 count case of 3.5 ounce easy peel trays of Cesar Wet Dog Food Poultry Variety Pack: (6) Duck Recipe, (6) Grilled Chicken Flavor, (6) Oven Roasted, Chicken Flavor, (6) Turkey Recipe
      Crafted without grains and with US Chicken, U.S., Turkey or Duck as the ingredient
      Cesar Wet Dog Food is complete and balanced and fortified with vitamins and minerals to help dogs of all sizes, especially small dog breeds, stay healthy
      Made in the USA with the world's finest ingredients, Cesar makes a great meal on its own or as a moist dog food topper mixed with dry food
      This gourmet dog food is served in convenient trays with easy, peel-away freshness seals`,
      price: 23.48,
      image_url: `/assets/categories/dogs/food/cesar.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Royal Canin Small Adult Dry Dog Food`,
      description: `SMALL BREED DOG FOOD: Royal Canin Small Breed Adult Dry Dog Food is precise nutrition specifically made for small dogs 10 months to 8 years old weighing 9–22 lb
      WEIGHT MAINTENANCE: L-carnitine helps maintain a healthy weight, while helping to meet the high energy needs of small dog breeds
      SKIN AND COAT HEALTH: Optimal levels of fatty acids like EPA and DHA support skin and a healthy dog coat
      SPECIALIZED KIBBLE: Small breed adult dog food has an exclusive kibble design adapted for miniature jaws
      GREAT FOR PICKY EATERS: Enhanced palatable dog food satisfies the fussy appetites of small dogs`,
      price: 25.99,
      image_url: `/assets/categories/dogs/food/small_dog.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Wonder Bound High Protein`,
      description: `Real chicken is the #1 ingredient in this tasty blend of crunchy kibble and tender shreds
      Contains 26% protein and no artificial colors or flavors
      Omega-6 fatty acids support healthy skin, coat; antioxidant nutrients support healthy immune system
      Glucosamine supports healthy joints; prebiotic fiber supports digestive health
      Gradual transitioning helps to avoid dietary upsets. See instructions below or on the bag.
      Made in the USA, using domestic and globally sourced ingredients from trusted suppliers
      30 LB bag of Wonder Bound Adult Dry Dog Food, Chicken & Brown Rice Recipe shredded blend`,
      price: 39.45,
      image_url: `/assets/categories/dogs/food/wonder_bound.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Portable Dog Water Bottle with Food`,
      description: `Avelora water bottle can hold max 19 ounces (550 ml) of water and 100 g food. It not only ensures dog drinking water easily but also cat, rabbit or other small pet to drinking water easily. You can put this bottle into your pocket, backpack or hanging on your hand with sling rope.`,
      price: 18.99,
      image_url: `/assets/categories/dogs/accessories/food_bottle.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Absorbent Hooded Dog Bathrobe Towel`,
      description: `Ultra-Absorbent - BarkBox dog towel robes are fun AND functional. Enjoy an ultra-absorbent & fast-drying bathrobe that’s perfect for after bathtime, a rainy hike, or a dewy grass day. You’ll save your bathroom, car, and home from the dreaded wet-dog shake.`,
      price: 18.99,
      image_url: `/assets/categories/dogs/accessories/towel.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Walking Kit`,
      description: `Premium Quality: The Bricobe dog accessories are durable. The dog collar is strong enough that your dog cannot nibble and destroy it. The leash has a strong braided rope with a padded area for your holding. The dog food bowl is collapsible and can be changed to be of any size.`,
      price: 19.99,
      image_url: `/assets/categories/dogs/accessories/out_set.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Retractable Dog Leash`,
      description: `Light weight but sturdy --- 6.6 oz light weight that both adults and children can easily hold it. The light weight and ergonomic non-slip handle are designed to be held for long periods of time without fatigue. The leash consists of a high density strong nylon belt which has abrasion resistance.`,
      price: 11.99,
      image_url: `/assets/categories/dogs/accessories/portable.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Dog Bandanas - 6PCS `,
      description: `PREMIUM QUALITY MATERIAL - Made of a durable dyed material making it the ideal bandanas for dogs, dual layer makes it long lasting, not like other low quality bandana with one layer only, our bandana he sewing machine work line is neat and straight. Breathable material, keeps your dog cool during those hot summer days. Machine wash and dry available.
      ONE SIZE FITS & FOLDABLE - Wedding dog bandana comes as a 18 x 18 inch Dog Bandana, which can be folded over multiple times. This dog bandana is ideal for small to medium size dogs.Please measure the size of your cutie and leave room to tie knot.`,
      price: 12.99,
      image_url: `/assets/categories/dogs/accessories/bandanas.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Greenies Natural Dental Dog Treats`,
      description: `Treat your dog deliciously with the great taste of GREENIES Original Dental Treats
      GREENIES Dog Treats are proudly made in our Kansas City, MO, USA facility with the world’s finest ingredients
      GREENIES Dog Treats are made with natural ingredients plus vitamins, minerals, & nutrients`,
      price: 18.99,
      image_url: `/assets/categories/dogs/treats/greenies.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Milk-Bone Soft & Chewy Dog Treats`,
      description: `Contains 25-ounce containers of Milk-Bone Soft and Chewy Beef and Filet Mignon Recipe With Chuck Roast dog treats
      Soft and chewy dog treats made with real chuck roast
      Fortified with 12 vitamins and minerals
      Great for dogs of all sizes`,
      price: 12.99,
      image_url: `/assets/categories/dogs/treats/soft_chewy.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Blue Buffalo Training Treats `,
      description: `MEATY TRAINING TREATS: For dogs that love a meaty treat, BLUE Bits are tender, bite-sized morsels that are the perfect size for training. Plus with DHA to help support cognitive development, they’re an ideal puppy treat
      WHOLESOME INGREDIENTS: These dog treats don’t contain any chicken (or poultry) by-product meals and are free from corn, wheat and soy. Plus, they’re free from artificial preservatives like propylene glycol and colors like red dye 40`,
      price: 9.99,
      image_url: `/assets/categories/dogs/treats/bits.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Milk-Bone Flavor Dog Treats`,
      description: `Tasty mini dog treats prepared with care and right-sized for treating more often
      Crunchy texture helps freshen breath and reduce tartar build-up, perfect for sloppy doggie kisses
      Wholesome goodness at only 5 calories per treat with 12 vitamins and minerals`,
      price: 11.48,
      image_url: `/assets/categories/dogs/treats/minis.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Turkey Tendon and Chicken Dog Treats `,
      description: `Premium all natural dog chew treat made from US-sourced turkey tendon and chicken with NO preservatives, NO antibiotics, NO artificial flavors or coloring, NO steroids, NO growth hormones, and NO other harmful ingredients — a healthy natural alternative to rawhide products.`,
      price: 12.99,
      image_url: `/assets/categories/dogs/treats/bones.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Pet MD - Dog Ear Cleaner Wipes`,
      description: `Gentle and Safe for Regular Use which Prevents Ear Infections, Reduces Wax Build Up and Removes Debris in and Around the Ear
      100 Convenient, Alcohol Free, Soothing and Non-Irritating Disposable Ear Wipes for Dogs. For Dogs Over 12 Weeks Ol`,
      price: 12.59,
      image_url: `/assets/categories/dogs/care/ear_wipes.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Portable Dog Paw Washer`,
      description: `For Proper Use & Effectiveness: The medium MudBuster is perfectly sized for medium sized dogs with paws between 2 ½”to 3 ½” wide. Actual Mudbuster measures 6 inches tall and 4 inches wide
      To use, add a little water, insert the muddy paw, do the twist, dab the paw dry, repeat for 3 more paws`,
      price: 16.49,
      image_url: `/assets/categories/dogs/care/paw_cleaner.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Dog Shaver Clippers`,
      description: `Rechargeable dog trimmer with built-in battery is good for exceptional flexibility and maneuverability. And the cllipper itself has 5 adjustable functions for the comb from 0.8mm to 2mm.
      High quality stainless steel fixed blade and ceramic moving blade provide excellent cutting performance. The blade sharp enough eventhough it after a long time using. Detachable blades for ease of changing and cleaning.`,
      price: 34.99,
      image_url: `/assets/categories/dogs/care/clippers.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      id: 19,
      name: `Wild Alaskan Salmon Oil for Dogs`,
      description: `LIQUID FISH OIL FOR DOGS: Includes (1) 16 fl oz bottle of Natural Dog Company Wild Alaskan Salmon Oil that is formulated for dogs of any size, age, or breed and will support your dog's health from the inside out.
      SUPPORTS HEALTHY SKIN & SHINY COAT: Our oil softens skin and fur while relieving dry, itchy skin, reducing shedding, and minimizing skin allergy symptoms.`,
      price: 25.95,
      image_url: `/assets/categories/dogs/care/oil.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Dog Skin Soother Moisturizing Stick`,
      description: `MOISTURIZING & SOOTHING FORMULA: It moisturizes, softens, and soothes dog paws for immediate relief. An ideal way to protect against extreme weather conditions, treating and healing scars, wounds, paw allergies, dry elbows, & more!
      EASY & QUICK TO APPLY: Clean paws before application. Gently rub onto paw pads. Paws will be slick right after application, allow time to dry. Best applied before bedtime. Repeat one to three times daily. Decrease application as the area improves.`,
      price: 5.99,
      image_url: `/assets/categories/dogs/care/paw_soother.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Wobble Wag Giggle Ball`,
      description: `FUN FOR ALL BIG OR SMALL Wobble Wag Giggle Ball is great for dogs of all ages and sizes! The 4 clutch pockets on the toy make it easy for your dog to pick up during playtime!
      WOBBLE WAG GIGGLE Ball With just the nudge of a nose, off the ball goes! Wobble Wag Giggle does not require batteries - the secret is the internal tube noisemaker inside of the ball, the enticing “play-with-me” giggle sounds are sure to engage your pup as the toy rolls around!`,
      price: 14.99,
      image_url: `/assets/categories/dogs/toys/ball.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: ` Dog Chew Toys`,
      description: `VARIETY TYPE of DOG TOYS:【Random Color】3 Packs of dog rope toys,2 Packs Stuffed Squeaky Plush Dog Toy,and 1 Pack No Stuffing Dog Squeaky Toys
      SAFE DOG CHEW TOYS: Our dog toys are made of natural and non-toxic material that ensures the safety of dogs. Thicker fabric and better stitching make these toys more durable for dogs. It's suitable for teeth cleaning and chewing`,
      price: 17.99,
      image_url: `/assets/categories/dogs/toys/toy_set.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Interactive Dog Gator  Toy`,
      description: `This large dog toy is built to last. Hard nylon along with rubber are designed for aggressive chewers(except for very aggressive dogs). Ideal dog chew toys making it great for dogs who like to chew and gnaw, satisfies the dog’s natural urge to chew.No toy is indestructible, but this one is the closest.`,
      price: 13.99,
      image_url: `/assets/categories/dogs/toys/gator.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Tough Dog Chew Toy`,
      description: `Food Grade Material: Bite-resistant and environment friendly TPR materials corn,Non-toxic cotton rope.Safety for your lovely pet playing and teeth cleaning.
      Built-in Filling: Separate the corn product from the cotton rope, and put dog snacks / grits / peanut butter / Easy Treat / snacks / Ziggies stuffed toys in the middle aisle, which is more attractive to dogs for chewing and easy to clean.`,
      price: 13.69,
      image_url: `/assets/categories/dogs/toys/corn.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Puppy Teething Chew Toy`,
      description: `Puppy Teething Chew Toys: This chew toy suitable for aggressive chewers small medium breed, playing with this toy regularly will relive dog's anxiety when they are at home by themselves, it come make dogs cleaning teeth by themselves.
      Effectively Clean Teeth: according to the features of dog's teeth, which can thoroughly clean dog's incisors, fangs and molars when playing the toy, calculus effectively, fully protecting dog's dental.`,
      price: 11.99,
      image_url: `/assets/categories/dogs/toys/chew.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Purina ONE Tender Selects Blend`,
      description: `One (1) 22 Lb. Of Purina One Tender Selects With Real Salmon
      Real Salmon Is The #1 Ingredient
      High Protein Helps Support Strong Muscles
      Purina One Is Veterinarian Recommended
      100% Complete And Balanced Nutrition To Help Support Your Adult Cat'S Healthy Immune System`,
      price: 35.99,
      image_url: `/assets/categories/cats/food/purinajpg.jpeg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Purina Fancy Feast Gravy Lovers`,
      description: `24 3 Ounce Cans Purina Fancy Feast Gravy Lovers Poultry and Beef Feast Collection Wet Cat Food Variety Pack
      Chicken, Turkey And Beef Flavors Cats Love
      100 percent complete and balanced nutrition
      Tender, delicate bites for a tempting texture
      Meaty morsels deliver and appetizing texture
      Included Components: (24) 3 ounce Cans - Purina fancy feast wet cat food, medleys wild salmon Florentine with garden greens in delicate sauce`,
      price: 18.99,
      image_url: `/assets/categories/cats/food/fancy_feast.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Sheba Perfect Portions Cuts in Gravy `,
      description: `Contains twelve (12) 2.6 oz. twin pack trays (24 servings total) of SHEBA PERFECT PORTIONS Wet Cat Food Cuts in Gravy Variety Pack: (6) Roasted Chicken Entrée and (6) Tender Turkey Entrée
      Made with real protein, plus essential vitamins and minerals for any life stage, including mature cat maintenance and kitten growth`,
      price: 10.98,
      image_url: `/assets/categories/cats/food/sheba.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Iams Proactive Health Adult Dry Cat Food`,
      description: `Contains one (1) 22 lb. bag of IAMS Proactie Healthy Adult Dry Cat Food with Chicken
      Chicken is the ingredient in this nutrient-rich cat food designed for a healthy body for play
      Support your cat’s healthy digestion with natural fiber and prebiotics
      Promotes healthy skin and glossy coat with omega-6 and -3 fatty acids`,
      price: 29.42,
      image_url: `/assets/categories/cats/food/iams.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Dry Cat Food`,
      description: `One (1) 22 lb. Bag - Purina Friskies Dry Cat Food, Farm Favorites With Chicken
      Made with natural, farm-raised chicken
      Flavors of carrots and spinach add flavorful variety
      No artificial flavors
      Made without artificial preservatives`,
      price: 20.05,
      image_url: `/assets/categories/cats/food/friskies.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Cat Bed for Indoor with Anti-Slip Bottom,`,
      description: `SIZE DETAILS - S: 12.6*12inch, M: 15*13.4inch,L: 15.8*16inch The tent bed can accommodate most of the cat's body and provide a good sleeping experience for the cat. It’s ideal for indoor & outdoor use. Arrives as a vacuum packed bed!
      CLEANING RECOMMENDATIONS - Our cat bed is made of very good pp cotton, but due to the uneven shape of the cat bed cave, many users will break it after washing it with a washing machine. Therefore, for long-term use, we still recommend you to wash them by hand.`,
      price: 16.99,
      image_url: `/assets/categories/cats/accessories/bed.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `JUNSPOW Cat Bed`,
      description: `Isolation of moisture and cold: The size is about 42x45x 23cm. Large enough to keep pets away from hot, cold or dirty floors while resting or sleeping.
      Simple maintenance: The lid can be removed. Drainage is also great. It dries quickly in the shade. It also has a higher drying speed than polyurethane and hard cotton.`,
      price: 29.99,
      image_url: `/assets/categories/cats/accessories/bed2.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      id: 33,
      name: `Cat Carrier Backpack`,
      description: `Item Dimensions: Folded size 13" L x 11" W x 16.5" H. Expanded size : 13" L x 27.5" W x 16.5" H. Suggested Weight: 0-13lbs for small to medium cats, 0-10lbs for Dogs and puppies. Most Airline Approved under seat. Important: Please Check your airline requirements before traveling.
      Excellent Ventilation: 9 large Ventilation Holes on both sides and front, left and right ventilation nets ensure fresh air for fur-kids. The back expandable anti-scratching net provides maximum breathability that your pet will enjoy the outdoor time with you.
`,
      price: 45.99,
      image_url: `/assets/categories/cats/accessories/backpack.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Cat Harness`,
      description: `Cat Harness with Leash, Fits Large to XL Cats: Size measuring: Neck Girth: 11" - 13.7", Chest Girth: 18.0" - 20.0". Please Measure your cat carefully and refer to the size chart before order. (Tips: Your cat's head circumference should be at least 11 inches or your cat may slip out.) Package includes: 1x Small Cat Walking Vest and 1x Walking Nylon Leash (150cm)`,
      price: 15.99,
      image_url: `/assets/categories/cats/accessories/harness.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Cat Collar 
      `,
      description: `ADJUSTABLE SIZE: Each cat collar measures adjustable 7.5" to 10.8", please measure your cat's neck girth before ordering, leave 2 fingers room when wearing for relaxation.
      SOFT POLYESTER COTTON: Made of soft and durable Polyester cotton material, makes your pet feel relaxed and comfortable when wearing, in addition, quick release buckle can provide more safety for your cat.`,
      price: 9.99,
      image_url: `/assets/categories/cats/accessories/collar.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Interactive Cat Toy for Indoor`,
      description: `【 Cat Exercise Toy: 360 degree random rotation,drive cats wild as it starts,Increasing cat's exercise while keeping cats entertained and stimulated,eliminate boredom.Help satisfy your cat’s need for exercise
      Silent Motor: Quiet design can make sure that your pets would not be scared.Let you also have a quiet and comfortable environment.Great holiday gift for cat owners.Christmas gifts for cats
      Automatic Cat Toy: Make play and exercise moderate, It will automatically power off after 15 minutes of rotating, which can let your cat avoid to play and exercise excessively.It's a fun and playful way to keep cats healthy and active`,
      price: 19.99,
      image_url: `/assets/categories/cats/toys/toy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Potaroma Chirping Cat Balls `,
      description: `Cats Go Nuts – Make play fantastic with the 3 fluffy plush ball toys. The cat toys make lifelike animal chirping sounds once playtime begins, beckoning every bat, bite, chew, and chase! The 3 animal sounds are frog, cricket and bird chirping respectively. The balls keep quiet when left alone to save battery power`,
      price: 14.99,
      image_url: `/assets/categories/cats/toys/catnip.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Potaroma Flopping Fish 10.5"`,
      description: `Interactive Fun for Cats: every time your feline touches this cat kicker toy, the automatic built-in motion sensor kicks into action and the cat teaser fish moves in a wiggling way, intriguing your cat to kick and play. Perfect Thanksgiving, Christmas and New Year gift for pet owners or your own pets
      Realistic Fish Simulation: the vivid moving fish toy looks like a real fish, an eye-catcher for cats, keeping your kitty on her paws and engaged in real time, alleviating boredom and loneliness and promoting cat's exercise when you are away from home`,
      price: 12.99,
      image_url: `/assets/categories/cats/toys/fish_kit.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Cat Toy with Sturdy Scratching Pads`,
      description: `3IN1 CAT TOY+ CAT BED+ CAT SCRATCHER : Cats will be happy to "play soccer"... Lazy lying on the toy... and they will put their energy on the cat scratcher in the middle of the toy instead of your furniture.
      STURDINESS AND DURABILIT: 100% high-quality and environmentally friendly corrugated paper - green, safe and made to last and will last long time`,
      price: 29.99,
      image_url: `/assets/categories/cats/toys/pad.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Interactive Cat Rainbow Wand Toy`,
      description: `Interactive Cat Toy: The colorful cat toy teaser wand is a great way to attract your cat’s attention. Your cat will love the cat string toy.
       Premium Quality: The cat wand toy is made from soft, colorful satin fabric and high-elastic wand. Both materials are non-toxic and 100% safe for your cats.`,
      price: 19.99,
      image_url: `/assets/categories/cats/toys/teaser.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Cat Grooming Glove`,
      description: `Hair Remover: Perfect for long, short and curly haired dogs, cats, horses, and other pets, grooming the hair quickly, gently and effectively; The shedding hair sticks to the glove, making it easy to peel and throw hair away
      Bath Brush: Bathe the pets with this glove, which will clean the pet hair easily and give your pets a gentle massage without hurting their skin; Five finger design allows you to groom hard-to-reach places like tail or face`,
      price: 16.99,
      image_url: `/assets/categories/cats/care/gloves.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Nail Clippers `,
      description: `FOR SMALL PETS: Our claw scissors have been designed to be used on small animals, such as dogs, kittens, puppies, birds and bunny. Use them as kitten nail clippers or as general pet nail trimmers.
      SAFE & EASY TO USE: Fitted with razor sharp blades made out of stainless steel and an ergonomic grip made out of a top grade plastic the production of these clippers does not harm the environment.`,
      price: 12.99,
      image_url: `/assets/categories/cats/care/clips.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Cat Brush for Shedding`,
      description: `One-click Cleaning Button: After brushing your pet, simply click the button. The shutter will pop out, separating the brushed hair from the metal needle, then wipe the hair off. The button of dog brush for shedding short hair on the handle saves time and energy when grooming and cleaning.`,
      price: 25.99,
      image_url: `/assets/categories/cats/care/brush.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Rocco & Roxie Cat Litter Box Odor Eliminator`,
      description: `EFFECTIVELY ABSORBS EVEN THE STRONGEST LITTER BOX SMELLS Our proprietary blend of essential oils neutralizes odors at a molecular level, keeping your litter box smelling fresher, longer.
      SAFE FOR PEOPLE, PETS AND THE PLANET Non toxic. 100% plant-based. Made from all-natural, highly absorbent corncob granules that effectively wick moisture from urine and feces`,
      price: 11.92,
      image_url: `/assets/categories/cats/care/odor.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Cat Shampoo`,
      description: `SENSITIVE SKIN FORMULA - Approved and formulated by veterinarians, PetO’Cera cat shampoo features a blend of eleven botanical extracts. With allantoin and ceramide to enhance your cat’s healthy skin, our natural ingredients help to soothe and relieve your cat’s sensitive skin while calming irritations to stop scratching and deshedding.
      EASY TO USE - Simply apply this cat shampoo to your kitten’s wet coat and lightly work through from head to tail while avoiding the eyes. After bathing the cat, just rinse, towel, and dry. Fully enjoy the refreshing scent while playing with your cat!`,
      price: 23.70,
      image_url: `/assets/categories/cats//care/soap.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Party Mix Gravy `,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Crunch Gravylicious Chicken & Gravy Flavors
      Tasty chicken flavor helps satisfy your cat's poultry cravings
      Savory gravy flavor pleases her palate
      Cat treats with a crunchy texture your cat loves and also helps clean her teeth
      The unique shapes of these cat treats help keep her interes`,
      price: 8.99,
      image_url: `/assets/categories/cats/treats/gravy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Party Mix Cheesy Craze`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Cheezy Craze Crunch
      Made with real cheese in every bite
      With a blend of Cheddar, Swiss and Monterey Jack cheeses
      Under two calories per treat
      Delicious taste cats love`,
      price: 9.99,
      image_url: `/assets/categories/cats/treats/cheesy.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Party Mix Chicken Lovers`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Chicken Lovers Crunch
      Real chicken is the number 1 ingredient
      Just 2 calories per treat for guilt-free snacking
      Crunchy texture helps clean her teeth
      Complete and balanced treat formulated for adult cats`,
      price: 8.99,
      image_url: `/assets/categories/cats/treats/chicken.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Party Mix Beachside Crunch`,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Cat Treats, Party Mix Beachside Crunch
      Real ocean whitefish is the number 1 ingredient
      With shrimp, crab and tuna flavors
      Less than 2 calories per treat for guilt-free snacking
      Crunchy texture helps clean her teeth`,
      price: 8.99,
      image_url: `/assets/categories/cats/treats/crunch.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Purina Friskies Party Mix Pumpkin `,
      description: `One (1) 20 oz. Pouch - Purina Friskies Made in USA Facilities Natural Cat Treats, Party Mix Natural Yums With Pumpkin
      No artificial colors, flavors or preservatives
      Natural recipe with added vitamins, minerals and nutrients
      Made with real pumpkin and chicken for the taste cats love
      Fewer than 2 calories per treat for guilt-free snacking`,
      price: 18.99,
      image_url: `/assets/categories/cats/treats/pumpkin.jpg`,
      category: categories[1]._id,
      subCategory: subCategories[4]._id,
      quantity: 100,
    },
    {
      name: `Marine Flakes`,
      description: `Provides balanced nutrition for daily feeding of fish living in a marine (saltwater) environment
      Contains Chlorella algae, which provides essential vitamins, minerals, amino acids required by marine fish
      Formulated with natural ingredients and colors with added vitamins, minerals and trace nutrients for a healthy diet
      Helps support a healthy immune system and bring out the true colors of your fish
      Feed in small amounts that fish will consume in under 2 minutes`,
      price: 4.96,
      image_url: `/assets/categories/fish/food/marine_flakes.jpeg`,
      category: categories[2]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Kaytee Koi's Choice`,
      description: `Provides necessary animal and vegetable proteins
      With 35% protein, fish meal is the first ingredient and supports tissue and muscle development
      Great for Koi, Goldfish and other pond fish
      Floating pond fish food that's suitable for all seasons
      Fish oil, wheat germ meal and alfalfa meal to enhance eye, heart and cognitive functions
      Highly digestible food
      `,
      price: 63.49,
      image_url: `/assets/categories/fish/food/koi_food.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Aqueon Tropical Flakes`,
      description: `Natural ingredients and colors with added vitamins, minerals and trace nutrients
      Nutritious food ingredients that fish are naturally attracted to
      Formulated so that fish utilize more of what they eat and create less waste
      Floating flakes for surface feeding
      Will not cloud water when fed as directed
      Ideal for Angelfish, Tetra Species, Barb Species, Rasboras, Danios, White Cloud Minnows, Rainbow Fish, Fancy Guppies, Platies, Swordtails, Corydoras Catfish, Most Loaches, Kribensis`,
      price: 4.99,
      image_url: `/assets/categories/fish/food/tropical_flakes.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Ultra Fresh - Royal Guppy Mignon Pellet`,
      description: `Ultra Natural Coloration Ultra-enhanced formulation of natural seaweed, Australian spirulina, and premium fresh sword prawns enhances the natural coloration of your fish, presenting them in their most natural and vibrant colors.
      PET SUPERFOOD It's not only tasty, but it also keeps guppies healthy! Our food is jam-packed with vitamins (A, C, D3, E, B1, B2, B6, B12) great for reaching full potential in size, color, fins, and A+ immunity!`,
      price: 7.19,
      image_url: `/assets/categories/fish/food/royal_guppy.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Tetra TetraPRO Tropical Color Crisps With Biotin`,
      description: `TROPICAL FORMULATION: TetraPro Tropical Color Crisps provide advanced nutrition for the discerning tropical fish-keeper.
      OPTIMAL HEALTH: Made with exclusive low-heat process that preserves essential vitamins and nutrients – enhanced with biotin to support fish’s immune system.
      COLOR ENHANCING: High content of natural color enhancers promote the development of rich, beautiful coloration in tropical fish.`,
      price: 8.54,
      image_url: `/assets/categories/fish/food/tetra_pro.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `PENN-PLAX Quick-Net Aquarium Fish Nets`,
      description: `DURABLE, STRONG, AND SAFE: Each fish net features a vinyl covered, two-part braided handle that provides for an ergonomic grip, ensuring reliable operation with its strong design. Our aquarium fish nets won’t bend or become distorted over time, even with repetitive use. The mesh netting is appropriate for almost any type of aquarium fish, both freshwater and saltwater.
      MEASUREMENTS: The QN4 model of our Quick-Net line features a 4” x 3” net, with a handle length of 10”`,
      price: 3.99,
      image_url: `/assets/categories/fish/accessories/fish_net.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `1.2 Gallon Aquarium`,
      description: ` This 1.2 gallon semicircular fish tank can raise betta, angel fish, guppy and other ornamental fish. It is suitable for bedroom, living room, study and office, etc. The fish tank is equipped with 5W LED light and two decorative plastic aquatic plants. It will look great wherever you place it. Choose our fish tank, show your taste.
      This betta fish tank is made of impact-resistant acrylic with crystal-clear clarity. Beautiful arc design, both decoration and practicality. The one-piece construction providing superior strength and durability. Unlike glass tanks glued together with silicone, this small aquarium puts to rest any worries or concerns about possible leaks.`,
      price: 32.99,
      image_url: `/assets/categories/fish/accessories/aquarium.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Fish Safe Floating Food Feeder `,
      description: `Feed the fish no longer need to turn off the skimmer pump, Put food in the circle, the fish the fish will eat in own plate, fish Don't need to chase food everywhere,Improve feeding efficiency,Reduce fish food waste.`,
      price: 6.99,
      image_url: `/assets/categories/fish/accessories/feed_ring.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Fish Tank Decorations Aquarium Plants`,
      description: `1 Pc resin castle(5.7*3.1*4.9 inch) aquarium decorations with holes for small fish to hide, 1 blue aquarium decor tree(11.1*11.1 inch) and 10Pcs small artificial fish tank plants(1.9*1.9*1.8 inch).`,
      price: 19.99,
      image_url: `/assets/categories/fish/accessories/plants.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `AnxunJim Aquarium Groot Air Bubbler`,
      description: `Material: resin, non-toxic, will not harm your fish, will not fall off, will not fade, can be used in fresh water or salt water
      Size: 2.6 * 2.36 * 4.33 inches, weight: 7 ounces, suitable for small and medium fish tanks.
      Easy to use: Air stone can replace oxygen and reduce the content of carbon dioxide. You only need to manually connect the aviation pipe to the connection port of the air stone and deliver air, and it can be used normally.
      The package includes: 10 feet aviation pipe, 1 Groot bubble, 2 suction cups, 1 check valve, 1 T-connector and 1 air control valve. The whole set of accessories is enough to connect to the air pump.`,
      price: 13.99,
      image_url: `/assets/categories/fish/accessories/toy.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `QZQ Aquarium Gravel Cleaner`,
      description: `Mufti-functional cleaning kit: Aquarium gravel vacuum cleaner kit is a mufti-functional aquarium cleaner that uses (adopts)the siphon design principle, which includes the aquarium, aquarium sand washing, algae scraping, fish excrement cleaning, aquarium residual debris, and aquarium water changing. Quick water change gives fisha clean and comfortable aquarium living environment.
      Easy to use and assemble: when the fish tank siphon is in use, hold the handle and press it continuously for several times to observe whether it will automatically pump the water out. If not, repeat the operation until the water flows out, then stop the pressure, and secure it on the top of the tank , you will see the water automatically flows out. The Aquarium gravel cleaner kit is designed to be attached to the tank and has a flow regulator `,
      price: 35.99,
      image_url: `/assets/categories/fish/care/tank_cleaner.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Natural Rapport Aquarium Water Conditioner`,
      description: `SALT & FRESHWATER - Treatments during changes will help your betta, goldfish, or others thrive as it balances pH, adds electrolytes, slime and stress coats for your fish. Also safer for saltwater marine invertebrates, plants and crustaceans.
      DETOXIFIES & REMOVES HARMFUL CHEMICALS - Quick to remove harmful bacteria such as Ammonia, Nitrate, Chlorine, Chloramine, Heavy Metals, and more. Our 'Natural Choice' Dechlorinator and clarifier does all this plus is safer for your aquarium.
      ALL-IN-ONE CONDITIONER - Makes your tap water instantly safe by removing harsh chemicals and detoxifies heavy metals. is so effective and safe it is also recommended for aqua live reefs. From beta fish to exotics, our treatment is great for all.`,
      price: 13.99,
      image_url: `/assets/categories/fish/care/water_cond.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Tetra Cleaning Bacteria`,
      description: `BENEFICIAL BACTERIAL BLEND: Replenishes beneficial bacteria to help filter pollutants in aquarium water.
      BIOLOGICAL BALANCE: Works to keep your aquarium healthy and biologically balanced.
      FOR SUPERCHARGED FILTRATION: Cleans gravel and removes sludge and ammonia.
      CONVENIENT: Use the cap to measure and dose.
      USAGE: Use monthly, or when setting up a new aquarium, after a water or filter change, or when adding new fish to ensure healthy water conditions.`,
      price: 5.78,
      image_url: `/assets/categories/fish/care/bacteria.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `API Quick Start Nitrifying Bacteria`,
      description: `Contains one (1) API QUICK START Freshwater and Saltwater Aquarium Nitrifying Bacteria 8-Ounce Bottle
      Allows instant addition of fish when starting a new aquarium
      Reduces compounds harmful to fish when used routinely
      Helps prevent fish loss in freshwater and saltwater aquariums
      Use when starting a new aquarium, when adding new fish and when changing water and filter media`,
      price: 9.98,
      image_url: `/assets/categories/fish/care/API.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `AQQA Magnetic Aquarium Cleaner Brush`,
      description: `Suitable 1/4 "~3/8 " Thickness Glass - the cleaner brush size is 10.3X5.5X6.8cm(4.05"*2.17"*2.7"),won't occupy a lot of space in the fish tank,The edges are very smooth and will not harm the fish.Please pay attention to your hands when using, do not put your hands in the middle of strong magnets.`,
      price: 29.99,
      image_url: `/assets/categories/fish/care/magnetic_brush.jpg`,
      category: categories[2]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Vitakraft Crunch Sticks `,
      description: `Tasty apple and honey treat sticks your hamsters will love
      Triple baked for crunchiness and great taste
      Natural Wood stick center provides your bird with long lasting chewing fun`,
      price: 5.99,
      image_url: `/assets/categories/hamsters/food/stick.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Kaytee Pro Health Hamster Food`,
      description: `Larger, crunchy pieces supports dental health through natural chewing activity
      Prebiotics and probiotics to support digestive health
      Naturally preserved for ideal freshness
      A nutritionally complete diet for hamsters and gerbils
      All natural`,
      price: 5.99,
      image_url: `/assets/categories/hamsters/food/FortiDiet.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Supreme Tiny Friends Farm Hazel Hamster Tasty Mix `,
      description: `A Nutritionally Balanced, Tasty Mix For Hamsters
      Promotes Natural Foraging
      Best Ever Taste - No Added Sugar
      Added Vitamins For Health & Vitality
      Suitable For All Breeds Including Dwarf Hamsters`,
      price: 6.57,
      image_url: `/assets/categories/hamsters/food/farm.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Wild Harvest Nutrition Diet`,
      description: `Advanced Nutrition Diets In Flip Top Containers
      More Convenient Than Screw Top Containers
      IMPORTANT VARIETY: Unique mix of ingredients create an irresistible blend to replicate diets found in a natural habitat and encourage foraging behaviors.
      Less Mess Than Using Bags`,
      price: 9.97,
      image_url: `/assets/categories/hamsters/food/wild_harvest.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `Supreme Petfoods Science Selective Hamster Foods`,
      description: `Daily diet for hamsters of all breeds, including dwarfs
      Rich in natural ingredients
      No added sugars
      Helps support digestive wellbeing
      Single component extruded nuggets prevent selective feeding
      Age range description: All Life Stages`,
      price: 6.9,
      image_url: `/assets/categories/hamsters/food/complete.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
    {
      name: `4oz Small Pet Water Bottle with Bamboo Stand`,
      description: `ADJUSTABLE HEIGHT WATER BOTTLE HOLDER FOR GERBILS, HAMSTERS, AND RATS - With this adjustable bamboo stand, you can adjust the water bottle so that the sipper part can be between 1.2 inches to 3.7 inches off the ground. An easy to adjust butterfly nut at the back of the stand will ensure that you can customize the height of the water bottle and that the water bottle holder will securely lock in place.`,
      price: 21.99,
      image_url: `/assets/categories/hamsters/accessories/bottles.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Large Hamster Sand Bath Container`,
      description: `Side Entrance: Observe the hamster's life without hindrance. Enclosed design to increase the time of hamster bathing. Large internal space so taht your pets could move around freely
      Easily Cleaning: Easy to remove the lid,arc design of the bottom can wash the dirty stuff away without effort
      Size: 5.7 inches long,3.9 inches wide,3.9 inches high. It's matched with a Sand Scoop which is random color. It's recommended for your dwarf hamsters gerbils mice or other small pets`,
      price: 11.99,
      image_url: `/assets/categories/hamsters/accessories/sand_bath.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Banana Hamster Bed House Hammock`,
      description: ` Size: 20 x 6 x 6cm; SUITABLE FOR SMALL Pet eg. Sugar glider, Squirrel, Hamster, Mouse and other small pets Pls check the size before you buy it.
      FUNCTION: It can be hung on the cage or used as a hammock.`,
      price: 8.79,
      image_url: `/assets/categories/hamsters/accessories/banana_bed.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Hamster Hiding House`,
      description: `Size: Rainbow house ( 5.9 x 5.9 x5.4 ), The snail house ( 6.3 x 3.9 x 3.9 ), Gym room（5.5x 3.1x 2.8），On the seesaw (5.7*2.6*1.5)perfect for hamsters, gerbils and mice and other small animal. Please check the size of your pet before ordering.`,
      price: 12.99,
      image_url: `/assets/categories/hamsters/accessories/house.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Hamster Running Ball`,
      description: `Crystal Ball For Hamsters: Size: 4.72 Inches，Pets can play in the Crystal Ball For Hamsters, and the owner can observe the pet's every move. So cute!This is a small hamster ball, not suitable for larger pets.
Environmentally Friendly Materials: Hamster exercise balls select high-quality environmentally friendly plastic materials to protect the health of pets well. It is produced with brand-new PC material, with lock design, easy installation, convenient and fast!`,
      price: 7.99,
      image_url: `/assets/categories/hamsters/accessories/ball.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `18 Pcs Wooden Hamster Toy Set`,
      description: `Enriching 18 Pcs Hamster Toys Set - OVERTANG as a professional pet toy accessories brand manufacturer, aiming to provide fun and anxiety relief for your small animals, our latest 18 pcs wooden hamster cage accessories toy playset contains: pine cone, apple tree block with rope, rattan ball, seesaw, carrot, corn, loofah slices, dumbbell, unicycle, bell, timothy hay sticks, various fun toys to win their hearts.`,
      price: 19.99,
      image_url: `/assets/categories/hamsters/toys/toy_set.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `21PCS Hamster Activity Chew Toys`,
      description: `Hamster chew and exercise toy set to meet the needs of your small pets more, the package contains: 100% apple branch 10PCS, volcanic rock molar stone 1PCS,Pine cones 2pcs,squared molar block with rope 1pcs,ladder 1pcs,corn shreds carrot 1PCS,Roman column 1pcs,swing 1pcs,corn shreds ball 1pcs, brown silk ball 1pcs,barbell 1pcs.`,
      price: 12.99,
      image_url: `/assets/categories/hamsters/toys/chew_set.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Hamster Fun Tunnel Toy Set`,
      description: `PACKAGE INCLUDE: Hamster Fun Tunnel*1, Apple Wood Skewer*1, Seagrass ball*1, Ranttan ball*1, Loofa toys*2, Carrot toys*1, Pinecone ball*2
      `,
      price: 12.99,
      image_url: `/assets/categories/hamsters/toys/toy_set2.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `4.8 in Super-Silent Hamster Exercise Wheel`,
      description: `Silent 4.8 Inch Hamster Wheel - Silent spinner hedgehog wheel brings your little pet endless running happiness, also brings you a quiet night even if your hamster on the race track to run & hamster wheel is spinning.`,
      price: 9.99,
      image_url: `/assets/categories/hamsters/toys/wheel.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `9 Pcs Hamster Play Balls`,
      description: `Package: 1 rattan ball,1 rattan ball with bells,1 rattan ball with grass cake,1 rattan ball with paper
      Funny Ball: The hamster toys provide excellent opportunities for small rodents to play and exercise, keep them healthy and active, reduce loneliness and the anxiety in the cage, makes them feel more fun in a limited space in novel and interesting ways.`,
      price: 5.69,
      image_url: `/assets/categories/hamsters/toys/play_balls.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[2]._id,
      quantity: 100,
    },
    {
      name: `Nature’s Miracle Cage Cleaner`,
      description: `SMALL ANIMAL FORMULA: Cleans and deodorizes small animal cages.
      BIO-ENZYMATIC FORMULA: Penetrates to eliminate embedded cage odors.
      NO MASKING PERFUMES: Will not leave behind strong scents that can irritate small animal respiratory systems.
      SAFE TO USE AROUND PETS: As pet people, we believe it’s important to have products that are safe to use around pets.`,
      price: 7.99,
      image_url: `/assets/categories/hamsters/care/cage_cleaner.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Pet Waste Odor Eliminator & Cleaner`,
      description: `NEW ADVANCED PROBIOTIC ODOR ELIMINATION solution designed to be 100% sustainable and contains ZERO harmful chemicals. Our eco-friendly based formula is designed to require less product and work longer than the competition while promoting a healthier living environment for your pets and family. While other products mask the offending odors with fragrances, ours targets the source of the odor and organically destroys the offending compounds on contact.`,
      price: 12.0,
      image_url: `/assets/categories/hamsters/care/no_scent.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `2 Pack Hamster Brush`,
      description: `GOOD DESIGN - Ergonomic handles design for a better bristles experience of you and more effective bristles with your pet.your pet will love this new massage!
      BEAUTIFY PETS - The perfect selection of necessary grooming tools for small pets, Helps you create a special bonding experience while you groom your furry friend.Fit Hamster, Sugar Gliders, Bunny, Ferrets, Rats, Chinchilla, Guinea Pig, Hedgehog.
      PERFECT BRUSH – Brush gently removes Loose Hair, and eliminates Tangles, Knots, Dander and trapped Dirt.
      MAINTAIN PET HEALTH - With regular use, this brush can help you keep your pet’s coat healthier, all without irritating your pet’s skin, no matter their breed or coat type.
      EASY TO CLEAN – When you’re done brushing your pet, Can be washed with water, after drying, there is a transparent lid for storage, So it’s ready for the next time use.`,
      price: 5.99,
      image_url: `/assets/categories/hamsters/care/brush.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Calymmny Hamster Bath Sand`,
      description: `100% natural sand: natural bath sand, 100% natural sand and is free from bacteria. clean and odorless. absorb odor and deodorize. It removes the oil from the hamster.
      Package Includes: 1 bag*2LB bathing sand. The sand is suitable for chinchilla guinea pig, gerbil, degus
      Keep Healt: Hamsters can bathe in sand to keep their bodies clean and fresh.Bath sand after multiple washing, screening, drying, dust removal and other treatments.`,
      price: 13.99,
      image_url: `/assets/categories/hamsters/care/bath_sand.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
      name: `Cage Liners`,
      description: `PREVENT WASTE FROM SOILING TRAY — Cage liners for small animals prevent wet waste from soiling the tray
      WICKS AWAY MOISTURE — Super absorbent inner layer wicks away moisture and odor
      CONTROL ODORS IN YOUR HOME — Keeps your home and critter friends smelling so fresh and so clean`,
      price: 6.98,
      image_url: `/assets/categories/hamsters/care/liners.jpg`,
      category: categories[3]._id,
      subCategory: subCategories[3]._id,
      quantity: 100,
    },
    {
        name: `Kaytee Fiesta Parrot Food`,
        description: `Nutritionally fortified gourmet food for parrots
        Kaytee is a Veterinarian Recommended Brand
        Omega 3's to support brain and heart health
        Antioxidants for general health and immune support
        Enhances skin & feather health for vibrant, healthy plumage
        Contains fruits, nuts, veggies and textures for nutritional variety`,
        price: 63.99,
        image_url: `/assets/categories/parrots/food/fiesta.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[0]._id,
        quantity: 100,
      },
      {
        name: `Kaytee Supreme Parrot Food`,
        description: `Natural seeds and grains
        Kaytee is a Veterinarian Recommended Brand
        No artificial colors or flavors
        High quality ingredients
        Naturally preserved for ideal freshness`,
        price: 59.99,
        image_url: `/assets/categories/parrots/food/supreme.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[0]._id,
        quantity: 100,
      },
      {
        name: `Kaytee Exact Rainbow Large Parrot Food`,
        description: `Omega 3's to support Brain and Heart Health
        Kaytee is a Veterinarian Recommended Brand
        Enhances Skin & Feather health for vibrant, healthy plumage
        Prebiotics and probiotics to support digestive health
        100% consumable extruded nutrition with no shells or seed hulls
        Naturally Preserved for ideal freshness`,
        price: 42.90,
        image_url: `/assets/categories/parrots/food/exact.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[0]._id,
        quantity: 100,
      },
      {
        name: `Lafeber's Nutri-Berries Parrot Food`,
        description: `NUTRITIONALLY COMPLETE FORAGING PARROT FOOD: formulated by top avian veterinarians and avian nutritionists; offers twice the foraging of pellets and the same complete nutrition
        SUPERIOR SHAPE FOR FORAGING: the round Nutri-Berrie shape offers important beak play and exercise, which helps prevent bird boredom and feather picking
        NON-GMO AND HUMAN-GRADE INGREDIENTS: no artificial colors, flavors, or preservatives`,
        price: 32.99,
        image_url: `/assets/categories/parrots/food/berries.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[0]._id,
        quantity: 100,
      },
      {
        name: `Bird Street Bistro Parrot Food`,
        description: `Premium & Clean Recipe: Uses all-natural ingredients. 100% natural with no fillers, sugars, or sulfites. Includes freeze dried fruits, organic whole grains, air dried vegetables, savory & healthy spices.
        Heath Benefits: Provides excellent health benefits to parrots Pearled barley has hearty increments of niacin, thiamine, and potassium. A substance that inhibits cholesterol production in the blood has been traced to the nonfibrous portion of the grain. Hulled Millet is rich in phosphorus, iron, calcium, riboflavin, the nutritional value of cooked millet.`,
        price: 19.94,
        image_url: `/assets/categories/parrots/food/bird_street.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[0]._id,
        quantity: 100,
      },
      {
        name: ` Bird Travel Bag `,
        description: `The perfect bird carrier - lightweight, travel bag with bird perch and bird ball toy! This breathable, durable, lightweight travel bag is perfect for your bird! Easy to carry by handle or strap it onto your shoulders. Great for travel anywhere you go!
        Easy, set-up out of the box, ready to go on to the next adventure. This bird carrier has a double sided transparent window for your bird to enjoy the travel and for you to check on your bird on the go! With great ventilation, double zipper design, shoulder strap, handle and multiple perch placement for ease of use and safety for your bird. And, its super easy to clean.
        17'' inches long, 10'' inches wide, 12'' inches high.`,
        price: 33.99,
        image_url: `/assets/categories/parrots/accessories/travel_bag.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[1]._id,
        quantity: 100,
      },
      {
        name: `Bird Parrot Nest Hammock with Double Hooks`,
        description: `Suitable Animals: The bird parrot nest hammock measures is about 9.8" x 11" and the diameter of the opening is 6.7", which is ideal for medium to large birds such as African Grey Cockatoos, budgerigars, cockatiel or various young Macaws. Besides, most small pets such as hamsters, bunnies, hedgehogs, etc. can also use it as a hiding place.
        High-quanlity Material: Made of soft and comfortable plush, it is safe enough for your pets. You can safely place them inside for warmth in the winter, and it's also great for when they have babies, without hurting their paws.`,
        price: 16.99,
        image_url: `/assets/categories/parrots/accessories/hammock.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[1]._id,
        quantity: 100,
      },
      {
        name: `Adjustable Bird Cage`,
        description: `Package contains: you will get 1 pieces bird cage net cover in white color, which measures approx. 118 x 15 inch/ 300 x 37 cm in circumference and width, suitable for medium and small birdcages; Not recommend to be applied for large birdcages or extra large birdcages; Please confirm whether the size is suitable for your birdcage before buying
        Keep your house clean: the birdcage seed feather catcher can be applied for your bird cages, which can prevent the messy seeds and floating feathers from scattering on your house, keeping your house clean and tidy`,
        price: 19.99,
        image_url: `/assets/categories/parrots/accessories/cage.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[1]._id,
        quantity: 100,
      },
      {
        name: `Parrot Cage Snuggle Hut`,
        description: `Comfort Corner:Create a hidden corner where birds can hide. While your birds are warm, they can also reduce the pressure of birds, provide them with a sense of security, and enjoy the fun of playing hide and seek with their owners.`,
        price: 12.99,
        image_url: `/assets/categories/parrots/accessories/corner.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[1]._id,
        quantity: 100,
      },
       {
        name: `Large Size Parrot Nest House`,
        description: `Large size: The size of our parrot nest is 11 × 11 × 11 inches. With huge cube design and circular opening, this large hanging bird house is very suitable for most large birds such as Amazon Parrot, African Gray, Cockatoo, Macaws and so on.
        Well Made : The big bird snuggle hut is made of high-quality thick coral fleece and cotton, which is soft , comfortable, cold-proof and warm-keeping. Parrot bed will keep the shape after wash.`,
        price: 19.99,
        image_url: `/assets/categories/parrots/accessories/box.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[1]._id,
        quantity: 100,
      },
      {
        name: `Bagel Cascade Bird Toy`,
        description: `FOR LARGE BIRDS – The Bagel Cascade bird toy by Super Bird Creations is the perfect size for Amazons, African Greys, Eclectus, Small Cockatoos, Mini Macaws and similarly sized pet birds.
        DESIGN FEATURES – The Bagel Cascade bird toy is a favorite of many large birds. The durable plastic support core is packed with 24 fun to peel and chew compressed cardboard bagels this toy can easily be refilled with more bagels making it an economical and long lasting purchase.`,
        price: 16.62,
        image_url: `/assets/categories/parrots/toys/toy1.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[2]._id,
        quantity: 100,
      },
      {
        name: ` 10 Packs Bird Swing Chewing Toys`,
        description: `What you get :Package include 10 pieces difference type bird entertaining toys to meet your various needs for bird parrots,perfect size for parrotlets, parakeets, cockatiels, lovebirds and etc.
        Multi-function bird toy: they are designed to let your bird's feet have rest while also offer exercise opportunities for your birds to keep healthy and fit. Provides your little bird an ideal elevated place to swing, chew and climb.`,
        price: 18.99,
        image_url: `/assets/categories/parrots/toys/toy_set.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[2]._id,
        quantity: 100,
      },
      {
        name: `Parrot Cage Shredder Toy`,
        description: `Safe To Play: Made of wood & rattan which is safe to chew.
        Keep Active: Chewing and shredding is a natural behavior that is associated with foraging and nest building, which promotes your bird’s physical and emotional active as well giving you piece of mind.`,
        price: 12.99,
        image_url: `/assets/categories/parrots/toys/toy2.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[2]._id,
        quantity: 100,
      },
      {
        name: `Busy Bird | Spinner`,
        description: `ENRICHMENT: Designed to promote play, the rod spins smoothly, traveling along the threaded rod, clockwise and counterclockwise from one side to the other.
        DURABLE: Constructed of solid, anodized aluminum and stainless steel, our toys are safe, chemical-free, durable, and lightweight.`,
        price: 21.79,
        image_url: `/assets/categories/parrots/toys/spinner.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[2]._id,
        quantity: 100,
      },
      {
        name: `Bird Training Toys Coco Shell`,
        description: `The natural half-coconut shell material is safe and environmentally friendly. When you hide your food, use the half natural coconut shell decoration of the mini sneakers Ring Chew Toy to play the role of a foraging toy.
        Colorful things are liked by parrots, and safe and chewable toys are they will not refuse. You can put some of its favorite foods or pieces of paper in its shoes, and it will quickly become familiar with its new toy.`,
        price: 12.98,
        image_url: `/assets/categories/parrots/toys/coco.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[2]._id,
        quantity: 100,
      },
      {
        name: ` Bird Hemp Oil`,
        description: `PROMOTES RELAXATION by reducing destructive behavior such as feather plucking and bird screaming. Calms hyperactive birds and may help with trainability and temper tantrums. Hemp has natural calming effects and can deliver relaxation to birds struggling with inflammation and joint pain. Supports senior bird health.
        IMPROVES SKIN AND FEATHER HEALTH hemp oil strengthens and maintains the luster and shine of your bird’s feathers and skin. Can be administered orally or topically.`,
        price: 16.18,
        image_url: `/assets/categories/parrots/care/hemp.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[3]._id,
        quantity: 100,
      },
      {
        name: `Absolutely Clean Amazing Bird Cage Cleaner and Deodorizer`,
        description: `FAST-ACTING FORMULA: This natural based liquid formula is incredibly fast-acting and does not leave behind greasy, sticky, or filmy residue like other cleaners or soaps. Once this bird cage cleaning formula has been applied, your bird’s habitat can be wiped down, making it stain-free and smelling fresh in no time.
        FAST-ACTING FORMULA: This natural based liquid formula is incredibly fast-acting and does not leave behind greasy, sticky, or filmy residue like other cleaners or soaps. Once this bird cage cleaning formula has been applied, your bird’s habitat can be wiped down, making it stain-free and smelling fresh in no time.`,
        price: 22.99,
        image_url: `/assets/categories/parrots/care/cleaner.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[3]._id,
        quantity: 100,
      },
      {
        name: `Bird Poop Remover Sprayer`,
        description: `Removes droppings from all types of avian diets including seed fruit nuts meat vegetables nectar bugs grains formulated diet and greens
        Removes even the toughest stains from clothing upholstery and carpets
        The only product safe enough to use that does NOT cause dust when cleaning the cage
        Removes droppings from all types of avian diets including seed fruit nuts meat vegetables nectar bugs grains formulated diet and greens`,
        price: 15.59,
        image_url: `/assets/categories/parrots/care/poop.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[3]._id,
        quantity: 100,
      },
      {
        name: `Miracle Care Feather Feather Glo Bird Bath Spray`,
        description: `Helps to provide relief from feather picking and scratching and minimizes molting.
        Cleans, beautifies and invigorates feathers and skin.
        For use on all caged birds.`,
        price: 9.50,
        image_url: `/assets/categories/parrots/care/bath_spray.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[3]._id,
        quantity: 100,
      },
      {
        name: `Super Absorbent Cage Liners for Birds`,
        description: `CAGE LINERS FOR PET BIRDS: Place these liners underneath the grate of your parrot or parakeet cage for an easy way to keep your pet’s home clean
        ULTRA ABSORBENT: The soft, quilted top and sturdy inner layer absorb moisture, and the leak-proof bottom ensures your pet’s cage stays dry and comfortable
        REDUCES ODOR: Keeps your home, and your pet bird’s home, smelling fresh and clean.
        - 20" X 18"`,
        price: 5.99,
        image_url: `/assets/categories/parrots/care/liners.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[3]._id,
        quantity: 100,
      },
      {
        name: `Kaytee Treat Stick Honey Flavor`,
        description: `Tasty, Nutritious Treat
        Ideal For Adding Variety And Fun To Feeding
        Highest Quality Grains Used In Blending
        Great Tasting Flavor Your Bird Will Love
        Increases Stimulation To Combat Boredom.`,
        price: 7.49,
        image_url: `/assets/categories/parrots/treats/honey_sticks.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[4]._id,
        quantity: 100,
      },
      {
        name: `Gourmet Nutri-Berries Variety Sampler Bundles`,
        description: `Bundle includes four, 10 oz bags of LAFEBER’S Gourmet Nutri-Berries for Parrots in a factory sealed box: 1 Tropical Fruit, 1 El Paso, 1 Sunny Orchard and 1 Garden Veggie. **If your items do not come in a box showing the specifics of the case contents on the LAFEBER'S label as shown on the photos, you are not receiving quality LAFEBER’S products**
        All varieties are nutritionally complete foraging parrot foods formulated by top avian veterinarians and avian nutritionists.`,
        price: 37.96,
        image_url: `/assets/categories/parrots/treats/mix.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[4]._id,
        quantity: 100,
      },
      {
        name: `Oven Fresh Bites Natural Baked Treats`,
        description: `Oven Fresh Bites Natural Baked Treats, Bird Treat Parrot Cookies: Birds love the texture and taste of Oven Fresh Bites Natural Baked Treats, the only oven baked, all-natural avian diet treat
        The Taste, Texture and Flavor Birds Love: No added sugar, no artificial flavors or colors, and of course no chemical preservatives; Birds love Oven Fresh Bites Natural Baked Treats
        Better Ingredients: Oven Fresh Bites Natural Baked Treats are oven baked and use wholesome ingredients that offer a variety of nutrients and textures such as oatmeal and sunflower meal`,
        price: 10.99,
        image_url: `/assets/categories/parrots/treats/baked.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[4]._id,
        quantity: 100,
      },
      {
        name: `Kaytee Fiesta Healthy Toppings Papaya`,
        description: `Tasty, Nutritious Treat
        Ideal For Bonding And Playtime
        Increases Variety In Your Bird’S Diet For Appetite Stimulation And To Combat Boredom.
        Hand-Feed Your Bird With These Delicious Treats`,
        price: 5.99,
        image_url: `/assets/categories/parrots/treats/papaya.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[4]._id,
        quantity: 100,
      },
      {
        name: `Oven Fresh Bites Natural Oatmeal Cookies`,
        description: `Oven Fresh Bites Natural Baked Treats, Bird Treat Parrot Cookies: Birds love the texture and taste of Oven Fresh Bites Natural Baked Treats, the only oven baked, all-natural avian diet treat
        The Taste, Texture and Flavor Birds Love: No added sugar, no artificial flavors or colors, and of course no chemical preservatives; Birds love Oven Fresh Bites Natural Baked Treats`,
        price: 5.09,
        image_url: `/assets/categories/parrots/treats/oatmeal_cookie.jpg`,
        category: categories[4]._id,
        subCategory: subCategories[4]._id,
        quantity: 100,
      },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    first_name: "Raul",
    last_name: "Jimenez",
    email: "raul@example.com",
    password: "password",
    isAdmin: true,
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
    cart: [
    ],
    wishlist: [products[0]._id, products[1]._id],
  });

  await User.create({
    first_name: "Olga",
    last_name: "Brailovska",
    email: "olga@example.com",
    password: "password",
  });

  await User.create({
    first_name: "Demo",
    last_name: "Demo",
    email: "demo@example.com",
    password: "demo123",
  });

  console.log("users seeded");

  process.exit();
});
