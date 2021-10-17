import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import HelmetCustom from '../../components/helmetCustom/HelmetCustom';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import { getSubscribedChannels } from '../../redux/actions/videos.action';
import './_subscriptionsScreen.scss';

const SubscriptionsScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscribedChannels());
    }, [dispatch]);

    const { loading, videos }= useSelector(state => state.subscriptionsChannel);

    return (
        <Container fluid >
            
            <HelmetCustom title={"Subscriptions"} description={"Subscriptions"} />

            {
                !loading ? 
                    videos?.map(video=><VideoHorizontal video={video} key={video.id} subScreen />)
                :
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='160px' count={20} />
                    </SkeletonTheme>
            }
        </Container>
    )
};

export default SubscriptionsScreen;
