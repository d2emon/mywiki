# AGT

Движок для интерактивной литературы

## GAME

* D$$ - TEXT
* DA1 - GAME
* DA2 - ROOM
* DA3 - ITEM
* DA4 - CREATURE
* DA5 - COMMAND

----

* CMD - COMMAND
* DAT - GAME DATA
* INS - INSTRUCTIONS
* MSG - MESSAGES
* TTL - TITLE

----

* MAX_SCORE
* START_ROOM
* TREASURE_ROOM
* NUM
* SHORT
* NORTH
* EAST
* SOUTH
* WEST
* ENTER
* DESCR

### Data

* id
* game_id
* room_id
* name
* text
* help
* special_text
* title
* ins
* intro

## ROOM

* ROOM _n_
* name

----

* dir _n_
* SPECIAL _n_
* KEY _n_
* LIGHT _n_
* POINTS _n_
* LOCKED_DOOR
* PLAYER_DEAD
* GAME_END
* GAME_WIN
* ROOM_SYNONIMES _v_ _v_

----

* END_ROOM

* ROOM_DESCR _n_
* _descr_
* END_ROOM_DESCR

* HELP _n_
* _help_
* END_HELP_DESCR

### Data

* name
* replaced
* replacing
* path [...]
* special
* has_seen
* key
* locked_door
* nouns_inside
* points
* light
* game_emd
* game_win
* player_dead

## ITEM

* name
* short
* location

### Data

* name
* short
* adj
* sing/plural
* position
* somethingnear
* nearnumber
* has_synonimes
* synonimes
* location
* weight
* size
* key
* push
* pull
* turn
* play
* read
* on
* closeable
* open
* lockable
* locked
* eat
* wear
* drink
* poison
* move
* light
* shoot
* shots
* points
* num_inside
* win

## CREATURE

* name
* short
* location

### Data

* name
* short
* adj
* has_synonimes
* synonimes
* groupmember
* location
* weapon
* hostile
* points
* num_inside
* counter
* threshhold
* timetresh
* timecounter
* gender

## COMMAND

* COMMAND
* TEXT

### Data

* Verb
* VCMD
* NCMD
* OCMD
* data[...]

## INSTRUCTIONS

* TEXT

## MESSAGES

* NUM
* TEXT

## TITLE

* TEXT
