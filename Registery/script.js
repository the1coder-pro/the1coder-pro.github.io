function Check() {
    //variables
    var InpuText = document.getElementById('RegText').value;
    var InpuPass = document.getElementById('RegPass').value;
    var Name = document.getElementById('name');
    var Job = document.getElementById('job');
    var Id = document.getElementById('id');
    //Accounts
    var Mutawa = {name:"Mutawa", id:'A0', job:"Developer", password:"M2M1"}
    var Ahmed = {name:"Ahmed", id:"C2", job:"Gamer", password:"Ah12"}
    var Ali = {name:"Ali", id:"B1", job:"Drawer", password:"Ali2"}
    //Checking
    //Mutawa
    if(InpuText == Mutawa.name && InpuPass == Mutawa.password){
        console.log("Your Are Mutawa And Your Are a " + Mutawa.job)
        Name.innerHTML = "Name : " + Mutawa.name;
        Job.innerHTML = "Job : " + Mutawa.job;
        Id.innerHTML = "Id : " + Mutawa.id;
        //Ahmed
    }else if (InpuText == Ahmed.name && InpuPass == Ahmed.password){
        console.log("Your Are Ahmed And Your Are a " + Ahmed.job)
        Name.innerHTML = "Name : " + Ahmed.name;
        Job.innerHTML = "Job : " + Ahmed.job;
        Id.innerHTML = "Id : " + Ahmed.id;
        //Ali
    }else if (InpuText == Ali.name && InpuPass == Ali.password){
        console.log("Your Are Ali And Your Are a " + Ali.job)
        Name.innerHTML = "Name : " + Ali.name + " Sami";
        Job.innerHTML = "Job : " + Ali.job;
        Id.innerHTML = "Id : " + Ali.id;
    }
}