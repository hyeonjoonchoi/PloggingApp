import React from 'react'
import {View,Image,Dimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardNewsImages from '../images/CardNewsImage';



const MyCarousel = () => {
  const [activeSlide, setActiveSlide]= useState(0);
  const entries = [CardNewsImages[0], CardNewsImages[1], CardNewsImages[2], CardNewsImages[3]];

  const renderItem = ({ item, index }) => {
    return <Image source={item} style={{ width: 300, height: 300, alignSelf: 'center' }} />;
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderColor: 'black',
        }}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        animatedDuration={5}
        dotContainerStyle={{}}
      />
    );
  };

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        windowSize={21}
        sliderWidth={width}
        sliderHeight={300}
        itemHeight={300}
        itemWidth={250}
        autoplay={true}
        loopClonesPerSide={3}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        activeSlideAlignment='center'
        style={{ margin: 0, padding: 0 }}
      />
      {pagination()}
    </View>
  );
};

export default MyCarousel