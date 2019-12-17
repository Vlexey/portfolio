import React, { Component } from 'react';
import { StarWarsService } from '../../services/StarWarsService';
import { ToggleLoading } from '../RandomItem/ToggleImg/ToggleLoading/ToggleLoading';
import { ListItemsCreate } from '../../services/ListItemsCreate';

export class ListItems extends Component {

  sws = new StarWarsService()

  state = {
    itemList: null    
  }

  componentDidMount() {    
    const {getData} = this.props;
    getData()
    .then((itemList) => {
      this.setState({itemList})
    })
  }
    
  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const renderLabel = this.props.children(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {renderLabel}
        </li>
      );
    });
  }
  
  render() {      
    
    const { itemList } = this.state;
    const {label} = this.props;

    if (!itemList) {
      return <ToggleLoading/>
    }

    const items = this.renderItems(itemList);


    return (
      <ListItemsCreate items={items} label={label} />
    );
  }
}