import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const API_ELITE_BANK = 'http://localhost:3000';
const KEY = 'AIzaSyDqPL0zdSQlM';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);
  correntUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(account, password) {
    return new Promise((resolve, reject) => {
      resolve({
      account: "98765",
      token: "eyJhbGciOiJSUzI1NiIsImtpZCI6InNrSUJOZyJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImdhbWEtYW5ndWxhci1jMWNkZSIsImlhdCI6MTU2MjY5NTM0NiwiZXhwIjoxNTYzOTA0OTQ2LCJ1c2VyX2lkIjoiZVlhY2k4eWVjWWVoVUNIa2pYNEVjSVN1anJRMiIsImVtYWlsIjoiZ3V0bzc2MjZAaG90bWFpbC5jb20iLCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQiLCJ2ZXJpZmllZCI6ZmFsc2V9.JHCjLoK-iL_q7nIBlVmHSH3Kg_NotpfndI-lpqXQ6-kQUIAjdwK01GRrb_rUt33LbXbNtCnH3vSGLNf65yd6BNx4Pt3GAcdqzp6Pa5w1lmErrihRW6y8e1GMfXMkQRkdNmQ_1pTjgKNIXGTSOj9g4EfdpQe0nVRYkcay61u533RwLGoSsDlUEDuZCu6vZ5C5PEnrzb25ysPbaGohfK1c-mKqZed26rsLRtz1IyeNbHCPC1QibCvgaXRw-V3ozSwHs5P8yDeOyTMFZGEh7OPAhMpqO9Q85rHHPruTDuO9c4sS_aecWDRvnpuXFS2eb7oiXtMJGy9vz_AypwVpzZSCnw",
      email: "elite_bank@elite.com",
      name: "Correntista da Silva"});

      reject({result: 'Houve erro'});
    });
    // return this.httpClient.post(`${API_ELITE_BANK}/verifyPassword?key=${KEY}`, {
    //   account,
    //   password
    // });
  };

  createAccount(account, password) {
    // return this.httpClient.post(`${API_ELITE_BANK}/signupNewUser?key=${KEY}`, {
    //   account: account,
    //   password: password
    // });
  };

  setUser(user) {
    this.pUser.next(user);
  };

  checkToken(token) {
    return new Promise((resolve, reject) => {
      resolve({
      account: "98765",
      token: "eyJhbGciOiJSUzI1NiIsImtpZCI6InNrSUJOZyJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImdhbWEtYW5ndWxhci1jMWNkZSIsImlhdCI6MTU2MjY5NTM0NiwiZXhwIjoxNTYzOTA0OTQ2LCJ1c2VyX2lkIjoiZVlhY2k4eWVjWWVoVUNIa2pYNEVjSVN1anJRMiIsImVtYWlsIjoiZ3V0bzc2MjZAaG90bWFpbC5jb20iLCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQiLCJ2ZXJpZmllZCI6ZmFsc2V9.JHCjLoK-iL_q7nIBlVmHSH3Kg_NotpfndI-lpqXQ6-kQUIAjdwK01GRrb_rUt33LbXbNtCnH3vSGLNf65yd6BNx4Pt3GAcdqzp6Pa5w1lmErrihRW6y8e1GMfXMkQRkdNmQ_1pTjgKNIXGTSOj9g4EfdpQe0nVRYkcay61u533RwLGoSsDlUEDuZCu6vZ5C5PEnrzb25ysPbaGohfK1c-mKqZed26rsLRtz1IyeNbHCPC1QibCvgaXRw-V3ozSwHs5P8yDeOyTMFZGEh7OPAhMpqO9Q85rHHPruTDuO9c4sS_aecWDRvnpuXFS2eb7oiXtMJGy9vz_AypwVpzZSCnw",
      email: "elite_bank@elite.com ",
      name: "Correntista da Silva"});

      reject({result: 'Houve erro'});
    });
    // return this.httpClient.post(`${API_ELITE_BANK}/getAccountInfo?key=${KEY}`, {
    //   idToken: token
    // });
  };

  logout() {
    localStorage.removeItem('token');
    this.setUser(null);
  };

}
