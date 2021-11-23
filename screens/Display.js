import React, {useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Modal } from 'react-native';
// import uuid from 'react-native-uuid';
// import GallerySwiper from "react-native-gallery-swiper";
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
      <ScrollView style={styles.container}>
        <Modal>
            <ImageViewer 
              imageUrls={data}
            />
        </Modal>
    </ScrollView>
	);
}

// GallerySwiper

	// <GallerySwiper
	// 	images={data}
	// 	sensitiveScroll={true}
	// 	initialNumToRender={20}
	// />

// Image Viewer

//     <Modal>
//         <ImageViewer 
//           imageUrls={data}
//         />
//     </Modal>

// ScrollView without zoom

// <ScrollView style={styles.container}>
// {isLoading ? <ActivityIndicator/> : (
//   Object.keys(data).map(page=>(
// 		<Image key = {uuid.v4()} style={styles.page} source={{uri : data[page]['url']}} ></Image>
// 	))
// )}
// </ScrollView> 

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