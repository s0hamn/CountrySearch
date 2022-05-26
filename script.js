let url = "https://countriesnow.space/api/v0.1/countries"
let resultList = document.getElementById("resultList")
let search = document.getElementById("search")

async function fetchText(searchText) {
    let response = await fetch(url);
    let data = await response.text();
    let dataArr = JSON.parse(data).data;
    let str = ``;
    const regex = new RegExp(`^${searchText}`, 'gi');
    Array.from(dataArr).forEach(element => {
        
        let country = element.country;

        if(regex.test(country)){
            
            var last = country.replace(regex, '')
            searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);
            str += `<li class="list-group-item"><b>${searchText}</b>${last}</li>`
        }
        
    })

    resultList.innerHTML = str;
}

search.addEventListener('input', () => {
    let searchText = search.value;
    fetchText(searchText)

})
fetchText('')