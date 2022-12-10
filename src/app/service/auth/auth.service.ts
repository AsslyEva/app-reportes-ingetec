// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { User } from 'src/app/model/auth/user';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private _user: User | null = null;
//   private _token: string | null = null;

//   private jwtservice: JwtHelperService = new JwtHelperService();

//   constructor(
//     private http: HttpClient,
//     private router: Router
//   ) { }

//   public get usuario(): User {

//     if (this._user != null) {
//       return this._user;
//     } else if ( this._user == null && localStorage.getItem("userDejandoHuellas") != null ) {
//       this._user = JSON.parse(
//         String(localStorage.getItem("userDejandoHuellas"))
//       ) as User;
//       return this._user;
//     }
//     return new User();

//   }

//   public get token(): string | null {
//     if (this._token != null) {
//       return this._token;
//     } else if (
//       this._token == null &&
//       localStorage.getItem("tokenDejandoHuellas") != null
//     ) {
//       this._token = String(localStorage.getItem("tokenDejandoHuellas"));
//       return this._token;
//     }
//     return null;
//   }

//   login(user: string, password: string): Observable<any> {
//     const urlEndpoint = environment.urlEndPoint + "oauth/token";
//     const credenciales = btoa("dhuellas1," + ":" + "Sunarp1,");
//     const httpHeaders = new HttpHeaders({
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Basic " + credenciales,
//     });
//     let params = new URLSearchParams();
//     params.set("username", user.toUpperCase());
//     params.set("password", password);
//     params.set("grant_type", "password");
//     return this.http.post<any>(urlEndpoint, params.toString(), {
//       headers: httpHeaders,
//     });
//   }

//   saveToken(accesstoken: string): void {
//     this._token = accesstoken;
//     localStorage.setItem("tokenDejandoHuellas", accesstoken);
//   }

//   saveUser(accesstoken: string): void {
//     let payload = this.obtenerDatosToken(accesstoken);
//     this._user = new User();
//     this._user.userCode = payload.co_usu;
//     this._user.dni = payload.lib_elect;
//     this._user.fullName = payload.nombre_completo;
//     this._user.name = payload.nombre;
//     this._user.fatherLastName = payload.paterno;
//     this._user.motherLastName = payload.materno;
//     this._user.contactNumber = payload.telf_cel;
//     this._user.email = payload.correo;
//     this._user.networkUser = payload.usuario_red;
//     this._user.zone = payload.zona;
//     this._user.area = payload.area;
//     this._user.areaCode = payload.co_area;
//     this._user.gender = payload.sexo;
//     this._user.authorities = payload.authorities;
//     localStorage.setItem("userDejandoHuellas", JSON.stringify(this._user));
//   }

//   obtenerDatosToken( accesstoken: any ): any {
//     if (accesstoken != null) {
//       return this.jwtservice.decodeToken(accesstoken);
//     }
//     return null;
//   }

//   logout () {
//     this.router.navigate(["/login"]);
//     this._token = null;
//     localStorage.removeItem("userDejandoHuellas");
//     localStorage.removeItem("tokenDejandoHuellas");
//   }

//   isAuthenticated () {
//     let payload = this.obtenerDatosToken(this.token);
//     if (payload != null && payload.user_name && payload.user_name.length > 0) {
//       return true;
//     }
//     return false;
//   }

// }
