export class AuthService{
  isLoggedIn:boolean = false;

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }

  isAuthenticated(){
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        res(this.isLoggedIn)
      }, 800)
    })
  }

}