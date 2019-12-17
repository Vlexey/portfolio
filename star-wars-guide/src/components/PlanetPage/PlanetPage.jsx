import React, { Component } from 'react';
import { ListItems } from '../ListItems/ListItems';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Row } from '../../services/Row';
import { ErrorBoundary } from '../../services/ErrorBoundary';
import { Record } from '../ItemDetail/Record';

export class PlanetPage extends Component {

  state = {
    selectedItem: null,
    label: 'Planet'
  }
  
  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id
    })
  }
  render() {

    const itemList = <ListItems
                        label={this.state.label}
                        onItemSelected={this.onSelectedItem}
                        getData={this.props.allData}  
                      >
                      {(item) => <React.Fragment>
                        <b>{item.name}</b> <span>{`(Diameter: ${item.diameter} km)`}</span> 
                                 </React.Fragment>
                      }
                    </ListItems>     
                    
    const itemDetail = <ItemDetail
                          getData={this.props.dataById}
                          getImage={this.props.getImage}
                          itemId={this.state.selectedItem}
                          label={this.state.label}>
                          
                          <Record field="name" label="Name" />
                          <Record field="climate" label="Climate" />
                          <Record field="created" label="Created" />
                          <Record field="diameter" label="Diameter" />
                          <Record field="gravity" label="Gravity" />
                          <Record field="orbital_period" label="Orbital Period" />
                          <Record field="population" label="Population" />
              </ItemDetail>     

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetail} /> 
      </ErrorBoundary>      
    );
  }
}
