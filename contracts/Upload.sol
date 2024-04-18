pragma solidity >= 0.5.2;


contract Upload {
  
  struct Access{
     address user; 
     bool access; //true or false
  }
  struct Person{
    address user;
    string[] Access;
  }
  mapping(address=>string[]) value;
  mapping(address=>string[])friends;
  mapping(address=>Person)person;
  mapping(address=>mapping(address=>bool)) ownership;
  mapping(address=>Access[]) accessList;
  mapping(address=>mapping(address=>bool)) previousData;

  function add(address _user,string memory url) external {
      value[_user].push(url);
  }
  function allow(address user) external {//def
    //   ownership[msg.sender][user]=true; 
      if(previousData[msg.sender][user]){
         for(uint i=0;i<accessList[msg.sender].length;i++){
             if(accessList[msg.sender][i].user==user){
                  accessList[msg.sender][i].access=true; 
             }
         }
      }else{
          accessList[msg.sender].push(Access(user,true));  
          previousData[msg.sender][user]=true;  
      }
    
  }
  function disallow(address user) public{
      ownership[msg.sender][user]=false;
      for(uint i=0;i<accessList[msg.sender].length;i++){
          if(accessList[msg.sender][i].user==user){ 
              accessList[msg.sender][i].access=false;  
          }
      }
  }

      function display(address _user) external view returns(string[] memory){
      require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access");
      return value[_user];
  }
//   function display(address user) external view returns(string memory){
//     if(user==msg.sender || ownership[user][msg.sender]){
// 
//     }else{
        
//     }
    //   require(user==msg.sender || ownership[user][msg.sender],"You don't have access");
      
    function AccessFriends() public view returns(string[] memory){
        return person[msg.sender].Access;
    }
    function MyFriends() public view returns(string[] memory){
        return friends[msg.sender];
    }

  function shareAccess() public view returns(Access[] memory){
      return accessList[msg.sender];
  }
}