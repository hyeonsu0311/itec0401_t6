CREATE DATABASE IF NOT EXISTS GroupedTravelData;

DROP TABLE IF EXISTS GroupedTravelers;

USE GroupedTravelData;

CREATE TABLE IF NOT EXISTS GroupedTravelers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country_of_residence VARCHAR(255),
    country_to_visit VARCHAR(255),
    age_group VARCHAR(255),
    gender VARCHAR(255),
    travel_preference VARCHAR(255),
    count INT
);




select * from GroupedTravelers;
