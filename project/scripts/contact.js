const brands = [
    {
        id: "purina",
        brand: "Purina Pro Plan"
    },
    {
        id: "hills",
        brand: "Hills Science Diet"
    },
    {
        id: "royal",
        brand: "Royal Canin"
    },
    {
        id: "farm",
        brand: "Farm Fresh"
    }
]

const dropdown = document.getElementById("brand");

if (dropdown) {
    brands.forEach(item => {
        const brand = document.createElement("option");
        brand.value = item.id;
        brand.textContent = item.brand;
        dropdown.appendChild(brand);
    });
}