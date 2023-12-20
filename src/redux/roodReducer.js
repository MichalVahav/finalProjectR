import { v4 as uuidv4 } from 'uuid';

const initialState = {

    customers:[{id:'11', firstName:'Dani', lastName:'Choen', city:'Ashdod'},
              {id:'22', firstName:'Avi', lastName:'Dror', city:'Tel-Aviv'}],

    products:[{id:'12', name: 'milk', price: 5, quantity:10},
              {id: '13', name:' oil', price: 10, quantity:9}],
   
   
   purchases:[{id: '1', customerID: '11', productID: '12', date:'01/01/2021'},
              {id: '2', customerID: '11', productID: '12', date:'02/01/2021'},
              {id: '2', customerID: '22', productID: '12', date:'02/01/2021'}]

    //purchases:[{id: uuidv4(), customerID: '', ProductID: '', date:''}]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
   ...state
    }
    }
    case 'REMOVE': {
        return {
            ...state
             }
    }

    default:
      return state;
  }
};

export default productsReducer;
