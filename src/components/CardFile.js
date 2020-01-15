import React from 'react';
import {Card, CardSubtitle, CardText} from 'reactstrap';


class CardFile extends React.Component {

   state = { cards: []};
 

   updateCards(data){
     console.log(data);
     this.setState({cards: data});
     
   }

   componentWillMount(){
     fetch('http://kevinrollins.com/learning/allcards')
       .then(response => response.json())
       .then(data => this.updateCards(data));
       
   }
  
  renderCard(card){
   return ( 
          <Card>
           <h1>{card["title"]}</h1>
           <CardText>{card["front"]}</CardText>
          </Card>
         );
  } 

  render(){
     
    if (this.state.cards.length > 0) {
         return (this.state.cards.map((card) =>  
            this.renderCard(card) ));
   } else { return <h1>duh</h1> }

  }
}

export default CardFile;


