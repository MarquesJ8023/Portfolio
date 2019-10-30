import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>I am a full-stack web developer with a particular interest in front-end development. My specialties include Javascript, React, Node, and Express. Also, React Native, and a bit of Python and Django.</p>

            <p>After years spent in the customer service field interacting with a plethora of diverse groups, I’ve developed strong creative problem-solving, organizational, and communication skills. I am interested in combining those skills with web technologies to help build engaging and cutting-edge projects.</p>

            <p>If I'm not programming, I'm likely reading, thinking about how to make city and transportation systems more sustainable, or exploring and learning new things.</p>
            </Content>
        </div>
    );
}

export default AboutPage;
