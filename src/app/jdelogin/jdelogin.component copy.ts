//----------------------------------------------------------
// Author - Marlon Von Hagt, ARB, August 2019
//----------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs'; // not req as we are not using observable
//import { Injectable } from '@angular/core'; // not required as we are not using dependency injecting


@Component({
  selector: 'app-jdelogin',
  templateUrl: './jdelogin.component.html',
  styleUrls: ['./jdelogin.component.less']
})
export class JdeloginComponent implements OnInit {

public url: string = `http://localhost:3000`;

// this is the payload for http://localhost:3000 (same as AIS token payload)
public loginData =   {
    "actionCode": "LOGIN",
    "deviceName":" ",
    "environment":" ",
    "role":" ",
    "username": " ",
    "password": " "
   } ;
   
   public logOffData =   {
    "actionCode": "LOGOFF",
    "token":" "
   } ;

   public getPriceData =   {
    "actionCode": "PRICE",
    "customer":"",
    "itemNumber":"",
    "businessUnit":"",
    "quantity":"",
    "currency":"",
    "uom":"",
    "getOtherSales":"",
    "versionP58m006":"",
    "internal":"",
    "deviceToUse":"",
    "tokenToUse":""
   } ;

   public getCustomerFuzzyData =   {
    "actionCode": "CUSTOMER_FUZZY",
    "customerfuzzySearch":"",
    "tokenToUse":"",
    "deviceToUse":""

   } ;

   
public jsonString: string='';
public jsonObject ={};
public tokenString: string="";
public priceArray:[] = [];
public customerSearchArray:[] = [];
public showPriceRows:boolean = false;
public showFuzzyRows:boolean = false;
public keyStrokeValue: string = '';

constructor(private http: HttpClient) { }

ngOnInit() {  }

getJdeToken(deviceName:string, environment:string, role:string, username:string, password:string){
  this.loginData.deviceName = deviceName;
  this.loginData.environment = environment;
  this.loginData.role = role;
  this.loginData.username = username;
  this.loginData.password = password;
  // dont show the price rows
  this.showPriceRows = false;
  this.showFuzzyRows = false;
  
  
  // http call to node js server
  this.http.post(this.url,this.loginData).toPromise().then((responseData:any) =>{
  this.jsonString=JSON.stringify(responseData);
  this.jsonObject=responseData;
  this.tokenString = JSON.stringify(Object.values(responseData));
  this.tokenString = this.tokenString.replace("[\"", "");
  this.tokenString = this.tokenString.replace("\"]", "");
  });
  }

//-------------------------------------------
removeToken(token:string){
  // dont show the price rows and fuzzy rows
  this.showPriceRows = false;
  this.showFuzzyRows = false;
  // http call to node js server
  this.logOffData.token = token;
  this.http.post(this.url,this.logOffData).toPromise().then((responseData:any) =>{
    this.jsonString=JSON.stringify(responseData);
    this.jsonObject=responseData;
  });
  }
//-------------------------------------------
getItemPrice(customer:string,itemNumber:string,businessUnit:string,quantity:string,currency:string,uom:string,
  getOtherSales:string,versionP58m006:string,internal:string,tokenToUse:string,deviceToUse:string){
  // show price rows
    this.showPriceRows = true;
    this.showFuzzyRows = false;
  // http call to node js server
  this.getPriceData.customer = customer;
  this.getPriceData.itemNumber = itemNumber;
  this.getPriceData.businessUnit = businessUnit;
  this.getPriceData.quantity = quantity;
  this.getPriceData.currency = currency;
  this.getPriceData.uom = uom;
  this.getPriceData.getOtherSales = getOtherSales;
  this.getPriceData.versionP58m006 = versionP58m006;
  this.getPriceData.internal = internal;
  this.getPriceData.tokenToUse = tokenToUse;
  this.getPriceData.deviceToUse = deviceToUse;

  this.http.post(this.url,this.getPriceData).toPromise().then((responseData:any) =>{
   this.priceArray = responseData.fs_P58M006P_W58M006PA.data.gridData.rowset;
  });
  }

//-------------------------------------------
getCustomerFuzzy(customerFuzzySearch:string,tokenToUse:string,deviceToUse:string){
  //console.log(this.getCustomerFuzzyData);
  // show search rows
  this.showPriceRows = false;
  this.showFuzzyRows = true;
  // http call to node js server
  this.getCustomerFuzzyData.customerfuzzySearch = customerFuzzySearch;
  this.getCustomerFuzzyData.tokenToUse = tokenToUse;
  this.getCustomerFuzzyData.deviceToUse = deviceToUse;
  
  this.http.post(this.url,this.getCustomerFuzzyData).toPromise().then((responseData:any) =>{
   this.customerSearchArray = responseData.fs_P58CUSTF_W58CUSTFA.data.gridData.rowset;
  });
  }
//-------------------------------------------
custKeySearch(event: any){
this.keyStrokeValue = event.target.value;
this.getCustomerFuzzy(this.keyStrokeValue,this.tokenString,'KIL320');
}
//-------------------------------------------

}
