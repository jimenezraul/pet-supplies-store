// create user model

// user schema 

    // first_name
        // required
        // trim

    // last_name
        // required
        // trim

    // image_url
        // trim

    // email
        // required
        // trim
        // unique

    // password
        // required
        // min

    // isAdmin
        // default false

    // orders
        // array of order schema

    // cart
        // array of cart schema
        
    // wishlist
        // array of wishlist schema

        
// set up pre-save middleware to create password

// compare the incoming password with the hashed password