CREATE DATABASE IF NOT EXISTS artisan_gig;
USE artisan_gig;

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    othername VARCHAR(50),
    sex ENUM ('Male', 'Female', "I'll rather not say") NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM ('Artisan', 'Client') NOT NULL,
    address VARCHAR(300) NOT NULL
);

CREATE INDEX idx_user_id_user_user_id ON user ( user_id );

CREATE TABLE IF NOT EXISTS artwork (
    artwork_id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(36) NOT NULL,
    category VARCHAR(50) NOT NULL,
    work_title VARCHAR(20) NOT NULL,
    description VARCHAR(200) NOT NULL,
    file VARCHAR(800) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY ( artwork_id ),
    FOREIGN KEY ( user_id ) REFERENCES user ( user_id )
);

CREATE TABLE IF NOT EXISTS feedback (
    feedback_id INT NOT NULL AUTO_INCREMENT,
    artwork_id INT NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    rating ENUM ("1", "2", "3", "4", "5", "6", "7", "8", "9", "10") NOT NULL,
    comment VARCHAR(800),
    submited_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,

    PRIMARY KEY ( feedback_id ),
    FOREIGN KEY ( artwork_id ) REFERENCES artwork ( artwork_id ),
    FOREIGN KEY ( user_id ) REFERENCES user ( user_id )  
);
