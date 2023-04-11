import React from 'react';
import Navbar from './components/navbar';
import Content from './components/content';
import Card from './components/card';
import Data from './data';

export default function App(){
    const data = Data.map(item =>
        <Card 
        key = {item.id}
        {...item}
        />
    )
    return (
        <div className="app">
        <Navbar />,
        <Content />,
        <section className="cards-list">
                {data}
            </section>
        </div>
    )
}