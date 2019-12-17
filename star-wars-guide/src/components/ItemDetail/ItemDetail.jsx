import React, { Component } from 'react';
import { NotCheckedItem } from './NotCheckedItem';
import { ErrorBoundary } from '../../services/ErrorBoundary';

export class ItemDetail extends Component {

  state = {
    item: {},
    itemImage: null,
    error: false,
    loading: true
  }

  componentDidMount() {
    this.updateItem()    
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }
  
 
  updateItem() {   
    
    const {itemId, getData} = this.props;
    const itemImage = this.props.getImage(itemId);
    if (!itemId) {
      return
    }

    getData(itemId)    
    .then((item) => this.setState({item, itemImage}))
    .catch(() => this.setState({error: true}))    
  }
  
  render() {        
    const item = this.state.item
    const itemImage = this.state.itemImage
    const itemId = this.props.itemId;   
    const content = <div>
                      <h4>{this.props.label} Detail</h4>
                      <div className="d-flex jumbotron">
                        <div className="d-flex px-3">
                          <img src={itemImage} alt={this.props.label} height="180"
                          width="180"
                           style={{
                            backgroundPosition: 'center',
                            backgroundSize: '50%',
                            backgroundRepeat: 'no-repeat'
                           }}
                           />
                        </div>
                        <ul className="list-group item-list flex-grow-1">
                          {                              
                            React.Children.map(this.props.children, (child) => {
                              return React.cloneElement(child, {item})
                            })
                          }
                        </ul>
                      </div>
                    </div>
    
    const toggleDefaultLabel = itemId ?  content  :  <NotCheckedItem label={this.props.label} />
    
    return (
      <ErrorBoundary>
        {toggleDefaultLabel}
      </ErrorBoundary>
    );
  }
}
