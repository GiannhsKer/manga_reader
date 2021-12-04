import React, {useState, useEffect} from 'react';
import GallerySwiper from "react-native-gallery-swiper";

const Display = ({route}) => {

    const [data, setData] = useState();
  
    const fetchData = async (url) => {
      const response = await fetch(url);
      return response.json();
    };
  
    const getScans = () => {
      try {
        fetchData(`https://mangareader3.herokuapp.com/${route.params.title}/${route.params.href}`).then((data) => {			
          setData(data);
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

export default Display;