import React, { useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from '../../components/skeletons/SkeletonVideo';
import HelmetCustom from '../../components/helmetCustom/HelmetCustom';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos);

    const fetchData = () => {
        if (activeCategory === 'All') dispatch(getPopularVideos());
        else dispatch(getVideosByCategory(activeCategory));
    }

    return (
        <Container>

            <HelmetCustom />

            <CategoriesBar />

                <InfiniteScroll className="row" 
                    dataLength = {videos.length} 
                    next = {fetchData} 
                    hasMore = {true} 
                    Loader = { <div className='spinner-border text-danger d-block mx-auto'></div> } 
                >
                    {
                        !loading ?
                        videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id} />
                            </Col>
                        ))
                        : [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                               <SkeletonVideo />
                            </Col>
                         ))
                    }
                </InfiniteScroll>

            {/* <Row>
                {
                    videos.map((video) => (
                        <Col lg={3} md={4}>
                            <Video video={video} key={video.id} />
                        </Col>
                    ))
                }
            </Row> */}

        </Container>
    )
};

export default HomeScreen;
