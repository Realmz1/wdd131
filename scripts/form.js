// Product Array
const products = [
    { id: "p1", name: "Product A" },
    { id: "p2", name: "Product B" },
    { id: "p3", name: "Product C" },
    { id: "p4", name: "Product D" }
];

// Populate Product Dropdown
const productSelect = document.getElementById("product");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Update Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;
