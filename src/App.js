import React from 'react';
import {Button, Container, Row, Col,Jumbotron,Card, CardSubtitle, CardText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import CardFile from './components/CardFile.js';


class App extends React.Component {

   state = { cards: []};
 

   updateCards(data){
     console.log(data);
     this.setState({cards: data});
     
   }
   

render(){
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="3"><p>Sidebar</p>
            <li>Reading Lists</li>
            <li>Marginal Improvements</li>
          </Col>
          <Col xs="6">
             <Jumbotron>
               <h1>learning, consulting, writing</h1>
             </Jumbotron>   
             <Card>Bottom Up Design
               <CardSubtitle>One useful piece at a time</CardSubtitle>
               <CardText>
                By starting with a simple skeleton and adding pieces as they seem useful and relevant, it is possible to come up with a design without having to think of the exact right plan at the very beginning.
               </CardText>

             </Card>
             <CardFile />
           </Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default App;
