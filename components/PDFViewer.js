import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ( ) => {
  const { uri } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Pdf source={{ uri, cache: true }} />
    </View>
  );
};

export default PdfViewer; 