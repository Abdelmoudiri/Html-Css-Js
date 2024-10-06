let contacts=[];



let EventButton = document.getElementById("btnAjouter").onclick=function func(){

    let nom=document.getElementById("txtNom").value;
    let telefone=document.getElementById("txttelefone").value;
    let email=document.getElementById("txtemail").value;
    ajout(nom,telefone,email);
    afficher();
    document.getElementById("txtNom").value = "";
    document.getElementById("txttelefone").value = "";
    document.getElementById("txtemail").value = "";
};

let AfButton = document.getElementById("btnAfficher").onclick=afficher;

function afficher()
{
    let tableBody = document.getElementById("TableAffiche").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    for(let i=0;i<contacts.length;i++) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = contacts[i].name;
        row.insertCell(1).textContent = contacts[i].mobile;
        row.insertCell(2).textContent = contacts[i].Email;
    };

}; 

let btnSuprimer=document.getElementById("btnSuprimmer").onclick=function suprimmer()
{
    let recherche=document.getElementById("recherche").value;
    let trouve=find(recherche);
    if(trouve!==-1)
    {
        contacts.splice(trouve, 1);
    }else{alert("ne trouve pas");}
    afficher(); 
}

let btnModifier=document.getElementById("btnModifier").onclick=function modifier()
{
    let recherche=document.getElementById("recherche").value;
    let trouve=find(recherche);
    document.getElementById("txtNom").value = contacts[trouve].name;
    contacts[trouve].mobile=document.getElementById("txttelefone").value;
    contacts[trouve].Email=document.getElementById("txtemail").value;
    afficher();
}
let serachbtn=document.getElementById("btnRecherche").onclick=function rech()
{
    let recherche=document.getElementById("recherche").value;
    let trouve=find(recherche);
    if(trouve!==-1)
    {   document.getElementById("txtNom").value = contacts[trouve].name;
        document.getElementById("txttelefone").value=contacts[trouve].mobile;
        document.getElementById("txtemail").value=contacts[trouve].Email;
    }else
    alert("ne trouve pas");
}
function ajout(nom,telefone,email)
{
    const user1 = {
        name: nom,
        mobile: telefone,
        Email: email
      };
      contacts.push(user1);
}

function find(rech)
{
    let tr=-1;
    for(let i=0;i<contacts.length;i++)
        {
            if(contacts[i].name===rech)
            {
                tr=i;
                return tr;
            }
        }
        return tr;
}
