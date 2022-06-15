import { useEffect, useState } from 'react';

import { AxiosConfig } from '../../common/http';

export const useLike = (
    userData: any,
    _id: string,
    liked: string[],
    rating: number,
    dispatch: any,
) => {
    const [like, setLike] = useState(rating);
    const [isLiked, setIsLiked] = useState(false);
    const checkLiked = async () => {
        const axios = AxiosConfig(dispatch);
        if (!isLiked) {
            setLike(like + 1);
            setIsLiked(true);
        } else {
            setIsLiked(false);
            setLike(like - 1);
        }
        await axios.post('/like', { _id, email: userData.email });
    };
    useEffect(() => {
        setIsLiked(liked.includes(userData.email));
    }, []);

    return { checkLiked, like, isLiked };
};
