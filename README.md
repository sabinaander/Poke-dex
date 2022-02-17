A simple database that use a pokemon API to show a pokemon-dex, built with Parse Platform and React

# To run:

## needed:
Node.js


## First time:
- install mongodb: $ npm install -g mongodb-runner
- start mongodb: $ mongodb-runner start (on some machines this must be run as admin in a cmd prompt)
- Install all npm packages : $ npm run build 
- Install parse dashboard : $ npm i -g parse-dashboard
- To make parse-server run, run : $ npm run start


// run in root
## On start: 

- $ npm run dashboard 
( to see backend and database, go to: http://localhost:4040/)

- $ npm run start

- $ npm run watch
(redraw/build automatically everything in client src on save)
http://localhost:8800/


## additional notes: 
To make sure everything works correctly when adding a pokemon to the database, it is needed in the dashboard:
Add the class Pokemon under "Create a class",
- type of class : custom
- name : pokemon

- click "Create class & add columns"

### col 1: 
- - type: string:
- - call it: name
- - base value: empty
- - requiered: yes

- click "add column and continue.

### col 2:
- - type: number
- - call it: dexID
- - base value: empty
- - required: yes

Now it is possible to add pokemon to "my favorites" out on the application, you can see these in the database-dashboard as they're added.



author: Sabina Andersson

date: 2022-02-16
