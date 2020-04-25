import React from "react";
import {View, StyleSheet } from "react-native";
import {Surface} from 'react-native-paper';
import {Avatar, ListItem} from 'react-native-elements';
import TouchableScale from "react-native-touchable-scale";
import ChallengeContext from "../contexts/challenge";
import ChallengeListItemProgressCircle from "./ChallengeListItemProgressCircle";
import {useNavigation} from "@react-navigation/native"
import ChallengeListItemContent from "./ChallengeListItemContent";

/*
  Props:
  id,
  name,
  description,
  startDate,
  showStartDate,
  endDate,
  showEndDate,
  tags,
  showTags,
  logoUrl,
  type,
  showProgressBar,
  showProgressCircle
*/

export default function ChallengeListItem({children, ...props}) {
  const navigation = useNavigation();
  return (
    <ChallengeContext.Provider value={{
      showEndDate: true,
      showStartDate: true,
      showTags: true,
      ...props,
    }}>
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
          subtitle={<ChallengeListItemContent />}
          onPress={() => navigation.push("ChallengeDetails", props)}
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
