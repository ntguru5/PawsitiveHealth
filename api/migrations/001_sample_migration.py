steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL NOT NULL,
            user_id UUID PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE pet (
            id SERIAL NOT NULL,
            pet_id UUID PRIMARY KEY NOT NULL,
            pet_name VARCHAR(100) NOT NULL,
            breed VARCHAR(100) NOT NULL,
            gender VARCHAR(100) NOT NULL,
            age INTEGER NOT NULL,
            weight INTEGER NOT NULL,
            user_id UUID NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (user_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE pet;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE poop (
            id SERIAL PRIMARY KEY NOT NULL,
            poop_id UUID NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            consistency VARCHAR(100) NOT NULL,
            pet_id UUID NOT NULL,
            FOREIGN KEY (pet_id) REFERENCES pet (pet_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE poop;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE sleep (
            id SERIAL PRIMARY KEY NOT NULL,
            sleep_id UUID NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            duration VARCHAR(100) NOT NULL,
            pet_id UUID NOT NULL,
            FOREIGN KEY (pet_id) REFERENCES pet (pet_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE sleep;
        """,
    ],
]
