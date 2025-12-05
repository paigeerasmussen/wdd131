// update cards

const nutrition = [
    {
        foodName: "KITTEN CHICKEN RECIPE",
        thName1: "Guaranteed Analysis",
        protein: "38.0%",
        fat: "22.9%",
        fiber: "1.8%",
        carbohydrate: "29.0%",
        moisture: "N/A",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "1.44%",
        phosphorus: "1.2%",
        potassium: "0.9%",
        sodium: "0.5%",
        magnesium: "0.143%",
        vitA: "N/A",
        vitC: "122 ppm",
        vitE: "591 IU/kg",
        taurine: "N/A",
        carnitine: "N/A",
        omega3: "0.61%",
        omega6: "4.47%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, Brown Rice, Wheat Gluten, Chicken Fat, Cracked Pearled Barley, Chicken Meal, Whole Grain Oats, Egg Product, Chicken Liver Flavor, Ground Pecan Shells, Lactic Acid, Potassium Chloride, Dicalcium Phosphate, Flaxseed, Dried Beet Pulp, L-Lysine, Calcium Sulfate, Dried Citrus Pulp, Fish Oil, Choline Chloride, Iodized Salt, DL-Methionine, Pressed Cranberries, Cysteine, vitamins (Vitamin E Supplement, L-Ascorbyl-2-Polyphosphate (source of Vitamin C), Thiamine Mononitrate, Niacin Supplement, Calcium Pantothenate, Vitamin A Supplement, Biotin, Pyridoxine Hydrochloride, Vitamin B12 Supplement, Riboflavin Supplement, Folic Acid, Vitamin D3 Supplement), Taurine, minerals (Ferrous Sulfate, Zinc Oxide, Copper Sulfate, Manganous Oxide, Calcium Iodate, Sodium Selenite), Magnesium Oxide, Mixed Tocopherols for freshness, Natural Flavors, Beta-Carotene."
    },
    {
        foodName: "ADULT INDOOR CHICKEN RECIPE",
        thName1: "Guaranteed Analysis",
        protein: "36.1%",
        fat: "14.8%",
        fiber: "8.5%",
        carbohydrate: "29.0%",
        moisture: "N/A",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "0.92%",
        phosphorus: "0.77%",
        potassium: "0.75%",
        sodium: "0.45%",
        magnesium: "0.087%",
        vitA: "N/A",
        vitC: "138 ppm",
        vitE: "675 IU/kg",
        taurine: "0.22%",
        carnitine: "551 ppm",
        omega3: "0.6%",
        omega6: "3.71%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, Whole Grain Wheat, Corn Protein Meal, Powdered Cellulose, Chicken Fat, Brown Rice, Chicken Meal, Wheat Gluten, Dried Beet Pulp, Chicken Liver Flavor, Soybean Oil, Lactic Acid, Calcium Sulfate, Fish Oil, Potassium Chloride, Choline Chloride, Iodized Salt, Whole Grain Oats, Fructooligosaccharides (FOS), vitamins (Vitamin E Supplement, L-Ascorbyl-2-Polyphosphate (source of Vitamin C), Niacin Supplement, Thiamine Mononitrate, Vitamin A Supplement, Calcium Pantothenate, Riboflavin Supplement, Biotin, Vitamin B12 Supplement, Pyridoxine Hydrochloride, Folic Acid, Vitamin D3 Supplement), Taurine, L-Lysine, Dicalcium Phosphate, minerals (Ferrous Sulfate, Zinc Oxide, Copper Sulfate, Manganous Oxide, Calcium Iodate, Sodium Selenite), L-Carnitine, Mixed Tocopherols for freshness, Natural Flavors, Beta-Carotene."
    },
    {
        foodName: "ADULT 7+ CHICKEN RECIPE",
        thName1: "Guaranteed Analysis",
        protein: "31.4%",
        fat: "18.5%",
        fiber: "1.3%",
        carbohydrate: "43.0%",
        moisture: "N/A",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "0.8%",
        phosphorus: "0.68%",
        potassium: "0.8%",
        sodium: "0.32%",
        magnesium: "0.082%",
        vitA: "N/A",
        vitC: "136 ppm",
        vitE: "897 IU/kg",
        taurine: "N/A",
        carnitine: "N/A",
        omega3: "0.56%",
        omega6: "3.89%",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, Whole Grain Wheat, Brewers Rice, Corn Protein Meal, Chicken Fat, Wheat Gluten, Chicken Meal, Dried Beet Pulp, Chicken Liver Flavor, Lactic Acid, Calcium Sulfate, Potassium Chloride, Fish Oil, Soybean Oil, Choline Chloride, Whole Grain Oats, Fructooligosaccharides (FOS), vitamins (Vitamin E Supplement, L-Ascorbyl-2-Polyphosphate (source of Vitamin C), Niacin Supplement, Thiamine Mononitrate, Calcium Pantothenate, Pyridoxine Hydrochloride, Vitamin A Supplement, Riboflavin Supplement, Biotin, Vitamin B12 Supplement, Folic Acid, Vitamin D3 Supplement), Taurine, Iodized Salt, L-Lysine, DL-Methionine, minerals (Ferrous Sulfate, Zinc Oxide, Copper Sulfate, Manganous Oxide, Calcium Iodate, Sodium Selenite), L-Carnitine, Mixed Tocopherols for freshness, Natural Flavors, Beta-Carotene."
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