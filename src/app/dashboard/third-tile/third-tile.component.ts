import { Component, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-third-tile',
  templateUrl: './third-tile.component.html',
  styleUrls: ['./third-tile.component.scss']
})
export class ThirdTileComponent {
  model: any;
  @Input() category_name: string = ""
  table_title: string = "Daily Expenses";
  selected_table_type:string="daily";

  category_data: Record<string, any>[] = [

    {
      item: "Item 7",
      date: "Dec 20, 14:15 PM",
      amount: "500",
      type: "expense"
    },

    {
      item: "Item 5",
      date: "Dec 20, 13:10 PM",
      amount: "2000",
      type: "income"
    },
    {
      item: "Item 6",
      date: "Dec 20, 10:10 PM",
      amount: "200",
      type: "expense"
    },
    {
      item: "Item 1",
      date: "Dec 20, 10:10 PM",
      amount: "200",
      type: "expense"
    },
    {
      item: "Item 2",
      date: "Dec 20, 14:15 PM",
      amount: "500",
      type: "expense"
    },
    {
      item: "Item 3",
      date: "Dec 20, 11:40 PM",
      amount: "300",
      type: "expense"
    },
    {
      item: "Item 10",
      date: "Dec 20, 13:10 PM",
      amount: "2000",
      type: "income"
    },
    {
      item: "Item 8",
      date: "Dec 20, 11:40 PM",
      amount: "300",
      type: "expense"
    },
    {
      item: "Item 4",
      date: "Dec 20, 15:10 PM",
      amount: "1500",
      type: "income"
    },
    {
      item: "Item 9",
      date: "Dec 20, 15:10 PM",
      amount: "1500",
      type: "income"
    },



  ]
  daily_expenses_data: Record<string, any>[] = [
    {
      item: "Biriyani",
      category: "Food",
      date: "Dec 20, 10:10 PM",
      amount: "200",
      type: "expense"
    },
    {
      item: "Mobile Recharge",
      category: "Bills",
      date: "Dec 20, 14:15 PM",
      amount: "500",
      type: "expense"
    },
    {
      item: "Bus Tickets",
      category: "Transport",
      date: "Dec 20, 11:40 PM",
      amount: "300",
      type: "expense"
    },
    {
      item: "Internet Cafe Income",
      category: "Income",
      date: "Dec 20, 15:10 PM",
      amount: "1500",
      type: "income"
    },
    {
      item: "Pocket Money",
      category: "Pocket Money",
      date: "Dec 20, 13:10 PM",
      amount: "2000",
      type: "income"
    },
    {
      item: "Biriyani",
      category: "Food",
      date: "Dec 20, 10:10 PM",
      amount: "200",
      type: "expense"
    },
    {
      item: "Mobile Recharge",
      category: "Bills",
      date: "Dec 20, 14:15 PM",
      amount: "500",
      type: "expense"
    },
    {
      item: "Bus Tickets",
      category: "Transport",
      date: "Dec 20, 11:40 PM",
      amount: "300",
      type: "expense"
    },
    {
      item: "Internet Cafe Income",
      category: "Income",
      date: "Dec 20, 15:10 PM",
      amount: "1500",
      type: "income"
    },
    {
      item: "Pocket Money",
      category: "Pocket Money",
      date: "Dec 20, 13:10 PM",
      amount: "2000",
      type: "income"
    },


  ]
  category_table_data:Record<string,any>[]=[]
  table_data: Record<string, any>[] = this.daily_expenses_data
  card_data:Record<string,any>[]=[
    {
      name:"Food",
      icon:"",
      percentage:12.36,
    },
    {
      name:"Bills",
      icon:"",
      percentage:17.36,
    },

    {
      name:"Repairs",
      icon:"",
      percentage:32.36,
    }, 
    {
      name:"Furniture",
      icon:"",
      percentage:22.36,
    },
    {
      name:"Shoping",
      icon:"",
      percentage:18.36,
    },
    {
      name:"Food",
      icon:"",
      percentage:12.36,
    },
    {
      name:"Bills",
      icon:"",
      percentage:17.36,
    },

    {
      name:"Repairs",
      icon:"",
      percentage:32.36,
    }, 
    {
      name:"Furniture",
      icon:"",
      percentage:22.36,
    },
    {
      name:"Shoping",
      icon:"",
      percentage:18.36,
    },
    {
      name:"Food",
      icon:"",
      percentage:12.36,
    },
    {
      name:"Bills",
      icon:"",
      percentage:17.36,
    },

    {
      name:"Repairs",
      icon:"",
      percentage:32.36,
    }, 
    {
      name:"Furniture",
      icon:"",
      percentage:22.36,
    },
    {
      name:"Shoping",
      icon:"",
      percentage:18.36,
    },
    {
      name:"Food",
      icon:"",
      percentage:12.36,
    },
    {
      name:"Bills",
      icon:"",
      percentage:17.36,
    },

    {
      name:"Repairs",
      icon:"",
      percentage:32.36,
    }, 
    {
      name:"Furniture",
      icon:"",
      percentage:22.36,
    },
    {
      name:"Shoping",
      icon:"",
      percentage:18.36,
    }
  ]
  constructor(
  ) {

  }
  ngOnChanges(){
    if(this.category_name!=""){
      for(let obj of this.category_data){
        obj['category']=this.category_name
      }
      this.category_table_data=this.category_data
    }
  }

  changeTableTab(type: string) {
    if (type == 'daily') {
      this.selected_table_type='daily'
      this.table_data = this.daily_expenses_data
      this.category_name=""
      this.category_table_data=[];
    } else if(type=='category') {
      this.selected_table_type='category'
      this.table_data = this.category_data
    }
    else{
      this.selected_table_type='card'
    }
  }
}
