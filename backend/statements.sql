CREATE TABLE all_games (
    id TEXT PRIMARY KEY,
    color TEXT NOT NULL,
    variant TEXT NOT NULL,
    status TEXT NOT NULL,
    winner INT NOT NULL,
    moves TEXT NOT NULL,
    opening TEXT,
    finishTime TEXT NOT NULL

)
DROP TABLE opening_winrate
CREATE TABLE opening_winrate (
    opening TEXT PRIMARY KEY NOT NULL,
    color TEXT NOT NULL,
    games_count INT NOT NULL,
    winrate REAL NOT NULL
)




db.execute(
	'ALTER TABLE all_games RENAME COLUMN result TO winner'
)


ALTER TABLE all_games DROP COLUMN column_name
