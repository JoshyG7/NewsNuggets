    let moreInfo=document.querySelector(".moreInfo");
    let info=document.querySelector(".info");
    let headingSearch=document.querySelector(".heading input");
    let searchButton=document.querySelector(".searchButton");
    let resultInfo= document.querySelector(".result span");
    let heading=document.querySelector(".heading");
    let result=document.querySelector(".result");
    let watherImage=document.querySelector(".watherImage");



    let data;
    let i=0,j=8,d;
    let infoName="india";
    let title;
    heading.style.visibility = "hidden";
    result.style.visibility = "hidden";
    info.style.visibility = "hidden";
    moreInfo.style.visibility = "hidden";
    function showData(){
        if(j<=d){
        while(i < j && i < data.articles.length){
            info.innerHTML+=`<div class="box">
            <img src="${data.articles[i].image}">
            <h1>${data.articles[i].title}</h1><br>
            <p style="color: rgb(177, 94, 209);">Source: ${data.articles[i].source.name}</p>
            </div>`;    
            i++;
        }
        j+=8;
        getclick();
    }else{
        alert("There is no Further Information.");
    }
    watherImage.style.visibility = "hidden";
    heading.style.visibility = "visible";
    result.style.visibility = "visible";
    info.style.visibility = "visible";
    moreInfo.style.visibility = "visible";
    }
    const getInto=async()=>{
    watherImage.style.visibility = "visible";
    heading.style.visibility = "hidden";
    result.style.visibility = "hidden";
    info.style.visibility = "hidden";
    moreInfo.style.visibility = "hidden";
        searchUrl=`https://gnews.io/api/v4/search?q=${infoName}&token=47e0c51ee200bce2ff8b8203cb090099`;
        let respone= await fetch(searchUrl);
        data=await respone.json();
        d=data.articles.length;
        resultInfo.innerText=data.articles.length-2; 
        showData();
    }
    getInto();
    moreInfo.addEventListener("click",()=>{
    showData();
    });


    function getclick() {
    let boxes=document.querySelectorAll(".box");
    boxes.forEach((box,index)=>{
        box.addEventListener("click",()=>{

            localStorage.setItem("publishedAt",data.articles[index].publishedAt);
            localStorage.setItem("source",data.articles[index].source.name);
            localStorage.setItem("author",data.articles[index].author);
            localStorage.setItem('sharedText', data.articles[index].title);
            localStorage.setItem("description",data.articles[index].description);
            localStorage.setItem("content",data.articles[index].content);
            localStorage.setItem("information",data.articles[index].image);
                localStorage.setItem("url",data.articles[index].url);
                window.location.href = 'newsInfo.html';
        });
    });
}

searchButton.addEventListener("click",()=>{
    infoName=headingSearch.value;
    headingSearch.value="";
    info.innerHTML = '';
        i = 0; // Reset the index to 0 for new search results
        j = 8; // Reset the batch size for new search results
    getInto();
});
headingSearch.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
        infoName=headingSearch.value;
        headingSearch.value="";
        info.innerHTML = '';
        i = 0; // Reset the index to 0 for new search results
        j = 8; // Reset the batch size for new search results
        getInto();
    }
})
