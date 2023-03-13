export class UsersService{
   users = [
    {id:'u1', name:'Harry'},
    {id:'u2', name:'Sarah'},
    {id:'u3', name:'Angela'},
  ]

  getUsers(){
    return this.users;
  }

  getUserById(id:string){
    return this.users.filter((item)=>{
      return item.id === id; 
    })[0]
  }

}