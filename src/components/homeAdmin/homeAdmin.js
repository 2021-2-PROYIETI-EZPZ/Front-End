import React, { useState, useMemo } from "react";
import axios from 'axios';
import './dashboard.css';
import Flippy, { FrontSide, BackSide } from './lib';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};


const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#301bc6',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      Total de ventas en membresias
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: ' #6e1bc6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      Cantidad de membresías vendidas: 4
      Total vendido: $60.000
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
  </Flippy>
);

function ProductTable(props) {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  //<body onLoad = {this.connectionWithBack}>

  const connectionWithBack = name => {
    console.log("Llegó al método");
    //await axios.get('https://ezbrowser.herokuapp.com/ezpz/v1/membership')
  };

  return (
    <div >
      <table onLoad = {connectionWithBack}>
      <caption>Ez Browser</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Membresía
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("price")}
              className={getClassNamesFor("price")}
            >
              Precio
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("date")}
              className={getClassNamesFor("date")}
            >
              Fecha de inicio
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

class homeAdmin extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  render(){
  return (
      <div className="container-homeAdmin">
        <div id="menu">
            <p style={{ color: 'white' }}>Admin</p>
        </div>
        <br/>
        <div className="Card">
          <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <FlippyOnHover />
            <ControlledFlippy
              isFlipped={this.state.isFlipped}
            /> 
          </div>
        </div>
        <div >
          <ProductTable
            products={[
              { id: 1, name: "El nombre de la membresía", price: "15.000", date: "1/12/2021" },
              { id: 2, name: "El nombre de la membresía", price: "15.000", date: "31/12/2021" },
              {
                id: 3,
                name: "El nombre de la membresía",
                price: "15.000",
                date: "11/12/2021"
              },
              {
                id: 4,
                name: "El nombre de la membresía",
                price: "15.000",
                date: "31/12/2021"
              },            
            ]}
          />
        </div>
      </div>
  );
}
}
export default homeAdmin;