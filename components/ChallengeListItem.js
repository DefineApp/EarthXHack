import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Chip } from 'react-native-paper';
import {Avatar, ListItem} from 'react-native-elements';
import dateFormat from 'dateformat';
import TouchableScale from "react-native-touchable-scale";
import ChallengeGradients from "../constants/ChallengeColors";
import ChallengeContext from "../contexts/challenge";
import ChallengeListItemProgressCircle from "./ChallengeListItemProgressCircle";
import ChallengeListItemProgressBar from "./ChallengeListItemProgressBar";

function ChallengesSearchListItemContent() {
  const {description, startDate, endDate, tags, showProgressBar} = useContext(ChallengeContext);
  const formattedStartDate = dateFormat(new Date(startDate), "mmmm dS, yyyy," +
    " h:MM TT");
  const formattedEndDate = dateFormat(new Date(endDate), "mmmm dS, yyyy, h:MM" +
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
      {showProgressBar ?
        <ChallengeListItemProgressBar /> : null
      }
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

  return (
    <ChallengeContext.Provider value={{...props}}>
      <ListItem
        Component={TouchableScale}
        linearGradientProps={{
          colors: [
            ChallengeGradients[props.type].primary,
            ChallengeGradients[props.type].secondary
          ],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        friction={90}
        tension={100}
        activeScale={0.95}
        containerStyle={styles.container}
        title={props.name}
        titleStyle={{fontWeight: 'bold'}}
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
        chevron={true}
      />
    </ChallengeContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10
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
