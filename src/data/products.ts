export interface ProductItem {
  id: number;
  category: string;
  name: string;
  size: string;
  simplePrice: number | null;
  designerPrice: number | null;
}

export const PRODUCT_DATA: ProductItem[] = [
  { id: 1, category: 'Baju', name: 'Sada Baju', size: '3.5 x 6.5', simplePrice: 1150, designerPrice: null },
  { id: 2, category: 'Baju', name: 'Sada Maruti Baju', size: '3.5 x 6.5', simplePrice: 1100, designerPrice: null },
  { id: 3, category: 'Baju', name: 'Sada Roshandan Baju', size: '3.5 x 7.5', simplePrice: 1600, designerPrice: 1700 },
  { id: 4, category: 'Baju', name: 'Maruti Roshandan Baju', size: '3.5 x 7.5', simplePrice: 1600, designerPrice: 1700 },
  { id: 5, category: 'Baju', name: 'Mehrab Baju', size: '3.5 x 8', simplePrice: null, designerPrice: 2500 },
  { id: 6, category: 'Roshandan', name: 'Roshandan', size: '15 x 18', simplePrice: null, designerPrice: 300 },
  { id: 7, category: 'Roshandan', name: 'Roshandan', size: '15 x 21', simplePrice: null, designerPrice: 350 },
  { id: 8, category: 'Roshandan', name: 'Roshandan', size: '15 x 24', simplePrice: 370, designerPrice: 400 },
  { id: 9, category: 'Roshandan', name: 'Gol (Round) Roshandan', size: '15 x 15', simplePrice: null, designerPrice: null },
  { id: 10, category: 'Jangla', name: 'Sada Jangla', size: '2 x 2.5', simplePrice: 700, designerPrice: 700 },
  { id: 11, category: 'Jangla', name: 'Maruti Jangla', size: '2 x 2.5', simplePrice: 700, designerPrice: 700 },
  { id: 12, category: 'Jangla', name: 'Sada Jangla', size: '2.5 x 3', simplePrice: 1000, designerPrice: 1100 },
  { id: 13, category: 'Jangla', name: 'Maruti Jangla', size: '2.5 x 3', simplePrice: 1000, designerPrice: 1100 },
  { id: 14, category: 'Jangla', name: 'Sada Jangla Patli Lakdi', size: '3 x 4', simplePrice: 1600, designerPrice: 1650 },
  { id: 15, category: 'Jangla', name: 'Maruti Jangla Patli Lakdi', size: '3 x 4', simplePrice: 1600, designerPrice: 1650 },
  { id: 16, category: 'Jangla', name: 'Sada Jangla Palli Lakdi', size: '3 x 4', simplePrice: 1900, designerPrice: 2000 },
  { id: 17, category: 'Jangla', name: 'Maruti Jangla Palli Lakdi', size: '3 x 4', simplePrice: 1900, designerPrice: 2000 },
  { id: 18, category: 'Jangla', name: 'Sada Jangla', size: '4 x 5', simplePrice: 3100, designerPrice: 3200 },
  { id: 19, category: 'Jangla', name: 'Maruti Jangla', size: '4 x 5', simplePrice: 3100, designerPrice: 3200 },
  { id: 20, category: 'Jangla', name: 'Sada & Maruti Jangla', size: '5 x 5', simplePrice: null, designerPrice: null },
  { id: 21, category: 'Jangla', name: 'Mehrab Jangla', size: '3 x 4', simplePrice: 2800, designerPrice: null },
  { id: 22, category: 'Jangla', name: 'Mehrab Jangla', size: '4 x 5', simplePrice: 4000, designerPrice: null },
  { id: 23, category: 'Jangla', name: 'Mehrab Jangla', size: '5 x 5', simplePrice: 5000, designerPrice: null },
  { id: 24, category: 'Gates', name: 'Mehrab Half Gate (Patla Cross 8)', size: '6.5 x 9', simplePrice: 7000, designerPrice: null },
  { id: 25, category: 'Gates', name: 'Mehrab Full Gate', size: '6.5 x 9', simplePrice: null, designerPrice: null },
  { id: 26, category: 'Gates', name: '6x5 Mehrab', size: '6 x 5', simplePrice: 5500, designerPrice: 5500 },
];
