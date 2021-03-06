import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ConnectOurKids from '../assets/images/ConnectOurKids.jpg';
import Guidr from '../assets/images/Guidr.png';
import Code1 from '../assets/images/Code1.png';

import Card from '../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Connect Our Kids-Mobile App",
                    subTitle: "Built with React Native",
                    imgSrc: ConnectOurKids,
                    link: "",
                    selected: false
                },

                {
                    id: 1,
                    title: "Guidr",
                    subTitle: "Built with React",
                    imgSrc: Guidr,
                    link: "",
                    selected: false
                },

                {
                    id: 2,
                    title: "Party-Planner",
                    subTitle: "Built with Node",
                    imgSrc: Code1,
                    link: "",
                    selected: false
                }
            ]
            
        };
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeItems =(items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
