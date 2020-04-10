//----------------------------------------------------------
// Author - Marlon Von Hagt, ARB, August 2019
//----------------------------------------------------------

import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Observable } from 'rxjs'; // not req as we are not using observable
//import { Injectable } from '@angular/core'; // not required as we are not using dependency injecting

@Component({
  selector: "app-jdelogin",
  templateUrl: "./jdelogin.component.html",
  styleUrls: ["./jdelogin.component.less"],
})
export class JdeloginComponent implements OnInit {
  public url: string = `http://localhost:3000`;

  // this is the payload for http://localhost:3000 (same as AIS token payload)
  public loginData = {
    actionCode: "LOGIN",
    brand: " ",
    username: " ",
    password: " ",
  };

  public logOffData = {
    tokenToUse: " ",
  };

  public getPriceData = {
    actionCode: "PRICE",
    customer: "",
    itemNumber: "",
    businessUnit: "",
    quantity: "",
    currency: "",
    uom: "",
    getOtherSales: "",
    versionP58m006: "",
    internal: "",
    tokenToUse: "",
  };

  public getCustomerFuzzyData = {
    customerfuzzySearch: "",
    tokenToUse: "",
  };

  public getItemFuzzyData = {
    searchString: "",
    tokenToUse: "",
  };

  public getDuplicateCustomerFuzzyData = {
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address1: "",
    tokenToUse: "",
  };

  public getCustomerSummaryData = {
    actionCode: "CUSTOMER_Summary",
    customerNumberSearch: "",
    tokenToUse: "",
  };

  public getPartDetailsData = {
    orderNumberSearch: "",
    invoiceNumberSearch: "",
    tokenToUse: "",
  };

  public createCashCustomerData = {
    branch: " ",
    firstName: " ",
    surname: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    secContactName: " ",
    secContactPhone: " ",
    marketingOptInYN: " ",
    tokenToUse: "",
  };

  public updateCashCustomerData = {
    customerNumber: " ",
    branch: " ",
    firstName: " ",
    surname: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    secContactName: " ",
    secContactPhone: " ",
    marketingOptInYN: " ",
    tokenToUse: "",
  };

  public createShipToCustomerData = {
    soldTo: " ",
    branch: " ",
    name: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    defaultBillTo: " ",
    delInstructions1: " ",
    delInstructions2: " ",
    zone: " ",
    carrier: " ",
    route: " ",
    freightHandlingCode: " ",
    tokenToUse: "",
  };

  public updateShipToCustomerData = {
    soldTo: " ",
    branch: " ",
    name: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    defaultBillTo: " ",
    delInstructions1: " ",
    delInstructions2: " ",
    zone: " ",
    carrier: " ",
    route: " ",
    freightHandlingCode: " ",
    customerNumber: " ",
    tokenToUse: "",
  };

  public getStateData = {
    tokenToUse: "",
  };

  public getCountryData = {
    tokenToUse: "",
  };

  public getZoneData = {
    tokenToUse: "",
  };

  public getRouteData = {
    tokenToUse: "",
  };

  public getFreightHandlingData = {
    tokenToUse: "",
  };

  public getColoursData = {
    tokenToUse: "",
  };

  public getCarrierData = {
    tokenToUse: "",
  };

  public getPhoneTypeData = {
    tokenToUse: "",
  };

  public getOrderTypeData = {
    tokenToUse: "",
  };

  public getProductGroupData = {
    tokenToUse: "",
  };

  public getCustomerChannelData = {
    tokenToUse: "",
  };

  public getEnteredByData = {
    tokenToUse: "",
  };

  public getVehicleRetiredReasonData = {
    tokenToUse: "",
  };

  public getBranchData = {
    actionCode: "BRANCH",
    tokenToUse: "",
  };

  public getOrderSummaryFreeData = {
    customerNumber: "",
    branch: "",
    orderType: "",
    orderStatus: "",
    fitOrderYN: "",
    enteredBy: "",
    customerChannel: "",
    customerPo: "",
    heldOrderFlag10: "",
    ordDateFrom: "",
    ordDateTo: "",
    invDateFrom: "",
    invDateTo: "",
    reqDateFrom: "",
    reqDateTo: "",
    vehicleGroupString: "",
    vehicleID: "",
    vehicleRego: "",
    orderNumber: "",
    invoiceNumber: "",
    partNumber: "",
    productGroup: "",
    revenueBunit: "",
    maxCloseOrders: "",
    tokenToUse: "",
  };

  public maintainBookmarkData = {
    actionCode: "",
    orderNumber: "",
    orderType: "",
    orderCompany: "",
    invoiceNumber: "",
    lineNumber: "",
    comment: "",
    tokenToUse: "",
  };

  public updateRequestDateData = {
    orderNumber: "",
    orderType: "",
    orderCompany: "",
    invoiceNumber: "",
    requestDate: "",
    tokenToUse: "",
  };

  public fetchHierarchyData = {
    searchString: "",
    year: "",
    make: "",
    model: "",
    generation: "",
    subModel: "",
    chassis: "",
    series: "",
    bodyType: "",
    driveType: "",
    transmissionType: "",
    engineCode: "",
    engineType: "",
    tokenToUse: "",
  };

  public maintainVehicleData = {
    actionCode: "",
    customerVehicleID: "",
    customerNumber: "",
    vehicleID: "",
    regoNumber: "",
    regoState: "",
    vinNumber: "",
    colourCode: "",
    shortDescription: "",
    dateRetired: "",
    reasonCodeRetired: "",
    defaultFlag: "",
    tokenToUse: "",
  };

  public fetchVehicleListData = {
    tokenToUse: "",
    customerNumber: "",
    retiredVehicleYN: "",
  };

  public registerExternalUserPublicData = {
    email: "",
    name: "",
    postCode: "",
  };

  public registerExternalUserDealerData = {
    email: "",
    name: "",
    parentCustomer: "",
    effectiveDate: "",
    expiryDate: "",
    nodeToken: "",
  };

  public resetUserPasswordData = {
    email: "",
    oldPassword: "",
    newPassword: "",
  };

  public getSecurityFunctionListData = {
    type: "",
  };

  public getJDEUsersListData = {
    userFilter: "",
  };

  public jsonString: string = "";
  public jsonObject = {};
  public tokenString: string = "";
  public priceArray: [] = [];
  public customerSearchArray: [] = [];
  public itemSearchArray: [] = [];
  public duplicateCustomerSearchArray: [] = [];
  public customerSummaryArray: [] = [];
  public orderSummarySearchArray: [] = [];
  public partDetailsSearchArray: [] = [];
  public stateSearchArray: [] = [];
  public countrySearchArray: [] = [];
  public zoneSearchArray: [] = [];
  public routeSearchArray: [] = [];
  public freightHandlingSearchArray: [] = [];
  public coloursSearchArray: [] = [];
  public carrierSearchArray: [] = [];
  public phoneTypeSearchArray: [] = [];
  public orderTypeSearchArray: [] = [];
  public productGroupSearchArray: [] = [];
  public customerChannelSearchArray: [] = [];
  public enteredBySearchArray: [] = [];
  public vehicleRetiredReasonSearchArray: [] = [];
  public branchSearchArray: [] = [];
  public orderSummaryBookmarkedSearchArray: [] = [];
  public orderSummaryLastSearchArray: [] = [];
  public orderSummaryRequestSearchArray: [] = [];
  public orderSummaryFreeSearchArray: [] = [];
  public fetchHierarchySearchArray: [] = [];
  public fetchVehicleListSearchArray: [] = [];
  public securityFunctionSearchArray: [] = [];
  public jdeUsersSearchArray: [] = [];

  public showPriceRows: boolean = false;
  public showFuzzyRows: boolean = false;
  public showItemFuzzyRows: boolean = false;
  public showDuplicateFuzzyRows: boolean = false;
  public showCustomerSummaryRows: boolean = false;
  public showOrderSummaryRows: boolean = false;
  public showPartDetailsRows: boolean = false;
  public showStateRows: boolean = false;
  public showCountryRows: boolean = false;
  public showZoneRows: boolean = false;
  public showRouteRows: boolean = false;
  public showFreightHandlingRows: boolean = false;
  public showColoursRows: boolean = false;
  public showCarrierRows: boolean = false;
  public showPhoneTypeRows: boolean = false;
  public showOrderTypeRows: boolean = false;
  public showProductGroupRows: boolean = false;
  public showCustomerChannelRows: boolean = false;
  public showEnteredByRows: boolean = false;
  public showVehicleRetiredReasonRows: boolean = false;
  public showBranchRows: boolean = false;
  public showOrderSummaryBookmarkedRows: boolean = false;
  public showOrderSummaryLastRows: boolean = false;
  public showOrderSummaryRequestRows: boolean = false;
  public showOrderSummaryFreeRows: boolean = false;
  public showFetchHierarchyRows: boolean = false;
  public showFetchVehicleListRows: boolean = false;

  public newCustomer: string = "";
  public errorMessage: string = "";
  public newCustomerShipTo: string = "";
  public errorMessageShipTo: string = "";
  public errorMessageMaintainBookmark: string = "";
  public errorMessageUpdateRequestDate: string = "";
  public errorMessageMaintainVehicle: string = "";
  public keyStrokeValue: string = "";

  public showLogoff: boolean = false;
  public showLogin: boolean = false;
  public showPrice: boolean = false;
  public showCustFuzzy: boolean = false;
  public showItemFuzzy: boolean = false;
  public showDuplicateCustFuzzy: boolean = false;
  public showPartDetails: boolean = false;
  public showCashCustomer: boolean = false;
  public showShiptoCustomer: boolean = false;
  public showUpdateShiptoCustomer: boolean = false;
  public showMaintainBookmark: boolean = false;
  public showUpdateRequestDate: boolean = false;
  public showMaintainVehicle: boolean = false;
  public showState: boolean = false;
  public showBranch: boolean = false;

  public showOrderSummary: boolean = false;
  public showOrderSummaryBookmarked: boolean = false;
  public showOrderSummaryLast: boolean = false;
  public showOrderSummaryRequest: boolean = false;
  public showOrderSummaryFree: boolean = false;
  public showVehicleHierarchy: boolean = false;
  public showFetchVehicleList: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getJdeToken(brand: string, username: string, password: string) {
    this.loginData.brand = brand;
    this.loginData.username = username;
    this.loginData.password = password;
    // dont show the price rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;

    /*this.url = "http://localhost:3000/user/login";
    this.http
      .post(this.url, this.loginData)
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
        //this.tokenString = this.tokenString.replace("\"]", "");
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }*/

    let headers = new HttpHeaders();
    headers = headers.set("user", username).set("password", password);

    this.url = "http://localhost:3000/user/LoginV2";
    this.http
      .post(this.url, this.loginData, { headers: headers, observe: "response" })
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.body.Token;
        console.log(this.tokenString);
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  removeToken(token: string) {
    // dont show the price rows and fuzzy rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    // http call to node js server
    this.logOffData.tokenToUse = token;
    //    this.url = "http://localhost:3000/user/logout";
    this.url = "http://localhost:3000/user/LogoutV2";
    this.http
      .post(this.url, this.logOffData, {
        headers: new HttpHeaders().set("tokenToUse", token),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-----

  //-------------------------------------------
  getItemPrice(
    customer: string,
    itemNumber: string,
    businessUnit: string,
    quantity: string,
    currency: string,
    uom: string,
    getOtherSales: string,
    versionP58m006: string,
    internal: string,
    tokenToUse: string
  ) {
    // show price rows
    this.showPriceRows = true;
    this.showOrderSummaryRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showFreightHandlingRows = false;

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
    this.url = "http://localhost:3000/item/price";
    this.http
      .post(this.url, this.getPriceData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.priceArray = responseData.SearchResults;
      });
  }

  //-------------------------------------------
  getCustomerSummary(customerSummarySearch: string, tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showCarrierRows = false;
    this.showCustomerSummaryRows = true;
    // http call to node js server
    this.getCustomerSummaryData.customerNumberSearch = customerSummarySearch;
    this.getCustomerSummaryData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/summary";
    this.http
      .post(this.url, this.getCustomerSummaryData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerSummaryArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  getCustomerFuzzy(customerFuzzySearch: string, tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showFuzzyRows = true;
    // http call to node js server
    this.getCustomerFuzzyData.customerfuzzySearch = customerFuzzySearch;
    this.getCustomerFuzzyData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/search";
    this.http
      .post(this.url, this.getCustomerFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------

  getPartDetails(
    orderNumberSearch: string,
    invoiceNumberSearch: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showPartDetailsRows = true;

    // http call to node js server
    this.getPartDetailsData.orderNumberSearch = orderNumberSearch;
    this.getPartDetailsData.invoiceNumberSearch = invoiceNumberSearch;
    this.getPartDetailsData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/sales/PartDetails";
    this.http
      .post(this.url, this.getPartDetailsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.partDetailsSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  createCashCustomer(
    branch: string,
    firstName: string,
    surname: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    secContactName: string,
    secContactPhone: string,
    marketingOptInYN: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.createCashCustomerData.branch = branch;
    this.createCashCustomerData.firstName = firstName;
    this.createCashCustomerData.surname = surname;
    this.createCashCustomerData.email = email;
    this.createCashCustomerData.phone = phone;
    this.createCashCustomerData.phoneType = phoneType;
    this.createCashCustomerData.addressLine1 = addressLine1;
    this.createCashCustomerData.addressLine2 = addressLine2;
    this.createCashCustomerData.suburb = suburb;
    this.createCashCustomerData.state = state;
    this.createCashCustomerData.postCode = postCode;
    this.createCashCustomerData.country = country;
    this.createCashCustomerData.secContactName = secContactName;
    this.createCashCustomerData.secContactPhone = secContactPhone;
    this.createCashCustomerData.marketingOptInYN = marketingOptInYN;
    this.createCashCustomerData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/CreateCashCustomer";
    this.http
      .post(this.url, this.createCashCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.newCustomer = responseData.CustomerNumber;
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateCashCustomer(
    customerNumber: string,
    branch: string,
    firstName: string,
    surname: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    secContactName: string,
    secContactPhone: string,
    marketingOptInYN: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateCashCustomerData.customerNumber = customerNumber;
    this.updateCashCustomerData.branch = branch;
    this.updateCashCustomerData.firstName = firstName;
    this.updateCashCustomerData.surname = surname;
    this.updateCashCustomerData.email = email;
    this.updateCashCustomerData.phone = phone;
    this.updateCashCustomerData.phoneType = phoneType;
    this.updateCashCustomerData.addressLine1 = addressLine1;
    this.updateCashCustomerData.addressLine2 = addressLine2;
    this.updateCashCustomerData.suburb = suburb;
    this.updateCashCustomerData.state = state;
    this.updateCashCustomerData.postCode = postCode;
    this.updateCashCustomerData.country = country;
    this.updateCashCustomerData.secContactName = secContactName;
    this.updateCashCustomerData.secContactPhone = secContactPhone;
    this.updateCashCustomerData.marketingOptInYN = marketingOptInYN;
    this.updateCashCustomerData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/UpdateCashCustomer";
    this.http
      .post(this.url, this.updateCashCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  createShipToCustomer(
    soldTo: string,
    branch: string,
    name: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    defaultBillTo: string,
    delInstructions1: string,
    delInstructions2: string,
    zone: string,
    carrier: string,
    route: string,
    freightHandlingCode: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.createShipToCustomerData.soldTo = soldTo;
    this.createShipToCustomerData.branch = branch;
    this.createShipToCustomerData.name = name;
    this.createShipToCustomerData.email = email;
    this.createShipToCustomerData.phone = phone;
    this.createShipToCustomerData.phoneType = phoneType;
    this.createShipToCustomerData.addressLine1 = addressLine1;
    this.createShipToCustomerData.addressLine2 = addressLine2;
    this.createShipToCustomerData.suburb = suburb;
    this.createShipToCustomerData.state = state;
    this.createShipToCustomerData.postCode = postCode;
    this.createShipToCustomerData.country = country;
    this.createShipToCustomerData.defaultBillTo = defaultBillTo;
    this.createShipToCustomerData.delInstructions1 = delInstructions1;
    this.createShipToCustomerData.delInstructions2 = delInstructions2;
    this.createShipToCustomerData.zone = zone;
    this.createShipToCustomerData.carrier = carrier;
    this.createShipToCustomerData.route = route;
    this.createShipToCustomerData.freightHandlingCode = freightHandlingCode;
    this.createShipToCustomerData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/customer/CreateShipToCustomer";
    this.http
      .post(this.url, this.createShipToCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.newCustomerShipTo = responseData.CustomerNumber;
        this.errorMessageShipTo = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessageShipTo = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateShipToCustomer(
    customerNumber: string,
    soldTo: string,
    branch: string,
    name: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    defaultBillTo: string,
    delInstructions1: string,
    delInstructions2: string,
    zone: string,
    carrier: string,
    route: string,
    freightHandlingCode: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateShipToCustomerData.soldTo = soldTo;
    this.updateShipToCustomerData.branch = branch;
    this.updateShipToCustomerData.name = name;
    this.updateShipToCustomerData.email = email;
    this.updateShipToCustomerData.phone = phone;
    this.updateShipToCustomerData.phoneType = phoneType;
    this.updateShipToCustomerData.addressLine1 = addressLine1;
    this.updateShipToCustomerData.addressLine2 = addressLine2;
    this.updateShipToCustomerData.suburb = suburb;
    this.updateShipToCustomerData.state = state;
    this.updateShipToCustomerData.postCode = postCode;
    this.updateShipToCustomerData.country = country;
    this.updateShipToCustomerData.defaultBillTo = defaultBillTo;
    this.updateShipToCustomerData.delInstructions1 = delInstructions1;
    this.updateShipToCustomerData.delInstructions2 = delInstructions2;
    this.updateShipToCustomerData.zone = zone;
    this.updateShipToCustomerData.carrier = carrier;
    this.updateShipToCustomerData.route = route;
    this.updateShipToCustomerData.freightHandlingCode = freightHandlingCode;
    this.updateShipToCustomerData.tokenToUse = tokenToUse;
    this.updateShipToCustomerData.customerNumber = customerNumber;

    this.url = "http://localhost:3000/customer/UpdateShipToCustomer";
    this.http
      .post(this.url, this.updateShipToCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageShipTo = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessageShipTo = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  getStateList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showFreightHandlingRows = false;
    this.showStateRows = true;

    // http call to node js server
    this.getStateData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/state";

    this.http
      .post(this.url, this.getStateData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.stateSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------

  getBranchList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showBranchRows = true;
    // http call to node js server
    this.getBranchData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/branch";

    this.http
      .post(this.url, this.getBranchData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.branchSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getOrderSummaryFree(
    customerNumber: string,
    branch: string,
    orderType: string,
    orderStatus: string,
    fitOrderYN: string,
    enteredBy: string,
    customerChannel: string,
    customerPo: string,
    heldOrderFlag10: string,
    ordDateFrom: string,
    ordDateTo: string,
    invDateFrom: string,
    invDateTo: string,
    reqDateFrom: string,
    reqDateTo: string,
    vehicleGroupString: string,
    vehicleID: string,
    vehicleRego: string,
    orderNumber: string,
    invoiceNumber: string,
    partNumber: string,
    productGroup: string,
    revenueBunit: string,
    maxCloseOrders: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showOrderSummaryFreeRows = true;
    // http call to node js server
    this.getOrderSummaryFreeData.customerNumber = customerNumber;
    this.getOrderSummaryFreeData.branch = branch;
    this.getOrderSummaryFreeData.orderType = orderType;
    this.getOrderSummaryFreeData.orderStatus = orderStatus;
    this.getOrderSummaryFreeData.fitOrderYN = fitOrderYN;
    this.getOrderSummaryFreeData.enteredBy = enteredBy;
    this.getOrderSummaryFreeData.customerChannel = customerChannel;
    this.getOrderSummaryFreeData.customerPo = customerPo;
    this.getOrderSummaryFreeData.heldOrderFlag10 = heldOrderFlag10;
    this.getOrderSummaryFreeData.ordDateFrom = ordDateFrom;
    this.getOrderSummaryFreeData.ordDateTo = ordDateTo;
    this.getOrderSummaryFreeData.invDateFrom = invDateFrom;
    this.getOrderSummaryFreeData.invDateTo = invDateTo;
    this.getOrderSummaryFreeData.reqDateFrom = reqDateFrom;
    this.getOrderSummaryFreeData.reqDateTo = reqDateTo;
    this.getOrderSummaryFreeData.vehicleGroupString = vehicleGroupString;
    this.getOrderSummaryFreeData.vehicleID = vehicleID;
    this.getOrderSummaryFreeData.vehicleRego = vehicleRego;
    this.getOrderSummaryFreeData.orderNumber = orderNumber;
    this.getOrderSummaryFreeData.invoiceNumber = invoiceNumber;
    this.getOrderSummaryFreeData.partNumber = partNumber;
    this.getOrderSummaryFreeData.productGroup = productGroup;
    this.getOrderSummaryFreeData.revenueBunit = revenueBunit;
    this.getOrderSummaryFreeData.maxCloseOrders = maxCloseOrders;
    this.getOrderSummaryFreeData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/sales/OrderSummary";
    this.http
      .post(this.url, this.getOrderSummaryFreeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.orderSummaryFreeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  maintainBookmark(
    actionCode: string,
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    invoiceNumber: string,
    lineNumber: string,
    comment: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.maintainBookmarkData.actionCode = actionCode;
    this.maintainBookmarkData.orderNumber = orderNumber;
    this.maintainBookmarkData.orderType = orderType;
    this.maintainBookmarkData.orderCompany = orderCompany;
    this.maintainBookmarkData.invoiceNumber = invoiceNumber;
    this.maintainBookmarkData.lineNumber = lineNumber;
    this.maintainBookmarkData.comment = comment;
    this.maintainBookmarkData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/sales/MaintainBookmark";
    this.http
      .post(this.url, this.maintainBookmarkData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageMaintainBookmark = responseData.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateRequestDate(
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    invoiceNumber: string,
    requestDate: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateRequestDateData.orderNumber = orderNumber;
    this.updateRequestDateData.orderType = orderType;
    this.updateRequestDateData.orderCompany = orderCompany;
    this.updateRequestDateData.invoiceNumber = invoiceNumber;
    this.updateRequestDateData.requestDate = requestDate;
    this.updateRequestDateData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/sales/UpdateRequestDate";
    this.http
      .post(this.url, this.updateRequestDateData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageUpdateRequestDate = responseData.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchHierarchy(
    searchString: string,
    year: string,
    make: string,
    model: string,
    generation: string,
    subModel: string,
    chassis: string,
    series: string,
    bodyType: string,
    driveType: string,
    transmissionType: string,
    engineCode: string,
    engineType: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFetchHierarchyRows = true;

    this.fetchHierarchyData.searchString = searchString;
    this.fetchHierarchyData.year = year;
    this.fetchHierarchyData.make = make;
    this.fetchHierarchyData.model = model;
    this.fetchHierarchyData.generation = generation;
    this.fetchHierarchyData.subModel = subModel;
    this.fetchHierarchyData.chassis = chassis;
    this.fetchHierarchyData.series = series;
    this.fetchHierarchyData.bodyType = bodyType;
    this.fetchHierarchyData.driveType = driveType;
    this.fetchHierarchyData.transmissionType = transmissionType;
    this.fetchHierarchyData.engineCode = engineCode;
    this.fetchHierarchyData.engineType = engineType;
    this.fetchHierarchyData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/vehicle/FetchHierarchy";
    this.http
      .post(this.url, this.fetchHierarchyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.fetchHierarchySearchArray = responseData.Vehicles;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  maintainVehicle(
    actionCode: string,
    customerVehicleID: string,
    customerNumber: string,
    vehicleID: string,
    regoNumber: string,
    regoState: string,
    vinNumber: string,
    colourCode: string,
    shortDescription: string,
    dateRetired: string,
    reasonCodeRetired: string,
    defaultFlag: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.maintainVehicleData.actionCode = actionCode;
    this.maintainVehicleData.customerVehicleID = customerVehicleID;
    this.maintainVehicleData.customerNumber = customerNumber;
    this.maintainVehicleData.vehicleID = vehicleID;
    this.maintainVehicleData.regoNumber = regoNumber;
    this.maintainVehicleData.regoState = regoState;
    this.maintainVehicleData.vinNumber = vinNumber;
    this.maintainVehicleData.colourCode = colourCode;
    this.maintainVehicleData.shortDescription = shortDescription;
    this.maintainVehicleData.dateRetired = dateRetired;
    this.maintainVehicleData.reasonCodeRetired = reasonCodeRetired;
    this.maintainVehicleData.defaultFlag = defaultFlag;
    this.maintainVehicleData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/MaintainVehicle";
    this.http
      .post(this.url, this.maintainVehicleData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageMaintainVehicle = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessageMaintainVehicle = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  fetchVehicleList(
    tokenToUse: string,
    customerNumber: string,
    retiredVehicleYN: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFetchVehicleListRows = true;

    // http call to node js server
    this.fetchVehicleListData.tokenToUse = tokenToUse;
    this.fetchVehicleListData.customerNumber = customerNumber;
    this.fetchVehicleListData.retiredVehicleYN = retiredVehicleYN;

    this.url = "http://localhost:3000/customer/FetchVehicleList";

    this.http
      .post(this.url, this.fetchVehicleListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.fetchVehicleListSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getCountryList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showCountryRows = true;

    // http call to node js server
    this.getCountryData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/country";

    this.http
      .post(this.url, this.getCountryData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.countrySearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getZoneList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showZoneRows = true;

    // http call to node js server
    this.getZoneData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/zone";

    this.http
      .post(this.url, this.getZoneData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.zoneSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getRouteList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showRouteRows = true;

    // http call to node js server
    this.getRouteData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/route";

    this.http
      .post(this.url, this.getRouteData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.routeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getFreightHandlingList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFreightHandlingRows = true;

    // http call to node js server
    this.getFreightHandlingData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/FreightHandling";

    this.http
      .post(this.url, this.getFreightHandlingData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.freightHandlingSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getColoursList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showColoursRows = true;

    // http call to node js server
    this.getColoursData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/colours";

    this.http
      .post(this.url, this.getColoursData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.coloursSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getCarrierList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;

    // http call to node js server
    this.getCarrierData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/carrier";

    this.http
      .post(this.url, this.getCarrierData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.carrierSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  getPhoneTypeList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;
    this.showVehicleRetiredReasonRows = false;
    this.showPhoneTypeRows = true;

    // http call to node js server
    this.getPhoneTypeData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/PhoneType";

    this.http
      .post(this.url, this.getPhoneTypeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.phoneTypeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getOrderTypeList(tokenToUse: string) {
    // show search rows
    this.showOrderTypeRows = true;

    // http call to node js server
    this.getOrderTypeData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/OrderType";

    this.http
      .post(this.url, this.getOrderTypeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.orderTypeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getProductGroupList(tokenToUse: string) {
    // show search rows
    this.showProductGroupRows = true;

    // http call to node js server
    this.getProductGroupData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/ProductGroup";

    this.http
      .post(this.url, this.getProductGroupData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.productGroupSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getCustomerChannelList(tokenToUse: string) {
    // show search rows
    this.showCustomerChannelRows = true;

    // http call to node js server
    this.getCustomerChannelData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/CustomerChannel";

    this.http
      .post(this.url, this.getCustomerChannelData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerChannelSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getEnteredByList(tokenToUse: string) {
    // show search rows
    this.showEnteredByRows = true;

    // http call to node js server
    this.getEnteredByData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/EnteredBy";

    this.http
      .post(this.url, this.getEnteredByData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.enteredBySearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getVehicleRetiredReasonList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;
    this.showPhoneTypeRows = true;
    this.showVehicleRetiredReasonRows = true;

    // http call to node js server
    this.getVehicleRetiredReasonData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/VehicleRetiredReason";

    this.http
      .post(this.url, this.getVehicleRetiredReasonData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.vehicleRetiredReasonSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getDuplicateCustomerFuzzy(
    fullName: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    address1: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = true;
    // http call to node js server
    this.getDuplicateCustomerFuzzyData.fullName = fullName;
    this.getDuplicateCustomerFuzzyData.firstName = firstName;
    this.getDuplicateCustomerFuzzyData.lastName = lastName;
    this.getDuplicateCustomerFuzzyData.phoneNumber = phoneNumber;
    this.getDuplicateCustomerFuzzyData.email = email;
    this.getDuplicateCustomerFuzzyData.address1 = address1;

    this.getDuplicateCustomerFuzzyData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/customer/DuplicateCustomerSearch";
    this.http
      .post(this.url, this.getDuplicateCustomerFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.duplicateCustomerSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------
  getItemFuzzy(itemFuzzySearch: string, tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showFuzzyRows = false;
    this.showItemFuzzyRows = true;
    // http call to node js server
    this.getItemFuzzyData.searchString = itemFuzzySearch;
    this.getItemFuzzyData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/item/ItemSearch";
    this.http
      .post(this.url, this.getItemFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.itemSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  registerExternalUserPublic(email: string, name: string, postCode: string) {
    // http call to node js server
    this.registerExternalUserPublicData.email = email;
    this.registerExternalUserPublicData.name = name;
    this.registerExternalUserPublicData.postCode = postCode;
    this.url = "http://localhost:3000/user/RegisterExternalUserPublic";
    this.http
      .post(this.url, this.registerExternalUserPublicData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  registerExternalUserDealer(
    email: string,
    name: string,
    parentCustomer: string,
    effectiveDate: string,
    expiryDate: string,
    nodeToken: string
  ) {
    // http call to node js server
    this.registerExternalUserDealerData.email = email;
    this.registerExternalUserDealerData.name = name;
    this.registerExternalUserDealerData.parentCustomer = parentCustomer;
    this.registerExternalUserDealerData.effectiveDate = effectiveDate;
    this.registerExternalUserDealerData.expiryDate = expiryDate;
    this.registerExternalUserDealerData.nodeToken = nodeToken;

    this.url = "http://localhost:3000/user/RegisterExternalUserDealer";
    this.http
      .post(this.url, this.registerExternalUserDealerData, {
        headers: new HttpHeaders().set("tokenToUse", nodeToken),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  resetUserPassword(email: string, oldPassword: string, newPassword: string) {
    // http call to node js server
    this.resetUserPasswordData.email = email;
    this.resetUserPasswordData.oldPassword = oldPassword;
    this.resetUserPasswordData.newPassword = newPassword;

    this.url = "http://localhost:3000/user/ResetUserPassword";
    this.http
      .post(this.url, this.resetUserPasswordData)
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  getSecurityFunctionList(tokenToUse: string, type: string) {
    // http call to node js server
    this.getSecurityFunctionListData.type = type;
    this.url = "http://localhost:3000/lists/FetchSecurityFunctionList";
    this.http
      .post(this.url, this.getSecurityFunctionListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.securityFunctionSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getJDEUsersList(tokenToUse: string, userFilter: string) {
    // http call to node js server
    this.getJDEUsersListData.userFilter = userFilter;
    this.url = "http://localhost:3000/user/FetchJDEUsers";
    this.http
      .post(this.url, this.getJDEUsersListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jdeUsersSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-----------------------------------------------
  //-----------------------------------------------

  //-------------------------------------------
  custKeySearch(event: any) {
    this.keyStrokeValue = event.target.value;
    this.getCustomerFuzzy(this.keyStrokeValue, this.tokenString);
  }
  //-------------------------------------------
}
