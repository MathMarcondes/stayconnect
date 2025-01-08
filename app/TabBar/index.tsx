import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Page1 from '../Screens/Page';
import Page2 from '../Screens/Page2';

const renderScene = SceneMap({
  first: Page1,
  second: Page2,
});

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' }, 
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}