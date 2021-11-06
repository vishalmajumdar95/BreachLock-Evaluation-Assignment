# BreachLock-Evaluation-Assignment
In this project, I made some endpoints for Park a Car and create Unpark the Car and also Get the Car/Slot.


## Requirements

## Installation process and Execution

First and foremost, If you'are using Linux-based-OS, open your terminal and install the latest version of NodeJS and npm. You do also need to install Mongodb database onto your system. by writing the following commands.
This will install NodeJS version-14 and npm version-6 on your system.

       sudo apt-get update && sudo apt-get install curl
       sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl
       curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
       sudo apt install nodejs
       
Next, you've to install Mongodb-database into your system. For this, write these following commands on your terminal.

       sudo apt-get update
       sudo apt-get install -y mongodb-org

You can also check the version of NodeJS and npm by writing, `node -v` and `npm -v` on the terminal respectively.
Next, you need to make a clone of this repository and get into the repository on your terminal. Now, you need to install the required dependencies from your `package.json` file. For this, you've to write `sudo npm install`.


Next, navigate to the folder where, `server.js`file is located. You can start the local server by writing`node server.js`on the terminal.
You can always kill your running port by writing,`killall -9 node`on the terminal.
Now, you need to install postman, that helps you to develop APIs and getting responses from it, by writing the following commands on your terminal.

       sudo apt-get install snap
       snap install postman
       
Happy coding ):
