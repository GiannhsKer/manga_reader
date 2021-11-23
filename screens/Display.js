import React, {useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, Image, Modal } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import ImageViewer from 'react-native-image-zoom-viewer';

const Display = ({route}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    const fetchData = async (url) => {
      const response = await fetch(url);
      return response.json();
    };
  
    const getScans = () => {
      try {
        fetchData(`https://mangareader3.herokuapp.com/${route.params.title}/${route.params.chapter}`).then((data) => {
          setData(data);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    };
  
  
    useEffect(() => {
      getScans();
    }, []);

    return (
		<GallerySwiper
			images={data}
			sensitiveScroll={true}
			initialNumToRender={20}
		/>
	);
}

// GallerySwiper
	// <GallerySwiper
	// 	images={mangass}
	// 	sensitiveScroll={true}
	// 	initialNumToRender={20}
	// />

// Image Viewer

//     <Modal>
//         <ImageViewer 
//           imageUrls={mangass}
//         />
//     </Modal>

// ScrollView without zoom

//       <ScrollView style={styles.container}>
//         {isLoading ? <ActivityIndicator/> : (
//           data.map(page=>(
// 				<Image key = {uuid.v4()} style={styles.page} source={{uri: page}}></Image>
//           ))
//         )}
//     	</ScrollView>

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    page:{
        marginTop: 40,
        height:500,
        resizeMode:'contain',
    }
});

export default Display;