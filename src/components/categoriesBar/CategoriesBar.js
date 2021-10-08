import React from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import "./_categoriesBar.scss";

const keywords = [
    'All',
    'JavaScript',
    'Node JS',
    'React js',
    'Redux',
    'YouTube Data API',
    'Firebase',
    'Web Development',
    'YouTube',
    'Google',
    'Formula 1',
    'EDM',
    'Music'
];


const CategoriesBar = () => {
    
    const [activeElement, setActiveElement] = React.useState('All');

    const dispatch = useDispatch();

    const handleClick = (value) => {
        setActiveElement(value);
        if (value === 'All') getPopularVideos();
        else dispatch(getVideosByCategory(value));
    }

    return (
        <div className="categoriesBar">

            {keywords.map((value, i) => (
                <span key={i} onClick={()=>handleClick(value)} className={activeElement===value?'active':''}>
                    {value}
                </span>
            ))}

        </div>
    )
};

export default CategoriesBar;
