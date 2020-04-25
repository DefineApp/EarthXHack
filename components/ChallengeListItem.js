import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import {Chip, Surface} from 'react-native-paper';
import {Avatar, ListItem} from 'react-native-elements';
import dateFormat from 'dateformat';
import TouchableScale from "react-native-touchable-scale";
import ChallengeGradients from "../constants/ChallengeColors";
import ChallengeContext from "../contexts/challenge";
import ChallengeListItemProgressCircle from "./ChallengeListItemProgressCircle";
import ChallengeListItemProgressBar from "./ChallengeListItemProgressBar";
import {useNavigation} from "@react-navigation/native"

function ChallengesSearchListItemContent() {
  const {description, startDate, endDate, tags, showProgressBar} = useContext(ChallengeContext);
  const formattedStartDate = dateFormat(startDate, "mmmm dS, yyyy," +
    " h:MM TT");
  const formattedEndDate = dateFormat(endDate, "mmmm dS, yyyy, h:MM" +
    " TT");

  return (
    <View style={{flex: 1}}>
      {description ? <Text>{description}</Text> : null}
      {startDate || endDate ?
        <View style={{marginVertical: 5}}>
          {startDate ?
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Starts: </Text>
              <Text>{formattedStartDate}</Text>
            </View> : null
          }
          {endDate ?
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Ends: </Text>
              <Text>{formattedEndDate}</Text>
            </View> : null
          }
        </View> : null
      }
      {tags ?
        <View style={styles.chipContainer}>
          {tags.map((tag, index) =>
            <Chip
              key={index}
              style={styles.chip}
              mode='outlined'
            >{tag}</Chip>)}
        </View> : null
      }
      {showProgressBar ? <ChallengeListItemProgressBar /> : null }
    </View>
  );
}

/*
  Props:
  name,
  description,
  startDate,
  endDate,
  tags,
  logoUrl,
  type,
  showProgressBar,
  showProgressCircle
*/

export default function ChallengesSearchListItem(props) {
  const navigation = useNavigation();
  return (
    <ChallengeContext.Provider value={{...props}}>
      <Surface style={styles.surface}>
        <ListItem
          Component={TouchableScale}
          friction={90}
          tension={100}
          activeScale={0.95}
          title={props.name}
          titleStyle={{fontWeight: 'bold'}}
          containerStyle={styles.container}
          leftElement={
            props.showProgressCircle ?
              <ChallengeListItemProgressCircle /> :
              <View style={{height: '100%'}}>
                <Avatar
                  source={props.logoUrl && {uri: props.logoUrl}}
                  title={props.name[0]}
                  rounded
                />
              </View>
          }
          subtitle={<ChallengesSearchListItemContent />}
          onPress={() => navigation.push("ChallengeDetails", {...props})}
        />
      </Surface>
    </ChallengeContext.Provider>
  );
}


const styles = StyleSheet.create({
  surface: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10
  },
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
  },
  chip: {
    marginRight: 5,
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  chipContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
