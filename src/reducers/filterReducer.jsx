const filterReducer = (state, action) => {

switch (action.type) {
case "SET_FILTER_PRODUCTS":
return {
...state,
filterProducts: [...action.payload],
allProducts: [...action.payload],
};

case "SET_GRID_VIEW":
return {
...state,
gridView: true,
}

case "SET_LIST_VIEW":
return {
...state,
gridView: false,
}

case "SET_SORT_VALUE":
let userSortValue = document.getElementById("sort")
let sortedValue = userSortValue.options[userSortValue.selectedIndex].value
console.log(sortedValue)
return {
...state,
sortingValue: sortedValue,
}

case "SORTING_PRODUCTS_PRICE":
let newSortData;
let existingSortingData = [...action.payload];


if (state.sortingValue === "lowest") {
const sortedProducts = (a, b) => {
return a.price - b.price
}
newSortData = existingSortingData.sort(sortedProducts)
}

if (state.sortingValue === "highest") {
const sortedProducts = (a, b) => {
return b.price - a.price
}
newSortData = existingSortingData.sort(sortedProducts)
}

if (state.sortingValue === "a-z") {
newSortData = existingSortingData.sort((a, b) =>
a.name.localeCompare(b.name)
);
}

if (state.sortingValue === "z-a") {
newSortData = existingSortingData.sort((a, b) =>
b.name.localeCompare(a.name)
);
}


case "SEARCH_FILTER":
const { name , value } = action.payload
return {
...state,
filters : {
...state.filters ,
[name] : value,
}

}


case "SEARCH_FILTER_RESULTS" :
let {allProducts} = state;
let existingProduct = [...allProducts]

const { text} = state.filters

if(text){
existingProduct = existingProduct.filter((curElem) =>{
return curElem.name.toLowerCase().includes(text);
})
}

return {
...state,
filterProducts : existingProduct
}

// return {
// ...state,
// filterProducts: newSortData,
// }

default: return state;

}

}

export default filterReducer