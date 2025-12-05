const nutrition = [
    {
        foodName: "RAWMIX GRAIN-FREE KITTEN KIBBLE",
        thName1: "Guaranteed Analysis",
        protein: "40.0%",
        fat: "20.0%",
        fiber: "3.0%",
        carbohydrate: "17.0%",
        moisture: "10.0%",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "0.2%",
        eAcid: "N/A",
        calcium: "1.0%",
        phosphorus: "0.8%",
        potassium: "0.8%",
        sodium: "0.5%",
        magnesium: "0.15%",
        vitA: "N/A",
        vitC: "N/A",
        vitE: "N/A",
        taurine: "0.2%",
        carnitine: "N/A",
        omega3: "1.0%",
        omega6: "2.5%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, Menhaden Fish Meal, Peas, Ocean Whitefish Meal, Coconut Oil, Salmon, Turkey, Sunflower Oil(Preserved with Mixed Tocopherols), Pumpkin, Lentils, Natural Flavor, Cranberries, Apples, Dandelion Greens, Vitamins (Niacin Supplement, Vitamin E Supplement, Vitamin A Supplement, Thiamine Mononitrate, Pantothenic Acid, Pyridoxine Hydrochloride, Vitamin D3 Supplement, Riboflavin Supplement, Vitamin B12 Supplement, Folic Acid, Biotin), Minerals (Zinc Proteinate, Iron Proteinate, Copper Proteinate, Manganese Proteinate, Sodium Selenite, Calcium Iodate), Potatoes, Tapioca, Chicken Liver, Chicken Neck, Choline Chloride, Taurine, Chicken Bone Broth, Turmeric, Dried Yucca Schidigera Extract, Organic Butternut Squash, Organic Blueberries, Organic Spinach, Organic Kale, Organic Apple Cider Vinegar, Organic Pumpkin Seeds, Organic Sunflower Seeds, Rosemary Extract."
    },
    {
        foodName: "RAWMIX OPEN PRAIRIE GRAIN-FREE CAT KIBBLE",
        thName1: "Guaranteed Analysis",
        protein: "38.0%",
        fat: "14.0%",
        fiber: "3.0%",
        carbohydrate: "28.0%",
        moisture: "10.0%",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "0.2%",
        eAcid: "N/A",
        calcium: "1.0%",
        phosphorus: "0.8%",
        potassium: "0.9%",
        sodium: "0.45%",
        magnesium: "0.15%",
        vitA: "N/A",
        vitC: "N/A",
        vitE: "N/A",
        taurine: "0.2%",
        carnitine: "N/A",
        omega3: "0.8%",
        omega6: "2.5%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, Turkey, Menhaden Fish Meal, Peas, Chickpeas, Ocean Whitefish Meal, Lentils, Coconut Oil, Pumpkin, Natural Flavor, Cranberries, Apples, Sunflower Oil (Preserved with Mixed Tocopherols), Dandelion Greens, Chicken Liver, Chicken Neck, Vitamins (Niacin Supplement, Vitamin E Supplement, Vitamin A Supplement, Thiamine Mononitrate, Pantothenic Acid, Pyridoxine Hydrochloride, Vitamin D3 Supplement, Riboflavin Supplement, Vitamin B12 Supplement, Folic Acid, Biotin), Potatoes, Tapioca, Dried Chicory Root, Choline Chloride, Minerals (Zinc Proteinate, Iron Proteinate, Copper Proteinate, Manganese Proteinate, Sodium Selenite, Calcium lodate), Organic Butternut Squash, Organic Carrots, Organic Blueberries, Turkey Gizzard, Montmorillonite Clay, Miscanthus Grass, Chicken Bone Broth, Flaxseed, Turmeric, Dried Yucca Schidigera Extract, Taurine, Organic Spinach, Organic Kale, Organic Apple Cider Vinegar, Organic Pumpkin Seeds, Organic Sunflower Seeds, Rosemary Extract."
    },
    {
        foodName: "HOMESTEAD TURKEY & CHICKEN GRAIN-FREE CAT KIBBLE",
        thName1: "Guaranteed Analysis",
        protein: "37.0%",
        fat: "18.0%",
        fiber: "3.0%",
        carbohydrate: "22.0%",
        moisture: "10.0%",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "1.0%",
        phosphorus: "0.8%",
        potassium: "1.0%",
        sodium: "0.8%",
        magnesium: "0.15%",
        vitA: "9000 IU/kg",
        vitC: "N/A",
        vitE: "40 IU/kg",
        taurine: "0.2%",
        carnitine: "N/A",
        omega3: "1.3%",
        omega6: "4.0%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Turkey, Chicken, Ocean Whitefish Meal, Herring Meal, Chickpeas, Red Lentils, Coconut Oil, Menhaden Fish Meal, Green Lentils, Pumpkin, Natural Flavor, Cranberries, Apples, Dandelion Greens, Salt, Dried Chicory Root, Potassium Chloride, Choline Chloride, Calcium Carbonate, Vitamins (Niacin Supplement, Vitamin E Supplement, Vitamin A Supplement, Thiamine Mononitrate, D-Calcium Pantothenate, Riboflavin Supplement, Pyridoxine Hydrochloride, Vitamin D3 Supplement, Vitamin B12 Supplement, Folic Acid, Biotin), Taurine, Minerals (Zinc Proteinate, Iron Proteinate, Copper Proteinate, Manganese Proteinate, Sodium Selenite, Calcium lodate), Mixed Tocopherols (a preservative), Turmeric, Dried Yucca Schidigera Extract, Rosemary Extract."
    },
];

createInfoCard(nutrition);

function createInfoCard(nutrition) {
    document.querySelector("#nutrition").innerHTML = ""
    nutrition.forEach(nutritionCard => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let sectionOne = document.createElement("h3");
        let protein = document.createElement("p");
        let fat = document.createElement("p");
        let fiber = document.createElement("p");
        let carbohydrate = document.createElement("p");
        let moisture = document.createElement("p");
        let linoleic = document.createElement("p");
        let aAcid = document.createElement("p");
        let dAcid = document.createElement("p");
        let eAcid = document.createElement("p");
        let calcium = document.createElement("p");
        let phosphorus = document.createElement("p");
        let potassium = document.createElement("p");
        let sodium = document.createElement("p");
        let magnesium = document.createElement("p");
        let vitA = document.createElement("p");
        let vitC = document.createElement("p");
        let vitE = document.createElement("p");
        let taurine = document.createElement("p");
        let carnitine = document.createElement("p");
        let omega3 = document.createElement("p");
        let omega6 = document.createElement("p");
        let bacillus = document.createElement("p");
        let glucosamine = document.createElement("p");
        let cSulfate = document.createElement("p");
        let sectionTwo = document.createElement("h3");
        let ingredients = document.createElement("p");

        name.textContent = nutritionCard.foodName;
        sectionOne.textContent = nutritionCard.thName1;
        protein.innerHTML = `<span class="highlight">Crude Protein: </span>${nutritionCard.protein}`;
        fat.innerHTML = `<span class="highlight">Crude Fat: </span>${nutritionCard.fat}`;
        fiber.innerHTML = `<span class="highlight">Crude Fiber: </span>${nutritionCard.fiber}`;
        carbohydrate.innerHTML = `<span class="highlight">Carbohydrate: </span>${nutritionCard.carbohydrate}`;
        moisture.innerHTML = `<span class="highlight">Moisture: </span>${nutritionCard.moisture}`;
        linoleic.innerHTML = `<span class="highlight">Linoleic Acid: </span>${nutritionCard.linoleic}`;
        aAcid.innerHTML = `<span class="highlight">Ascorbic acid: </span>${nutritionCard.aAcid}`;
        dAcid.innerHTML = `<span class="highlight">Docosahexaenoic Acid (DH): </span>${nutritionCard.dAcid}`;
        eAcid.innerHTML = `<span class="highlight">Eicosapentaenoic Acid: </span>${nutritionCard.eAcid}`;
        calcium.innerHTML = `<span class="highlight">Calcium: </span>${nutritionCard.calcium}`;
        phosphorus.innerHTML = `<span class="highlight">Phosphorus: </span>${nutritionCard.phosphorus}`;
        potassium.innerHTML = `<span class="highlight">Potassium: </span>${nutritionCard.potassium}`;
        sodium.innerHTML = `<span class="highlight">Sodium: </span>${nutritionCard.sodium}`;
        magnesium.innerHTML = `<span class="highlight">Magnesium: </span>${nutritionCard.magnesium}`;
        vitA.innerHTML = `<span class="highlight">Vitamin A: </span>${nutritionCard.vitA}`;
        vitC.innerHTML = `<span class="highlight">Vitamin C: </span>${nutritionCard.vitC}`;
        vitE.innerHTML = `<span class="highlight">Vitamin E: </span>${nutritionCard.vitE}`;
        taurine.innerHTML = `<span class="highlight">Taurine: </span>${nutritionCard.taurine}`;
        carnitine.innerHTML = `<span class="highlight">Carnitine: </span>${nutritionCard.carnitine}`;
        omega3.innerHTML = `<span class="highlight">Omega-3 Fatty Acids: </span>${nutritionCard.omega3}`;
        omega6.innerHTML = `<span class="highlight">Omega-6 Fatty Acids: </span>${nutritionCard.omega6}`;
        bacillus.innerHTML = `<span class="highlight">Bacillus coagulans: </span>${nutritionCard.bacillus}`;
        glucosamine.innerHTML = `<span class="highlight">Glucosamine: </span>${nutritionCard.glucosamine}`;
        cSulfate.innerHTML = `<span class="highlight">Chondroitin sulfate: </span>${nutritionCard.cSulfate}`;
        sectionTwo.textContent = nutritionCard.thName2;
        ingredients.textContent = nutritionCard.ingredients;


        card.appendChild(name);
        card.appendChild(sectionOne);
        card.appendChild(protein);
        card.appendChild(fat);
        card.appendChild(fiber);
        card.appendChild(carbohydrate);
        card.appendChild(moisture);
        card.appendChild(linoleic);
        card.appendChild(aAcid);
        card.appendChild(dAcid);
        card.appendChild(eAcid);
        card.appendChild(calcium);
        card.appendChild(phosphorus);
        card.appendChild(potassium);
        card.appendChild(sodium);
        card.appendChild(magnesium);
        card.appendChild(vitA);
        card.appendChild(vitC);
        card.appendChild(vitE);
        card.appendChild(taurine);
        card.appendChild(carnitine);
        card.appendChild(omega3);
        card.appendChild(omega6);
        card.appendChild(bacillus);
        card.appendChild(glucosamine);
        card.appendChild(cSulfate);
        card.appendChild(sectionTwo);
        card.appendChild(ingredients);

        document.querySelector("#nutrition").appendChild(card);
    });
}