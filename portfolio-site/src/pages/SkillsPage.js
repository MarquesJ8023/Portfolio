import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function SkillsPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>CSS, HTML, JavaScript, Python, React, Django, Node.js,</p> 
                <p>GitHub, MySQL, Linux, OOP, Unit Testing, Babel,</p> 
                <p>React Native, Auth0, Express.js, Sqlite3, MongoDB</p>
            </Content>
        </div>
        
    );
}

export default SkillsPage;
