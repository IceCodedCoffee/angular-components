export interface Product {
    details: {
      id: number;
      name: string;
      addition: string;
    };
    amount: number;
    warehouse: {
      name: string;
      compartment: string;
    };
    stock: number;
    ordered: {
      amount: number;
      registered: string;
    };
    reserved: {
      amount: number;
      produced: string;
    };
    producer: {
      name: string;
      id: number;
    };
    demand: number;
    code: string;
  }