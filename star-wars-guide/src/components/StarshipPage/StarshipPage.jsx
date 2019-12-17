import React, { Component } from 'react';
import { ListItems } from '../ListItems/ListItems';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Row } from '../../services/Row';
import { ErrorBoundary } from '../../services/ErrorBoundary';
import { Record } from '../ItemDetail/Record';

export class StarshipPage extends Component {

  state = {
    selectedItem: null,
    label: 'Starship'
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
                      {(item) => `${item.name} (Speed: ${item.max_atmosphering_speed})`}
                    </ListItems>     
                    
    const itemDetail = <ItemDetail
                          getData={this.props.dataById}
                          getImage={this.props.getImage}
                          itemId={this.state.selectedItem}
                          label={this.state.label}>                          

                    <Record field="name" label="Name" />
                    <Record field="model" label="Model" />
                    <Record field="manufacturer" label="Manufacturer" />
                    <Record field="cost_in_credits" label="Cost" />
                    <Record field="length" label="Length" />
                    <Record field="max_atmosphering_speed" label="Speed" />
                    <Record field="crew" label="Crew" />
                    <Record field="passengers" label="Passengers" />
                    <Record field="consumables" label="Consumables" />
                    <Record field="starship_class" label="Class" />
                    <Record field="cargo_capacity" label="Cargo Capacity" />
                </ItemDetail>
                          
                             

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetail} /> 
      </ErrorBoundary>      
    );
  }
}


