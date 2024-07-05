    let moreInfo=document.querySelector(".moreInfo");
    let info=document.querySelector(".info");
    let headingSearch=document.querySelector(".heading input");
    let searchButton=document.querySelector(".searchButton");
    let resultInfo= document.querySelector(".result span");
    let heading=document.querySelector(".heading");
    let result=document.querySelector(".result");
    let watherImage=document.querySelector(".watherImage");
    let information=document.querySelector(".information");
    let AdditionalFeatures=document.querySelector(".AdditionalFeatures");
    let AboutandContact=document.querySelector(".AboutandContact");
    let Categories=document.querySelector(".Categories");

    let data;
    let i=0,j=6,d;
    let infoName="naruto";
    let title;
    result.style.visibility = "hidden";
    info.style.visibility = "hidden";
    moreInfo.style.visibility = "hidden";
    function showData(){
        if(j<=d){
            if(i<6){
                while(i < j && i < data.articles.length){
                    info.innerHTML+=`<div class="box">
                    <img src="${data.articles[i].image}">
                    <h1>${data.articles[i].title}</h1><br>
                    <p style="color: rgb(177, 94, 209);">Source: ${data.articles[i].source.name}</p>
                    </div>`;    
                    i++;
                }
    }else if(i>=6){
        while(i < j && i < data.articles.length){
            info.innerHTML+=`<div class="box">
            <img src="${data.articles[i].image}">
            <h1>${data.articles[i].title}</h1><br>
            <p style="color: rgb(177, 94, 209);">Source: ${data.articles[i].source.name}</p>
            </div>`;    
            i++;
        }
        j=data.data.length;
    }
    j+=2;
    console.log(j);
        getclick();
    }
    else{
        alert("There is no Further Information.");
    }
    watherImage.style.visibility = "hidden";
    result.style.visibility = "visible";
    info.style.visibility = "visible";
    moreInfo.style.visibility = "visible";
    }
    const getInto=async()=>{
    watherImage.style.visibility = "visible";
    result.style.visibility = "hidden";
    info.style.visibility = "hidden";
    moreInfo.style.visibility = "hidden";
        searchUrl=`https://gnews.io/api/v4/search?q=${infoName}&token=47e0c51ee200bce2ff8b8203cb090099`;
        let respone= await fetch(searchUrl);
        data=await respone.json();
        d=data.articles.length;
        resultInfo.innerText=data.articles.length;
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
            Categories.style.visibility = "hidden";
            AboutandContact.style.visibility = "hidden";
            AdditionalFeatures.style.visibility = "hidden";
            result.style.visibility = "hidden";
            info.style.visibility = "hidden";
            moreInfo.style.visibility = "hidden";
            heading.style.visibility="hidden";
            info.style.position="fixed";
            information.style.visibility="visible";
            document.querySelector(".publishedAt span").innerText=data.articles[index].publishedAt;
            document.querySelector(".source span").innerText=data.articles[index].source.name;
            document.querySelector(".author span").innerText=data.articles[index].author;
            document.querySelector(".title").innerText = data.articles[index].title;
            document.querySelector(".description").innerText=data.articles[index].description;
            document.querySelector(".content span").innerText=data.articles[index].content;
            document.querySelector(".information img").src=data.articles[index].image;
            document.querySelector(".url").href=data.articles[index].url;
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

information.querySelector(".remove").addEventListener("click",()=>{
    Categories.style.visibility = "visible";
    AboutandContact.style.visibility = "visible";
    AdditionalFeatures.style.visibility = "visible";
    result.style.visibility = "visible";
    info.style.visibility = "visible";
    moreInfo.style.visibility = "visible";
    heading.style.visibility="visible";
    info.style.position="static";
    information.style.visibility="hidden";
});

let item=document.querySelectorAll(".item");
item.forEach((itemInfo,index)=>{
    itemInfo.addEventListener("click",()=>{
        infoName=itemInfo.innerText;
        info.innerHTML = '';
        i=0,j=8;
        getInto();
    })
})

function forAbout(){
    AboutandContact.querySelector(".AboutandContact ul").classList.toggle("showing");
}
function forAdditional(){
    AdditionalFeatures.querySelector(".AdditionalFeatures ul").classList.toggle("showing");
}
AdditionalFeatures.querySelector(".Additional").addEventListener("click",()=>{
    AdditionalFeatures.querySelector(".AdditionalFeatures ul").classList.toggle("showing");
})

AboutandContact.querySelector(".about").addEventListener("click",()=>{
    AboutandContact.querySelector(".AboutandContact ul").classList.toggle("showing");
})

let item1=document.querySelectorAll(".item1");
    item1.forEach((itemInfo,index)=>{
        itemInfo.addEventListener("click",()=>{
            infoName=itemInfo.innerText;
            info.innerHTML = '';
            i=0,j=8;
            forAdditional();
            getInto();
        })
    })

    function blockInfo(){
        Categories.style.visibility = "hidden";
        AboutandContact.style.visibility = "hidden";
        AdditionalFeatures.style.visibility = "hidden";
        result.style.visibility = "hidden";
        info.style.visibility = "hidden";
        moreInfo.style.visibility = "hidden";
        heading.style.visibility="hidden";
        info.style.position="fixed";
    }
    function NotBlock(){
        Categories.style.visibility = "visible";
        AboutandContact.style.visibility = "visible";
        AdditionalFeatures.style.visibility = "visible";
        result.style.visibility = "visible";
        info.style.visibility = "visible";
        moreInfo.style.visibility = "visible";
        heading.style.visibility="visible";
        info.style.position="static";
    }
    let item2=document.querySelectorAll(".item2");
    item2.forEach((itemInfo,index)=>{
    itemInfo.addEventListener("click",()=>{
        let nameInformation=itemInfo.innerText;
        if(nameInformation=='About Us'){
            document.querySelector(".aboutUS").style.visibility="visible";
        }else if(nameInformation=='Contact'){
            document.querySelector(".contactUs").style.visibility="visible";
        }
        blockInfo();
        forAbout();
    })
})
document.querySelector(".removeFromAbourt").addEventListener("click",()=>{
    document.querySelector(".aboutUS").style.visibility="hidden";
    NotBlock();
})
document.querySelector(".removeFromContact").addEventListener("click",()=>{
    document.querySelector(".contactUs").style.visibility="hidden";
    NotBlock();
})
