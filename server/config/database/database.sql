REATE TABLE users (
    user_id SERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_google_user BOOLEAN NOT NULL,
    is_admin BOOLEAN NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE users (
    user_id INTEGER PRIMARY KEY DEFAULT nextval('user_id_seq') NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(80) DEFAULT 'defaultPW' NOT NULL,
    isGoogleUser BOOLEAN NOT NULL,
    isAdmin BOOLEAN NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- INSERT INTO users (name, email, password, isGoogleUser, isAdmin)
-- VALUES ('Sam Altman', 'sam@mail.com', '12345678', false, false),
-- ('Elon Musk', 'elon@mail.com', '12345678', false, false);