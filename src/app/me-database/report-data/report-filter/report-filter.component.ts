import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { COUNTRIES, STATES } from './data';
declare let $: any;
var tempHtml ="";
@Component({
  selector: 'app-dashboard-ecommerce',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.scss']
})

export class ReportFilterComponent implements OnInit {

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("load")
      // Load Your Data Here
    }
  }
  countries: Select2Data = [];
  statesList: string[] = [];
  reportDropdownList: Select2Data = [];
  regionDropdownList: Select2Data = [];  
  CountryDropdownList: Select2Data = []; 
  segmentDropdownList: Select2Data = []; 

  indicationL1tDropdownList: Select2Data = []; 
  indicationL2tDropdownList: Select2Data = []; 
  indicationL3tDropdownList: Select2Data = []; 
  indicationL4tDropdownList: Select2Data = []; 
  indicationL5tDropdownList: Select2Data = []; 

  regionDropdownListArray:any;

  category1: string ="";
  reportStri: string ="";
  regionStri: string ="";
  countryStri: string ="";
  segmentStri: string ="";
  indicationL1Stri: string ="";
  indicationL2Stri: string ="";
  indicationL3Stri: string =""; 
  indicationL4Stri: string =""; 
  indicationL5Stri: string =""; 
  error: string = '';
  loading: boolean = false;
  personData: any[] = [];

  numberOfTables: string ="";

  newHtml:any;


lastFilterSelected: string ="";
lastFilterSelectedArray: any;

category1_bool:  boolean = true ;
  report_bool: boolean = false ;
  region_bool:  boolean = false ;
  country_bool:  boolean = false ;
  segment_bool:  boolean = false ;
  indicationL1_bool:  boolean = false ;
  indicationL2_bool:  boolean = false ;
  indicationL3_bool:  boolean = false ;
  indicationL4_bool:  boolean = false ;
  indicationL5_bool:  boolean = false ;
//isShown: boolean = false ; // hidden by default


  showDiv = {
    country: false,
    region: false,
    segment: false
}

  constructor (private titleService: Title,private authenticationService: AuthenticationService) {
    
    titleService.setTitle("Dashboard | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template");
  }

    resetFilter()
  {
    this.category1 = "";
    this.reportStri ="";
    this.regionStri="";
    this.countryStri="";
    this.segmentStri="";
    this.indicationL1Stri="";
    this.indicationL2Stri="";
    this.indicationL3Stri=""; 
    this.indicationL4Stri=""; 
    this.indicationL5Stri=""; 
    this.newHtml ="";

    this.report_bool = false ;
    this.region_bool = false ;
    this.country_bool= false ;
    this.segment_bool= false ;
    this.indicationL1_bool= false ;
    this.indicationL2_bool = false ;
    this.indicationL3_bool = false ;
    this.indicationL4_bool = false ;
    this.indicationL5_bool= false ;
    this.lastFilterSelectedArray.options = null
  }
  ngOnInit(): void {
    this._fetchData();
  }

  _fetchData(): void {
   // this.countries = COUNTRIES;
   // this.statesList = STATES;
    // Bind Category Dropdonw
    this.authenticationService.category_Dropdown()
        .pipe(first())
        .subscribe(
          (data: any) => {  
          // this.countries =data.categoryList;
           this.countries.push({ value: '' , label: 'All'  });     
           //categoryList
          },
          (error: any) => {
            this.error = error;
            this.loading = false;
          });
          this.commonMethods();
         
  }
  bindReportDropdown()
  {    
     this.authenticationService.bindReport_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => {           
        this.reportDropdownList =data.categoryList;
        this.reportDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }

  


  bindRegion_Dropdown()
  {    
     this.authenticationService.bindRegion_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
         this.regionDropdownListArray = data.regionDropdownListDistinct;
        this.regionDropdownList =data.regionDropdownListDistinct;
        this.regionDropdownList.push({ value: '0' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }

  bindCountry_Dropdown()
  {    
     this.authenticationService.bindCity_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.CountryDropdownList =data.countryListDistinct;
        this.CountryDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }

  bindSegment_Dropdown()
  {    
     this.authenticationService.bindSegment_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.segmentDropdownList =data.segmentListDistinct;
        this.segmentDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }

  bindIndicationL1_Dropdown()
  {    
     this.authenticationService.bindIndicationL1_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.indicationL1tDropdownList =data.indicationL1ListDistinct;
        this.indicationL1tDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }
  bindIndicationL2_Dropdown()
  {    
     this.authenticationService.bindIndicationL2_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.indicationL2tDropdownList =data.indicationL2ListDistinct;
        this.indicationL2tDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }
  bindIndicationL3_Dropdown()
  {    
     this.authenticationService.bindIndicationL3_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.indicationL3tDropdownList =data.indicationL3ListDistinct;
        this.indicationL3tDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }
  
  bindIndicationL4_Dropdown()
  {    
     this.authenticationService.bindIndicationL4_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.indicationL4tDropdownList =data.indicationL4ListDistinct;
        this.indicationL4tDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }

  bindIndicationL5_Dropdown()
  {    
     this.authenticationService.bindIndicationL5_Dropdown(this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
     .pipe(first())
     .subscribe(
       (data: any) => { 
        this.indicationL5tDropdownList =data.indicationL5ListDistinct;
        this.indicationL5tDropdownList.push({ value: '' , label: 'All'  });  },
       (error: any) => {
         this.error = error;
         this.loading = false;
       });
  }



  onSearch(){ 
    tempHtml="";
    this.numberOfTables = this.category1;

 var forLoopArray;
    if(this.lastFilterSelected=="Category" && this.lastFilterSelectedArray.options[0]['label']=="All")
    {
      
    }
    if(this.lastFilterSelected=="Report")
    {
     
    }
    if(this.lastFilterSelected=="Region" && this.lastFilterSelectedArray.options[0]['label']=="All")
    {
       forLoopArray = this.regionDropdownListArray;
    }
    if(this.lastFilterSelected=="Country")
    {
    
    }
    if(this.lastFilterSelected=="Segment")
    {
     
    }
    if(this.lastFilterSelected=="indicationL1")
    {
    
    }
    if(this.lastFilterSelected=="indicationL2")
    {
    
    }
    if(this.lastFilterSelected=="indicationL3")
    {
     
    }
    if(this.lastFilterSelected=="indicationL4")
    {
     
    }
    if(this.lastFilterSelected=="indicationL5")
    {
     
    }
if(forLoopArray==null)
{
  forLoopArray = this.lastFilterSelectedArray.options;
}

console.log(forLoopArray);
   for (let i = 0; i < forLoopArray.length; i++) {    

    this.newHtml ="<h1> Loading... Please wait" 
  let lastSelectedLabel = "";//this.lastFilterSelectedArray.options[i]['label'];
  let lastSelectedValue = forLoopArray[i]['value'];
 if(this.lastFilterSelected=="Category")
 {
  this.category1 = lastSelectedValue;
 }
 if(this.lastFilterSelected=="Report")
 {
  this.reportStri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="Region")
 {
   if(lastSelectedValue=="Total")
   {
     this.regionStri = "Global";
   }else{
    this.regionStri = lastSelectedValue;
   }
 }
 if(this.lastFilterSelected=="Country")
 {
  this.countryStri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="Segment")
 {
  this.segmentStri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="indicationL1")
 {
  this.indicationL1Stri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="indicationL2")
 {
  this.indicationL2Stri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="indicationL3")
 {
  this.indicationL3Stri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="indicationL4")
 {
  this.indicationL4Stri = lastSelectedValue;
 }
 if(this.lastFilterSelected=="indicationL5")
 {
  this.indicationL5Stri = lastSelectedValue;
 }
 if(lastSelectedValue!=0)
 {
    this.mainSearchFunction(lastSelectedValue);
 }
}
   
}

mainSearchFunction(lastSelectedLabel:string)
{
  var datacounter=0;
  var cateHtml="";
   
  this.authenticationService.get_report_list("/home/get-report-filter-data-new",this.lastFilterSelected,this.category1,this.reportStri,this.regionStri, this.countryStri,this.segmentStri,this.indicationL1Stri,this.indicationL2Stri,this.indicationL3Stri,this.indicationL4Stri,this.indicationL5Stri)
  .pipe(first())
  .subscribe(
    (data: any) => { 

     if(data.length==0)
     {
       tempHtml = tempHtml + `<div class="animated fadeIn">
       <div class="row">
           <div class="col-lg-12">
               <div class="card">
                   <div style="color:red" class="card-header">
                    Data not found as per the search criteria `+ lastSelectedLabel +`
                   </div>
                   </div></div></div></div>`;  
       this.newHtml =tempHtml ;
       return;        
     }
     datacounter ++;
     
   //Create a HTML Table element.
   var table = `<div class="animated fadeIn">
   <div class="row">
       <div class="col-lg-12">
           <div class="card">
               <div class="card-header">
                  `+ lastSelectedLabel +`
               </div>
               <div class="card-body">
               <div class="table-responsive mb-4 `+lastSelectedLabel+`">
                   <table class="table advanced-table table-nowrap mb-0">
                       <thead style="background: #eaeff3;color: black;">`;
  
   //Add the header row.
   var baseYear = data[0]['baseYear'];
  
   var regionStri_temp =this.regionStri;
   var countryStri_temp =this.countryStri;
   var segmentStri_temp =this.segmentStri;
   var indicationL1Stri_temp =this.indicationL1Stri;
   var indicationL2Stri_temp =this.indicationL2Stri;
   var indicationL3Stri_temp =this.indicationL3Stri;
   var indicationL4Stri_temp =this.indicationL4Stri;

   var yearTh = "";
   for (var i = 2014; i <= 2028; i++) {
       let colorCode = "";
       if (i < baseYear) { // Past Year
           colorCode = "crem_color";
       }
       else if (i == baseYear) { // Base Year
           colorCode = "yelow_color";
       }
       else { // Future Years
           colorCode = "green_color";
       }
       yearTh = yearTh + `<th class=` + colorCode + `>` + i + `</th>`;
   }
  
   var headerCell = `<tr>`;
   //headerCell = headerCell+`<th>WW</th>`;
   headerCell = headerCell+`<th>Region</th>`;
   if(this.regionStri.length>0)
   {
   headerCell = headerCell+`<th>Country</th>`;
   }
   if(this.countryStri.length>0)
   {
     headerCell = headerCell+`<th>Segment</th>`;
   }
   if(this.segmentStri.length>0)
   {
     headerCell = headerCell+`<th>Indication-L1</th>`;
   }
   if(this.indicationL2Stri.length>0)
   {
   headerCell = headerCell+`<th>Indication-L2</th>`;
   }
   if(this.indicationL3Stri.length>0)
   {
   headerCell = headerCell+`<th>Indication-L3</th>`;
   }
   if(this.indicationL4Stri.length>0)
   {
   headerCell = headerCell+`<th>Indication-L4</th>`;         
   }              
                   

   headerCell = headerCell + yearTh + `</tr></thead> <tbody>`
  
   var tableRows = "";
   data.forEach(function (data:any, ii:any) {
  // $.each(response.rows, function (i, data) {
       var yearTd = "";
       for (var i = 2014; i <= 2028; i++) {
           let colorCode = "";
           if (i < data.baseYear) { // Past Year
               colorCode = "crem_color";
           }
           else if (i == data.baseYear) { // Base Year
               colorCode = "yelow_color";
           }
           else { // Future Years
               colorCode = "green_color";
           }
           
           var roundeValue = data['forcastYear' + i].toFixed(2);
           yearTd = yearTd + `<td class=` + colorCode + `>` + numberWithCommas(roundeValue) + `</td>`;
       }

       tableRows = tableRows + ` <tr>`;
      // tableRows = tableRows + `<td>`+ data.wwName + `</td>`;
      if(data.regionID=="Total")
      {
       tableRows = tableRows + `<td>Global</td>`;
      }
      else{
       tableRows = tableRows + `<td>`+ data.regionID + `</td>`;
      }
       if(regionStri_temp.length>0)
       {
         tableRows = tableRows + `<td>`+ data.countryID + `</td>`;
       }
       if(countryStri_temp.length>0)
       {
       tableRows = tableRows + `<td>`+ data.segmentID + `</td>`;
       }
       if(segmentStri_temp.length>0)
       {
        tableRows = tableRows + `<td>`+ data.indicationLevel1ID + `</td>`;
       }
       if(indicationL2Stri_temp.length>0)
       {
       tableRows = tableRows + `<td>`+ data.indicationLevel2ID + `</td>`;
       }
       if(indicationL3Stri_temp.length>0)
       {
       tableRows = tableRows + `<td>`+ data.indicationLevel3ID + `</td>`;
       }
       if(indicationL4Stri_temp.length>0)
       {
       tableRows = tableRows + `<td>`+ data.indicationLevel4ID + `</td>`;
       }
       tableRows = tableRows + yearTd + `</tr>`     
     
   });   
   tempHtml = tempHtml + table + headerCell + tableRows + `</tbody></table></div></div></div></div></div></div>`; 
 
   this.newHtml =tempHtml ;
   
    },
    (error: any) => {
      this.error = error;
      this.loading = false;
    });
   }

  
  categorChange(key: string, event: Select2UpdateEvent<any>) {
    this.lastFilterSelected ="Category";
    this.lastFilterSelectedArray = event;
    this.report_bool= true;    
    this.category1="";
    this.category1=event.value;

    console.log(this.lastFilterSelectedArray.options);
    this.bindReportDropdown();
  
   // this.commonMethods();
    //alert(this.category1);    
}

reportChange(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="Report";
  this.lastFilterSelectedArray = event;
  this.region_bool = true;
  this.country_bool= true ;
  this.segment_bool= true ;
  // this.indicationL1_bool= true ;
  // this.indicationL2_bool = true ;
  // this.indicationL3_bool = true ;
  // this.indicationL4_bool = true ;
  // this.indicationL5_bool= true ;



  this.reportStri="";
  this.reportStri=event.value;
  this.bindRegion_Dropdown();
 
 // this.commonMethods();
  //alert(this.category1);    
}

regionChange(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="Region";
  this.lastFilterSelectedArray = event;
  this.country_bool = true;
  this.regionStri="";
  this.regionStri=event.value;
  // this.bindReportDropdown(); 
  this.bindCountry_Dropdown();
 // this.commonMethods();
  //alert(this.category1);    
}
countryChange(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="Country";
  this.lastFilterSelectedArray = event;
  this.segment_bool = true;
  this.countryStri="";
  this.countryStri=event.value;

  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  this.bindSegment_Dropdown();  

 // this.commonMethods();   
}
segmentChange(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="Segment";  
  this.lastFilterSelectedArray = event;
  this.indicationL1_bool = true;
  this.segmentStri="";
  this.segmentStri=event.value;

  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown(); 
  this.bindIndicationL1_Dropdown();  

 // this.commonMethods();   
}
indicationL1Change(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="indicationL1";
  this.lastFilterSelectedArray = event;
  this.indicationL2_bool = true;
  this.indicationL1Stri="";
  this.indicationL1Stri=event.value;

  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown();
  // this.bindSegment_Dropdown();
 
   this.bindIndicationL2_Dropdown();
  // this.bindIndicationL3_Dropdown();
  // this.bindIndicationL4_Dropdown();
  // this.bindIndicationL5_Dropdown();   

 // this.commonMethods();   
}
indicationL2Change(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="indicationL2";
  this.lastFilterSelectedArray = event;
  this.indicationL3_bool = true;
  this.indicationL2Stri="";
  this.indicationL2Stri=event.value;
  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown();
  // this.bindSegment_Dropdown();
  // this.bindIndicationL1_Dropdown();
  
   this.bindIndicationL3_Dropdown();
  
 // this.commonMethods();   
}
indicationL3Change(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="indicationL3";
  this.lastFilterSelectedArray = event;
  this.indicationL4_bool = true;
  this.indicationL3Stri="";
  this.indicationL3Stri=event.value;
  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown();
  // this.bindSegment_Dropdown();
  // this.bindIndicationL1_Dropdown();
  // this.bindIndicationL2_Dropdown();  
   this.bindIndicationL4_Dropdown();
  // this.bindIndicationL5_Dropdown();   
 // this.commonMethods();   
}
indicationL4Change(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="indicationL4";
  this.lastFilterSelectedArray = event;
  this.indicationL5_bool = true;
  this.indicationL4Stri="";
  this.indicationL4Stri=event.value;

  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown();
  // this.bindSegment_Dropdown();
  // this.bindIndicationL1_Dropdown();
  //  this.bindIndicationL2_Dropdown();
  //  this.bindIndicationL3_Dropdown();  
   this.bindIndicationL5_Dropdown();   
  //this.commonMethods();   
}
indicationL5Change(key: string, event: Select2UpdateEvent<any>) {
  this.lastFilterSelected ="indicationL5";
  this.lastFilterSelectedArray = event;
  this.indicationL5Stri="";
  this.indicationL5Stri=event.value;
  //this.commonMethods();   
}


commonMethods() {  
  // this.bindReportDropdown();
  // this.bindRegion_Dropdown();
  // this.bindCountry_Dropdown();
  // this.bindSegment_Dropdown();
  // this.bindIndicationL1_Dropdown();
  // this.bindIndicationL2_Dropdown();
  // this.bindIndicationL3_Dropdown();
  // this.bindIndicationL4_Dropdown();
  // this.bindIndicationL5_Dropdown();   
}
}


function numberWithCommas(number: any) {
  var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

