# Evac Assistance App - Evacced or Evact? working title? Evaxapp or EvacPrapp or Evac Assist
## What is this 
An Evacuation Assistance App to help individuals, families and friends reduce the stress and have a plan to follow when the need to evacuate their home arises.

## The Idea 
Things The app will do
- Store an Evac Grab list
    - list of items to grab ordered by importance and evacuation status
    - Have prep steps for each evacuation zone level 1-3

- Have a Group of users that individual users can join  
   - Use Location Sharing displayed on the map for user group
       - have traffic data loaded from google maps 
       - so users can find others in the group to meetup if evac called when users are separate
       - Have meeting places in each of the 4 cardinal directions so depending on traffic and where evac 
       emergency is there is a designated place to meet and gather user group
    - S.O.S. Beacon button to notify user group that individual user is in immediate danger/ needs assistance
    - Have 2way radio functionality (not sure if this is possible it is a SUPER STRECH GOAL for the timeframe)
        - operates like CB radio giving users ability to communicate if cell towers go down
        - can send recorded messages 
        - can talk real-time like CB radio
        
- Has Evac Prep steps for things to do as an initial phase of preparation
    - take photos of important items in house
    - take photos of important documents 
        - (deed for the house, licenses, passports, birth certs. etc)
    - how to build a go-bag of necessary items 
    - safe deposit box or safe recommendation?

- access to local scanner Radio by county and city
## Why I am building this
- First being evacuated from your home is wild emotional ride, it is challenging, and happens so fast.

- This started out as an idea for my capstone project for General Assembly, I really wanted to build something that would be useful for the public. I also wanted to have something that I could continue to work on after the course and keep improving and building it. 

- I got my wish, from my wireframe mockups and designing I became focused on how to have an app that could be helpful before, during, and after the evacuation process. I had a huge case of SCOPE CREEP. However, I have something to work on for a while and once I achieve the full functionality, of all features which is waiting for approval from specific data structures,(access to local scanner streaming from Broadcastify being a huge blocker currently)

- At the core this app is designed to have a prepared plan if you are forced to evacuate your home. This consists of deciding what to take, and where to go when it happens. Trying to do this in the heat of the moment, makes it possible to forget something important.

### MVP Goals
- user Auth flow
- Grab Item and Meeting Place full CRUD
#### Stretch Goals
- User Groups for familys
- Location Share tracking traffic, directions to meeting places
- Messaging for User Group, SOS function to notify User Group,
- Local Scanner Radio access to Police, Fire, Federal dispatch radio channels
## Technologies
- React Native, Express, MERN Stack

##  CapStone Timeline 
- March 7th
    - Submit Proposal For Approval
    - Have wireframes, and basic readme complete for proposal
    - work on React native course
- March 8th 
    - build initial framework for front end
        - create all screens and boilerplates 
        - create all reusable components boilerplate
    - decide technology for backend django or express?
        - Express first because I am more familiar it
        - build a django version to challenge myself after capstone is turned in for personal project
    - finish React Native tutorial
- March 9th
    - Build Express backend
    - complete timeline and pseudocode   
   
- March 10th 
    - create navbar using one of the 3 navigations( Drawer Naviagator may be best option)
        - connect navbar to all screens
- March 11th 
    - fix errors
    - build forms 
    -  make context crud functions for items and places 
- March 12th
    - screen building
- March 13th
     - screen and context connection
- March 14th
    - MVP achieve
- March 15th
    - styling and bug smashing
- March 16th
    - Presentation Day! 

## WireFrames
### Evac App full sketch 
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/evac%20app.png)
### main screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Main%20Screen.png)
### about screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/About%20Screen.png)
### Create Evac Grab List Screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Create%20Evac%20Grab%20List%20%20Screen.png)
### Document Backup Screen (scrapped until more time to ensure )
use description for how to create a backup 
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Document%20Backup%20Screen.png)
### Group Message Screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Group%20Message%20Screen.png)
### How to Prep and Use App Screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/How%20to%20Prep%20Screen.png)
### Local Scanner Radio Screen
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Local%20Scanner%20Screen.png)
### Location Share Screen 
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Location%20Share%20Screen.png)
### Meeting Place Screen 
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/Meeting%20Place%20Screen.png)
### Navigation Layout
![alt text](https://github.com/rybaier/evac-assistance-app/blob/main/wireframes/navigation-layout-screenshot.png)
### Simulator Progress Screen Shots
![alt text](https://github.com/rybaier/PrEvac/blob/main/wireframes/ScreenShotsFromSimulator.png)


