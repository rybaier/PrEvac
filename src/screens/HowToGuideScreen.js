import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BasicStyledSpace from "../components/BasicStyleSpace";
const HowToGuideScreen = () => {
  return (
    <ScrollView style={ styles.container }>
      <Text style={{ fontSize: 48, alignSelf: 'center', color: '#ffffff'}}> Evac Prep Walkthrough </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        This app is here to help you in the unfortunate
        moments when you are forced to evacuate your home. This guide will help
        you take some pre emptive steps and prepare you for such an event.
        That way when the need to evacuate arises, the thoughts about what you
        want to save and where you will go, will be taken care of. All you will
        have to do is refer to the lists you make here and execute the plan!
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        #1. Please take a moment to think about what you truly value in your
        home and need on a daily basis such as medicine. 
        To do this you must first ask yourself, what items do I
        have that if permanently lost would devesate me? These are the things that 
        you can not live with out. These are your priority number 1 items. At most You
        will have 10. This is what you will grab if you only have 5 minutes to
        evacuate. Add these to your Grab Items List
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        #2. Find the important documents you have. These should
        include indentification (such as Id or Passport), insurance cards, deeds
        to the house, etc. Take a photo of each of these documents and save them
        to a flash drive or save the copies somewhere secure! Add this Document
        Backup to your Grab Item List and Give it a priority of 1.
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        #3. Take Photos of the entire interior of your house. From each corner of the 
        room to show what is there. Save them to a flash drive or save the copies 
        somewhere secure! Add this Image Backup to your Document Backup in step #2.
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>- Almost There! - </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        #4. Decide on 4 places that you can go in the event of an evacuation.
        One For each general direction North, South, East, and West. Add each Place 
        to the Meeting Places section.
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        #5. Now you can start to think about items that are priority 2 and
        below. Add no more than 10 items to each level of priority.
        Think about adding things like clothes, food, and sleeping gear.
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text}>
        
        Once these steps have been completed, you are at least a little bit more
        prepared and hopefully you never need it. If you do remember you've made
        the list and plan, just execute quickly and stay safe!
      </Text>
      <BasicStyledSpace />
      <Text style={ styles.text} >
        All Done!
        Remember You will not be able to take everything. Prioritze what matters
        most, and take only those.
      </Text>
      <BasicStyledSpace />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        
    },
    text:{
        fontSize: 18,
        margin: 10,
        
    }
});

export default HowToGuideScreen;
