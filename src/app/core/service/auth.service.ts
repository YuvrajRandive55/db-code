import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/auth.models';
import { loggedInUser } from '../helpers/utils';
import { environment } from '../../../environments/environment';

//let baseurl = environment.baseUrl;
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User | null = null;
    baseurl:string = environment.baseUrl
    constructor (private http: HttpClient) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User | null {
        if (!this.user) {
            this.user = loggedInUser();
        }
        return this.user;
    }

    /**
     * Performs the login auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string): any {

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        //return user;
       return this.http.post<any>(this.baseurl +`/Home/Login`, formData)
            .pipe(map(user => {
               // console.log(user)
                if(user.error==false)
                {
                    this.user = user.ulogin;
                    console.log(this.user);
                        // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                // login successful if there's a jwt token in the response
                // if (user.ulogin && user.ulogin['token']) {
                //     this.user = user;
                //     // store user details and jwt in session
                //     sessionStorage.setItem('currentUser', JSON.stringify(user));
                   
                // }
                return user;
            }));             
    }

    GetAll(): any {
        //return user;
       return this.http.post<any>(this.baseurl +`/Home/Login2`, { })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                   
                }
                return user;
            }));             
    }


   

    /**
     * Performs the signup auth
     * @param name name of user
     * @param email email of user
     * @param password password of user
     */
    signup(name: string, email: string, password: string): any {
        return this.http.post<any>(`/api/signup`, { name, email, password })
            .pipe(map(user => user));

    }



    /**
     * Logout the user
     */
    logout(): void {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
        this.user = null;
    }

    //############# Other Services ########
    category_Dropdown(): any {
        //return user;
       return this.http.post<any>(this.baseurl +`/home/get-categories`, {  })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                   
                }
                return user;
            }));             
    }
    bindReport_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/report-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindRegion_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/region-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                   
                }
                return user;
            }));             
    }
    bindCity_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/country-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }


    bindSegment_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/segment-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindIndicationL1_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/indication-l1-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindIndicationL2_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/indication-l2-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindIndicationL3_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/indication-l3-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindIndicationL4_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/indication-l4-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    bindIndicationL5_Dropdown(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string) {
        const formData = new FormData();
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
        //return user;
       return this.http.post<any>(this.baseurl +`/home/indication-l5-dropdown`, formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }

    get_report_list(url:string, searchType:string, cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string): any {
        //return user;
        if(url=="")
        {
            url="/home/get-report-filter-data";
        }
        const formData = new FormData();
        
        formData.append("searchType", searchType);
        formData.append("cate", cate);
        formData.append("reportName", reportStri);
        formData.append("region", regionStri);
        formData.append("country", countryStri);
        formData.append("segment", segmentStri);
        formData.append("indicationL1", indicationL1Stri);
        formData.append("indicationL2", indicationL2Stri);
        formData.append("indicationL3", indicationL3Stri);
        formData.append("indicationL4", indicationL4Stri);
        formData.append("indicationL5", indicationL5Stri);
       return this.http.post<any>(this.baseurl +url +'?page=1&rows=300', formData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user.rows;
            }));             
    }


    get_report_listOld(cate: string,reportStri:string,regionStri:string, countryStri:string,segmentStri:string,indicationL1Stri:string,indicationL2Stri:string,indicationL3Stri:string,indicationL4Stri:string,indicationL5Stri:string): any {
        //return user;
       return this.http.get<any>(`http://databridgereport.com/Admin/ReportsFilters/GetReport?page=1&rows=1000&SheetTypeID=1&ReportID=2&RegionID=2`, {  })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.ulogin && user.ulogin['token']) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                   
                }
                return user;
            }));             
    }
}

