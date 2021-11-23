import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

export class Order {
  ID: number;

  OrderNumber: number;

  OrderDate: string;

  DeliveryDate: string;

  SaleAmount: number;

  Terms: string;

  CustomerStoreCity: string;

  Employee: string;
}

const orders: Order[] = [{
  ID: 1,
  OrderNumber: 35703,
  OrderDate: '2017/04/10',
  DeliveryDate: '2017/04/13 9:00',
  SaleAmount: 11800,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 4,
  OrderNumber: 35711,
  OrderDate: '2017/01/12',
  DeliveryDate: '2017/01/13 9:00',
  SaleAmount: 16050,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 5,
  OrderNumber: 35714,
  OrderDate: '2017/01/22',
  DeliveryDate: '2017/01/27 9:00',
  SaleAmount: 14750,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 7,
  OrderNumber: 35983,
  OrderDate: '2017/02/07',
  DeliveryDate: '2017/02/10 13:00',
  SaleAmount: 3725,
  Terms: '15 Days',
  CustomerStoreCity: 'Denver, CO',
  Employee: 'Todd Hoffman',
}, {
  ID: 11,
  OrderNumber: 38466,
  OrderDate: '2017/03/01',
  DeliveryDate: '2017/03/03 17:45',
  SaleAmount: 7800,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 14,
  OrderNumber: 39420,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 11:45',
  SaleAmount: 20500,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 15,
  OrderNumber: 39874,
  OrderDate: '2017/02/04',
  DeliveryDate: '2017/02/10 15:00',
  SaleAmount: 9050,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 18,
  OrderNumber: 42847,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 8:30',
  SaleAmount: 20400,
  Terms: '30 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
}, {
  ID: 30,
  OrderNumber: 57429,
  OrderDate: '2017/05/16',
  DeliveryDate: '2017/05/19 11:45',
  SaleAmount: 11050,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
}, {
  ID: 32,
  OrderNumber: 58292,
  OrderDate: '2017/05/13',
  DeliveryDate: '2017/05/19 14:30',
  SaleAmount: 13500,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 36,
  OrderNumber: 62427,
  OrderDate: '2017/01/27',
  DeliveryDate: '2017/02/03 18:00',
  SaleAmount: 23500,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 39,
  OrderNumber: 65977,
  OrderDate: '2017/02/05',
  DeliveryDate: '2017/02/10 13:15',
  SaleAmount: 2550,
  Terms: '15 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
}, {
  ID: 42,
  OrderNumber: 68428,
  OrderDate: '2017/04/10',
  DeliveryDate: '2017/04/14 11:30',
  SaleAmount: 10500,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 43,
  OrderNumber: 69477,
  OrderDate: '2017/03/09',
  DeliveryDate: '2017/03/10 12:00',
  SaleAmount: 14200,
  Terms: '15 Days',
  CustomerStoreCity: 'Anaheim, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 46,
  OrderNumber: 72947,
  OrderDate: '2017/01/14',
  DeliveryDate: '2017/01/20 9:00',
  SaleAmount: 13350,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 47,
  OrderNumber: 73088,
  OrderDate: '2017/03/25',
  DeliveryDate: '2017/03/31 17:15',
  SaleAmount: 8600,
  Terms: '30 Days',
  CustomerStoreCity: 'Reno, NV',
  Employee: 'Clark Morgan',
}, {
  ID: 51,
  OrderNumber: 77297,
  OrderDate: '2017/04/30',
  DeliveryDate: '2017/05/05 18:00',
  SaleAmount: 10850,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
}, {
  ID: 56,
  OrderNumber: 84744,
  OrderDate: '2017/02/10',
  DeliveryDate: '2017/02/17 14:00',
  SaleAmount: 4650,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 57,
  OrderNumber: 85028,
  OrderDate: '2017/05/17',
  DeliveryDate: '2017/05/19 12:00',
  SaleAmount: 2575,
  Terms: '30 Days',
  CustomerStoreCity: 'Reno, NV',
  Employee: 'Clark Morgan',
}, {
  ID: 59,
  OrderNumber: 87297,
  OrderDate: '2017/04/21',
  DeliveryDate: '2017/04/28 9:00',
  SaleAmount: 14200,
  Terms: '30 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
}, {
  ID: 65,
  OrderNumber: 94726,
  OrderDate: '2017/05/22',
  DeliveryDate: '2017/05/26 13:30',
  SaleAmount: 20500,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 66,
  OrderNumber: 95266,
  OrderDate: '2017/03/10',
  DeliveryDate: '2017/03/17 11:45',
  SaleAmount: 9050,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 69,
  OrderNumber: 98477,
  OrderDate: '2017/01/01',
  DeliveryDate: '2017/01/06 9:00',
  SaleAmount: 23500,
  Terms: '15 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
}, {
  ID: 78,
  OrderNumber: 174884,
  OrderDate: '2017/04/10',
  DeliveryDate: '2017/04/14 8:30',
  SaleAmount: 7200,
  Terms: '30 Days',
  CustomerStoreCity: 'Denver, CO',
  Employee: 'Todd Hoffman',
}, {
  ID: 81,
  OrderNumber: 188877,
  OrderDate: '2017/02/11',
  DeliveryDate: '2017/02/17 16:00',
  SaleAmount: 8750,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
}, {
  ID: 82,
  OrderNumber: 191883,
  OrderDate: '2017/02/05',
  DeliveryDate: '2017/02/10 18:30',
  SaleAmount: 9900,
  Terms: '30 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 83,
  OrderNumber: 192474,
  OrderDate: '2017/01/21',
  DeliveryDate: '2017/01/27 12:45',
  SaleAmount: 12800,
  Terms: '30 Days',
  CustomerStoreCity: 'Anaheim, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 84,
  OrderNumber: 193847,
  OrderDate: '2017/03/21',
  DeliveryDate: '2017/03/24 9:00',
  SaleAmount: 14100,
  Terms: '30 Days',
  CustomerStoreCity: 'San Diego, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 85,
  OrderNumber: 194877,
  OrderDate: '2017/03/06',
  DeliveryDate: '2017/03/10 18:15',
  SaleAmount: 4750,
  Terms: '30 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 86,
  OrderNumber: 195746,
  OrderDate: '2017/05/26',
  DeliveryDate: '2017/06/02 17:00',
  SaleAmount: 9050,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 87,
  OrderNumber: 197474,
  OrderDate: '2017/03/02',
  DeliveryDate: '2017/03/03 11:00',
  SaleAmount: 6400,
  Terms: '30 Days',
  CustomerStoreCity: 'Reno, NV',
  Employee: 'Clark Morgan',
}, {
  ID: 88,
  OrderNumber: 198746,
  OrderDate: '2017/05/09',
  DeliveryDate: '2017/05/12 15:45',
  SaleAmount: 15700,
  Terms: '30 Days',
  CustomerStoreCity: 'Denver, CO',
  Employee: 'Todd Hoffman',
}, {
  ID: 91,
  OrderNumber: 214222,
  OrderDate: '2017/02/08',
  DeliveryDate: '2017/02/10 9:45',
  SaleAmount: 11050,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
}];

@Component({
  selector: 'app-ex-filtering',
  templateUrl: './ex-filtering.component.html',
  styleUrls: ['./ex-filtering.component.scss']
})
export class ExFilteringComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  orders: Order[];

  testHeaderFilter: any;

  saleAmountHeaderFilter: any;

  applyFilterTypes: any;

  currentFilter: any;

  showFilterRow: boolean | null | undefined

  showHeaderFilter: boolean | null | undefined

  filterValue: string = ''

  constructor() {
    this.orders = orders
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
      key: 'auto',
      name: 'Immediately',
    }, {
      key: 'onClick',
      name: 'On Button Click',
    }];
    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
    this.currentFilter = this.applyFilterTypes[0].key;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);

    this.testHeaderFilter = [{
      text: 'Harv Mudd',
      value: 'Harv Mudd',
    }, {
      text: 'Clark Morgan',
      value: 'Clark Morgan',
    }, {
      text: 'Todd Hoffman',
      value: 'Todd Hoffman',
    }, {
      text: 'Jim Packard',
      value: 'Jim Packard',
    }];
  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataGrid.filterPanel.customizeText = (evt) => {
      this.filterValue = evt.text
    }
    console.log([...new Set(this.orders.map(t => t.Employee))])
  }

  private static getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[ExFilteringComponent.getOrderDay, '=', 0], 'or', [ExFilteringComponent.getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }

  calculateFilterEmployee(filterValues, selectedFilterOperation) {
    const field = this as any
    let filterExpression: Array<any> = []
    for (let i = 0; i < filterValues.length; i++) {
      let filterExpr = [field.dataField, selectedFilterOperation || '=', filterValues[i]];
      if (i > 0) {
        filterExpression.push('or');
      }
      filterExpression.push(filterExpr);
    }
    return filterExpression;
  }

  onEditorPreparing(e) {
    if ((e.parentType === "dataRow" || e.parentType === "filterRow") && e.dataField === "Employee") {
      const colIdx = this.dataGrid.instance.getVisibleColumnIndex('Employee')
      const intervalChangeIcon = setInterval(() => {
        const datagridEl = e.element.querySelector('.dx-datagrid-scrollable-simulated.dx-datagrid-content.dx-datagrid-scroll-container:not(.dx-datagrid-content-fixed)')
        const editorElList = datagridEl.querySelectorAll('td:not(.dx-cell-focus-disabled)')
        console.log('editorEls', editorElList)
        const editorEl = editorElList[colIdx].querySelector('.dx-editor-with-menu')
        console.log('colIdx => ', colIdx)
        if (editorEl) {
          editorEl.querySelector('.dx-menu.dx-widget').classList.add("hide-search-icon")
          console.log('onEditorPreparing timoeout => ', colIdx)
          let itag = document.createElement('i')
          itag.className = "dx-icon dx-icon-filter-operation-default filter-icon"
          const selEl = editorEl.querySelector('.dx-texteditor-container')
          selEl.prepend(itag)
          selEl.classList.add('filter-icon-container')
          clearInterval(intervalChangeIcon)
        }
      }, 100)
      e.editorName = "dxTagBox"
      e.editorOptions.dataSource = this.testHeaderFilter;
      e.editorOptions.showSelectionControls = true;
      e.editorOptions.displayExpr = "text";
      e.editorOptions.valueExpr = "value";
      e.editorOptions.value = e.value || [];
      e.editorOptions.onSelectAllValueChanged = (evt) => {
        if (evt.value) {
          const intervalRemove = setInterval(() => {
            const allTags = e.element.querySelectorAll('.dx-tag')
            allTags.forEach(el => el.remove())
            if (allTags.length < 1) clearInterval(intervalRemove)
          }, 100)
        }
      }
    }
  }

}
