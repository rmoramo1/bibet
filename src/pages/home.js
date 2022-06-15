import React from 'react';
import { Slider } from '../components/slider';
import { Scroll_Butons } from '../components/scroll_butons';
import { Tabs_Sports } from '../components/tabs_sports.js';
export const Home = () => {
    return (
        <div>
            <Slider />
            <div className="row g-10">
                <div className="col-lg-1">
                    <Scroll_Butons/>
                </div>
                <div className="col-lg-11 overflow-hidden">
                    <Tabs_Sports />
                </div>
            </div>
        </div>
    )
}
