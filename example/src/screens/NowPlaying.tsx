import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CarPlay, NowPlayingTemplate, NowPlayingTemplateConfig } from 'react-native-carplay';

export function NowPlaying() {
  useEffect(() => {
    CarPlay.enableNowPlaying();
    const config: NowPlayingTemplateConfig = {
      albumArtistButton: true,
      upNextTitle: 'Título siguiente',
      upNextButton: true,
    }
    const template = new NowPlayingTemplate(config);
    CarPlay.pushNowPlaying();
    // CarPlay.pushTemplate(template);
    // CarPlay.presentTemplate(template);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Now Playing</Text>
    </View>
  );
}

NowPlaying.navigationOptions = {
  headerTitle: 'Now Playing Template',
};
