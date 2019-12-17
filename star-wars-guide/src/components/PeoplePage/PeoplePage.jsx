import React, { Component } from 'react';
import { ListItems } from '../ListItems/ListItems';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Row } from '../../services/Row';
import { ErrorBoundary } from '../../services/ErrorBoundary';
import { Record } from '../ItemDetail/Record';

export class PeoplePage extends Component {

  state = {
    selectedItem: null,
    label: 'Person'
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
                      {(item) => `${item.name} (Sex: ${item.gender}, Birth: ${item.birth_year})` }
                    </ListItems>     
                    
    const itemDetail = <ItemDetail
                          getData={this.props.dataById}
                          getImage={this.props.getImage}
                          itemId={this.state.selectedItem}
                          label={this.state.label}>

                          <Record field="name" label="Name" />
                          <Record field="gender" label="Gender" />
                          <Record field="height" label="Height" />
                          <Record field="birth_year" label="Birth Year" />
                          <Record field="eye_color" label="Eye Color" />
                          <Record field="hair_color" label="Hair Color" />
                          <Record field="skin_color" label="Skin Color" />
                </ItemDetail>
                        

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetail} /> 
      </ErrorBoundary>      
    );
  }
}

