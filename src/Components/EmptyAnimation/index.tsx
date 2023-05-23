import React from 'react';
import Lottie from 'react-lottie';
import Empty from '../../assets/animations/empty.json';

export const EmptyAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Empty
    }

    return <Lottie options={defaultOptions} width={450} height={450} />
}