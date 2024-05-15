const lipstickData = [
    { name: "Rouge à Lèvres 1", image: "Lipstick(2).jpeg" },
    { name: "Rouge à Lèvres 2", image: "Lipstick(1).jpeg" },
    { name: "Rouge à Lèvres 3", image: "Lipstick.jpeg" }
];

const lipstickList = document.getElementById("lipstick-list");

lipstickData.forEach(lipstick => {
    const lipstickDiv = document.createElement("div");
    lipstickDiv.classList.add("lipstick");
    
    const lipstickImg = document.createElement("img");
    lipstickImg.src = lipstick.image;
    lipstickImg.alt = lipstick.name;
    
    const lipstickName = document.createElement("h2");
    lipstickName.textContent = lipstick.name;
    
    lipstickDiv.appendChild(lipstickImg);
    lipstickDiv.appendChild(lipstickName);
    
    lipstickList.appendChild(lipstickDiv);
});

