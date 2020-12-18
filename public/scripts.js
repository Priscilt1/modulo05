const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    } 
}

//PAGINACAO
// suponhando que teremos 20 paginas 
let totalPages = 20,
selectedPage = 15.
pages = []

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    if(currentPage == 1 || currentPage totalPages) {
        pages.push(currentPage)
    }
}

console.log(pages)