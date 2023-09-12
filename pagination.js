let currentPage = 1;
let isLoading = false;
let totalPages=Infinity;


function loadMoreData() {
  console.log("load")
  if (isLoading || currentPage >= totalPages) {
    return;
  }

  isLoading = true;
  const apiUrl = `https://fakestoreapi.com/products?_page=${currentPage}&_limit=8`;

  async function getdata(){
      try{
        const res=await fetch(apiUrl);
      const data=await res.json();
      console.log("da",data)

      const resultsContainer = document.getElementById('results-container');
      data.forEach((item) => {
        const divv = document.createElement('div');
        divv.style.border='2px solid black'
        divv.style.height='500px'
        divv.style.textAlign='center'

        const h3=document.createElement('h3')
        h3.textContent=item.category

        const imgg=document.createElement('img')
        imgg.src=item.image
        imgg.style.height='150px'
console.log(item.image)

const paragraph=document.createElement('h5')
    paragraph.textContent='Description-'  +item.description

    const div=document.createElement('div')
    div.style.display='flex'
    div.style.justifyContent='space-around'

    const rate=document.createElement('p')
    rate.textContent='rate-'  +item.rating.rate

    const price=document.createElement('p')
    price.innerHTML='Price'+item.price
    price.style.color='red'

    div.append(price,rate)

        divv.append(h3,imgg,paragraph,div)
        resultsContainer.append(divv);
      });
      } 
      catch(err){
        console.error('Error fetching data:', err);
      isLoading = false;
      }
           currentPage++;
      isLoading = false;
  }
getdata()
}

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadMoreData();
    }
  },
  {
    root: null, 
    threshold: 0.1, 
  }
);
const sentinel = document.getElementById('sentinel');
observer.observe(sentinel);
sentinel.style.textAlign='center'
const h1=document.createElement('h1')
h1.innerHTML='Hold on Loading content'

let imgg=document.createElement('img')
imgg.src='https://media.tenor.com/DOMNmd8S_80AAAAi/circle-loading.gif'
sentinel.append(h1,imgg)
getdata()