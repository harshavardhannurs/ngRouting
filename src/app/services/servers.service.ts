export class ServersService{
  servers = [
    {id:1, name:'Production Server', status:'Online'},
    {id:2, name:'Development Server', status:'Offline'},
    {id:3, name:'Test Server', status:'Unavailable'}
  ]

  getServers(){
    return this.servers;
  }

  getServerById(id:number){
    return this.servers.filter((item)=>{
      return item.id === id;
    })[0]
  }

  updateServerStatus(id:number, status:string){
    const index = this.servers.findIndex((item)=>{
      return item.id === id;
    })
    this.servers[index].status = status;
  }

}

