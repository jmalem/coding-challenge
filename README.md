# coding-challenge

## Intro

The challenge was done by using BFS to get all the subordinates of a user
Why BFS and not DFS, BFS considers all neighbours first, thus will include all
the subordinates of a user and DFS is more suitable to see whether a path exists
between 2 nodes

## Solution

1. Get a list of all the subordinate roles by using BFS
2. Get users from the users list which roles are included in the subordinate role list

## Setup

1. Clone the repository
2. change directory to project directory `cd coding-challenge`
3. install dependencies `npm install`

## Running

Run the program with `npm start`

## Troubleshooting

1. delete `coding_challenge/node_modules`
2. reinstall dependencies `npm intall`
